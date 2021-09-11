import React, { Component } from "react";
import styled, { css } from "styled-components";

function InfoBlueBox(props) {
  return (
    <Container {...props}>
      <Button2>
        <ButtonOverlay>
          <Description>Description</Description>
          <CoinDescription>CoinDescription</CoinDescription>
        </ButtonOverlay>
      </Button2>
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
const Button2 = styled.div`
  width: 269px;
  height: 149px;
  background-color: rgba(114,40,232,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  margin-top: 21px;
  margin-left: 20px;
`;

const CoinDescription = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 56px;
  width: 229px;
  font-size: 12px;
  margin-top: 23px;
  margin-left: 20px;
`;

export default InfoBlueBox;
