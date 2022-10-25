import React from "react";
import NavbarComp from "./components/NavbarComp";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieList from "./pages/MovieList";
import Search from "./pages/Search";
import api from "./api/Api";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <div>
      <Router>
        <NavbarComp />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MovieList url={api.fetchUpComing} />} />
          <Route path="/search" element={<Search url={api.fetchAll}  searchUrl={api.fetchSearch}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
