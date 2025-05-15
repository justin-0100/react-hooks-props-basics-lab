import React from "react";
import Links from "./Links"; // ✅ import Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/*Conditionally render bio if it exists */}
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/*Add Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
