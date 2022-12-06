import { Button } from "antd";
import React, { useState } from "react";
import './Header.css'
function TeamBar() {
  // Create an array of objects to hold the text for each button
  const buttonText = [    
    {id: 1, name: "Solidarity", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id: 2, name: "Tradition", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 3, name: "Ecology", text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},    
    {id: 4, name: "Liberal", text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
  ];

  // Use the useState hook to create a state variable called "expanded"
  // and set its initial value to an empty object
  const [expanded, setExpanded] = useState({});
  const handleButtonClick = id => {
    if (expanded[id]) {
      // If the button is already expanded, remove it from the "expanded" object
      const newExpanded = { ...expanded };
      delete newExpanded[id];
      setExpanded(newExpanded);
    } else {
      // If the button is not expanded, set the "expanded" object to only include
      // the button that was clicked, with its expanded state set to true
      setExpanded({
        [id]: true
      });
    }
  };
  return (
    <div className="header">
      {buttonText.map(button => (
        <Button
          type="default"
          size="large"
          ghost
          key={button.id}
          className="header-button"
          onClick={() => handleButtonClick(button.id)}
        >
          {button.name}
        </Button>
      ))}
      {buttonText.map(button => (
        <p key={button.id}>
          {expanded[button.id] && button.text}
        </p>
      ))}
    </div>
  );
}
export default TeamBar;