import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
// @material-ui/icons

// core components
import styles from "../../assets/jss/material-kit-react/components/cardHeaderStyle.js"

const useStyles = makeStyles(styles)

export default function CardHeader(props) {
  const classes = useStyles()
  const { className, children, color, plain, ...rest } = props
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined,
  })
  if (props.project) {
    return (
      <img
        src={props.url}
        alt="project image"
        style={{
          borderRadius: "3px",
          padding: "1rem 15px",
          marginLeft: "15px",
          marginRight: "15px",
          marginTop: "-30px",
          border: "0",
          marginBottom: "0",
        }}
      ></img>
    )
  } else {
    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
    )
  }
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool,
  children: PropTypes.node,
}
