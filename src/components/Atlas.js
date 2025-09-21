// import React, { useState, useEffect } from 'react'
// import AtlasInfo from "./AtlasInfo";
// import AtlasInput from './AtlasInput';
// import axios from "axios";


// function Atlas() {
//     const [infoItem, SetInfoItem] = useState([]);
//     useEffect(() => {
//         doApi('israel');
//     }, [])
//     const doApi = async (_country) => {
//         SetInfoItem([])
//         let url = "https://restcountries.com/v3.1/name/" + _country;
//         try {
//             let resp = await axios.get(url)
//             console.log(resp.data);
//             SetInfoItem(resp.data[0])

//         }
//         catch (err) {
//             console.log(err);
//             alert("There problem, come back latter");
//         }
//     };
//     const doApiCountryCode = async (_countryCode) => {
//         SetInfoItem([]);
//         let url = "https://restcountries.com/v3.1/alpha/" + _countryCode;
//         try {
//             let response = await axios.get(url);
//             console.log(response.data);
//             SetInfoItem(response.data[0]);
//         } catch (error) {
//             console.log(error);
//             alert("There problem, come back latter");
//         }
//     }
//     return (
//         <div className='container'>
//             <h2>Atlas App</h2>
//             <AtlasInput doApi={doApi} />
//             <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode} />
//         </div>
//     )
// }

// export default Atlas
import React, { useState, useEffect } from "react";
import AtlasInfo from "./AtlasInfo";
import AtlasInput from "./AtlasInput";
import { getCountryByName, getCountryByCode } from "../services/atlasService";

function Atlas() {
  const [infoItem, setInfoItem] = useState([]);

  useEffect(() => {
    doApi("israel");
  }, []);

  const doApi = async (_country) => {
    setInfoItem([]);
    try {
      const data = await getCountryByName(_country);
      console.log(data);
      setInfoItem(data);
    } catch (err) {
      console.log(err);
      alert("There problem, come back latter");
    }
  };

  const doApiCountryCode = async (_countryCode) => {
    setInfoItem([]);
    try {
      const data = await getCountryByCode(_countryCode);
      console.log(data);
      setInfoItem(data);
    } catch (error) {
      console.log(error);
      alert("There problem, come back latter");
    }
  };

  return (
    <div className="container">
      <h2>Atlas App</h2>
      <AtlasInput doApi={doApi} />
      <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode} />
    </div>
  );
}

export default Atlas;
