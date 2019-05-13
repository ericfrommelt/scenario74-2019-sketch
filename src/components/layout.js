import React from "react"
import "./layout.css"
import Masthead from "../components/masthead"

export default ({ children }) => (
  <div>
    <Masthead></Masthead>
    { children}
  </div>
)