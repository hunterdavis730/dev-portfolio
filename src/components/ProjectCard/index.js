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

import projectStyles from "./project.module.scss"

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

export default function ProjectCard(props) {
  console.log(props)
  const classes = useStyles()
  return (
    <Card className={`${classes.textCenter} ${projectStyles.card}`}>
      <div>
        <img
          className={projectStyles.img}
          src={props.project.node.mainProjectImage.file.url}
          alt="project image"
        ></img>
      </div>
      <CardBody>
        <div className={projectStyles.headInfo}>
          <div className={projectStyles.content}>
            <h4 className={projectStyles.title}>
              {props.project.node.projectTitle}
            </h4>

            <p>{props.project.node.shortHook}</p>
          </div>
          <Button>
            <Link
              className={projectStyles.link}
              to={`/project/${props.project.node.slug}`}
            >
              Learn More
            </Link>
          </Button>
        </div>
      </CardBody>
      <CardFooter className={classes.textMuted}>
        {props.project.node.publishedDate}
      </CardFooter>
    </Card>
  )
}
