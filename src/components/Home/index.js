// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import { css } from 'emotion';
import { validateForm, currencyToFloat, formatReal } from '@/utils/form';
import { TextField } from '@Uikit';
import tokens from '@Uikit/Tokens';
import VMasker from 'vanilla-masker';
import { getValueAntecipation } from '@receivables/calculator';
import PubSub from 'PubSub';

const pubsub = new PubSub();

const Home = () => {
  return (
    <Container>
      <Box>
        <Simulator>
          <SimulatorTitle>Simule sua Antecipação</SimulatorTitle>
          <form id="form">
            <TextField id="amount" type="text" required="required" label="Informe o valor da venda*" />
            <TextField
              id="installments"
              extraMessage="Máximo de 12 parcelas"
              type="number"
              required="required"
              label="Em quantas parcelas*"
            />
            <TextField id="mdr" type="number" required="required" label="Informe o percentual de MDR*" />
          </form>
        </Simulator>
        <ResultSection>
          <ResultTitle>Você Receberá</ResultTitle>
          <ResultDays>
            <li id="sei">
              Amanhã: <strong data-one-value="0">R$ {VMasker.toMoney(state.receivables.oneDay)}</strong>
            </li>
            <li>
              Em 15 dias: <strong data-fifteen-value="0">R$ {VMasker.toMoney(state.receivables.fifteenDays)}</strong>
            </li>
            <li>
              Em 30 dias: <strong data-thirty-value="0">R$ {VMasker.toMoney(state.receivables.thirtyDays)}</strong>
            </li>
            <li>
              Em 90 dias: <strong data-ninety-value="0">R$ {VMasker.toMoney(state.receivables.ninetyDays)}</strong>
            </li>
          </ResultDays>
        </ResultSection>
      </Box>
    </Container>
  );
};

const state = {
  receivables: {
    oneDay: 0,
    fifteenDays: 0,
    thirtyDays: 0,
    ninetyDays: 0,
  },
};

pubsub.subscribe('antecipationData', data => {
  const { installmentAntecipation } = data;
  installmentAntecipation.forEach(installment => {
    if (Object.prototype.hasOwnProperty.call(installment, 1)) {
      state.receivables.oneDay = parseFloat(installment[1]).toFixed(2);
      document.querySelector('[data-one-value]').innerHTML = `R$ ${VMasker.toMoney(state.receivables.oneDay)}`;
    }
    if (Object.prototype.hasOwnProperty.call(installment, 15)) {
      state.receivables.fifteenDays = parseFloat(installment[15]).toFixed(2);
      document.querySelector('[data-fifteen-value]').innerHTML = `R$ ${VMasker.toMoney(state.receivables.fifteenDays)}`;
    }
    if (Object.prototype.hasOwnProperty.call(installment, 30)) {
      state.receivables.thirtyDays = parseFloat(installment[30]).toFixed(2);
      document.querySelector('[data-thirty-value]').innerHTML = `R$ ${VMasker.toMoney(state.receivables.thirtyDays)}`;
    }
    if (Object.prototype.hasOwnProperty.call(installment, 90)) {
      state.receivables.ninetyDays = parseFloat(installment[90]).toFixed(2);
      document.querySelector('[data-ninety-value]').innerHTML = `R$ ${VMasker.toMoney(state.receivables.ninetyDays)}`;
    }
  });
});

const handleSubmit = form => {
  const fields = Object.values(form.elements);
  fields.forEach(function(element) {
    element.addEventListener('blur', function() {
      if (validateForm(form.elements)) {
        const amountValue = currencyToFloat(document.getElementById('amount').value);
        const installmentsValue = parseInt(document.getElementById('installments').value);
        const mdrValue = parseInt(document.getElementById('mdr').value);
        const result = getValueAntecipation({
          amount: amountValue,
          installmentQt: installmentsValue,
          mdrRate: mdrValue,
          daysAntecipation: [1, 15, 30, 90],
        });
        pubsub.publish('antecipationData', result);
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  handleSubmit(form);
  formatReal(document.getElementById('amount'));
});

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
