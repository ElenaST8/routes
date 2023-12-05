import { useContext, useEffect, useState } from "react";
import NavigationItem from "../navigationItem/NavigationItem";
import { UsersContext } from "../../App";
import "./header.css";
import { Link } from "react-router-dom";
import {
  HOME_PATH,
  PRODUCTS_PATH,
  REGISTRATION_PATH,
  REF_PATH,
  SINGLE_USER_PATH,
} from "../../constants/routes-links";
const Header = () => {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [longestNameUser, setLongestNameUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((resp) => {
        setUsers(resp);
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
        setFetchError(err);
      });
    // console.log("users", users);
    if (users && users.length > 0) {
      const userWithLongestName = users.reduce(
        (max, user) => (user.name.length > max.name.length ? user : max),
        users[0]
      );
      setLongestNameUser(userWithLongestName);
    }
    setLoading(false);
  }, [users]);

  // console.log("longestNameUser", longestNameUser);

  const navElements = [
    { text: "First", isUppercasetext: true, description: "second description" },
    {
      text: "Second",
      isUppercasetext: true,
      description: "second description",
    },
    { text: "Third", isUppercasetext: true, description: "second description" },
    { text: "samsung", isUppercasetext: true },
  ];

  return (
    <header>
      <Link to={HOME_PATH}>HomePage</Link>
      <Link to={PRODUCTS_PATH}>Products</Link>
      <Link to="/aboutUs">AboutUs</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/services">OurServices</Link>
      <Link to={REGISTRATION_PATH}>RegistrationForm </Link>
      <Link to="/ref/hello">RefInput</Link>
      <Link to={SINGLE_USER_PATH}>SingleUserPage </Link>
      {/* <div className="header">
        {navElements.map((element) => (
          <NavigationItem
            key={element.text}
            text={element.text}
            isUppercasetext={element.isUppercasetext}
            description={element.description}
          />
        ))}
      </div>
      <NavigationItem text="header" isUppercasetext={false} />
      <div style={{ color: "black" }}>
        {loading && "Завантаження даних..."}

        {!loading && longestNameUser
          ? `Найдовше Ім'я: ${longestNameUser.name}`
          : "Жодного користувача не знайдено"}
      </div> */}
    </header>
  );
};

export default Header;
