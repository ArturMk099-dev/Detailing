import React from 'react';
import {useTranslation} from "react-i18next";
import { useAnimate } from '../hooks/useAnimate';
function ContactM(props) {
    const { t} = useTranslation("common");
    useAnimate();
    return (
        <div>
            <section id="contact">
                <div className="row justify-between">
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("contact-title.title")}</span></div>
                            <div className="contact-txt anim-bottom delay-1">{t("contact-text.text")}</div>
                            <div className="cont-info anim-bottom delay-2">
                                <div className="addres-title cont-title">{t("contact-info.address")}</div>
                                <div className="addres font-20">500 Terry Francine St <br/> San Francisco, CA 94158</div>
                                <div className="tel-email flex align-center">
                                    <div className="telephone">
                                        <div className="tel-title cont-title">{t("contact-info.telephone")}</div>
                                        <div className="tel font-20">123-456-7890</div>
                                    </div>
                                    <div className="email">
                                        <div className="email-title cont-title">{t("contact-info.email")}</div>
                                        <div className="email font-20">info@mysite.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col w-50">
                        <div className="wrapper">
                            <form>
                                <div className="full-name form-gap flex align-center">
                                    <div className="first w-100">
                                        <div className="f-name">{t("form-info.f-name")}</div>
                                        <input type="text" className="w-100"/>
                                    </div>
                                    <div className="last w-100">
                                        <div className="l-name">{t("form-info.l-name")}</div>
                                        <input type="text" className="w-100"/>
                                    </div>
                                </div>
                                <div className="em-phone form-gap flex align-center">
                                    <div className="cont-em w-100">
                                        <div className="em-title">{t("form-info.email")}</div>
                                        <input type="email" className="w-100" />
                                    </div>
                                    <div className="cont-phone w-100">
                                        <div className="ph-title">{t("form-info.phone")}</div>
                                        <input type="number" className="w-100" />
                                    </div>
                                </div>
                                <div className="model-service form-gap flex align-center">
                                    <div className="model-car w-100">
                                        <div className="model">{t("form-info.model")}</div>
                                        <input type="text" className="w-100" />
                                    </div>
                                    <div className="cont-serv w-100">
                                        <div className="serv-title">{t("form-info.desired")}</div>
                                        <input type="text" className="w-100" />
                                    </div>
                                </div>
                                <div className="textarea w-100">
                                    <div className="textarea-title">{t("form-info.message")}</div>
                                    <textarea className="w-100"></textarea>
                                </div>
                                <div className="cont-btn w-100 text-center">
                                    <button type="submit" className="form-btn w-100">{t("form-info.submit")}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactM;