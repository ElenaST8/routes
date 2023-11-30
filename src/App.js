import "./app.css";
import Main from "./components/Main";
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
// import Footer from "./components/Footer/Footer";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);
  // const numberToPass = 10;

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/serveces" element={<OurServices />} />
          {/* <Route path="/main" element={<Main />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/form" element={<RegistrationForm />} />
          <Route path="/input" element={<RefInput />} />
        </Routes>
        {/* <Main /> */}
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
