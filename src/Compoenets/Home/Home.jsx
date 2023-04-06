import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tsharts = useLoaderData();
    return (
        <div>
            <h2>This is Home: {tsharts.length}</h2>
        </div>
    );
};

export default Home;