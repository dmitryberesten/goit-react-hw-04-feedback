import styled from '@emotion/styled'; // стилізація компонента

// стилізація статистики
export const Numbers = styled.span`
  font-weight: 700;
`;

const bgrColor = props => {
  switch (props.categoryName) {
    case 'good':
      return ` rgba(0, 128, 0, 25%);`;
    case 'neutral':
      return ` rgba(255, 228, 196, 60%);`;
    case 'bad':
      return ` rgba(255, 0, 0, 20%)`;
    default:
      console.log('Invalid subscription type');
  }
};

// стилізація категорії
export const Category = styled.p`
  text-transform: capitalize; // перша буква велика
  margin: 0;
  width: 200px;
  padding: 16px;
  display: block;
  background-color: ${bgrColor}; // вибираємо колір фону в залежності від типу підписки
`;
