import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
 `
export const Div = styled.div`
 position: relative;
 height: 100vh;
`

export const Loader1 = styled.div`
 height: 100px;
 width: 100px;
 border: 16px solid gray;
 border-radius: 50%;
 border-top: 16px solid #3498db;
 animation:  1.2s linear 0s infinite normal none running ${animate};
 position: absolute;
 left: 43%;
 top: 34%;

`