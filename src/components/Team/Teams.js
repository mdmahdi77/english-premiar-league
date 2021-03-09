import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css'

const Teams = (props) => {
    console.log(props.team)
    const {strTeam, strSport, strTeamBadge, idTeam} = props.team
    return (
        <div className="team-section">
            <div className="team-container">
                <div className="team">
                    <img src={strTeamBadge} alt=""/>
                    <h3>{strTeam}</h3>
                    <h5 className="sport-type">Sports Types: {strSport}</h5>
                    <button className="mainBtn"><Link className="mainLink" to={`/team/${idTeam}`}>Explore</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Teams;