// import RegistrationForm from "../RegistrationForm";
import "./main.css";
import Products from "../Products";
import RefInput from "../RefInput";
import Modal from "../Modal";

const Main = () => {
  return (
    <div className="main">
      <div className="main-wrapper">
        {/* <RegistrationForm /> */}
        {/* <RefInput /> */}
        <Products />
        <Modal />
      </div>
    </div>
  );
};

export default Main;
