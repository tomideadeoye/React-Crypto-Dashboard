import React, { Component } from "react";
import styled, { css } from "styled-components";
import MoreDetailsButton from "../components/MoreDetailsButton";
import SelectSideBar from "../components/SelectSideBar";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import DropDownCurrency from "../components/DropDownCurrency";
import ExchangeButton from "../components/ExchangeButton";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import InfoBlueBox from "../components/InfoBlueBox";

function CurrencyScreen(props) {
  return (
    <Container>
      <MoreDetailsButtonColumnRow>
        <MoreDetailsButtonColumn>
          <MoreDetailsButton
            style={{
              width: 74,
              height: 69,
              marginLeft: 2
            }}
          ></MoreDetailsButton>
          <Button4Stack>
            <Button4>
              <ButtonOverlay></ButtonOverlay>
            </Button4>
            <SelectSideBar
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 74,
                height: 606
              }}
            ></SelectSideBar>
          </Button4Stack>
        </MoreDetailsButtonColumn>
        <Group4RowColumn>
          <Group4Row>
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
            <Rect13>
              <Icon9Row>
                <FontAwesomeIcon
                  name="calendar"
                  style={{
                    color: "rgba(114,40,232,1)",
                    fontSize: 25,
                    height: 25,
                    width: 24,
                    marginTop: 2
                  }}
                ></FontAwesomeIcon>
                <Nov2020July2021>Nov 2020 - July 2021</Nov2020July2021>
                <EntypoIcon
                  name="chevron-small-down"
                  style={{
                    color: "rgba(114,40,232,1)",
                    fontSize: 27,
                    height: 29,
                    width: 27,
                    marginLeft: 17
                  }}
                ></EntypoIcon>
              </Icon9Row>
            </Rect13>
          </Group4Row>
          <CurrencyPriceDetails>
            <Rect4>
              <PriceRow>
                <Price>Price</Price>
                <PrceChange>prceChange</PrceChange>
                <Rect11></Rect11>
              </PriceRow>
              <PriceChartBox></PriceChartBox>
            </Rect4>
          </CurrencyPriceDetails>
          <ExchangeDetailsRow>
            <ExchangeDetails>
              <CoinList>
                <Rect15Row>
                  <Rect15></Rect15>
                  <Exchange>Exchange</Exchange>
                </Rect15Row>
                <SellRow>
                  <Sell>Sell</Sell>
                  <Sellprice>sellprice</Sellprice>
                  <DropDownCurrency
                    style={{
                      height: 32,
                      width: 98,
                      marginLeft: 155,
                      marginTop: 1
                    }}
                  ></DropDownCurrency>
                </SellRow>
                <BuyRow>
                  <Buy>Buy</Buy>
                  <Buyprice>buyprice</Buyprice>
                  <DropDownCurrency
                    style={{
                      height: 32,
                      width: 98,
                      marginLeft: 154
                    }}
                  ></DropDownCurrency>
                </BuyRow>
                <CurrencyToCurrencyConversionRow>
                  <CurrencyToCurrencyConversion>
                    1 BTC = 200 Tomide Currency
                  </CurrencyToCurrencyConversion>
                  <ExchangeButton
                    style={{
                      height: 40,
                      width: 178,
                      marginLeft: 67
                    }}
                  ></ExchangeButton>
                </CurrencyToCurrencyConversionRow>
              </CoinList>
            </ExchangeDetails>
            <Group5>
              <Rect16>
                <Rect17Row>
                  <Rect17></Rect17>
                  <AlexaRank>Alexa Rank</AlexaRank>
                </Rect17Row>
                <Rank>Rank</Rank>
              </Rect16>
            </Group5>
          </ExchangeDetailsRow>
        </Group4RowColumn>
        <InfoAreaStack>
          <InfoArea>
            <InfoCard>Info Card</InfoCard>
            <Button5Row>
              <Button5>
                <ButtonOverlay>
                  <Rect12>
                    <WebsiteRow>
                      <Website>Website</Website>
                      <MaterialCommunityIconsIcon
                        name="web"
                        style={{
                          color: "rgba(23,21,29,1)",
                          fontSize: 30,
                          height: 33,
                          width: 30,
                          marginLeft: 7
                        }}
                      ></MaterialCommunityIconsIcon>
                    </WebsiteRow>
                  </Rect12>
                </ButtonOverlay>
              </Button5>
              <FontAwesomeIcon
                name="reddit"
                style={{
                  color: "rgba(255,255,255,1)",
                  fontSize: 40,
                  height: 40,
                  width: 40,
                  marginLeft: 29,
                  marginTop: 3
                }}
              ></FontAwesomeIcon>
              <MaterialCommunityIconsIcon
                name="github-circle"
                style={{
                  color: "rgba(255,255,255,1)",
                  fontSize: 40,
                  height: 43,
                  width: 40,
                  marginLeft: 25
                }}
              ></MaterialCommunityIconsIcon>
            </Button5Row>
            <Facts>Facts</Facts>
            <Rect14></Rect14>
            <Group6>
              <HashingAlgorithmRow>
                <HashingAlgorithm>Hashing Algorithm</HashingAlgorithm>
                <HashingAlgoName>hashingAlgoName</HashingAlgoName>
              </HashingAlgorithmRow>
              <CountryOriginRow>
                <CountryOrigin>Country Origin</CountryOrigin>
                <CountryName>Country Name</CountryName>
              </CountryOriginRow>
              <CategroryRow>
                <Categrory>Categrory</Categrory>
                <Crytocrurrency>Crytocrurrency</Crytocrurrency>
              </CategroryRow>
            </Group6>
            <Rect18>
              <Group7>
                <TotalSupplyRow>
                  <TotalSupply>Total Supply</TotalSupply>
                  <SupplyFigures>supplyFigures</SupplyFigures>
                </TotalSupplyRow>
                <MaxSupplyRow>
                  <MaxSupply>Max Supply</MaxSupply>
                  <MaxSupplyFigures>maxSupplyFigures</MaxSupplyFigures>
                </MaxSupplyRow>
                <CirculatingRow>
                  <Circulating>Circulating</Circulating>
                  <CirculatingFigures>circulatingFigures</CirculatingFigures>
                </CirculatingRow>
              </Group7>
            </Rect18>
          </InfoArea>
          <InfoBlueBox
            style={{
              position: "absolute",
              top: 75,
              left: 1,
              height: 149,
              width: 269
            }}
          ></InfoBlueBox>
        </InfoAreaStack>
      </MoreDetailsButtonColumnRow>
      <LoremIpsum></LoremIpsum>
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
const Button4 = styled.div`
  top: 25px;
  left: 24px;
  width: 30px;
  height: 30px;
  position: absolute;
  border: none;
`;

const Button4Stack = styled.div`
  width: 74px;
  height: 606px;
  margin-top: 28px;
  position: relative;
`;

const MoreDetailsButtonColumn = styled.div`
  width: 76px;
  flex-direction: column;
  display: flex;
  margin-bottom: 2px;
`;

const Group4 = styled.div`
  width: 605px;
  height: 43px;
  flex-direction: column;
  display: flex;
`;

const Group3 = styled.div`
  width: 642px;
  height: 43px;
  flex-direction: column;
  display: flex;
`;

const Rect2 = styled.div`
  width: 642px;
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
  margin-right: 543px;
  margin-left: 22px;
  margin-top: 4px;
`;

const Rect13 = styled.div`
  width: 243px;
  height: 41px;
  background-color: rgba(36,31,42,1);
  border-radius: 9px;
  flex-direction: row;
  display: flex;
  margin-left: 50px;
  margin-top: 1px;
`;

const Nov2020July2021 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  margin-left: 17px;
  margin-top: 6px;
`;

const Icon9Row = styled.div`
  height: 29px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 10px;
  margin-left: 17px;
  margin-top: 6px;
`;

const Group4Row = styled.div`
  height: 43px;
  flex-direction: row;
  display: flex;
`;

const CurrencyPriceDetails = styled.div`
  width: 893px;
  height: 310px;
  flex-direction: column;
  display: flex;
  margin-top: 27px;
  margin-left: 5px;
`;

const Rect4 = styled.div`
  width: 893px;
  height: 310px;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 25px;
`;

const PrceChange = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(63,173,26,1);
  font-size: 12px;
  margin-left: 49px;
  margin-top: 8px;
`;

const Rect11 = styled.div`
  width: 33px;
  height: 17px;
  background-color: #E6E6E6;
  margin-left: 35px;
  margin-top: 6px;
`;

const PriceRow = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 29px;
  margin-left: 25px;
  margin-right: 630px;
`;

const PriceChartBox = styled.div`
  width: 847px;
  height: 190px;
  background-color: #E6E6E6;
  margin-top: 33px;
  margin-left: 23px;
`;

const ExchangeDetails = styled.div`
  width: 477px;
  height: 310px;
  flex-direction: column;
  display: flex;
`;

const CoinList = styled.div`
  width: 477px;
  height: 310px;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Rect15 = styled.div`
  width: 4px;
  height: 32px;
  background-color: rgba(67,75,200,1);
  border-radius: 100px;
`;

const Exchange = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  line-height: 30px;
  font-size: 25px;
  margin-left: 18px;
  margin-top: 5px;
`;

const Rect15Row = styled.div`
  height: 35px;
  flex-direction: row;
  display: flex;
  margin-top: 34px;
  margin-left: 5px;
  margin-right: 342px;
`;

const Sell = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(155,155,155,1);
  line-height: 30px;
  font-size: 12px;
`;

const Sellprice = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  line-height: 30px;
  font-size: 25px;
  margin-left: 34px;
`;

const SellRow = styled.div`
  height: 33px;
  flex-direction: row;
  display: flex;
  margin-top: 27px;
  margin-left: 27px;
  margin-right: 47px;
`;

const Buy = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(155,155,155,1);
  line-height: 30px;
  font-size: 12px;
`;

const Buyprice = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  line-height: 30px;
  font-size: 25px;
  margin-left: 34px;
`;

const BuyRow = styled.div`
  height: 32px;
  flex-direction: row;
  display: flex;
  margin-top: 39px;
  margin-left: 27px;
  margin-right: 47px;
`;

const CurrencyToCurrencyConversion = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(155,155,155,1);
  line-height: 30px;
  font-size: 12px;
  opacity: 0.8;
  margin-top: 7px;
`;

const CurrencyToCurrencyConversionRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 42px;
  margin-left: 27px;
  margin-right: 47px;
`;

const Group5 = styled.div`
  width: 364px;
  height: 179px;
  flex-direction: column;
  display: flex;
  margin-left: 48px;
  margin-top: 129px;
`;

const Rect16 = styled.div`
  width: 363px;
  height: 179px;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Rect17 = styled.div`
  width: 4px;
  height: 32px;
  background-color: rgba(67,75,200,1);
  border-radius: 100px;
`;

const AlexaRank = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  line-height: 30px;
  font-size: 25px;
  margin-left: 111px;
  margin-top: 5px;
`;

const Rect17Row = styled.div`
  height: 35px;
  flex-direction: row;
  display: flex;
  margin-top: 34px;
  margin-left: 5px;
  margin-right: 119px;
`;

const Rank = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  line-height: 30px;
  font-size: 30px;
  margin-top: 27px;
  margin-left: 149px;
`;

const ExchangeDetailsRow = styled.div`
  height: 310px;
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  margin-right: 9px;
`;

const Group4RowColumn = styled.div`
  width: 898px;
  flex-direction: column;
  display: flex;
  margin-left: 34px;
`;

const InfoArea = styled.div`
  overflow-y: scroll;
  top: 0px;
  left: 0px;
  width: 269px;
  height: 702px;
  position: absolute;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const InfoCard = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 29px;
  margin-left: 21px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Button5 = styled.div`
  width: 104px;
  height: 40px;
  flex-direction: column;
  display: flex;
  margin-top: 2px;
  border: none;
`;

const Rect12 = styled.div`
  width: 104px;
  height: 40px;
  background-color: #E6E6E6;
  border-radius: 10px;
  flex-direction: row;
  display: flex;
`;

const Website = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  margin-top: 8px;
`;

const WebsiteRow = styled.div`
  height: 33px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 7px;
  margin-left: 10px;
  margin-top: 4px;
`;

const Button5Row = styled.div`
  height: 43px;
  flex-direction: row;
  display: flex;
  margin-top: 185px;
  margin-left: 12px;
  margin-right: 19px;
  flex: 0 0 auto;
`;

const Facts = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 29px;
  margin-left: 12px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Rect14 = styled.div`
  width: 232px;
  height: 5px;
  background-color: rgba(114,40,232,1);
  margin-top: 17px;
  margin-left: 19px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Group6 = styled.div`
  width: 238px;
  height: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 24px;
  margin-left: 12px;
  flex: 0 0 auto;
`;

const HashingAlgorithm = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
`;

const HashingAlgoName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-left: 40px;
`;

const HashingAlgorithmRow = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-right: 1px;
`;

const CountryOrigin = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
`;

const CountryName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-left: 63px;
`;

const CountryOriginRow = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
  margin-right: 23px;
`;

const Categrory = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
`;

const Crytocrurrency = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-left: 87px;
`;

const CategroryRow = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
  margin-right: 21px;
`;

const Rect18 = styled.div`
  width: 247px;
  height: 153px;
  background-color: rgba(114,40,232,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  margin-top: 129px;
  margin-left: 12px;
  flex: 0 0 auto;
`;

const Group7 = styled.div`
  width: 238px;
  height: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 26px;
  margin-left: 9px;
`;

const TotalSupply = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
`;

const SupplyFigures = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-left: 55px;
`;

const TotalSupplyRow = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-right: 42px;
`;

const MaxSupply = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
`;

const MaxSupplyFigures = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-left: 59px;
`;

const MaxSupplyRow = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
  margin-right: 18px;
`;

const Circulating = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
`;

const CirculatingFigures = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-left: 64px;
`;

const CirculatingRow = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
  margin-right: 22px;
`;

const InfoAreaStack = styled.div`
  width: 270px;
  height: 702px;
  margin-left: 18px;
  margin-top: 1px;
  position: relative;
`;

const MoreDetailsButtonColumnRow = styled.div`
  height: 705px;
  flex-direction: row;
  display: flex;
  margin-top: 36px;
  margin-left: 41px;
  margin-right: 29px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 109px;
  margin-left: 174px;
`;

export default CurrencyScreen;
