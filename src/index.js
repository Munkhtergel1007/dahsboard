import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Template from './Components/Dashboard/Template';
import Content from './Components/Home/Content';
import AccountContent from './Components/account/Content'
import Card from './Components/Card/Card'

ReactDOM.render(
  <Router>
    <Template>
      <Routes>
        <Route exact path="/home" element={<Content />} />
        <Route exact path="/transactions" element={<AccountContent />} />
        <Route exact path="/accounts" element={<Card />} />
      </Routes>
    </Template>
  </Router>,
  document.getElementById('root')
);