import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
*::before,
*::after {
  box-sizing: border-box;
} 
ul {
  padding: 0;
  list-style: none;
  margin: 0;
}
body {
background: #303841;
  min-height: 100vh;
 font-family: 'Montserrat';
 color:#fff;
  
}
body,
h1,
p,
li {
  margin: 0;
}
img {
  max-width: 100%;
  display: block;
}
`;
