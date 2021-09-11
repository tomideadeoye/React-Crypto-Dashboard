import React, { Component } from "react";
import styled, { css } from "styled-components";
import MoreDetailsButton from "../components/MoreDetailsButton";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import SelectSideBar from "../components/SelectSideBar";
import CoinNamePrice from "../components/CoinNamePrice";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function HomeScreen(props) {
  return (
    <Container>
      <MoreDetailsButtonRow>
        <MoreDetailsButton
          style={{
            height: 69,
            width: 74,
            marginTop: 1
          }}
        ></MoreDetailsButton>
        <Group4>
          <Group3>
            <Rect2>
              <Icon2Row>
                <IoniconsIcon
                  name="ios-search"
                  style={{
                    color: "rgba(72,36,232,1)",
                    fontSize: 30,
                    height: 33,
                    width: 23
                  }}
                ></IoniconsIcon>
                <Search>Search</Search>
              </Icon2Row>
            </Rect2>
          </Group3>
        </Group4>
      </MoreDetailsButtonRow>
      <SelectSideBarRow>
        <SelectSideBar
          style={{
            height: 606,
            width: 74,
            marginTop: 27
          }}
        ></SelectSideBar>
        <Group6Column>
          <Group6>
            <Rect4>
              <MarketLeaders>Market Leaders</MarketLeaders>
              <Button4>
                <ButtonOverlay>
                  <CryptonameRow>
                    <Cryptoname>Bitcoin (BTC)</Cryptoname>
                    <Pricechart></Pricechart>
                    <Pricechange>pricechange</Pricechange>
                    <Value>value</Value>
                  </CryptonameRow>
                </ButtonOverlay>
              </Button4>
            </Rect4>
          </Group6>
          <CoinList>
            <AllCoins>All Coins</AllCoins>
            <CoinNamePrice
              style={{
                height: 61,
                width: 195,
                marginTop: 43,
                marginLeft: 36
              }}
            ></CoinNamePrice>
          </CoinList>
        </Group6Column>
        <ScrollArea>
          <Events>Events</Events>
          <Button2>
            <ButtonOverlay>
              <EventTitle>EventTitle</EventTitle>
              <EventDescription>Event description</EventDescription>
              <FeatherIcon
                name="link-2"
                style={{
                  color: "rgba(255,255,255,1)",
                  fontSize: 19,
                  height: 19,
                  width: 19,
                  marginLeft: 241
                }}
              ></FeatherIcon>
            </ButtonOverlay>
          </Button2>
        </ScrollArea>
      </SelectSideBarRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(23,21,29,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Group4 = styled.div`
  width: 1185px;
  height: 43px;
  flex-direction: column;
  display: flex;
  margin-left: 36px;
`;

const Group3 = styled.div`
  width: 1185px;
  height: 43px;
  flex-direction: column;
  display: flex;
`;

const Rect2 = styled.div`
  width: 1185px;
  height: 41px;
  background-color: rgba(23,21,29,1);
  border-width: 1px;
  border-color: rgba(36,31,42,1);
  border-style: solid;
  border-radius: 46px;
  flex-direction: row;
  display: flex;
  margin-top: 1px;
`;

const Search = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-left: 17px;
  margin-top: 9px;
  margin-bottom: 10px;
`;

const Icon2Row = styled.div`
  height: 33px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 1086px;
  margin-left: 22px;
  margin-top: 4px;
`;

const MoreDetailsButtonRow = styled.div`
  height: 70px;
  flex-direction: row;
  display: flex;
  margin-top: 36px;
  margin-left: 41px;
  margin-right: 30px;
`;

const Group6 = styled.div`
  width: 893px;
  height: 310px;
  flex-direction: column;
  display: flex;
`;

const Rect4 = styled.div`
  width: 893px;
  height: 310px;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const MarketLeaders = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 30px;
  margin-top: 32px;
  margin-left: 31px;
`;

const Button4 = styled.div`
  width: 853px;
  height: 79px;
  background-color: rgba(114,40,232,1);
  border-radius: 10px;
  flex-direction: row;
  display: flex;
  margin-top: 29px;
  margin-left: 20px;
  border: none;
`;

const Cryptoname = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  margin-top: 17px;
`;

const Pricechart = styled.div`
  width: 497px;
  height: 49px;
  background-color: #E6E6E6;
  border-radius: 100px;
  margin-left: 44px;
`;

const Pricechange = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(80,227,194,1);
  font-size: 10px;
  margin-left: 29px;
  margin-top: 18px;
`;

const Value = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  margin-left: 29px;
  margin-top: 16px;
`;

const CryptonameRow = styled.div`
  height: 49px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 59px;
  margin-left: 23px;
  margin-top: 16px;
`;

const CoinList = styled.div`
  width: 893px;
  height: 310px;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
`;

const AllCoins = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  line-height: 30px;
  font-size: 30px;
  margin-top: 21px;
  margin-left: 20px;
`;

const Group6Column = styled.div`
  width: 893px;
  flex-direction: column;
  display: flex;
  margin-left: 41px;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  width: 269px;
  height: 633px;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-left: 18px;
`;

const Events = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  margin-top: 25px;
  margin-left: 21px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Button2 = styled.div`
  width: 269px;
  height: 149px;
  background-color: rgba(114,40,232,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-top: 47px;
  flex: 0 0 auto;
  border: none;
`;

const EventTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  margin-top: 23px;
  margin-left: 23px;
`;

const EventDescription = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 56px;
  width: 229px;
  font-size: 12px;
  margin-top: 26px;
  margin-left: 21px;
`;

const SelectSideBarRow = styled.div`
  height: 633px;
  flex-direction: row;
  display: flex;
  margin-left: 41px;
  margin-right: 30px;
`;

export default HomeScreen;
