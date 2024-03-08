import React from 'react';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamCardProps {
  team: Team;
}

function TeamCard({ team }: TeamCardProps) {
  const { school, name, city, state } = team;
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <p>Mascot: {name}</p>
      <p>
        Location: {city}, {state}
      </p>
    </div>
  );
}

export default TeamCard;
