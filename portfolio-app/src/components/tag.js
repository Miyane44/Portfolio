import React from 'react';

import './styles/tag.css';

function Tag(props) {
    return (
        <div className='tag'>
            <span className="tag-title">
                <a className='github-link' href={props.link} target='_blank'>{props.label}</a>
            </span>
        </div>
    );
}

export default Tag;