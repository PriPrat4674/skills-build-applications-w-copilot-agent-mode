import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://psychic-rotary-phone-jj59w7v7v94v3q6r6-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary">Teams</h1>
      <ul className="list-group">
        {teams.map(team => (
          <li key={team._id} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;