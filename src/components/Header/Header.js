import { Button } from "antd";
import React, { useState } from "react";
import './Header.css'
function TeamBar() {
  // Create an array of objects to hold the text for each button
  const buttonText = [    
    {id: 1, name: "Solidarity", text:"The Solidarity group fights for a fair society, where health, education and employment are guaranteed for all.\n\n* We fight for the poorest and for workers' rights in cities and suburbs.\n* We believe that EU and member states have an important role in raising social welfare and promoting solidarity among people.\n* We support the EU and member states as long as their use of authority is fair and does not threaten personal freedom too much."},
    {id: 2, name: "Tradition", text:"The Tradition group fights for preserving stability in society, whose foundations should rely on traditional values and the respect for authority.\n\n* We think farmers and traditions are the pillars of stability.\n* We believe that modern society threatens farmers and traditional ways of life. That is why it is important we protect them.\n* We support the EU and member states when guaranteeing social and economic stability.\n* We want public spending to remain reasonable."},
    {id: 3, name: "Ecology", text:"The Ecology group fights to protect the environment and people's health. A clean and safe environment is a fundamental human right.\n\n* We support scientific research for the environment. This is the only sustainable way to save the planet.\n* There should be no budget limits when protecting the environment.\n* Society must reduce consumption.\n* Personal freedom and solidarity among the people should never be threatened."},    
    {id: 4, name: "Liberal", text:"The Liberal group fights for a society and economy based on freedom.\n\n* Individuals and businesses should be free to compete and innovate. These are the basic conditions for economic growth in Europe.\n* We fight for the rights of taxpayers and businesses. Public spending and taxes should remain as low as possible.\n* Nobody has the right to threaten personal freedom."}
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