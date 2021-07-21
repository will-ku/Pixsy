import React from "react";

export default function SplashFooter() {
  return (
    <div className="footer-container">
      <div className="footer-subscribe"></div>
      <div className="footer-links"></div>
      <div className="footer-bottom-container">
        <div className="footer-bottom">
          <div className="footer-bottom-currency">
            <p>
              <img
                style={{
                  height: "12px",
                  weight: "12px",
                  borderRadius: "50%",
                  paddingRight: "5px",
                }}
                src="https://pixsy-dev.s3.us-east-2.amazonaws.com/misc-icons-and-images/Screen+Shot+2021-07-20+at+10.42.29+PM.png"
              ></img>
              United States | English(US) | $(USD)
            </p>
          </div>
          <ul className="footer-bottom-terms">
            <li style={{ textDecoration: "none", cursor: "default" }}>
              © 2021 Pixsy, Inc.
            </li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Internet-based ads</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
