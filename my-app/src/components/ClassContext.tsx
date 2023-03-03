import { Component } from "react"
import { ThemeContext } from "../App"
export default class ClassContext extends Component {
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {(theme) => {
            return (
              <>
                <div>From class:the theme is {theme}</div>
              </>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
