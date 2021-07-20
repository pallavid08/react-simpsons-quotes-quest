import React from 'react';

function DisplayQuote({info}) {
    return (
        <div>
            
            <h3>{info.character}</h3>
            <img src={info.image} alt=""/> 
            <p>{info.quote}</p>
    
        </div>
    )
        
}

export default DisplayQuote;