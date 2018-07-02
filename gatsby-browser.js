const React = require("react")

/**
 * This is fine.
 */
// const Layout = (props) => <div>{props.children}</div>

/**
 * This is not fine. "Uncaught TypeError: apiRunner is not a function" in loader.js
 * This error is triggered if anything in this set of dependencies has: import { Link } from "gatsby"
 */
const Layout = require("./src/components/layout").default


exports.replaceComponentRenderer = ({props, loader}) => {
  return <Layout>{React.createElement(props.pageResources.component, props)}</Layout>
}