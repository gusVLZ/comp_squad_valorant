import React from "react";
import { List, ToggleButtonGroup, Button } from "@mui/joy";
import axios from "axios";
import AgentPreference from "../components/agentPreference";
import '../layouts/mainPage.css'

export default function Agents() {
	const [agents, setAgents] = React.useState([])
	const [filteredAgents, setFilteredAgents] = React.useState([])
	const [value, setValue] = React.useState();

	React.useEffect(() => {
		async function getAgents(params) {
			const response = await axios.get("http://127.0.0.1:5000/Agent")
			if (response.status === 200) {
				setAgents(response.data);
				setFilteredAgents(response.data);
			}
		}
		getAgents();
	}, [])

	function sliderHandler(id, value) {
		const index = agents.findIndex(x => x.id == id)
		agents[index].agentPreference = value

		setAgents(agents)
	}
	return (
		<div>
			<h1 className="h1">Agents</h1>
			<ToggleButtonGroup
				variant="plain"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
					setFilteredAgents(agents.filter(x => x.role === newValue || !newValue) )
				}}
				className="toggleGroup"
			>
				<Button className="toggleBtn" value="Duelist">Duelist</Button>
				<Button className="toggleBtn" value="Sentinel">Sentinel</Button>
				<Button className="toggleBtn" value="Initiator">Initiator</Button>
				<Button className="toggleBtn" value="Controller">Controller</Button>
			</ToggleButtonGroup>
			<List variant="outlined"
				sx={{ borderRadius: "sm", borderColor: "#FD4556" }}>
				{
					filteredAgents.map((agent) => (
						<AgentPreference 
							key={agent.id} 
							agentId={agent.id} 
							agentName={agent.name} 
							agentPreferenceValue={agent.agentPreference??0} 
							sliderHandler={sliderHandler}
						/>
					))
				}
			</List>
		</div>
	);
}