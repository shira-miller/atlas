import React, { useEffect, useState } from 'react';
import PixaInfo from './PixaInfo';
import PixaInput from './PixaInput';
import axios from "axios";

function Pixa() {
    const [infoItem, SetInfoItem] = useState([]);
    useEffect(() => {
        doApi('israel');
    }, [])
    const doApi = async (_picType) => {
        SetInfoItem([])
        let url = "https://pixabay.com/api/" + _picType;
        try {
            let resp = await axios.get(url)
            console.log(resp.data);
            SetInfoItem(resp.data[0])
        }
        catch (err) {
            console.log(err);
            alert("There problem, come back latter");
        }
    };
    return (
        <div>
            <PixaInput doApi={doApi} />
            {infoItem.forEach((item) => {
                <PixaInfo item={item} />
            })}
        </div>
    )
}

export default Pixa
