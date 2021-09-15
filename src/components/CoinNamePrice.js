import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";

function CoinNamePrice({ coin, setHomeCoinz }) {
	return (
		<Container>
			<Button3 onClick={setHomeCoinz}>
				<ButtonOverlay onClick={setHomeCoinz}>
					<Coin>
						<Name2Row>
							<Name2>{coin.name}</Name2>
							<Rect8>
								<Image src={coin.image} alt={coin.name + "image"} />
							</Rect8>
						</Name2Row>
					</Coin>
				</ButtonOverlay>
			</Button3>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	float: left;
`;

const ButtonOverlay = styled.button`
	display: block;
	background: none;
	height: 100%;
	width: 100%;
	border: none;
	margin: 0.75em;
`;
const Button3 = styled.div`
	width: 12.1875em;
	height: 3.8125em;
	flex-direction: column;
	display: flex;
	border: none;
`;

const Coin = styled.div`
	width: 14em;
	height: 3.8125em;
	background-color: rgba(114, 40, 232, 1);
	border-radius: 0.625em;
	flex-direction: row;
	display: flex;
	justify-content: center;
`;

const Name2 = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: 700;
	color: rgba(255, 255, 255, 1);
	font-size: 0.9em;
	text-align: left;
`;

const Rect8 = styled.div`
	width: 3.75em;
	height: 2.375em;
	background-color: rgba(255, 255, 0, 0);
`;

const Name2Row = styled.div`
	height: 2.375em;
	flex-direction: row;
	display: flex;
	flex: 1 1 0%;
	margin: 1em;
	justify-content: space-between;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	overflow: hidden;
`;

export default CoinNamePrice;
