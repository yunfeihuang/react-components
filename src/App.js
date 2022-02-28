import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './views/router'
import Home from './views/Home';
const AppContext = React.createContext()

function App() {
  return (
    <AppContext.Provider value={{foo: 'foo'}}>
      <BrowserRouter>
          <Routes>
            {routes.map(((item, i) => {
              return (<Route path={item.path} exact element={<item.component/>} key={i}></Route>)
            }))}
          </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
