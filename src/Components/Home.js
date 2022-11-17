import { useState, useEffect } from "react";
import "./Home.css"
import DesktopLine from "./Images/pattern-divider-desktop.svg";

import icon from "./Images/icon-dice.svg";

function Home() {

  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [advice, setAdvice] = useState(false);

  async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setData(data);
    setLoaded(true);
  }

  useEffect(() => {
    getData();
  }, [loaded, advice]);
  
  return (
  <div className="container">
    {loaded && <div className="inner-container">
      <div className="advice">Advice #{data.slip.id}</div>
      <div className="quote">"{data.slip.advice}"</div>
      <img src={DesktopLine} alt="Line" className="line" />
      <button onClick={() => {setAdvice(!advice)}}><img src={icon} alt="logo" /></button>
    </div>}
  </div>)
}

export default Home;