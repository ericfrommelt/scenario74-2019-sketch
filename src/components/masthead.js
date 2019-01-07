import React from "react"
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
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
    )}
  />
)

