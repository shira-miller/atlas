import React, { useRef } from 'react';

export default function PixaInput({ doApi, defaultValue }) {
    const inputRef = useRef();

    const onSearchClick = () => {
        doApi(inputRef.current.value);
    };

    return (
        <div className='bg-warning p-2'>
            <div className='col-md-6 d-flex'>
                <input
                    onKeyDown={(e) => { if (e.key === "Enter") doApi(inputRef.current.value) }}
                    ref={inputRef}
                    defaultValue={defaultValue}
                    placeholder='Search category...'
                    type="text"
                    className='form-control'
                />
                <button onClick={onSearchClick} className='btn btn-info'>Search</button>
            </div>
        </div>
    );
}
