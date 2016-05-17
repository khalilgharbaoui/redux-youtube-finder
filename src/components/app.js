import React from 'react';
import { Component } from 'react';
import SearchBar from '../components/SearchBar';
const API_KEY = "AIzaSyDcYThmOox7zNSow2jjYEinjnjM35UWLBc";

export default class App extends Component {
  render() {

    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
