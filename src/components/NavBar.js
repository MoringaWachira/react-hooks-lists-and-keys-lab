import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkText = links.map(name => <a key={name} href={`#${name}`}>{name}</a>)


  return <nav>{/* display an <a> tag for each link here */}
   {linkText}
  </nav>;
 
}

export default NavBar;
