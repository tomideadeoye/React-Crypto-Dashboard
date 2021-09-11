import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function MoreDetailsButton(props) {
  return (
    <Container {...props}>
      <Button>
        <ButtonOverlay>
          <Group2>
            <Rect3>
              <Group>
                <EntypoIcon
                  name="dots-three-horizontal"
                  style={{
                    color: "rgba(72,36,232,1)",
                    fontSize: 40
                  }}
                ></EntypoIcon>
              </Group>
            </Rect3>
          </Group2>
        </ButtonOverlay>
      </Button>
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
const Button = styled.div`
  width: 74px;
  height: 69px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Group2 = styled.div`
  width: 74px;
  height: 69px;
  flex-direction: column;
  display: flex;
`;

const Rect3 = styled.div`
  width: 74px;
  height: 69px;
  background-color: rgba(36,31,42,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
`;

const Group = styled.div`
  width: 40px;
  height: 44px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 17px;
`;

export default MoreDetailsButton;
