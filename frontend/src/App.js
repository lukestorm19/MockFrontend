import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import Login from './Components/SignIn/Login';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  let [color, setColor] = useState("#ffffff");
  
  
  
  return (
    <>
    {loading === false ? (
    <div className="App">
      <Home/>
    </div>
      ) : (
        <RingLoader color='#0000ff' loading={loading} css={override} size={60} />

      )}
      </>
  );
}

export default App;
