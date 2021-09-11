import React, { Component } from "react";
import styled, { css } from "styled-components";

function CoinNamePrice(props) {
  return (
    <Container {...props}>
      <Button3>
        <ButtonOverlay>
          <Coin>
            <Name2Row>
              <Name2>name</Name2>
              <Rect8></Rect8>
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
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button3 = styled.div`
  width: 195px;
  height: 61px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Coin = styled.div`
  width: 196px;
  height: 61px;
  background-color: rgba(114,40,232,1);
  border-radius: 10px;
  flex-direction: row;
  display: flex;
`;

const Name2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 6px;
`;

const Rect8 = styled.div`
  width: 60px;
  height: 38px;
  background-color: #E6E6E6;
  margin-left: 43px;
`;

const Name2Row = styled.div`
  height: 38px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 17px;
  margin-left: 26px;
  margin-top: 12px;
`;

export default CoinNamePrice;
