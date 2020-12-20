
import React from 'react';
//import { Router } from 'react-router';
import{BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Cover from './Components/Cover';
import FetchBook from './Components/Fetchbook/FetchBook';
import FetchData from './Components/Fetchbook/FetchData';
//import Footer from './Components/Footer';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Cover />
      <FetchBook />
      
    </Router>
  );
}

export default App;
