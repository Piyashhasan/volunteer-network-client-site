import React from 'react';
import Items from '../Items/Items';
import './Home.css';
import volunteerWork from '../../fakeData/volunteerWorkData'


const Home = () => {
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