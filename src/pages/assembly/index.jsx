import React, { useState } from 'react';
import styles from './index.css';
import MainTitle from '../../components/MainTitle';
import { CSSTransition } from 'react-transition-group';

export default function Assembly() {
  const [state, set_state] = useState(true);

  function change() {
    set_state(!state);
  }

  return (
    <div>
      <MainTitle title="Сборки" />

      <CSSTransition
        in={state}
        timeout={300}
        unmountOnExit
        classNames={"clicking"}
      >
        <button onClick={change}>1234</button>
      </CSSTransition>

      <CSSTransition
        in={!state}
        timeout={300}
        unmountOnExit
        classNames={"clicking"}
      >
        <button onClick={change}>lol</button>
      </CSSTransition>
    </div>
  );
}