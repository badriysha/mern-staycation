import React from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
  const {
    value,
    placeholder,
    name,
    min,
    max,
    prefix,
    suffix,
    isSuffixPlural,
  } = props;

  const onChange = (e) => {
    let value = String(e.target.value);
    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClass].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          readOnly
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          onChange={onChange}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && value > 1 ? "s" : ""
          }`}
        />
        <div className="input-group-append ">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  placeholder: propTypes.string,
  outerClass: propTypes.string,
};
