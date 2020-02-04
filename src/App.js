import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage';
import ArticleList from './Pages/ArticlesList';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <Router>
    <div className="App">
      <div id="Page-body">
      <Route path="/" component={HomePage} exact />
      <Route path="/About" component={AboutPage} exact />
      <Route path="/List" component={ArticleList} exact />
      <Route path="/Articles" component={ArticlePage} exact />
      </div>
    </div>
   </Router>
  );
}

export default App;
