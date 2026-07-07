import React from 'react';
import {useTranslation} from "react-i18next";
import { useAnimate } from '../hooks/useAnimate';
function GalleryM(props) {
    const { t} = useTranslation("common");
    useAnimate();
    return (
        <div>
            <section id="gallery">
                <div className="row justify-between align-center">
                    <div className="col">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("portfolio-title.title")}</span></div>
                        </div>
                    </div>
                    <div className="col w-30">
                        <div className="wrapper">
                            <div className="portfol-txt anim-bottom delay-1">{t("portfolio-text.text")}</div>
                        </div>
                    </div>
                </div>
                {/* остальные div с картинками — просто добавь anim-bottom */}
                <div className="row gallery-gap flex-wrap justify-between">
                    <div className="col w-45"><div className="wrapper"><div className="port-img anim-bottom"><img src="https://static.wixstatic.com/media/c837a6_b1f88607af684eccb890c85d5f657412~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_b1f88607af684eccb890c85d5f657412~mv2.jpg" alt=""/></div></div></div>
                    <div className="col w-45"><div className="wrapper"><div className="port-img anim-bottom delay-1"><img src="https://static.wixstatic.com/media/c837a6_4b3ca719e6a64faab50ed6420d029029~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_4b3ca719e6a64faab50ed6420d029029~mv2.jpg" alt=""/></div></div></div>
                    <div className="col w-30"><div className="wrapper"><div className="port-img anim-bottom"><img src="https://static.wixstatic.com/media/c837a6_f10ee8980e314be0b926556d11b01993~mv2.jpg/v1/fill/w_1000,h_664,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f10ee8980e314be0b926556d11b01993~mv2.jpg" alt=""/></div></div></div>
                    <div className="col w-40"><div className="wrapper"><div className="port-img anim-bottom delay-1"><img src="https://static.wixstatic.com/media/c837a6_154fc933b72f447cb505a0c8788f7be3~mv2.jpg/v1/fill/w_1000,h_1339,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_154fc933b72f447cb505a0c8788f7be3~mv2.jpg" alt=""/></div></div></div>
                    <div className="col w-20"><div className="wrapper"><div className="port-img anim-bottom delay-2"><img src="https://static.wixstatic.com/media/c837a6_cc591aaf606147a68dab845e09c55b79~mv2.jpg/v1/fill/w_1000,h_1339,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_cc591aaf606147a68dab845e09c55b79~mv2.jpg" alt=""/></div></div></div>
                    <div className="col w-40"><div className="wrapper"><div className="port-img anim-bottom"><img src="https://static.wixstatic.com/media/c837a6_fed62b13f3c94ea9b1788e2e5765245f~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_fed62b13f3c94ea9b1788e2e5765245f~mv2.jpg" alt=""/></div></div></div>
                    <div className="col w-50"><div className="wrapper"><div className="port-img anim-bottom delay-1"><img src="https://static.wixstatic.com/media/c837a6_60aa4d6620074c70a1bb7d89f321896d~mv2.jpg/v1/fill/w_1000,h_1236,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_60aa4d6620074c70a1bb7d89f321896d~mv2.jpg" alt=""/></div></div></div>
                </div>
            </section>
        </div>
    );
}

export default GalleryM;