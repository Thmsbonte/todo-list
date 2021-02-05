import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="Header">
      <FontAwesomeIcon className="list-ul" icon="list-ul" size="3x" />
      <h1>Todo List</h1>
    </div>
  );
};

export default Header;
