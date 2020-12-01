import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'
import { motion } from 'framer-motion'

export const Dropdown = () => {

    return (
        <>
            <motion.ul className="dropdownMenu" animate={{height: 300}} transition={{duration: 2}} >
                <motion.div className="container"  >
                    <li><Link>Fantasy</Link></li>
                    <li><Link>Advanture</Link></li>
                    <li><Link>Romance</Link></li>
                    <li><Link>Dystopia</Link></li>
                    <li><Link>Mystery</Link></li>
                    <li><Link>Horror</Link></li>
                </motion.div>
            </motion.ul>
        </>
    )
}
