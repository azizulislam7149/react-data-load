import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidabar from '../Sidebar/Sidabar';
import '../../components/sidebar.css'


const Root = () => {
    return (
        <div>
            <Header></Header>
           <div className='side-bar'>
            <Sidabar></Sidabar>
         <Outlet></Outlet>

           </div>
            <Footer></Footer>
          
        </div>
    );
};

export default Root;