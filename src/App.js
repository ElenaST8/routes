import "./app.css";
// import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import RegistrationForm from "./components/RegistrationForm";
import RefInput from "./components/RefInput";
import Contacts from "./components/Contacts";
import OurServices from "./components/OurServices";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import NotFoundPage from "./components/NotFoundPage";
import SingleUserPage from "./components/SingleUserPage";
// import Footer from "./components/Footer/Footer";
import {
  HOME_PATH,
  PRODUCTS_PATH,
  REGISTRATION_PATH,
  REF_PATH,
  NOT_FOUND_PATH,
  SINGLE_USER_PATH,
} from "../src/constants/routes-links";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<OurServices />} />
          {/* <Route path="/main" element={<Main />} /> */}
          <Route path={PRODUCTS_PATH} element={<Products />} />
          <Route path={REGISTRATION_PATH} element={<RegistrationForm />} />
          <Route path={REF_PATH} element={<RefInput />} />
          <Route path={SINGLE_USER_PATH} element={<SingleUserPage />} />
          <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
        </Routes>
        {/* <Main /> */}
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
