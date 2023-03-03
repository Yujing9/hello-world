import ClassContext from "./ClassContext"
import FunctionContext from "./FunctionContext"

export default function MiddleContext() {
  return (
    <div>
      <ClassContext />
      <FunctionContext />
    </div>
  )
}
