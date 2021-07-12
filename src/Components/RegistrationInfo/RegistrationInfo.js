import React, { useEffect, useState } from 'react';
import './Reginfo.css'

const RegistrationInfo = () => {
    const [regInfo, setRegInfo] = useState([])
    useEffect(() => {
        fetch('https://pacific-tundra-19394.herokuapp.com/registerInfo')
        .then(res => res.json())
        .then(data => setRegInfo(data))
    }, [])
    return (
        <div className="RegInfo">
            <h3>Task Name:</h3>
            <h4>Date</h4>
        </div>
    );
};

export default RegistrationInfo;