import PropTypes from 'prop-types'; // типізація компонента
import { Container, Button } from './FeedbackOptions.styled'; // стилізація компонента

// компонент кнопок
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Container>

      {/* Генеруємо список кнопок на основі масиву options */}
      {options.map((name, i) => {
        return (
          <Button
            key={i + 1}
            hoverType={name}
            onClick={() => { // при кліку на кнопку викликаємо функцію onLeaveFeedback з індексом кнопки
              onLeaveFeedback[i](name); // передаємо в функцію ім'я кнопки
            }}
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
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired, // масив функцій
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired, // масив з 3-х елементів
};
