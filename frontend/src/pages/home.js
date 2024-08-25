import React from "react";
import axios from "axios";
import { Divider, Button, List } from "@mui/joy";
import Squad from "../components/squad";

export default function Home() {
	const [userName, setUserName] = React.useState()
	const [nickName, setNickName] = React.useState()
	const [userSlug, setUserSlug] = React.useState()
	const [squads, setSquads] = React.useState([])
	const [squadsInvited, setSquadsInvited] = React.useState([])
	const id = sessionStorage.getItem("id")
	async function refreshUserSquads() {
		const response = await axios.get(`http://127.0.0.1:5000/SquadUser/User/${id}`)
		if (response.status === 200) {
			setSquads(response.data.filter(x => x.accepted === true))
			setSquadsInvited(response.data.filter(x => x.accepted === null))
		}
	}

	React.useEffect(() => {
		async function getUserInfo(params) {
			const response = await axios.get(`http://127.0.0.1:5000/User/${id}`)
			if (response.status === 200) {
				setUserName(response.data.username);
				setNickName(response.data.nickname);
				setUserSlug(response.data.slug)
			}
		}
		async function getUserSquads() {
			const response = await axios.get(`http://127.0.0.1:5000/SquadUser/User/${id}`)
			if (response.status === 200) {
				setSquads(response.data.filter(x => x.accepted === 1))
				setSquadsInvited(response.data.filter(x => x.accepted === null))
			}
		}
		getUserInfo();
		getUserSquads();
	}, [])
	return (
		<div className="homeWrapper">
			<div>
				<h1 className="h1">Home</h1>
				<h2 className="userName">{userName}</h2>
				<div className="nickName">
					<h3>{nickName}</h3>
					<h4 className="h4">#{userSlug}</h4>
				</div>
				<Divider sx={{ backgroundColor: '#FFFBF5' }} />
			</div>
			<div className="squadsList">
				<h3>Squads that invited you</h3>
				<List>{
					squadsInvited.map((squad) => (
						<Squad
							key={squad.idSquad}
							name={squad.name}
							accepted={squad.accepted}
							idSquadUser={squad.id}
							refresh={refreshUserSquads}
						/>))
				}
				</List>
			</div>
			<Divider sx={{ backgroundColor: '#FD4556' }} />
			<div>
				<h3>Your squads</h3>
				<List>{
					squads.map((squad) => (
						<Squad
							key={squad.createDate}
							idSquad = {squad.id}
							name={squad.name}
							accepted={squad.accepted}
						/>))
				}
				</List>
				<Divider sx={{ backgroundColor: '#FFFBF5' }} />
			</div>
			<div className="btnCreateSquad">
				<Button variant="solid">Create squad</Button>
			</div>
		</div>
	)
}