import React from 'react'
import formSheet from '../../styles/contact/form.module.scss'

export default function Form({title, example, isShow}) {
    return (
            <div className={formSheet.item}>
                <div className={formSheet.itemTitle}>{title}
                    {isShow && <span className={formSheet.redCircle}/>}
                </div>
                <input className={formSheet.answer} placeholder={example}/>
            </div>
    );
}