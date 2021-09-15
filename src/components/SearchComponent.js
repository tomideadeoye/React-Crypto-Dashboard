import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function SearchComponent(props) {
	const [searchResult, setSearchResult] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	const showSearchResult = () => {
		if (!searchQuery) {
			return "";
		}
		if (searchResult.length > 0) {
			return (
				<div className="Search-result-container">
					{searchResult.map((result) => (
						<div
							key={result.id}
							className="Search-result"
							onClick={() => this.handleRedirect(result.id)}
						>
							{result.name} ({result.symbol})
						</div>
					))}
				</div>
			);
		}
	};
	const handleChange = (e) => {
		setSearchQuery(e.target.value);
		if (!searchQuery) {
			return false;
		}
		fetch(
			`https://api.coingecko.com/api/v3/coins/${searchQuery}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
		).then((result) => {
			console.log(result);
			setSearchResult(result);
			console.log(searchResult);
		});
	};

	return (
		<Group4 {...props}>
			<Rect2>
				<IoniconsIcon
					name="ios-search"
					style={{
						color: "rgba(72,36,232,1)",
						fontSize: "1.875em",
						height: "auto",
						width: "1.4375em",
						marginLeft: "0.5em",
					}}
				/>
				<InputCurrency
					onChange={handleChange}
					type="text"
					className="Search-input"
					placeholder="Search"
					style={{ width: "100%" }}
					value={searchQuery}
				/>
			</Rect2>
		</Group4>
	);
}

const Group4 = styled.div`
	width: 100%auto;
	height: auto;
	flex-direction: column;
	display: flex;
	margin-left: 2.25em;
`;

const Rect2 = styled.div`
	width: 74.0625em;
	height: 2.5625em;
	background-color: rgba(23, 21, 29, 1);
	border-color: rgba(36, 31, 42, 1);
	border-style: solid;
	border-radius: 2.875em;
	flex-direction: row;
	display: flex;
	margin-top: 0.0625em;
	justify-content: center;
	align-items: center;
`;

const InputCurrency = styled.input`
	width: 100%;
	height: 2.0625em;
	flex-direction: row;
	display: flex;
	flex: 1 1 0%;
	margin-left: 0.2em;
	margin-right: 0.2em;
	background-color: rgba(23, 21, 29, 1);
	border-style: none;
	color: #fff;
`;

export default SearchComponent;
