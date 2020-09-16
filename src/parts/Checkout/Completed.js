import React from "react";
import Fade from "react-reveal/Fade";

import illustrationComplete from "assets/images/illustration-complete.svg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <img
              src={illustrationComplete}
              alt="complete payments"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later
              <br />
              once the transaction has been accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
