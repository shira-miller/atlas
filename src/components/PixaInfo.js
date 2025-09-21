import React from 'react';

function PixaInfo({ item }) {
    return (
        <div className="card">
            <img src={item.webformatURL} className="card-img-top" alt={item.tags} />
            <div className="card-body">
                <p className="card-text">{item.tags}</p>
            </div>
        </div>
    );
}

export default PixaInfo;
