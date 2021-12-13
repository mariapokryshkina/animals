import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import {BrowserRouter as Router} from "react-router-dom";


const App = () => {
  return (
    <Router>
    <Header />
    <Main />
    <Footer />
    </Router>
  );
};

export default App;
