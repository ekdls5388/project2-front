import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Axios from "axios";
import "./fonts/Font.css";
import Joystick from "./Joystick";

const Container = styled.div`
  --bg: #72cef2;
  --primary: #78ffcd;
  --solid: #fff;
  --btn-w: 10em;
  --dot-w: calc(var(--btn-w) * 0.2);
  --tr-X: calc(var(--btn-w) - var(--dot-w));
  height: 100vh;
  //display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  background: var(--bg);
  font-size: 20px;
  font-family: "Titillium Web", sans-serif;
  width: 100%;
  margin: 0 auto;
`;
const JoystickContainer = styled.div`
  transform: scale(0.5);
`;

const ButtonContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: var(--btn-w);
  color: var(--primary);
  border: 0.15em solid var(--primary);
  border-radius: 5em;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.3em;
  line-height: 2em;
  cursor: pointer;
`;

const Dot = styled.div`
  content: "";
  position: absolute;
  top: 0;
  width: var(--dot-w);
  height: 100%;
  border-radius: 100%;
  transition: all 300ms ease;
  display: none;

  &:after {
    content: "";
    position: absolute;
    left: calc(50% - 0.4em);
    top: -0.4em;
    height: 0.8em;
    width: 0.8em;
    background: var(--primary);
    border-radius: 1em;
    border: 0.25em solid var(--solid);
    box-shadow:
      0 0 0.7em var(--solid),
      0 0 2em var(--primary);
  }
`;

const atomAnimation = keyframes`
  0% { transform: translateX(0) rotate(0); }
  30% { transform: translateX(var(--tr-X)) rotate(0); }
  50% { transform: translateX(var(--tr-X)) rotate(180deg); }
  80% { transform: translateX(0) rotate(180deg); }
  100% { transform: translateX(0) rotate(360deg); }
`;

const HoverButton = styled.div`
  &:hover ${Dot}, &:focus ${Dot} {
    animation: ${atomAnimation} 2s infinite linear;
    display: block;
  }
`;

const Categorybutton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: #3f6269;
  &:hover {
    background: #417561;
  }
`;

const Headeralign = styled.div`
  text-align: center;
`;

const Capsulealign = styled.div`
  text-align: center;
`;

const Togglebox = styled.div`
  width: 600px;
  height: 60px;
  background: lightgray;
`;

const Changebutton = styled.button`
  width: 100px;
  border-radius: 50%;
`;

const ColorContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10px;
`;

const ColorItem = styled.div`
  display: flex;
  .color {
    width: 50px;
    height: 50px;
    margin: 5px;
    cursor: pointer;
  }
  .selected {
    border: 2px solid white;
  }
`;

const InputText = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: #a66bbf; /* 검정색 배경색 적용 */
  color: white; /* 흰색 글자 폰트 적용 */
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-top: 10px;
  resize: none;
`;

const Addbutton = styled.button`
  font-family: "DungGeunMo", sans-serif;
  width: 100px;
  height: 25px;
  border-radius: 7px;
  border-width: 3px;
  border-color: #2e2e2e;
  background: #f2ae30;
`;

function MainPage() {
  const imgUrl = process.env.PUBLIC_URL + "/gacha.jpeg";
  const [textVal, setTextVal] = useState("");
  const insertmessage = () => {
    // 메세지 저장 배열이랑 연결하기 && 그 저장 배열은 category를 가지고 있음.
  };

  const HandleClick = async () => {
    await Axios.post("http://3.36.128.49:3080/post/insert", {
      content: textVal,
    });
    alert("추가되었습니다.");
  };

  /*const = () => {
      const result = await Axios.get('http://3.36.128.49:3080/post/pick')
      setlist(result.data.content)
    }*/

  const exploreothers = () => {
    // 다른 유저 저장 배열이랑 연결하기 && 그 저장 배열은 category를 가지고 있음.
    // 만약 다른 유저가 오늘의 메시지를 안 뽑았다면?
  };

  //selectedColor은 현재의 상태를 저장, setSelectedColor은 색상을 변경할때 사용
  const [selectedColor, setSelectedColor] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#72CEF2");

  const ColorSelect = (color) => {
    setSelectedColor(color);
    setBackgroundColor(color);
  };

  const allColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
  ];

  const [pickeddata, setpickeddata] = useState([]);
  const [isopen, setisopen] = useState(false);

  const [showTextInput, setShowTextInput] = useState(false);
  const [newText, setNewText] = useState("");

  // "추가하기" 버튼을 누를 때 새로운 텍스트 창을 나타내는 함수
  const showNewTextInput = () => {
    setShowTextInput(true);
    setNewText(""); // 새로운 텍스트 창을 보여줄 때 텍스트를 초기화합니다.
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await Axios.post("http://3.36.128.49:3080/post/insert", {
        content: newText,
      });
      alert("추가되었습니다.");
      setShowTextInput(false); // 텍스트 전송 후 텍스트 창을 닫습니다.
    }
  };

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://3.36.128.49:3080/post/pick");
      setpickeddata(response.data.content);
      console.log(response.data.content);
    } catch (error) {
      console.error("데이터를 불러오는데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchData(); // 페이지가 로드될 때 데이터를 가져옴
  }, []);

  const handlePress = async () => {
    fetchData();
  };

  const toggle = () => {
    setisopen((isopen) => !isopen);
  };

  const displayData = () => {};

  const theme = ["위로", "용기", "희망", "명언", "꿈"];
  const [category, setCategory] = useState("위로");

  const handleLeftButtonClick = () => {
    const currentIndex = theme.indexOf(category);
    const newIndex = (currentIndex - 1 + theme.length) % theme.length;
    setCategory(theme[newIndex]);
    console.log("현재 category:", category);
  };

  const handleRightButtonClick = () => {
    const currentIndex = theme.indexOf(category);
    const newIndex = (currentIndex + 1) % theme.length;
    setCategory(theme[newIndex]);
    console.log("현재 category:", category);
  };

  const setMainPageBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <Container style={{ background: backgroundColor }}>
      <Categorybutton onClick={handleLeftButtonClick}>{"<"}</Categorybutton>
      <button onClick={insertmessage}>새로운 메시지 추가!</button>
      <br />
      <Capsulealign>
        <img src={imgUrl} alt="Capsule Image" />
      </Capsulealign>
      <br />
      <ColorContainer>
        <Changebutton onClick={toggle}> 색 변경하기</Changebutton>
        {isopen && (
          <Togglebox className="color-box">
            <ColorItem>
              {allColors.map((color, index) => (
                <div
                  key={index}
                  className={`color ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => ColorSelect(color)}
                ></div>
              ))}
            </ColorItem>
          </Togglebox>
        )}
      </ColorContainer>
      <JoystickContainer>
        <Joystick setMainPageBackgroundColor={setMainPageBackgroundColor} />
      </JoystickContainer>
      {!showTextInput && (
        <Addbutton onClick={showNewTextInput}>추가하기</Addbutton>
      )}
      {showTextInput && (
        <InputText
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      )}
      <br />
      <button onClick={exploreothers}>친구들 메시지 염탐하기!</button>
      <br />
      <ButtonContainer>
        <HoverButton onClick={handlePress}>
          Press!
          <Dot />
        </HoverButton>
      </ButtonContainer>
      {displayData()}
      <Categorybutton
        style={{ position: "absolute", right: 10, top: 10 }}
        onClick={handleRightButtonClick}
      >
        {">"}
      </Categorybutton>
    </Container>
  );
}

export default MainPage;
