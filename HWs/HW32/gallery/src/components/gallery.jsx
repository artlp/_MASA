import React from 'react';
import Image from './Image';

export default function gallery(props) {
    return (
        <div className="container">
            {props.pics.map((e) => {
                return <Image url={e.url} key={e.id} />;
            }
            )}
        </div>
    );
}
