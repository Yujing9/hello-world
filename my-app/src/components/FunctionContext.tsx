import { useContext } from "react"
import { ThemeContext } from "../App"

export default function FunctionContext() {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <h1>From function:this is {theme}</h1>
    </div>
  )
}
