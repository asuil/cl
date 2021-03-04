import { arrayOf, func, string } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import Div from '../wrappers/Div';
import Fade from '../wrappers/Fade';
import Text from '../wrappers/Text';

const Dialogue = ({
  dialogues,
  lastAction,
}) => {
  const [current, setCurrent] = useState(0);
  const [showDialogue, setShowDialogue] = useState(true);
  const [loading, setLoading] = useState(false);
  const [last] = useState(dialogues.length - 1);

  const currentTimers = [];

  useEffect(() => (
    () => {
      clearTimeout(currentTimers[0]);
      clearTimeout(currentTimers[1]);
    }
  ), []);

  const manageClick = () => {
    if (!loading) {
      setLoading(true);
      setShowDialogue(false);

      currentTimers[0] = setTimeout(() => {
        setCurrent(current + 1);
        setShowDialogue(true);
      }, 200);

      currentTimers[1] = setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  };

  return (
    <Div onClick={() => (current === last ? lastAction() : manageClick())}>
      <Fade initialShow show={showDialogue} duration={200}>
        <Div px={3} pt={2}>
          <Text>
            {dialogues[current]}
          </Text>
        </Div>
        <Div alignRight px={1}>
          <Icon name={current !== last ? 'keyboard_arrow_down' : 'keyboard_arrow_right'} />
        </Div>
      </Fade>
    </Div>
  );
};

Dialogue.propTypes = {
  dialogues: arrayOf(string),
  lastAction: func,
};

Dialogue.defaultProps = {
  dialogues: [],
  lastAction: () => {},
};

export default Dialogue;
