import React, { useContext } from 'react';

import './Home.css';
import AuthContext from '../../context/auth-context';
import Activities from '../Activities/Activities';

const Home = () => {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            { auth.status ? 
                <Activities /> :
                <section>
                    <h1>Login or register to start using the application</h1>
                    <div style={{
                            position: "relative",
                            paddingBottom: "56.25%" /* 16:9 */,
                            paddingTop: 25,
                            height: 0
                        }}>
                        <iframe style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                            title="motivation"
                            src={`https://www.youtube.com/embed/mmq5zZfmIws?autoplay=1`}
                            frameBorder="0"
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                        />
                    </div>
                </section>
            }
        </React.Fragment>
    );
}

export default Home;
