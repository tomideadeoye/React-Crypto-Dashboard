import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

function MarketLead(props) {
	const [topCoins, setTopCoins] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
		).then(async (response) => {
			const data = await response.json();

			setTopCoins(data);
		});
	}, []);

	function drawChart(item) {
		let chartImage;
		switch (item) {
			case "Bitcoin":
				chartImage = "https://www.coingecko.com/coins/1/sparkline";
				break;
			case "Ethereum":
				chartImage = "https://www.coingecko.com/coins/279/sparkline";
				break;
			case "Cardano":
				chartImage = "https://www.coingecko.com/coins/975/sparkline";
				break;
			case "Tether":
				chartImage = "https://www.coingecko.com/coins/325/sparkline";
				break;
			case "Binance Coin":
				chartImage = "https://www.coingecko.com/coins/825/sparkline";
				break;
			case "Solana":
				chartImage = "https://www.coingecko.com/coins/4128/sparkline";
				break;
			case "XRP":
				chartImage = "https://www.coingecko.com/coins/44/sparkline";
				break;
			case "Polkadot":
				chartImage = "https://www.coingecko.com/coins/12171/sparkline";
				break;
			case "XRP":
				chartImage = "https://www.coingecko.com/coins/44/sparkline";
				break;
			case "Algorand":
				chartImage = "https://www.coingecko.com/coins/12504/sparkline";
				break;
			case "Dogecoin":
				chartImage = "https://www.coingecko.com/coins/5/sparkline";
				break;
			case "USD Coin":
				chartImage = "https://www.coingecko.com/coins/6319/sparkline";
				break;
			case "Terra":
				chartImage = "https://www.coingecko.com/coins/8284/sparkline";
				break;
			case "Avalanche":
				chartImage = "https://www.coingecko.com/coins/12559/sparkline";
				break;
			case "Chainlink":
				chartImage = "https://www.coingecko.com/coins/877/sparkline";
				break;
			case "Binance":
				chartImage = "https://www.coingecko.com/coins/9576/sparkline";
				break;
			case "Binance USD":
				chartImage = "https://www.coingecko.com/coins/9576/sparkline";
				break;
			case "Uniswap":
				chartImage = "https://www.coingecko.com/coins/12504/sparkline";
				break;

			default:
				chartImage = "https://www.coingecko.com/coins/279/sparkline";
		}
		return chartImage;
	}

	return (
		<Group6>
			<Rect4>
				<MarketLeaders>Market Leaders</MarketLeaders>
				{topCoins.map((item) => {
					return (
						<Button4>
							<ButtonOverlay>
								<CryptonameRow>
									<Cryptoname>
										{item.name} ({item.symbol})
									</Cryptoname>
									<Pricechart>
										<Image src={drawChart(item.name)} alt={item.name} />
									</Pricechart>
									<Pricechange>{item.price_change_percentage_24h}</Pricechange>
									<Value>$ {item.current_price}</Value>
								</CryptonameRow>
							</ButtonOverlay>
						</Button4>
					);
				})}
			</Rect4>
		</Group6>
	);
}

const Group6 = styled.div`
	width: 55.8125em;
	height: 19.375em;
	flex-direction: column;
	display: flex;
`;

const Rect4 = styled.div`
	width: 55.8125em;
	height: 19.375em;
	background-color: rgba(36, 31, 42, 1);
	border-radius: 0.625em;
	flex-direction: column;
	display: flex;
	overflow-y: scroll;
	scroll-behaviour: smooth;
	::-webkit-scrollbar {
		display: none;
	}
`;

const MarketLeaders = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	font-size: 1.2em;
	margin: 1em 0 0 1em;
`;

const Button4 = styled.div`
	width: 53.3125em;
	height: 4.9375em;
	background-color: rgba(114, 40, 232, 1);
	border-radius: 0.625em;
	flex-direction: row;
	display: flex;
	margin-top: 1.8125em;
	margin-left: 1.25em;
	border: none;
`;

const Cryptoname = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 700;
	color: rgba(255, 255, 255, 1);
`;

const Pricechart = styled.div`
	width: 31.0625em;
	height: 3.0625em;
	background-color: #e6e6e6;
	border-radius: 6.25em;
	margin-left: 3.0625em;
`;

const Pricechange = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	color: rgba(80, 227, 194, 1);
	font-size: 0.625em;
	margin-left: 1.8125em;
`;

const Value = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	margin-left: 1.8125em;
`;

const CryptonameRow = styled.div`
	height: 3.0625em;
	flex-direction: row;
	display: flex;
	flex: 1 1 0%;
	margin-right: 3.6875em;
	margin-left: 1.4375em;
	justify-content: space-evenly;
	display: flex;
	align-items: center;
`;
const ButtonOverlay = styled.button`
	display: block;
	background: none;
	height: 100%;
	width: 100%;
	border: none;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: fill;
	overflow: hidden;
`;

export default MarketLead;
