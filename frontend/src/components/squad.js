import { ListItem, ListItemDecorator, IconButton } from "@mui/joy";
import React from "react";
import GroupIcon from '@mui/icons-material/Group';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

export default function Squad(props) {
	
		async function acceptOrDenyInvite(accepted, idSquadUser) {
			const req = await axios.put(`http://127.0.0.1:5000/SquadInvite?accepted=${accepted}&idSquadUser=${idSquadUser}`)
			props.refresh()
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
							acceptOrDenyInvite(1, props.idSquadUser)
						}}
					>
						<CheckRoundedIcon />
					</IconButton>
					<IconButton
						onClick={() => {
							acceptOrDenyInvite(0, props.idSquadUser)
						}}
					>
						<CloseIcon color="danger"/>
					</IconButton>
				</div>
			)}
		</ListItem>
	)
}