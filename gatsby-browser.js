import React from "react"
import Layout from "./src/components/Layout"

import Prism from "prism-react-renderer/prism"
;(typeof global !== "undefined" ? global : window).Prism = Prism

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
