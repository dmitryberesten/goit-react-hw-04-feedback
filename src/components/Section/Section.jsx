import PropTypes from 'prop-types'; // типізація компонента
import {Title} from './Section.styled' // стилізація компонента

// компонент секції
export const Section = ({ title, children }) => {
  return (
    <section >
      <Title>{title}</Title>
      {children} {/* рендер дочірніх елементів */}
    </section>
  );
};

// типізація пропсів
Section.propTypes = {
  title: PropTypes.string.isRequired // рядок
};
