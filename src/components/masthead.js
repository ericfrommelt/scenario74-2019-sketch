import React from "react"
import mastheadStyles from "./masthead.module.css"
import { StaticQuery, Link, graphql } from "gatsby"

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }
    render={data => (
      <Link to={`/`}>
        <h1 className={mastheadStyles.masthead}>{data.site.siteMetadata.title}</h1>
      </Link>
    )}
  />
)

