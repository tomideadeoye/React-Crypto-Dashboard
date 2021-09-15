import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import MoreDetailsButton from "../components/MoreDetailsButton";

import SelectSideBar from "../components/SelectSideBar";
import MarketLead from "../components/MarketLead";
import EventsTab from "../components/EventsTab";
import CoinList from "../components/CoinList";
import SearchComponent from "../components/SearchComponent";
import useWindowSize from "../utils/useWindowResize";

function HomeScreen(props) {
	const { width } = useWindowSize();
	const [homeCoinz, setHomeCoinz] = useState([]);

	const handleProps = (coinz) => {
		setHomeCoinz(coinz);
		console.log(homeCoinz);
	};

	return (
		<Container>
			<MoreDetailsButtonRow>
				<MoreDetailsButton
					style={{
						height: "4.3125em",
						width: "5.3125em",
					}}
				></MoreDetailsButton>
				<SearchComponent />
			</MoreDetailsButtonRow>
			<SelectSideBarRow>
				<SelectSideBar
					style={{
						height: "37.875em",
						width: "4.625em",
						marginTop: "1.6875em",
					}}
				></SelectSideBar>
				<Group6Column>
					<MarketLead />
					<CoinList setHomeCoinz={handleProps} />
				</Group6Column>
				<EventsTab />
			</SelectSideBarRow>
		</Container>
	);
}

const Container = styled.div`
	transform: scale(1.2);
	display: flex;
	background-color: rgba(23, 21, 29, 1);
	flex-direction: column;
	height: 100vh;
	width: width;
	justify-content: center;
	align-items: center;
`;

const MoreDetailsButtonRow = styled.div`
	height: 4.375em;
	flex-direction: row;
	display: flex;
	margin-top: 2.25em;
	margin-left: 2.5625em;
	margin-right: 1.875em;
`;

const Group6Column = styled.div`
	width: 55.8125em;
	flex-direction: column;
	display: flex;
	margin-left: 2.5625em;
`;

const SelectSideBarRow = styled.div`
	height: 39.5625em;
	flex-direction: row;
	display: flex;
	margin-left: 2.5625em;
	margin-right: 1.875em;
`;

export default HomeScreen;
