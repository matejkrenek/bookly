import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

export const Dropdown = () => {

    return (
        <>
            <ul className="dropdownMenu" >
                <div className="container"  >
                    <li><Link>Fantasy</Link></li>
                    <li><Link>Advanture</Link></li>
                    <li><Link>Romance</Link></li>
                    <li><Link>Dystopia</Link></li>
                    <li><Link>Mystery</Link></li>
                    <li><Link>Horror</Link></li>
                </div>
            </ul>
        </>
    )
}
