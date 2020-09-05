import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import Frame from "assets/images/img-hero-frame.jpg";
import IconTravel from "assets/images/icons/ic-traveler.svg";
import IconTreasure from "assets/images/icons/ic-treasure.svg";
import IconCities from "assets/images/icons/ic-cities.svg";

import Button from "elements/Button/index";
import formatNumber from "utils/numberFormat";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 500 }}>
          <h1 className="line-height-1 mb-4 font-weight-bold">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p
            className="font-weight-light text-gray-500 mb-4 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5 mt-2"
            style={{ marginBottom: 80 }}
            isPrimary
            hasShadow
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="32"
                height="32"
                src={IconTravel}
                alt={`${props.data.travelers} travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="32"
                height="32"
                src={IconTreasure}
                alt={`${props.data.treasures} treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="32"
                height="32"
                src={IconCities}
                alt={`${props.data.cities} cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="Hero"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={Frame}
              alt="Hero Frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
