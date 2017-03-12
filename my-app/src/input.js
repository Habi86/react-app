import React from 'react';

export default function Input({onChange, value}) {
    return <input type="text" value={value} onChange={onChange}/>
}
