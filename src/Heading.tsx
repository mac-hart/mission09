import React from 'react';
import './Heading.css';

function Heading() {
  return (
    <div>
      <img src="march.png" alt="March Madness" />
      <h1 style={{ color: 'royalblue' }}>IT'S MARCH, BABY.</h1>
      <img
        src="/ball.webp"
        alt="basketball"
        className="rotating-image"
        style={{ width: '100px', height: '100px' }}
      />
      <h3>Let the Madness ensue.</h3>
      <h5>
        The NCAA Men's Basketball March Madness tournament is an annual college
        basketball tournament featuring 68 teams from Division I of the National
        Collegiate Athletic Association (NCAA). The tournament is held in March
        and April, culminating in the Final Four, where the remaining four teams
        compete for the national championship title. March Madness is renowned
        for its thrilling single-elimination format, unpredictable upsets, and
        intense competition, captivating basketball fans worldwide.
      </h5>
      <h3>Here is a list of all Division 1 teams:</h3>
    </div>
  );
}

export default Heading;
