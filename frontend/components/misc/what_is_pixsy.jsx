import React from "react";

export default function WhatIsPixsy() {
  return (
    <div id="wip-container-relative">
      <img id="wip-img-top-right" src={window.wipBannerTopRight} />
      <img id="wip-img-bot-right" src={window.wipBannerBottomRight} />
      <img id="wip-img-left" src={window.wipBannerLeft} />
      <div className="wip-grid-container">
        <div className="wip-grid">
          <div className="wip-col" id="wip-top-whole-row">
            <h1>What is Pixsy?</h1>
            <a
              href="https://github.com/will-ku/Pixsy"
              target="_blank"
              style={{ color: "black" }}
            >
              <p>Read our wonderful weird story on Github</p>
            </a>
          </div>
          <div className="wip-col" id="wip-left">
            <h1>A community doing good</h1>
            <p>
              Pixsy is a global online marketplace, where people come together
              to make, sell, buy, and collect unique items. We’re also a
              community pushing for positive change for small businesses,
              people, and the planet. Here are some of the ways we’re making a
              positive impact, together.
            </p>
          </div>
          <div className="wip-col" id="wip-middle">
            <h1>Support independent creators</h1>
            <p>
              There’s no Pixsy warehouse – just millions of people selling the
              things they love. We make the whole process easy, helping you
              connect directly with makers to find something extraordinary.
            </p>
          </div>
          <div className="wip-col" id="wip-right">
            <h1>Peace of mind</h1>
            <p>
              Your privacy is the highest priority of our dedicated team. And if
              you ever need assistance, we are always ready to step in for
              support.
            </p>
          </div>
          <div className="wip-col" id="wip-bottom-whole-row">
            <h2>Have a question? Well, we've got some answers.</h2>
            <button id="help-center-button">
              <a href="mailto: william.ku9192@gmail.com">Go to Help Center</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
