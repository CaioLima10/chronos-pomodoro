import "./styles/themes.css";
import "./styles/global.css";

import { Container } from "./components/container";
import { Logo } from "./components/logo";
import { Menu } from "./components/menu";
import { CountDown } from "./components/countDown";
import { DefaultInput } from "./components/defaultInput";
import { Cycles } from "./components/cycles";
import { DefualtButton } from "./components/defualtButton";

import { IoPlayCircleOutline } from "react-icons/io5";
import { Footer } from "./components/footer";

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

          <Cycles />

          <div className="formRow">
            <DefualtButton
              type="submit"
              icon={<IoPlayCircleOutline size={40} />}
            />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
