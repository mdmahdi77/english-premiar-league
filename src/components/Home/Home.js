import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Teams from '../Team/Teams';
import './Home.css'

const Home = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then(res => res.json())
    .then(data => setTeams(data.teams))
  },[])
    return (
        <div>
            <div className="banner">
                <img src="https://www.thesportsdb.com/images/media/team/stadium/wwutyt1420457572.jpg" alt=""/>
                <div>
                    <h1>English Premier League 2021</h1>
                </div>
            </div>
            {
                teams.map(team => <Teams team={team}></Teams>)
            }
        </div>
    );
};

export default Home;