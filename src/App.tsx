import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 5px;
        background-color: #fff;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #FB9400;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App