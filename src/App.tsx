import "./styles/themes.css";
import "./styles/global.css";

import { Container } from "./components/container";
import { Logo } from "./components/logo";
import { Menu } from "./components/menu";
import { CountDown } from "./components/countDown";
import { DefaultInput } from "./components/defaultInput";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput
              type="text"
              id="task"
              textLabel="Tarefa:"
              placeholder="Digite sua Tarefa."
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
