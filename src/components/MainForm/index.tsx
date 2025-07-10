import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 30,
        },
        formattedSecondsRemaning: "22:22",
      };
    });
  }

  return (
    <form className="form" action="">
      <div>
        <button type="button" onClick={handleClick}>
          Clicar
        </button>
      </div>
      <div className="formRow">
        <DefaultInput
          labelText="Task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
