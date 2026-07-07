import React from 'react';
import {Link} from "react-router-dom";
function Footer(props) {
    return (
        <div>
          <section id="footer">
              <div className="row justify-between ">
                  <div className="col">
                      <div className="wrapper">
                          <div className="title-2"><Link to={'/'}>Solstice Detailing</Link></div>
                      </div>
                  </div>
                  <div className="col w-40 foot-infocol">
                      <div className="wrapper">
                          <div className="foot-addres"><a>500 Terry Francine St, <br/> San Francisco, CA 94158</a></div>
                          <div className="foot-tel"><a>123-456-7890</a></div>
                          <div className="foot-email"><a>info@mysite.com</a></div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="wrapper foot-iconwrap flex align-center foot-icongap">
                          <div className="foot-facebook icon-foot"><a><i className="fa-brands fa-facebook-f"></i></a></div>
                          <div className="foot-instagram icon-foot"><a><i className="fa-brands fa-instagram"></i></a></div>
                          <div className="foot-youtube icon-foot"><a><i className="fa-brands fa-youtube"></i></a></div>
                      </div>
                  </div>
              </div>
          </section>
        </div>
    );
}

export default Footer;