import React from 'react'
import formSheet from '../../styles/contact/form.module.scss'

export default function SelectForm({selectTitle, selectTexts, isShow}) {
    return (
        <>
            <div className={formSheet.item}>
                <div className={formSheet.itemTitle}>{selectTitle}
                    <span className={formSheet.redCircle}/>
                </div>
                <select className={formSheet.answerSelect} size="1">
                    <option>{"選択してください"}</option>
                    {selectTexts.map((text) => {
                        return (
                            <option>{text}</option>
                        );
                    })}
                </select>
            </div>
        </>
    );
}