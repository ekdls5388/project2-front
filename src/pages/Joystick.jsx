import React from "react";
import styled from "styled-components";

const JoystickContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const Button1 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 33%;
  right: 50%;
  transform: translateY(-50%);
  background-image: url("/button1.png"); 
  background-size: cover;
  cursor: pointer;
`;
const Button2 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 33%;
  right: 30%;
  transform: translateY(-50%);
  background-image: url("/button2.png"); 
  background-size: cover;
  cursor: pointer;
`;
const Button3 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 33%;
  right: 10%;
  transform: translateY(-50%);
  background-image: url("/button3.png"); 
  background-size: cover;
  cursor: pointer;
`;
const Button4 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 50%;
  right: 42%;
  transform: translateY(-50%);
  background-image: url("/button4.png"); 
  background-size: cover;
  cursor: pointer;
`;
const Button5 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 50%;
  right: 22%;
  transform: translateY(-50%);
  background-image: url("/button5.png"); 
  background-size: cover;
  cursor: pointer;
`;
const Button6 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  background-image: url("/button6.png"); 
  background-size: cover;
  cursor: pointer;
`;
const Button7 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 67%;
  right: 30%;
  transform: translateY(-50%);
  background-image: url("/button7.png"); 
  background-size: cover;
  cursor: pointer;
`;
const Button8 = styled.button`
  position: absolute;
  width: 82px;
  height: 43px;
  background-color: transparent;
  border: none;
  padding: 0;
  top: 67%;
  right: 10%;
  transform: translateY(-50%);
  background-image: url("/button8.png"); 
  background-size: cover;
  cursor: pointer;
`;

const Joystick = ({ setMainPageBackgroundColor }) => {
  // Button1을 누를 때 호출되는 함수
  const handleButton1Click = () => {
    setMainPageBackgroundColor("#6AAED9");
  };
  const handleButton2Click = () => {
    setMainPageBackgroundColor("#F2CB57");
  };
  const handleButton3Click = () => {
    setMainPageBackgroundColor("#A62E2E");
  };
  const handleButton4Click = () => {
    setMainPageBackgroundColor("#D94848");
  };
  const handleButton5Click = () => {
    setMainPageBackgroundColor("#F2F2F2");
  };
  const handleButton6Click = () => {
    setMainPageBackgroundColor("#A1CCD1");
  };
  const handleButton7Click = () => {
    setMainPageBackgroundColor("#E9B384");
  };
  const handleButton8Click = () => {
    setMainPageBackgroundColor("#DBC4F0");
  };
  return (
    <JoystickContainer>
      <img src="/joystick.png" alt="예시 이미지" />{" "}
      <Button1 onClick={handleButton1Click}></Button1>
      <Button2 onClick={handleButton2Click}></Button2>
      <Button3 onClick={handleButton3Click}></Button3>
      <Button4 onClick={handleButton4Click}></Button4>
      <Button5 onClick={handleButton5Click}></Button5>
      <Button6 onClick={handleButton6Click}></Button6>
      <Button7 onClick={handleButton7Click}></Button7>
      <Button8 onClick={handleButton8Click}></Button8>
    </JoystickContainer>
  );
};

export default Joystick;
