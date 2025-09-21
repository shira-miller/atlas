import React, { useState, useEffect } from 'react'
import axios from "axios";

function Vip() {
    const [info, SetInfo] = useState([]);
    useEffect(() => {
        doApi('israel');
    }, [])
    const doApi = async () => {
        SetInfo([])
        let url = "https://expressrichpepole.onrender.com/";
        try {
            let resp = await axios.get(url)
            console.log(resp.data);
            SetInfo(resp.data)

        }
        catch (err) {
            console.log(err);
            alert("There problem, come back latter");
        }
    };
        return (
        <div className="container">
            <h2 className="mt-3 text-center">Vip App</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {info.length > 0 ? info.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <img
                                src={item.image || 'https://via.placeholder.com/300'}
                                className="card-img-top"
                                alt={item.name || 'Vip Image'}
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.name || 'No Name'}</h5>
                                <p className="card-text">{item.description || 'No Description'}</p>
                                <div className="mt-auto"></div>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="d-flex justify-content-center mt-5 w-100">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

}

export default Vip
// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// function Vip() {
//     const [info, setInfo] = useState([]);

//     useEffect(() => {
//         doApi();
//     }, []);

//     const doApi = async () => {
//         setInfo([]);
//         let url = "https://expressrichpepole.onrender.com/";
//         try {
//             let resp = await axios.get(url);
//             console.log(resp.data);
//             if (Array.isArray(resp.data)) {
//                 setInfo(resp.data);
//             } else {
//                 setInfo([]);
//             }
//         } catch (err) {
//             console.log(err);
//             alert("There is a problem, come back later");
//         }
//     };

//     return (
//         <div className='container'>
//             <h2 className="mt-3">Vip App</h2>
//             <div className="row mt-3">
//                 {info.length > 0 ? info.map((item, index) => (
//                     <div key={index} className="col-md-4 mb-3">
//                         <div className="card">
//                             <img
//                                 src={item.image || 'https://via.placeholder.com/300'}
//                                 className="card-img-top"
//                                 alt={item.name || 'Vip Image'}
//                             />
//                             <div className="card-body">
//                                 <h5 className="card-title">{item.name || 'No Name'}</h5>
//                                 <p className="card-text">{item.description || 'No Description'}</p>
//                             </div>
//                         </div>
//                     </div>
//                 )) : (
//                     <div className="d-flex justify-content-center mt-5">
//                         <div className="spinner-border text-primary" role="status">
//                             <span className="sr-only"></span>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Vip;
