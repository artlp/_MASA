import React from 'react';

export default function Image(props) {
    console.log(props.url);
    return (
        <img src={`${props.url}`} alt='' />
    );
}
