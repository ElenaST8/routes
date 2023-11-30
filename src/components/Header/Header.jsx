// import { useContext, useEffect, useState } from "react";
// import NavigationItem from "../navigationItem/NavigationItem";
// import { maxBy } from "lodash";
// import "./header.css";
// import { UsersContext } from "../../App";

// const Header = () => {
//   const { usersCount, users } = useContext(UsersContext);
//   const [longestNameUser, setLongestNameUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (users && users.length > 0) {
//       const userWithLongestName = users.reduce(
//         (max, user) => (user.name.length > max.name.length ? user : max),
//         users[0]
//       );
//       setLongestNameUser(userWithLongestName);
//     }
//     setLoading(false);
//   }, [users]);

//   const navElements = [
//     {
//       text: "First",
//       isUppercasetext: true,
//       description: "second description",
//     },
//     {
//       text: "Second",
//       isUppercasetext: true,
//       description: "second description",
//     },
//     {
//       text: "Third",
//       isUppercasetext: true,
//       description: "second description",
//     },
//     {
//       text: "samsung",
//       isUppercasetext: true,
//     },
//   ];

//   return (
//     <header>
//       <div className="header">
//         {navElements.map((element) => (
//           <NavigationItem
//             key={element.text}
//             text={element.text}
//             isUppercasetext={element.isUppercasetext}
//             description={element.description}
//           />
//         ))}
//       </div>
//       <NavigationItem text="header" isUppercasetext={false} />
//       <div style={{ color: "violet" }}>
//         {loading
//           ? "Завантаження даних..."
//           : longestNameUser
//           ? `Найдовше Ім'я: ${longestNameUser.name}`
//           : "Жодного користувача із іменем не знайдено"}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useContext, useEffect, useState } from "react";
import NavigationItem from "../navigationItem/NavigationItem";
import { UsersContext } from "../../App";
import "./header.css";

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
    console.log("users", users);
    if (users && users.length > 0) {
      const userWithLongestName = users.reduce(
        (max, user) => (user.name.length > max.name.length ? user : max),
        users[0]
      );
      setLongestNameUser(userWithLongestName);
    }
    setLoading(false);
  }, [users]);

  console.log("longestNameUser", longestNameUser);

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
      <div className="header">
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
      </div>
    </header>
  );
};

export default Header;
