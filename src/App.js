import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage';
import ArticlePage from './Pages/ArticlePage';
import ArticleListPage from './Pages/ArticlesListPage';
import ArticleList from './components/ArticlesList'
import AboutPage from './Pages/AboutPage';
import NavBar from './NavBar';
import './App.css';
import articles from './Pages/Article-content';
import { render } from 'react-dom';


class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div id="Page-body">
      <Switch>  
        <Route path="/" component={HomePage} exact />
        <Route path="/About" component={AboutPage} />
        <Route path="/List" component={ArticleListPage} />
        <Route path="/Articles/:name" component={ArticlePage} />
        <Route component={NotFoundPage} />
      </Switch>
      </div>
    </div>
   </Router>
  )}
}


export default App;
