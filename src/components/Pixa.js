// import React, { useEffect, useState } from 'react';
// import PixaInfo from './PixaInfo';
// import PixaInput from './PixaInput';
// import axios from 'axios';

// function Pixa() {
//     const [images, setImages] = useState([]);
//     const [category, setCategory] = useState('cats'); // ברירת מחדל cats

//     useEffect(() => {
//         doApi(category);
//     }, []);

//     const doApi = async (_category) => {
//         setImages([]);
//         setCategory(_category);

//         if (!process.env.REACT_APP_API_KEY_PIXABAY) {
//             alert("API Key not found!");
//             return;
//         }
//         let url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_PIXABAY}&q=${_category}&image_type=photo&per_page=10`;
//         try {
//             let resp = await axios.get(url);
//             console.log(resp.data.hits);
//             setImages(resp.data.hits);
//         } catch (err) {
//             console.log(err);
//             alert("There is a problem, come back later");
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-3">Pixabay Image Viewer</h2>
//             <PixaInput doApi={doApi} defaultValue={category} />
//             <div className="row mt-3">
//                 {images.length ? images.map((item) => (
//                     <div key={item.id} className="col-md-4 mb-3">
//                         <PixaInfo item={item} />
//                     </div>
//                 )) : (
//                     <div className="spinner-border text-primary" role="status">
//                         <span className="sr-only"></span>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Pixa;
import React, { useEffect, useState } from "react";
import PixaInfo from "./PixaInfo";
import PixaInput from "./PixaInput";
import { getImagesByCategory } from "../services/pixaService";

function Pixa() {
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState("cats"); // ברירת מחדל cats

    useEffect(() => {
        doApi(category);
    }, []);

    const doApi = async (_category) => {
        setImages([]);
        setCategory(_category);
        try {
            const data = await getImagesByCategory(_category);
            console.log(data);
            setImages(data);
        } catch (err) {
            console.log(err);
            alert("There is a problem, come back later");
        }
    };

    return (
        <div className="container">
            <h2 className="mt-3">Pixabay Image Viewer</h2>
            <PixaInput doApi={doApi} defaultValue={category} />
            <div className="row mt-3">
                {images.length ? (
                    images.map((item) => (
                        <div key={item.id} className="col-md-4 mb-3">
                            <PixaInfo item={item} />
                        </div>
                    ))
                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pixa;
