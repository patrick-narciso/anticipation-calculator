// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import { css } from 'emotion';
import { TextField } from '@Uikit';
import tokens from '@Uikit/Tokens';

const Home = () => {
  return (
    <Container>
      <Box>
        <Simulator>
          <SimulatorTitle>Simule sua Antecipação</SimulatorTitle>
          <TextField id="amount" type="text" label="Informe o valor da venda*" />
          <TextField
            id="installments"
            extraMessage="Máximo de 12 parcelas"
            type="number"
            label="Em quantas parcelas*"
          />
          <TextField id="mdr" type="text" label="Informe o percentual de MDR*" />
        </Simulator>
        <ResultSection>
          <ResultTitle>Você Receberá</ResultTitle>
          <ResultDays>
            <li>
              Amanhã: <strong>R$ 0,00</strong>
            </li>
            <li>
              Em 15 dias: <strong>R$ 0,00</strong>
            </li>
            <li>
              Em 30 dias: <strong>R$ 0,00</strong>
            </li>
            <li>
              Em 90 dias: <strong>R$ 0,00</strong>
            </li>
          </ResultDays>
        </ResultSection>
      </Box>
    </Container>
  );
};

const Container = ({ children }) => (
  <div
    class={css`
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
    `}>
    {children}
  </div>
);

const Box = ({ children }) => (
  <div
    class={css`
      display: flex;
      border: 1px solid #d1dce3;
      box-sizing: border-box;
      border-radius: 4px;
      max-width: 608px;
      height: 400px;
      background: #ffffff;
    `}>
    {children}
  </div>
);

const Simulator = ({ children }) => (
  <section
    class={css`
      width: 377px;
      margin-left: 56px;
      margin-right: 70px;
    `}>
    {children}
  </section>
);

const SimulatorTitle = ({ children }) => (
  <h1
    class={css`
      margin-bottom: 22px;
      margin-top: 41px;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      color: ${tokens.brand('black')};
    `}>
    {children}
  </h1>
);

const ResultSection = ({ children }) => (
  <section
    class={css`
      width: 50%;
      background: rgba(209, 220, 227, 0.18);
      padding-left: 35px;
      padding-top: 70px;
    `}>
    {children}
  </section>
);

const ResultDays = ({ children }) => (
  <ul
    class={css`
      list-style: none;
      margin: 0;
      padding: 0;
      font-style: italic;
      line-height: 46px;
      font-size: ${tokens.fontSize('s')};
      color: ${tokens.color('blue', 'light')};
    `}>
    {children}
  </ul>
);

const ResultTitle = ({ children }) => (
  <p
    class={css`
      border-bottom: 1px solid rgba(93, 156, 236, 0.3);
      text-transform: uppercase;
      font-size: ${tokens.fontSize('s')};
      line-height: 30px;
      font-style: italic;
      font-weight: bold;
      width: 155px;
      color: ${tokens.color('blue', 'dark')};
    `}>
    {children}
  </p>
);

export default Home;
