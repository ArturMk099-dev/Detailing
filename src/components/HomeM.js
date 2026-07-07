import React from 'react';
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAnimate } from '../hooks/useAnimate';

function HomeM() {
    const { t } = useTranslation("common");
    useAnimate();

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        centerPadding: "300px",
        responsive: [{ breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "50px" } }]
    };

    return (
        <div>
            <section id="hero">
                <div className="row justify-between align-center hero-row">
                    <div className="col w-20">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("hero-title.title")}</span></div>
                        </div>
                    </div>
                    <div className="col w-20">
                        <div className="wrapper">
                            <div className="hero-txt anim-bottom">{t("hero-txt.title")}</div>
                            <div className="hero-btn anim-bottom delay-1"><button className='black-btn'>{t("hero-btn.title")}</button></div>
                        </div>
                    </div>
                </div>
                <div className="overlay-tel flex justify-between align-center">
                    <div className="overtel-icon"><i className="fa-solid fa-phone"></i></div>
                    <div className="over-teltxt">123-456-7890</div>
                </div>
            </section>

            <section id="detal">
                <div className="row justify-between">
                    <div className="col">
                        <div className="wrapper tesla-wrap">
                            <div className="tesla-img anim-bottom"><img src="https://static.wixstatic.com/media/c837a6_666892aefb0f4f48abe9796359bf87b5~mv2.jpg/v1/fill/w_520,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%209%20images%20from%20style%20reference_Copy%20of%209%20images%20from%20style%20reference_2026-04-20_10-.jpg" alt=""/></div>
                            <div className="tesla-img2 anim-bottom delay-2"><img src="https://static.wixstatic.com/media/c837a6_719fe0cf0ca34683b0227b25f37be5d6~mv2.jpg/v1/fill/w_156,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%209%20images%20from%20style%20reference_Copy%20of%209%20images%20from%20style%20reference_2026-04-20_09-.jpg" alt=""/></div>
                        </div>
                    </div>
                    <div className="col w-40">
                        <div className="wrapper detal-wrap">
                            <div className="title-2 anim-flip"><span>{t("detal-title.title")}</span></div>
                            <div className="tesla-txt anim-bottom delay-1">{t("tesla-txt.title")}</div>
                            <div className="tesla-btn anim-bottom delay-2"><button className='black-btn'>{t("tesla-btn.title")}</button></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="meet">
                <div className="row justify-between align-center">
                    <div className="col w-50">
                        <div className="wrapper">
                            <div className="porsche-img anim-bottom"><img src="https://static.wixstatic.com/media/c837a6_fac22e188b4740bd937ebea91cad7d8ff000.jpg/v1/fill/w_950,h_900,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_fac22e188b4740bd937ebea91cad7d8ff000.jpg" alt=""/></div>
                        </div>
                    </div>
                    <div className="col w-50">
                        <div className="wrapper porsche-wrap">
                            <div className="title-1 anim-flip"><span>{t("porsche-title.title")}</span></div>
                            <div className="porsche-txt anim-bottom delay-1">{t("porsche-txt.title")}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="slide">
                <div className="row justify-between align-center">
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("slide-title.title")}</span></div>
                        </div>
                    </div>
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="slider-txt anim-bottom delay-1">{t("slide-txt.title")}</div>
                        </div>
                    </div>
                </div>
                <div className="row slide-row">
                    <div style={{ width: "100%" }}>
                        <Slider {...settings}>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_e317fc2867d1406c88150c54ece5d7f9~mv2.jpg/v1/fill/w_1000,h_636,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_e317fc2867d1406c88150c54ece5d7f9~mv2.jpg" alt=""/></div>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_a4a41f8d13ad4c448bbce95766458cbc~mv2.jpg/v1/fill/w_1000,h_1339,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_a4a41f8d13ad4c448bbce95766458cbc~mv2.jpg" alt=""/></div>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_45251e578d4c4d5b81c8152827add3c8~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_45251e578d4c4d5b81c8152827add3c8~mv2.jpg" alt=""/></div>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_0057286462c747d3ab01b4379f79a891~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_0057286462c747d3ab01b4379f79a891~mv2.jpg" alt=""/></div>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_699616fd60fb4095b474c50270d314f6~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_699616fd60fb4095b474c50270d314f6~mv2.jpg" alt=""/></div>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_13c2b8bbb2804c8d87bc606fe8d8ed0e~mv2.jpg/v1/fill/w_1000,h_1341,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_13c2b8bbb2804c8d87bc606fe8d8ed0e~mv2.jpg" alt=""/></div>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_6be20dccc0c146989b46a8d2c7cc64f9~mv2.jpg/v1/fill/w_1000,h_1339,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_6be20dccc0c146989b46a8d2c7cc64f9~mv2.jpg" alt=""/></div>
                            <div className="slide-img"><img src="https://static.wixstatic.com/media/c837a6_0144aa424ed54db5a4e894418b9144cf~mv2.jpg/v1/fill/w_1000,h_700,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_0144aa424ed54db5a4e894418b9144cf~mv2.jpg" alt=""/></div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section id="endorsed">
                <div className="row">
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("endor-title.title")}</span></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-between align-center endro-row">
                    <div className="col w-30">
                        <div className="wrapper endor-wrap anim-bottom delay-1">
                            <div className="endor-txt">"{t("endor-txt.text1")}"</div>
                            <div className="endor-name">{t("endor-name.name1")}</div>
                        </div>
                    </div>
                    <div className="col w-30">
                        <div className="wrapper endor-wrap anim-bottom delay-2">
                            <div className="endor-txt">"{t("endor-txt.text2")}"</div>
                            <div className="endor-name">{t("endor-name.name2")}</div>
                        </div>
                    </div>
                    <div className="col w-30">
                        <div className="wrapper endor-wrap anim-bottom delay-3">
                            <div className="endor-txt">"{t("endor-txt.text3")}"</div>
                            <div className="endor-name">{t("endor-name.name3")}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeM;