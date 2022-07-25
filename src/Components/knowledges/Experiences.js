import React from 'react';

const Experiences = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>
            <div className='exp-1'>
                <h4>DÉVELOPPEUR WEB PRESTASHOP</h4>
                <h5>Dotsafe / Mars 2022 - Juin 2022</h5>
                <li>
                    <ul>- Création de module prestashop afin de répondre au besoin du client.</ul>
                    <ul>- Amélioration et maintien des sites existant.</ul>
                    <ul>- Apprentissage du langage PHP.</ul> 

                </li>
            </div>
            <div className='exp-2'>
                <h4>STAGE DEVELOPPEUR WEB FULL STACK</h4>
                <h5>Myflowerlife.com / Septembre 2021 - Janvier 2022</h5>
                <li>
                    <ul>- Développement front et back du site PlantetFlower.</ul>
                    <ul>- Amélioration du site www.myflowerlife.com</ul>
                    <ul>Technologies utilisées: React, Node.Js, JavaScript.</ul> 

                </li>
            </div>
            <div className='exp-3'>
                <h4>DEVELOPPEUR WEB JUNIOR FULL STACK</h4>
                <h5>WILD CODE SCHOOL | Mars 2021 - Juillet 2021</h5>
                <li>
                    <ul>- Formation au métier du numérique.</ul>
                    <ul>- Apprentissage des langages orienté Front (React, Node JS, HTML, CSS).</ul>
                    <ul>- Participation à 2 hackathon.</ul> 

                </li>
            </div>
            {/* <div className='exp-4'>
                <h4>TECHNICIEN DE MAINTENANCE AÉRONAUTIQUE ET APRS</h4>
                <h5>Atelier BIGATA | 2018 - 2020</h5>
                <li>
                    <ul>- Procéder à l’entretien et/ou la réparation de matériels aéronautiques. conformément à la documentation de maintenance en vigueur.</ul>
                    <ul>- Attester des travaux effectués à l’aide d’un tampon agrément opérateur.</ul>
                </li>
            </div> */}
        </div>
    );
};

export default Experiences;