import { ListItem, ListItemDecorator, IconButton } from "@mui/joy";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import "./components-style/squadMember.css";

export default function SquadMember(props) {
  return (
    <div className="listItemSquadMember">
      <ListItem
        sx={{ color: "#FFFBF5", marginLeft: "7px", marginRight: "7px" }}
      >
        <ListItemDecorator>
          <PersonOutlineRoundedIcon />
        </ListItemDecorator>
        {props.name}
        <div className="removeMemberButton">
        <ListItemDecorator>
          <IconButton color="#FD4556"
            //   onClick={() => {
            //     goToSquadProfile(props.idSquad);
            //   }}
            aria-label="Remove member"
          >
            <PersonRemoveRoundedIcon
              sx={{ display: "flex", justifycontent: "flex-end" }}
            />
          </IconButton>
        </ListItemDecorator>
        </div>
      </ListItem>
    </div>
  );
}
