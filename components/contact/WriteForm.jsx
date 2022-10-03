import React from 'react'
import formSheet from '../../styles/contact/form.module.scss'


export default function WriteForm({writeTitle, writeText}) {
    return (
            <div className={formSheet.item}>
                <div className={formSheet.itemTitle}>{writeTitle}
                    <span className={formSheet.redCircle}/>
                </div>
                <p className={formSheet.question}>{writeText}</p>
                <textarea className={formSheet.answerArea}/>
            </div>
    );
}