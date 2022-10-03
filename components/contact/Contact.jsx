import React from 'react'
import contactSheet from '../../styles/contact/contact.module.scss'
import Explanation from './Explanation';
import Forms from './Forms';

export default function Contact() {
    return (
        <div className={contactSheet.container}>
            <h2 className={contactSheet.title}>Contact</h2>
            <div className={contactSheet.overview}>
                <Explanation/>
                <Forms/>
            </div>
        </div>
    );
}