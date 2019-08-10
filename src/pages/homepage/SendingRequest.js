import React from 'react';
import SendingGear from '../../images/gif/loading-gear.gif'


const Requesting = ()=>{
    return (
        <div className="request" style={{textAlign: 'center'} }>
            <img src={SendingGear} alt="Mobbid Sending request" style={ { maxWidth: '40%'} } />
            <p className="request__par">
                Sending request, pls wait...
            </p>
        </div>
    )
}

export default Requesting;