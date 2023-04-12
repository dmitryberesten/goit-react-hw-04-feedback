import { useState } from 'react'; // Хук для стану
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification'; // Компонент сповіщення
import { Container } from './App.syled'; // Стилізація

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => { // оновлення зачення на +1
    setGood(prevSt => prevSt + 1);
  };

  const updateNeutral = () => { // оновлення зачення на +1
    setNeutral(prevSt => prevSt + 1);
  };

  const updateBad = () => { // оновлення зачення на +1
    setBad(prevSt => prevSt + 1);
  };

  const countTotalFeedback = () => { // підрахунок загальної кількості відгуків
    return good + neutral + bad;
  };

  // підрахунок відсотка позитивних відгуків
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0); //Якщо загальна кількість відгуків дорівнює нулю, повертається 0.
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={[updateGood, updateNeutral, updateBad]} // масив функцій
        />
      </Section>
      <Section title="Statistics">

        {/* Рендер за умовою */}
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet..." />
        ) : (
          <Statistics
            options={Object.keys({ good, neutral, bad })}
            statistic={{ good, neutral, bad }}
            total={countTotalFeedback()} // загальна кількість відгуків
            positivePercentage={countPositiveFeedbackPercentage} // відсоток позитивних відгуків
          />
        )}
      </Section>
    </Container>
  );
};

// Діма Берестень
