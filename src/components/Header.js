import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
function Header() {
    const { t, i18n } = useTranslation("common");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="App-header">
            <div className="row justify-between align-center">
                <div className="col desktop">
                    <div className="wrapper">
                        <div className="logo"><Link to={"/"}>Solstice Detailing</Link></div>
                    </div>
                </div>
                <div className="col desktop">
                    <div className="wrapper">
                        <div className="menu flex justify-between align-center gap-menu">
                            <div className="menu-txt services"><Link to={"/service"}>{t('service.title')}</Link></div>
                            <div className="menu-txt gallery"><Link to={"/gallery"}>{t('gallery.title')}</Link></div>
                            <div className="menu-txt contact"><Link to={"/contact"}>{t('contact.title')}</Link></div>
                            <div className="language flex justify-between align-center gap">
                                <button onClick={() => i18n.changeLanguage('am')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzAv9e82xGvzlWIOT16j99lzpcoCq1lX2NXeGawtBUQ&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('ru')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFbSYC_SWeLVM5GHKVB45gu1J-IO1lQwIPcWwq-M_iw&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('en')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpgLfJKzteMGy0cA-NSEhYoANF3YqQRb657sX6yKHQw&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('de')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEA4pMVOwyeZCvvXit2HlCRk2SFf8-iLX8r2OfpGdXw&s=10" alt=""/></button>
                            </div>
                            <div className="tel flex justify-between align-center gap">
                                <div className="tel-icon"><i className="fa-solid fa-phone"></i></div>
                                <div className="tel-txt">123-456-7890</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header mobile">
                <div className="mobile-top row justify-between align-center">
                    <div className="logo"><Link to={"/"}>Solstice Detailing</Link></div>
                    <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className={menuOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
                    </button>
                </div>
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-item" onClick={() => setMenuOpen(false)}><Link to={"/service"}>{t('service.title')}</Link></div>
                    <div className="mobile-menu-item" onClick={() => setMenuOpen(false)}><Link to={"/gallery"}>{t('gallery.title')}</Link></div>
                    <div className="mobile-menu-item" onClick={() => setMenuOpen(false)}><Link to={"/contact"}>{t('contact.title')}</Link></div>
                    <div className="mobile-tel">
                        <i className="fa-solid fa-phone"></i> 123-456-7890
                    </div>
                    <div className="language flex align-center gap">
                        <button onClick={() => i18n.changeLanguage('am')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzAv9e82xGvzlWIOT16j99lzpcoCq1lX2NXeGawtBUQ&s=10" alt=""/></button>
                        <button onClick={() => i18n.changeLanguage('ru')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFbSYC_SWeLVM5GHKVB45gu1J-IO1lQwIPcWwq-M_iw&s=10" alt=""/></button>
                        <button onClick={() => i18n.changeLanguage('en')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpgLfJKzteMGy0cA-NSEhYoANF3YqQRb657sX6yKHQw&s=10" alt=""/></button>
                        <button onClick={() => i18n.changeLanguage('de')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEA4pMVOwyeZCvvXit2HlCRk2SFf8-iLX8r2OfpGdXw&s=10" alt=""/></button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;