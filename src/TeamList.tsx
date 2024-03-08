import React from 'react';
import TeamCard from './TeamCard';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamListProps {
  teams: Team[];
}

function TeamList({ teams }: TeamListProps) {
  return (
    <div className="team-list">
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

export default TeamList;
