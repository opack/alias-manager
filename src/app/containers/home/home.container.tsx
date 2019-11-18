import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="title">Home</h1>
            <h2 className="subtitle">Discover the Alias Manager</h2>
            <hr/>
            <p>
                First, create a new consumer key using the <Link to="/ovh-credentials">OVH Credentials page</Link>.<br/>
                Then, you will be able to use the <Link to="/aliases">Aliases page</Link> to do whatever you like with your redirections!
            </p>
        </div>
    );
};

export default Home;