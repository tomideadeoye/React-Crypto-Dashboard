import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function SelectSideBar(props) {
  return (
    <Container {...props}>
      <Rect1>
        <FontAwesomeIcon
          name="th-list"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 25,
            height: 25,
            width: 25,
            marginTop: 12,
            marginLeft: 13
          }}
        ></FontAwesomeIcon>
      </Rect1>
      <Rect2>
        <EntypoIcon
          name="bar-graph"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 25,
            height: 27,
            width: 25,
            marginTop: 12,
            marginLeft: 13
          }}
        ></EntypoIcon>
      </Rect2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(36,31,42,1);
  border-radius: 10px;
  flex-direction: column;
`;

const Rect1 = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(67,75,200,1);
  border-radius: 11px;
  flex-direction: column;
  display: flex;
  margin-top: 34px;
  margin-left: 12px;
`;

const Rect2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(67,75,200,1);
  border-radius: 11px;
  flex-direction: column;
  display: flex;
  margin-top: 23px;
  margin-left: 12px;
`;

export default SelectSideBar;
