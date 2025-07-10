import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaing: 0,
  formattedSecondsRemaning: "00:00",
  activedTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
