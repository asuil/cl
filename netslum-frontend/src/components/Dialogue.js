import {useState} from 'react';
import Fade from "../wrappers/Fade";
import Div from "../wrappers/Div";
import Text from "../wrappers/Text";
import Icon from "../components/Icon";

const Dialogue = ({
  dialogues,
  lastAction,
}) => {
  const [current, setCurrent] = useState(0);
  const [showDialogue, setShowDialogue] = useState(true);
  const [loading, setLoading] = useState(false);
  const [last] = useState(dialogues.length - 1);

  const manageClick = () => {
    if (!loading) {
      setLoading(true);
      setShowDialogue(false);
      setTimeout(() => {
        setCurrent(current + 1);
        setShowDialogue(true);
      }, 200);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  };

  return (
    <Div onClick={() => current === last ? lastAction() : manageClick()}>
      <Fade show={showDialogue} duration={200}>
        <Div px={3} pt={2}>
          <Text>
            {dialogues[current]}
          </Text>
        </Div>
        <Div flex alignRight px={1}>
          <Icon name={current !== last ? 'keyboard_arrow_down' : 'keyboard_arrow_right'} />
        </Div>
      </Fade>
    </Div>
  );
};

export default Dialogue;
