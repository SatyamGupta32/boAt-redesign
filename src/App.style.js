import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  } 

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    font-style: normal; 
    overflow-x: hidden; 
  }

  body::selection {
  background-color: red;
  color: white;
  }
 
  body::-webkit-scrollbar, html::-webkit-scrollbar {
    width: 6px !important;
  }

  body::-webkit-scrollbar-thumb, html::-webkit-scrollbar-thumb {
    background:rgb(15, 15, 15) !important;
  }

  body::-webkit-scrollbar-track, html::-webkit-scrollbar-track {
    background:rgba(255, 255, 255, 0.19) !important;
    border-radius: 8px !important;
    background-clip: content-box !important;
  }

  /* anywhere in your global CSS */
  body.no-scroll {
    overflow: hidden;
  }

`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
 
`;