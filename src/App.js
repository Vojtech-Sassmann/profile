import React, { Component } from 'react';
import './App.css';
import ProfileMenu from './ProfileMenu';
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProfileHeader/>
                <ProfileMenu/>
                <ProfileBody/>
            </div>
        );
    }
}

export default App;
