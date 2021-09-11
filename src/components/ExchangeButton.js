import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function ExchangeButton(props) {
  return (
    <Container {...props}>
      <Group7>
        <Rect16>
          <Exchange2Row>
            <Exchange2>Exchange</Exchange2>
            <IoniconsIcon
              name="ios-arrow-round-forward"
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: 25,
                height: 27,
                width: 14,
                marginLeft: 68
              }}
            ></IoniconsIcon>
          </Exchange2Row>
        </Rect16>
      </Group7>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Group7 = styled.div`
  width: 178px;
  height: 40px;
  flex-direction: column;
  display: flex;
`;

const Rect16 = styled.div`
  width: 178px;
  height: 40px;
  background-color: rgba(67,75,200,1);
  border-radius: 10px;
  flex-direction: row;
  display: flex;
`;

const Exchange2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  margin-top: 5px;
`;

const Exchange2Row = styled.div`
  height: 27px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 14px;
  margin-left: 22px;
  margin-top: 7px;
`;

export default ExchangeButton;
