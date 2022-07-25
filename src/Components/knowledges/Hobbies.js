import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-earth'></i>
                    <span>Road Trip en 2017 sur la côte Ouest des États-Unis (San Francisco, <br/>Los Angeles, Las Vegas...).</span>
                </li>
                <li>
                    <i className='fas fa-earth-americas'></i>
                    <span>Mexique 2018 Région du Yucatán (Visite des temples Mayas).</span>
                </li>
                <li>
                    <i className='fas fa-users'></i>
                    <span>Bénévole au sein de l'association l'Escale Solidaire (Epicerie Sociale).</span>
                </li>
                <li>
                    <i className='fas fa-person-swimming'></i>
                    <span>Natation</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;