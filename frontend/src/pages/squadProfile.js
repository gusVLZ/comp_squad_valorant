import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  ListItem,
  ListItemDecorator,
  IconButton,
  Button,
  List,
  Divider,
  Input,
} from "@mui/joy";
import PersonAdd from "@mui/icons-material/PersonAdd";
import SquadMember from "../components/squadMember";
import "../style/squadProfile.css";

export default function SquadProfile() {
  const { id } = useParams();
  const [squadName, setSquadName] = React.useState();
  const [squadMembers, setSquadMembers] = React.useState([]);
  squadInfo();

  async function squadInfo() {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/Squad${id}`);
      //alert(JSON.stringify(response))
      setSquadName(response.data.name);
      listSquadMembers(id);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  async function listSquadMembers(squadId) {
    const response = await axios.get(
      `http://127.0.0.1:5000/SquadUser/Squad/Members/${id}`
    );
    setSquadMembers(response.data);
  }
  return (
    <div className="wrapper">
      <h4 className="pageTitle">Squad Profile</h4>
      <h1 className="squadName">{squadName}</h1>
      <Divider sx={{ backgroundColor: "#FFFBF5" }} />
      <h3 className="membersSubtitle">Members:</h3>
      <div className="squadMembers">
        <List>
          {squadMembers.map((member) => (
            <SquadMember key={member.id} name={member.name} />
          ))}
        </List>
      </div>
      <Divider sx={{ backgroundColor: "#FD4556" }} />
      <div className="addMemberLabel">
        <h4>Invite a member to the team</h4>
        <div className="addMemberInput">
          <Input
            placeholder="Search here"
            startDecorator={<PersonAdd />}
            endDecorator={
              <Button
                variant="solid"
                type="submit"
                sx={{ bgcolor: "#3E655F", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                Invite
              </Button>
            }
            size="sm"
            variant="soft"
            color="neutral"
            sx={{
              bgcolor: "#fdfdfd20",
              "--Input-placeholderColor": "#fdfdfd",
              borderColor: "neutral.outlinedBorder",
              borderRadius: "4px",
              '--Input-decoratorChildHeight': '45px',
              height: "45px",
              caretColor: "#fdfdfd",
              color: "#fdfdfd"
            }}
          />
        </div>
      </div>
      {/* <div className="addMemberButton">
        <Button variant="outlined" endicon={<PersonAdd />}>
          Add a member to the team
        </Button>
      </div> */}
    </div>
  );
}
