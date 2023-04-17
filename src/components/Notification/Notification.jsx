import PropTypes from 'prop-types'; // імпортуємо бібліотеку для перевірки типів
import { Notif } from './Notification.styled' // імпортуємо стилі

// компонент сповіщення
export const Notification = ({ message }) => {
  return <Notif>{message}</Notif>; // рендер сповіщення
};

// типізація пропсів
Notification.propTypes = {
  message: PropTypes.string.isRequired // тип пропса message - рядок
};

// Діма Берестень
