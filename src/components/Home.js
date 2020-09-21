import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Header from './Header';


const Home = () => {
    return(
        <div>
        <Navbar/>
        <Header/>
        <Button variant="outline-success"> Login to spotify</Button>
        </div>
    )
}

export default Home;