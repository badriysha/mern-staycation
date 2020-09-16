import React, { useRef } from "react";
import propTypes from "prop-types";

export default function File(props) {
  const {
    name,
    value,
    accept,
    prepend,
    append,
    placeholder,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);
  return (
    <div className={["input-text mb3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type="file"
          className="d-none"
          accept={accept}
          ref={refInputFile}
          name={name}
          value={value}
          onChange={props.onChange}
        />
        <input
          className={["form-control", inputClassName].join(" ")}
          placeholder={placeholder}
          defaultValue={value}
          onClick={() => refInputFile.current.click()}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browse a file...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
  append: propTypes.oneOfType([propTypes.string, propTypes.number]),
  placeholder: propTypes.string.isRequired,
  outerClassName: propTypes.string.isRequired,
  inputClassName: propTypes.string.isRequired,
};
