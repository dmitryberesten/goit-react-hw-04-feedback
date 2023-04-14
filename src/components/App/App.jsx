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

  const countTotalFeedback = () => { // підрахунок загальної кількості відгуків
    return good + neutral + bad;
  };

  const onLeaveFeedback = (option) => {
    if (option === 'good') setGood(prev => prev + 1);
    if (option === 'neutral') setNeutral(prev => prev + 1);
    if (option === 'bad') setBad(prev => prev + 1);
  }

  // підрахунок відсотка позитивних відгуків
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0); //Якщо загальна кількість відгуків дорівнює нулю, повертається 0.
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
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
