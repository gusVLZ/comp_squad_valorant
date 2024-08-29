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
  Autocomplete,
  AutocompleteOption,
  Typography,
  ListItemContent
} from "@mui/joy";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Person from '@mui/icons-material/Person';
import SquadMember from "../components/squadMember";
import "../style/squadProfile.css";
import { debounce } from "@mui/material/utils";

export default function SquadProfile() {
  const { id } = useParams();
  const [squadName, setSquadName] = React.useState();
  const [squadMembers, setSquadMembers] = React.useState([]);
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    squadInfo();
  }, []);

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

  const loadSearch = (input) => {
    axios
      .get(`http://127.0.0.1:5000/User/Search/${input}`)
      .then((x) => {
        console.log(x)
        if (x && x.data.length > 0) {
          console.log(x.data.map((y) => y.username + "#" + y.slug))
          setOptions(x.data);
        }
      });
  };

  const fetch = React.useMemo(
    () =>
      debounce(async (request, callback) => {
        loadSearch(request.input)
      }, 400),
    []
  );

  React.useEffect(() => {
    if (inputValue === "" || inputValue.length < 3) {
      setOptions([]);
      return undefined;
    }

    fetch({ input: inputValue })

  }, [value, inputValue, fetch]);

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
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue)
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={options}
            placeholder="Search here"
            startDecorator={<PersonAdd />}
            noOptionsText="No users found"
            getOptionLabel={(option) => option.username + "#" + option.slug}
            renderOption={(props, option) => (
              <AutocompleteOption {...props}>
                <ListItemDecorator>
                  <Person/>
                </ListItemDecorator>
                <ListItemContent sx={{ fontSize: 'sm' }}>
                  {option.username}
                  <Typography level="body-xs">
                    #{option.slug}
                  </Typography>
                </ListItemContent>
              </AutocompleteOption>
            )}
            sx={{
              bgcolor: "#fdfdfd20",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              border: "none",
              width: "100%",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              height: "45px",
            }}
          />
          <Button
            variant="solid"
            type="submit"
            sx={{
              bgcolor: "#3E655F",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              height: "45px",
            }}
          >
            Invite
          </Button>
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
