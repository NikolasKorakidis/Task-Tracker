import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" />
    </header>
  );
};

// Nice defeault value!
Header.defaultProps = {
  title: "Task Tracker",
};
// Prop Types, i prefair typescript!
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
