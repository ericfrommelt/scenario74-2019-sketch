import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image"
import styles from "./index.module.css"
import Layout from "../../components/layout"


const IndexPage = (props) => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        <h1 className={styles.falseTrueTrue}>False True 
        <AniLink
         cover 
         to="/yesyesno" 
         direction="left"
         bg="#2A8B4B"
        > True
         </AniLink></h1>
        <p className={styles.txtOne}>It's happening.</p>
        <p className={styles.txtTwo}>No...really?</p>
        <p className={styles.txtThree}>Kind of? I think.</p>
        <p className={styles.txtFour}>We're leaving tomorrow.</p>
        <div className={styles.mainImg}><Img fluid={props.data.imageOne.childImageSharp.fluid} /></div>
        <div className={styles.inputA}>
          <input type="text" id="name" name="name" placeholder="there is tremendous pressure sur" size="26" />
        </div>
        <div className={styles.inputB}>
          <input type="text" id="name" name="name" placeholder="you heard about this right? I mea" size="26" />
        </div>
        <div className={styles.inputC}>
          <input type="text" id="name" name="name" placeholder="the transition was nearly impossi" size="26" />
        </div>
        <div className={styles.bigCircle}>
          <svg width="224px" height="224px" version="1.1">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Desktop" transform="translate(-214.000000, -268.000000)" fill="#45D9AE">
                      <circle id="Oval-Copy" cx="326" cy="380" r="112"></circle>
                  </g>
              </g>
          </svg>
        </div>
        <div className={styles.smallCircle}>
          <svg width="26px" height="26px">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Desktop" transform="translate(-313.000000, -851.000000)" fill="#45D9AE">
                      <circle id="Oval" cx="326" cy="864" r="13"></circle>
                  </g>
              </g>
          </svg>
        </div>
      </div>
    </div>
  </Layout>
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