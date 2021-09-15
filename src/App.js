import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import HomeScreen from "./screens/HomeScreen";
import CurrencyScreen from "./screens/CurrencyScreen";
import "./style.css";
import useWindowSize from "./utils/useWindowResize.js";

function App() {
	const { width } = useWindowSize();

	return (
		<Container>
			<Router>
				<Route path="/" exact component={HomeScreen} />
				<Route path="/HomeScreen/" exact component={HomeScreen} />
				<Route path="/CurrencyScreen/" exact component={CurrencyScreen} />
			</Router>
		</Container>
	);
}

const Container = styled.div`
	background-color: rgba(23, 21, 29, 1);
	overflow: hidden;
	height: auto;
	width: width;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	align-items: center;
	justify-content: center;
`;

export default App;
