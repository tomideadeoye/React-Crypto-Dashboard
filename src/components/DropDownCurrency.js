import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function DropDownCurrency(props) {
  return (
    <Container {...props}>
      <Rect16>
        <CurrencyRow>
          <Currency>currency</Currency>
          <EntypoIcon
            name="chevron-down"
            style={{
              color: "rgba(67,75,200,1)",
              fontSize: 18,
              height: 20,
              width: 18,
              marginLeft: 8
            }}
          ></EntypoIcon>
        </CurrencyRow>
      </Rect16>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect16 = styled.div`
  width: 98px;
  height: 32px;
  background-color: rgba(23,21,29,1);
  border-radius: 9px;
  flex-direction: row;
  display: flex;
`;

const Currency = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  line-height: 10px;
  margin-top: 5px;
`;

const CurrencyRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 7px;
  margin-left: 12px;
  margin-top: 6px;
`;

export default DropDownCurrency;
