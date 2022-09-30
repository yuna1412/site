import React from 'react'
import contactSheet from '../../styles/contact/contact.module.scss'
import Explanation from './Explanation';
import Form from './Form';

export default function Contact() {
    return (
        <div className={contactSheet.container}>
            <h2 className={contactSheet.title}>Contact</h2>
            <div className={contactSheet.overview}>
                <Explanation/>
                <Form/>
            </div>
        </div>
    );
}