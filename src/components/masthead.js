import React from "react"
import { Helmet } from "react-helmet"
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
      <div>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7804816/7144992/css/fonts.css" />
        </Helmet>
        <Link to={`/`}>
          <h1 className={mastheadStyles.masthead}>{data.site.siteMetadata.title}</h1>
        </Link>
      </div>
    )}
  />
)

