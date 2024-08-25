import { ListItem, ListItemDecorator, IconButton } from "@mui/joy";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseIcon from "@mui/icons-material/Close";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Squad(props) {
  const nav = useNavigate();

  async function acceptOrDenyInvite(accepted, idSquadUser) {
    try {
      const req = await axios.put(
        `http://127.0.0.1:5000/SquadInvite?accepted=${accepted}&idSquadUser=${idSquadUser}`
      );
      props.refresh();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }
  	
  async function goToSquadProfile(id) {
	try {
		alert(JSON.stringify(id));
		return nav(`/squadProfile/${id}`);
	} catch (error) {
		alert(JSON.stringify(error));
	}
  }

  return (
    <ListItem sx={{ color: "#FFFBF5", marginLeft: "7px", marginRight: "7px" }}>
      <ListItemDecorator>
        <GroupIcon />
      </ListItemDecorator>
      {props.name}
      {props.accepted == null && (
        <div className="squadButtonsInvite">
          <IconButton
            onClick={() => {
              acceptOrDenyInvite(1, props.idSquadUser);
            }}
          >
            <CheckRoundedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              acceptOrDenyInvite(0, props.idSquadUser);
            }}
          >
            <CloseIcon color="danger" />
          </IconButton>
        </div>
      )}
      <ListItemDecorator>
        <IconButton
          onClick={() => {
            goToSquadProfile(props.idSquad);
          }}
          aria-label="Squad Profile"
        >
          <RemoveRedEyeOutlined />
        </IconButton>
      </ListItemDecorator>
    </ListItem>
  );
}
