import { useEffect } from 'react';
import Me from '../assets/me.jpg';

import 'boxicons';

export default function About(){
  useEffect(() => {
    document.title = "About";
  }, []);
    return (
      <section className="d-flex justify-content-center align-items-center px-5 py-3 mt-3">
        <div className="shadow" id="layer1">
          <div className="shadow" id="layer2">
            <div className="shadow" id="layer3">
              <div className="shadow" id="layer4">
                <div>
                  <img src={Me} alt="image" />
                </div>
                <div>
                  <h3 className="text-light">Anthony Saah</h3>
                  <p className="lead text-muted">Web Developer</p>
                </div>
                <div id="social-icons">
                  <div className="text-center">
                    <a href="https://snapchat.com/thepapisogram"><box-icon
                      type="logo"
                      size="md"
                      color="#ffc107"
                      name="snapchat"
                    ></box-icon></a>
                  </div>
                  <div className="text-center">
                    <a href="https://twitter.com/thepapisogram"><box-icon
                      type="logo"
                      size="md"
                      color="#007bff"
                      name="twitter"
                    ></box-icon></a>
                  </div>
                  <div className="text-center">
                    <a href="https://instagram.com/thepapisogram"><box-icon
                      type="logo"
                      size="md"
                      color="#dc3445"
                      name="instagram"
                    ></box-icon></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}