import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaing: number;
  formatedSecondsRemaning: string;
  activedTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
