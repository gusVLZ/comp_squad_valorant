import { Grid, ListItem, Slider } from "@mui/joy"
import React, { useEffect } from "react"

export default function AgentPreference(props) {
    const [value, setValue] = React.useState(props.agentPreferenceValue);
    function handleChange(_, value){
        setValue(value)
        props.sliderHandler(props.agentId, value)
    }

    return (
        <ListItem sx={{ color: "#FFFBF5", marginLeft: "7px", marginRight: "7px" }}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={4} sx={{ display: "flex", alignItems: "center" }} >
                    {props.agentName}
                </Grid>
                <Grid xs={8} sx={{ display: "flex", alignItems: "center" }}>
                    <Slider 
                        min={1} 
                        max={5} 
                        valueLabelDisplay="auto" 
                        value={value}
                        onChange={(_, value) => setValue(value)}
                        onChangeCommitted={handleChange}
                    />
                </Grid>
            </Grid>
        </ListItem>
    )
}