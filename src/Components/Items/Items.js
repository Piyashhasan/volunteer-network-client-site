import React from 'react'
import { Link } from 'react-router-dom';
import './Items.css'

const Items = (props) => {
    const {name, pic, id} = props.work;
    return (
            <div className="col-md-3 Items mt-5 text-center">
                <Link to={"/work/"+ id}><img src={pic} alt=""/></Link>
                <h6 className="heading-name">{name}</h6>
            </div>
    );
};

export default Items;