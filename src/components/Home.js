import React from 'react';
import connect from 'react-redux';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Header from './Header';


const Home = (props) => {
    return(
        <div className="login">
        <Navbar/>
        <Header/>
        <Button variant="outline-success"> Login to spotify</Button>
        </div>
    );
};

export default connect()(Home);