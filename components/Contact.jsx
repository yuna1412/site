import React from 'react'
import contactSheet from '../styles/contact.module.scss'

export default function Contact() {
    return (
        <div className={contactSheet.container}>
            <h2 className={contactSheet.title}>Contact</h2>
            <div className={contactSheet.overview}>
                <div className={contactSheet.explanation}>
                    <div className={contactSheet.guidance}>
                        <p className={contactSheet.textTitle}>Work with us</p>
                        <p className={contactSheet.text}>プロジェクトのご依頼やご相談等、常に歓迎しています。実績にないジャンルのご相談も大歓迎です。まずは、フォームまたは hello (at) broom-studio (dot) com からご連絡ください。担当者からご返信を差し上げます。</p>
                    </div>
                    <div className={contactSheet.guidance}>
                        <p className={contactSheet.textTitle}>Studio address</p>
                        <p className={contactSheet.text}>〒107-0062 東京都港区南青山 2-2-6 ラセーナ南青山#303 <br/>( 東京メトロ 銀座線/半蔵門線 青山一丁目駅 徒歩１分 )</p>
                        <a href='/' className={contactSheet.Url}>
                            <img className={contactSheet.UrlImg} src="/image/arrow-2.svg"/>
                            <span className={contactSheet.UrlText}>Google Map</span>
                        </a>                
                    </div>
                </div>

                <div className={contactSheet.request}>
                    <div className={contactSheet.item}>
                        <p className={contactSheet.question}>Your Name</p>
                        <textarea className={contactSheet.answer}/>
                    </div>
                    <div className={contactSheet.item}>
                        <p className={contactSheet.question}>Company Name</p>
                        <textarea className={contactSheet.answer} />
                    </div>
                    <div className={contactSheet.item}>
                        <p className={contactSheet.question}>Email Address</p>
                        <textarea className={contactSheet.answer}/>
                    </div>
                    <div className={contactSheet.item}>
                        <p className={contactSheet.question}>Phone Number</p>
                        <textarea className={contactSheet.answer}/>
                    </div>
                    <div className={contactSheet.item}>
                        <p className={contactSheet.question}>How did you know broom inc.?</p>
                            <select className={contactSheet.answer} size="1">
                                <option>選択してください</option>
                                <option>broom inc.が携わった商品やサービス</option>
                                <option>他媒体（雑誌・WEBなど）</option>
                                <option>イベント（アワードや展示会など）</option>
                                <option>SNS</option>
                                <option>その他</option>
                            </select>
                    </div>
                    <div className={contactSheet.item}>
                        <p className={contactSheet.question}>Inquiry Summary</p>
                            <select className={contactSheet.answer} size="1">
                                <option>選択してください</option>
                                <option>プロジェクトのご依頼・ご相談</option>
                                <option>取材・講演</option>
                                <option>その他</option>
                            </select>
                    </div>
                    <div className={contactSheet.item}>
                        <p className={contactSheet.question}>Inquiry Details</p>
                        <p className={contactSheet.question}>プロジェクトのご依頼・ご相談の場合、コミュニケーションをスムーズにするために次の点についてご教示ください。 (1)プロジェクトの概要 (2)時期と期間 (3)おおよそのご予算 (4)貴社のプロジェクト体制 (5)broom inc.に期待すること</p>
                        <textarea className={contactSheet.areaSize}/><br/>
                    </div>
                    <div className={contactSheet.consent}>    
                        <input type="radio"/>
                        <p className={contactSheet.consentText}><a href="/" className={contactSheet.Url}>プライバシーポリシー</a>に同意します</p>
                    </div>

                    <a href='#' className={contactSheet.button}>Send</a>

                    <p className={contactSheet.end}>This site is protected by reCAPTCHA and the Google</p>
                    <p className={contactSheet.end}>Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    );
}