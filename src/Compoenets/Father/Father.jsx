import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sisther from '../Sisther/Sisther';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Sisther></Sisther>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;