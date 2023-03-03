import React, { useState, createContext } from "react"
import HelloWorld from "./components/HelloWorld"
import Login from "./components/Login"
import MiddleContext from "./components/MiddleContext"

export const ThemeContext = createContext("dark")

export default function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <MiddleContext />
      </ThemeContext.Provider>
      <HelloWorld />
      <Login />
    </div>
  )
}
