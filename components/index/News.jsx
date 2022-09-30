import React from 'react'
import newsSheet from '../../styles/index/news.module.scss'

export default function News({imageUrl, day, text, Url}) {
    return (
        <div className={newsSheet.item}>
            <img className={newsSheet.img} src={imageUrl}/>
            <div className={newsSheet.itemText}>
                <p className={newsSheet.textDay}>{day}</p><br/>
                <p className={newsSheet.text}>{text}<a href='/' className={newsSheet.textUrl}>{Url}</a></p>
            </div>
        </div>
    );
}