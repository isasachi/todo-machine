import React from 'react';
import './TodoIcon.css';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

const iconTypes = {
    "check": color => (
        <CheckSVG className="icon-svg icon-svg--check" fill={color} />
    ),
    
    "delete": color => (
        <DeleteSVG className="icon-svg icon-svg--delete" fill={color} />
    )
};

function TodoIcon({ type, color='gray', onClick }) {
    return (
        <span
            className={`icon-container icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
};

export { TodoIcon };