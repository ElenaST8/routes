import "./footer.css";
import FooterItem from "../FooterItem";
import NavigationItem from "../navigationItem";
import { useContext } from "react";

import { UsersContext } from "../../App";

const Footer = () => {
  const contextData = useContext(UsersContext);

  console.log(contextData);

  return (
    <footer>
      <FooterItem content="FOOTER" isLowersetext={true} />
      <div className="footer">
        <FooterItem content="Головна" isLowersetext={false} />
        <FooterItem content="Про нас" isLowersetext={false} />
        <FooterItem content="Контакти" isLowersetext={false} />
        <FooterItem content="Блог" isLowersetext={false} />
        <NavigationItem text="navItem" />
        <div>Total Users Count: {contextData.usersCount} </div>
      </div>
    </footer>
  );
};

export default Footer;
