import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import CoinNamePrice from "../components/CoinNamePrice";
import { Link } from "react-router-dom";

function CoinList(props) {
	const [coinz, setCoinz] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false&price_change_percentage=24h`
		).then(async (response) => {
			const data = await response.json();

			setCoinz(data);
		});
	}, []);

	return (
		<CoinLists>
			<AllCoins>All Coins</AllCoins>
			<CoinContainer>
				{coinz.map((item) => {
					return (
						// <Link to={`/CurrencyScreen/${coin.id}`}>

						<CoinNamePrice
							coin={item}
							style={{
								height: "3.8125em",
								width: "12.125em",
								marginTop: "2.6875em",
								marginLeft: "2.25em",
							}}
							setHomeCoinz={props.setHomeCoinz}
						/>
						// </Link>
					);
				})}
			</CoinContainer>
		</CoinLists>
	);
}

const CoinLists = styled.div`
	width: 55.8125em;
	height: 30.625em;
	background-color: rgba(36, 31, 42, 1);
	border-radius: 0.625em;
	flex-direction: column;
	display: flex;
	margin-top: 0.8125em;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

const AllCoins = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	line-height: 1.875em;
	font-size: 1.1em;
	margin-top: 1.25em;
	margin-left: 1.25em;
`;
const CoinContainer = styled.div`
	width: 100%auto;
	height: 30.625em;
	border-radius: 0.625em;
	flex-direction: row;
	display: flex;
	margin: 1em;
	justify-content: space-evenly;
	text-align: left;
	align-items: center;
	display: table;
	overflow: scroll;
`;

export default CoinList;
