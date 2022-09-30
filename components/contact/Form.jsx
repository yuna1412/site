import React from 'react'
import formSheet from '../../styles/contact/form.module.scss'

export default function Form() {
    return (
            <div className={formSheet.request}>
                <div className={formSheet.item}>
                    <label>Your Name</label>
                    <span className={formSheet.redCircle}/>
                    <input className={formSheet.answer} placeholder="姓 名"/>
                </div>
                <div className={formSheet.item}>
                    <label>Company Name</label>
                    <input className={formSheet.answer} placeholder="株式会社broom"/>
                </div>
                <div className={formSheet.item}>
                    <label>Email Address</label>
                    <span className={formSheet.redCircle}/>
                    <input className={formSheet.answer} placeholder="contact@broom.com"/>
                </div>
                <div className={formSheet.item}>
                    <label>Phone Number</label>
                    <input className={formSheet.answer} placeholder="000-0000-0000"></input>
                </div>
                <div className={formSheet.item}>
                    <label>How did you know broom inc. ?</label>
                    <span className={formSheet.redCircle}/>
                    <select className={formSheet.answerSelect} size="1">
                        <option>選択してください</option>
                        <option>broom inc.が携わった商品やサービス</option>
                        <option>他媒体（雑誌・WEBなど）</option>
                        <option>イベント（アワードや展示会など）</option>
                        <option>SNS</option>
                        <option>その他</option>
                    </select>
                </div>
                <div className={formSheet.item}>
                    <label>Inquiry Summary</label>
                    <span className={formSheet.redCircle}/>
                    <select className={formSheet.answerSelect} size="1">
                        <option>選択してください</option>
                        <option>プロジェクトのご依頼・ご相談</option>
                        <option>取材・講演</option>
                        <option>その他</option>                        
                    </select>
                </div>
                <div className={formSheet.item}>
                    <label>Inquiry Details</label>
                    <span className={formSheet.redCircle}/>
                    <p className={formSheet.question}>プロジェクトのご依頼・ご相談の場合、コミュニケーションをスムーズにするために次の点についてご教示ください。 (1)プロジェクトの概要 (2)時期と期間 (3)おおよそのご予算 (4)貴社のプロジェクト体制 (5)broom inc.に期待すること</p>
                    <textarea className={formSheet.answerArea}/>
                </div>

                <div className={formSheet.consent}>    
                    <input className={formSheet.consentCheck} type="checkbox"/>
                    <p className={formSheet.consentText}><a href="/" className={formSheet.Url}>プライバシーポリシー</a>に同意します</p>
                </div>

                <div className={formSheet.item}>
                    <a href='#' className={formSheet.button}>Send</a>
                </div>

                <div className={formSheet.reCAPTCHA}>
                    <p className={formSheet.reCAPTCHAText}>This site is protected by reCAPTCHA and the Google</p>
                    <p className={formSheet.reCAPTCHAText}><a href="/" className={formSheet.reCAPTCHAUrl}>Privacy Policy</a> and <a href="/" className={formSheet.reCAPTCHAUrl}>Terms of Service</a> apply.</p>
                </div>
            </div>
    );
}