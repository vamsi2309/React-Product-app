import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
export const InnerContainer = styled.div`
  width: 70%;
  height: 60%;
  position: absolute;
  left: 12%;
  top: 18%;
  border: 2px solid green;
  border-radius: 30px;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  height: 88%;
  input {
    height: 13%;
    width: 25%;
    border-radius: 10px;
  }
`;
export const InputBox = styled.div`
  width: 30px;
  height: 30px;
`;
export const Button = styled.div`
  background-color: rgba(255,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height:7%;
  //    margin: 7%;
  padding: 6px;
  border-radius: 13px;
`;
