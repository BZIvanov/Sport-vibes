import React from 'react';

import './Layout.css';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';

const Layout = (props) => {
    return (
        <div className="site-layout">
            <Header />

            <main>
                {props.children}
            </main>
            
            <Footer />
        </div>
    )
};

export default Layout;
