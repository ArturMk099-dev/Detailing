import React from 'react';
import {useTranslation} from "react-i18next";
import { useAnimate } from '../hooks/useAnimate';
import {Link} from "react-router-dom";
function ServiceM() {
    const {t} = useTranslation("common");
    useAnimate();
    return (
        <div>
            <section id="service">
                <div className="row serv-row justify-between align-center">
                    <div className="col">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("serv-title.title")}</span></div>
                        </div>
                    </div>
                    <div className="col w-20">
                        <div className="wrapper">
                            <div className="our-txt anim-bottom">{t("serv-text.text")}</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-between serv-row">
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="services-img anim-bottom"><img src="https://static.wixstatic.com/media/c837a6_07195586f8b542b6a672fc2443483979~mv2.jpg/v1/fill/w_568,h_568,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_07195586f8b542b6a672fc2443483979~mv2.jpg" alt=""/></div>
                            <div className="title-2 anim-flip"><span>{t("work-title.title1")}</span></div>
                            <div className="services-txt anim-bottom delay-1">{t("work-text.text1")}</div>
                        </div>
                    </div>
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="services-img anim-bottom delay-1"><img src="https://static.wixstatic.com/media/c837a6_7d1340888fc2490e8906c5986be9594e~mv2.jpg/v1/fill/w_568,h_568,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7d1340888fc2490e8906c5986be9594e~mv2.jpg" alt=""/></div>
                            <div className="title-2 anim-flip"><span>{t("work-title.title2")}</span></div>
                            <div className="services-txt anim-bottom delay-1">{t("work-text.text2")}</div>
                        </div>
                    </div>
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="services-img anim-bottom delay-2"><img src="https://static.wixstatic.com/media/c837a6_f675202231824d2192fd951b13e4f51c~mv2.jpg/v1/fill/w_568,h_568,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_f675202231824d2192fd951b13e4f51c~mv2.jpg" alt=""/></div>
                            <div className="title-2 anim-flip"><span>{t("work-title.title3")}</span></div>
                            <div className="services-txt anim-bottom delay-1">{t("work-text.text3")}</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="protect">
                <div className="row">
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("prot-title.title")}</span></div>
                            <div className="prot-txt anim-bottom delay-1">{t("prot-text.text")}</div>
                            <div className="prot-btn anim-bottom delay-2"><Link to={"/contact"}><button className="white-btn">{t("hero-btn.title")}</button></Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceM;