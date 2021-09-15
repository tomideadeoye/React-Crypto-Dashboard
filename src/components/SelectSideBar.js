import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function SelectSideBar(props) {
	return (
		<Container {...props}>
			<Rect1>
				<FontAwesomeIcon
					name="th-list"
					style={{
						color: "rgba(255,255,255,1)",
						fontSize: "1.5625em",
						height: "1.5625em",
						width: "1.5625em",
						marginTop: "0.75em",
						marginLeft: 13,
					}}
				></FontAwesomeIcon>
			</Rect1>
			<Rect2>
				<EntypoIcon
					name="bar-graph"
					style={{
						color: "rgba(255,255,255,1)",
						fontSize: "1.5625em",
						height: "1.6875em",
						width: "1.5625em",
						marginTop: "0.75em",
						marginLeft: "0.75em",
					}}
				></EntypoIcon>
			</Rect2>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	background-color: rgba(36, 31, 42, 1);
	border-radius: 1em;
	flex-direction: column;
`;

const Rect1 = styled.div`
	width: 3.125em;
	height: 3.125em;
	background-color: rgba(67, 75, 200, 1);
	border-radius: 0.6875em;
	flex-direction: column;
	display: flex;
	margin-top: 2.125em;
	margin-left: 0.75em;
`;

const Rect2 = styled.div`
	width: 3.125em;
	height: 3.125em;
	background-color: rgba(67, 75, 200, 1);
	border-radius: 0.6875em;
	flex-direction: column;
	display: flex;
	margin-top: 1.4375em;
	margin-left: 0.75em;
`;

export default SelectSideBar;
