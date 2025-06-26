import { Heading } from "./components/Heading";
import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  console.log("Oi");

  return (
    <>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, a sunt
        aliquid eius esse facere vitae laudantium similique praesentium alias,
        ab minus totam soluta iste magni, at voluptatibus. Harum, hic?
      </p>
    </>
  );
}
