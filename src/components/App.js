import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
import Links from "./Links";
// pass this data down as props to the child component(s) that need it!
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home user={user}/>
      <About user={user.bio}/>
      <Links user={user}/>
    </div>
  );
}

export default App;
