import PropTypes from 'prop-types'; // типізація компонента
import { Numbers, Category } from './Statistics.styled'; // стилізація компонента

// компонент статистики
export const Statistics = ({
  options,
  statistic,
  total,
  positivePercentage,
}) => {
  return (
    <>
    {/* Генеруємо список категорій на основі масиву options */}
      {options.map((name, i) => {
        return (
          <Category key={i + 1} categoryName={name}>
            {name}: <Numbers>{statistic[name]}</Numbers> {/* рендер кількості */}
          </Category>
        );
      })}
      <p>
        Total: <Numbers>{total}</Numbers> {/* рендер загальної кількості */}
      </p>
      <Category categoryName={"good"}>
        Positive feedback: <Numbers>{positivePercentage()}</Numbers>% {/* рендер відсотка */}
      </Category>
    </>
  );
};

// типізація пропсів
Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])) // масив з трьох елементів
    .isRequired,
  statistic: PropTypes.shape({ // об'єкт з трьох елементів
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired, // функція
};
