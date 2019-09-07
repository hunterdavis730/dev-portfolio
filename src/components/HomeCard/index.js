import React from "react"
import { Link } from "gatsby"
// material-ui components
import { makeStyles } from "@material-ui/core/styles"
// core components
import Card from "../Card/Card.js"
import CardBody from "../Card/CardBody.js"
import CardHeader from "../Card/CardHeader.js"
import CardFooter from "../Card/CardFooter.js"
import Button from "../CustomButtons/Button.js"

import { cardTitle } from "../../assets/jss/material-kit-react.js"

import homeCardStyles from "./homeCard.module.scss"

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center",
  },
  textMuted: {
    color: "#6c757d",
  },
}

const useStyles = makeStyles(styles)

export default function HomeCard(props) {
  console.log(props)
  const classes = useStyles()
  return (
    <Card className={homeCardStyles.card}>
      <CardBody className={homeCardStyles.body}>
        <h1 className={homeCardStyles.header}>{props.homeHeader}</h1>
        <p>Full Stack Developer</p>
      </CardBody>
      <CardFooter className={homeCardStyles.footer}>
        <Button>Enter Site</Button>
      </CardFooter>
    </Card>
  )
}
