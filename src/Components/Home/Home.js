import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import Register from '../Register/Register';
import './Home.css';

const Home = () => {
    const [volunteerWork, setVolunteerWork] = useState([]);
    console.log(volunteerWork);
    useEffect(() => {
        fetch('https://pacific-tundra-19394.herokuapp.com/workDetails')
        .then(res => res.json())
        .then(data => setVolunteerWork(data))
    },[])
    return (
        <div className="container Home">
            <h3 className="heading text-center mb-5">I GROW BY HELPING PEOPLE IN NEED</h3>
            <div className="">
                <div className="input-group mb-3 input-area">
                    <input type="text" className="input form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
            <div className="row container">
                {
                    volunteerWork.map(work => <Items work={work}></Items>)
                }
            </div>
            
        </div>
    );
};

export default Home;