import './App.scss';
import {createGlobalStyle} from "styled-components";
import {useState} from "react";
import Header from './Components/Header/Header';
import MainCard from './Components/MainCard/MainCard';

const DarkStye = createGlobalStyle`
  :root {
    --MainBG: hsl(230, 17%, 14%);
    --TopBG: hsl(232, 19%, 15%);
    --Card: hsl(228, 28%, 20%);
    --TextSub: hsl(228, 34%, 66%);
    --Text: hsl(0, 0%, 100%);
    --Gradient:linear-gradient(to right ,hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  }
`;
const LightStye = createGlobalStyle`
  :root {
    --MainBG: hsl(0, 0%, 100%);
    --TopBG: hsl(225, 100%, 98%);
    --Card: hsl(227, 47%, 96%);
    --TextSub: hsl(228, 12%, 44%);
    --Text: hsl(230, 17%, 14%);
    --Gradient:#ccc;
  }
`;


function App() {
  const [darkTheme, setdarkTheme] = useState(true)
  const toogleTheme = () => {
    setdarkTheme( !darkTheme )
  }
  return (
    <>
      {
        darkTheme
        ?<DarkStye/>
        :<LightStye/>
      }
      <div className="App">
        <Header change={toogleTheme}/>
      </div>
     </> 
  );
}

export default App;