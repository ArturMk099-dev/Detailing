import React from 'react';
import HomeM from "../components/HomeM";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home(props) {
    return (
        <div>
           <Header/>
           <HomeM/>
           <Footer/>
        </div>
    );
}

export default Home;