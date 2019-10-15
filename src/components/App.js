import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Post from './Post';
import {getAllPosts} from '../actions/getAllPosts';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.getAllPosts();
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    getAllPosts
  }
}

export default connect(null, mapDispatchToProps)(App);
