import PropTypes from 'prop-types'; // типізація компонента
import { Container, Button } from './FeedbackOptions.styled'; // стилізація компонента

// компонент кнопок
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Container>

      {/* Генеруємо список кнопок на основі масиву options */}
      {options.map((name) => {
        return (
          <Button
            key={name}
            hoverType={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </Button>
        );
      })}
    </Container>
  );
};

// типізація пропсів
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired, // функція
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
