import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import './mainPage.css'
import { Drawer, Box, List, ListItem, ListItemButton, Divider, IconButton } from "@mui/joy";
import MenuIcon from '@mui/icons-material/Menu';

export default function MainPage() {
	const nav = useNavigate()
	const [open, setOpen] = React.useState(false);
	const toggleDrawer = (inOpen) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setOpen(inOpen);
	};
	function handleDrawerClick(text) {
		nav(`/${text}`)
	}
	return (
		<div className="mainPage" style={{ width: "96%" }}>
			<Box>
				<div className="top">
					<IconButton variant="solid" sx={{ backgroundColor: "FD4556" }} onClick={toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<h2 className="h2">comp squad val</h2>
				</div>
				<Drawer open={open} onClose={toggleDrawer(false)}>
					<Box
						className="drawer"
						role="presentation"
						onClick={toggleDrawer(false)}
						onKeyDown={toggleDrawer(false)}
					>
						<List className="listDrawer">
							{['Home', 'Agents', 'Squads', 'Drafts'].map((text) => (
								<ListItem key={text}>
									<ListItemButton onClick={() => handleDrawerClick(text)} sx={{ color: '#FFFBF5' }}>{text}</ListItemButton>
								</ListItem>
							))}
						</List>
						<Divider sx={{ backgroundColor: '#FFFBF5' }} />
					</Box>
				</Drawer>

			</Box>
			<Outlet />
		</div>
	)
}