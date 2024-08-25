import React from "react";
import { Drawer, Box, List, ListItem, ListItemButton, Divider, Button } from "@mui/joy";
import { useParams } from "react-router-dom";

export default function UserPage() {
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(inOpen);
  };
  
  return (
    <Box>
      <Button variant="solid" sx={{backgroundColor: "FD4556"}} onClick={toggleDrawer(true)}>
        Open menu
      </Button>
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
                <ListItemButton sx={{color: '#FFFBF5'}}>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{backgroundColor: '#FFFBF5'}}/>
        </Box>
      </Drawer>
    </Box>
  );
}