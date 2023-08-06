import React from "react";
import styled from "styled-compnents";

const Capsuleimage = () => {
  const imgUrl = process.env.PUBLIC_URL + "/gacha.jpeg";
  const insertmessage = () => {};
  return (
    <main>
      <button onClick={insertmessage}> 새로운 메시지 추가! </button>
      <div>
        <img src={imgUrl} alt="Capsule Image" />
      </div>
    </main>
  );
};

export default Capsuleimage;
