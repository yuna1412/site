import React from 'react'
import formSheet from '../../styles/contact/form.module.scss'


export default function WriteForm({writeTitle, writeText, isShow}) {
    return (
            <div className={formSheet.item}>
                <div className={formSheet.itemTitle}>{writeTitle}
                    {isShow && <span className={formSheet.redCircle}/>}
                </div>
                <p className={formSheet.question}>{writeText}</p>
                <textarea className={formSheet.answerArea}/>
            </div>
    );
}