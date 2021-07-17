import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Home from './Components/Home/Home'
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { Provider } from "react-redux";
import store from "./app/store";
import Auth from './auth';
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
    <Provider store={store}>
      <Auth />
   </Provider>
  
      ) : (
        <RingLoader color='#0000ff' loading={loading} css={override} size={60} />

      )}
      </>
  );
}

export default App;
