import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function EventsTab() {
	const [topEvents, setTopEvents] = useState([]);
	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/events`).then(async (response) => {
			const data = await response.json();

			const newData = data.data;
			setTopEvents(newData);
		});
	}, []);

	return (
		<ScrollArea>
			<Events>Events</Events>
			{topEvents.map((item) => {
				return (
					<Button2>
						<ButtonOverlay>
							<EventTitle>{item.title}</EventTitle>

							<EventDescription>{item.description}</EventDescription>
							<a href={item.website}>
								<FeatherIcon
									name="link-2"
									style={{
										color: "rgba(255,255,255,1)",
										fontSize: 19,
										height: 19,
										width: 19,
										marginLeft: 230,
										cursor: "pointer",
									}}
								></FeatherIcon>
							</a>
						</ButtonOverlay>
					</Button2>
				);
			})}
		</ScrollArea>
	);
}

const ScrollArea = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	width: 16.8125em;
	height: 39.5625em;
	background-color: rgba(36, 31, 42, 1);
	border-radius: 0.625em;
	flex-direction: column;
	display: flex;
	margin-left: 1.125em;
	::-webkit-scrollbar {
		display: none;
	}
`;

const Events = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	margin-top: 1.5625em;
	margin-left: 1.3125em;
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
`;

const Button2 = styled.div`
	width: 16.8125em;
	height: 9.3125em;
	background-color: rgba(114, 40, 232, 1);
	border-radius: 0.625em;
	flex-direction: column;
	display: flex;
	margin-top: 2.9375em;
	flex: 0 0 auto;
	border: none;
	overflow: hidden;
`;

const EventTitle = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 700;
	color: rgba(255, 255, 255, 1);
	margin: 1.1em;
	display: block;
	text-align: left;
`;

const EventDescription = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	height: 6.5em;
	width: 21em;
	font-size: 0.75em;
	margin: 1.1em;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: left;
	display: -webkit-box;
	-webkit-line-clamp: 9;
	-webkit-box-orient: horizontal;
`;

const ButtonOverlay = styled.button`
	display: block;
	background: none;
	height: 100%;
	width: 100%;
	border: none;
`;

export default EventsTab;
