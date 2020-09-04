import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


export default function Button(props) {
    const className = [props.className];
    if(propTypes.isPrimary) className.push("btn-primary")
    if(propTypes.isSmall) className.push("btn-sm")
    if(propTypes.isLarge) className.push("btn-lg")
    if(propTypes.isBlock) className.push("btn-block")
    if (propTypes.hasShadow) className.push("btn-shadow")
    const onClick = () => {
        if (propTypes.onClick) props.onClick()
    }
    if (props.isDisabled || props.isLoading) {
        if (props.isDisabled) className.push("disabled")
        return (
            <span className={className.join(" ")} style={props.style}>
                {props.isLoading ? (
                    <>
                    <span className="spinner-borderbspinner-border-sm mx-5"></span>
                    <span className="read-only">Loading</span>
                    </>
                ) : (props.children)}
            </span>
        )
    }
    if (props.type === "link") {
        if (props.isExternal) {
            return (
                <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ? "_blank" :undefined} rel={props.target === "_blank" ? "noopener noreferrer" :undefined}>{props.children}</a>
            )
        } else {
            return (
                <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>{props.children}</Link>
            )
        }
    }
    return (
        <button className={className.join(" ")} style={props.style} onClick={onClick}>
            {props.children}
        </button>
    )
}
Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isBlock: propTypes.bool,
    isDisabled: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isExternal: propTypes.bool,
    isLoading: propTypes.bool,
    hasShadow: propTypes.bool,
}
