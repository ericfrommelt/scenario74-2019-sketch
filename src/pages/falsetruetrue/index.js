import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./index.module.css"
import Masthead from "../../components/masthead"

const IndexPage = (props) => (
  <div>
    <Masthead></Masthead>
    <div claswName={styles.gridWrapper}>
      {/* <div class={styles.mainImg}><Img fluid={props.data.imageOne.childImageSharp.fluid} /></div> */}
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "img_0517.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`