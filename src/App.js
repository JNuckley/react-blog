import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage';
import ArticleList from './Pages/ArticlesList';
import AboutPage from './Pages/AboutPage';
import NavBar from './NavBar';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div id="Page-body">
      <Route path="/" component={HomePage} exact />
      <Route path="/About" component={AboutPage} exact />
      <Route path="/List" component={ArticleList} exact />
      <Route path="/Articles/" component={ArticlePage} exact />
      </div>
    </div>
   </Router>
  );
}

export default App;
