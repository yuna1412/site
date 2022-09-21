import React from 'react'
import footerSheet from '../styles/footer.module.scss'

export default function Footer() {
    return (
        <>
            <div className={footerSheet.container}>
                <a href='/' className={footerSheet.arrow}/>
            </div>
        </>
    );
}