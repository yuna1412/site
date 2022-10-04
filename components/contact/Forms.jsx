import React from 'react'
import formSheet from '../../styles/contact/form.module.scss'
import Form from './Form';
import SelectForm from './SelectForm';
import WriteForm from './WriteForm';


export default function Forms() {
    return (
            <div className={formSheet.request}>
                <Form
                    title={"Your Name"}
                    example={"姓 名"}
                    isShow={true}
                />
                
                <Form
                    title={"Company Name"}
                    example={"株式会社broom"}
                />
                <Form
                    title={"Email Address"}
                    example={"contact@broom.com"}
                    isShow={true}
                />
                <Form
                    title={"Phone Number"}
                    example={"000-0000-0000"}
                    
                />
                <SelectForm
                    selectTitle={"How did you know broom inc. ?  "}
                    selectTexts= {[
                        "broom inc.が携わった商品やサービス" ,
                        "他媒体（雑誌・WEBなど）" ,
                        "イベント（アワードや展示会など）" ,
                        "SNS" ,
                        "その他"
                    ]}
                    isShow={true}
                />
                <SelectForm
                    selectTitle={"Inquiry Summary"}
                    selectTexts= {[
                        "プロジェクトのご依頼・ご相談" ,
                        "取材・講演",
                        "その他"
                    ]}
                    isShow={true}
                />
                <WriteForm
                    writeTitle={"Inquiry Details"}
                    writeText={"プロジェクトのご依頼・ご相談の場合、コミュニケーションをスムーズにするために次の点についてご教示ください。 (1)プロジェクトの概要 (2)時期と期間 (3)おおよそのご予算 (4)貴社のプロジェクト体制 (5)broom inc.に期待すること"}
                    isShow={true}
                />

                <div className={formSheet.consent}>
                    <input className={formSheet.consentCheck} type="checkbox"/>
                    <p className={formSheet.consentText}><a href="/" className={formSheet.Url}>プライバシーポリシー</a>に同意します</p>
                </div>

                <div className={formSheet.click}>
                    <a href='#' className={formSheet.button}>Send</a>
                </div>

                <div className={formSheet.reCAPTCHA}>
                    <p className={formSheet.reCAPTCHAText}>This site is protected by reCAPTCHA and the Google</p>
                    <p className={formSheet.reCAPTCHAText}><a href="/" className={formSheet.reCAPTCHAUrl}>Privacy Policy</a> and <a href="/" className={formSheet.reCAPTCHAUrl}>Terms of Service</a> apply.</p>
                </div>
            </div>
    );
}