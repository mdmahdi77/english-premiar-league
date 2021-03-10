import React, { useEffect, useState } from 'react';
import facebook from '../../Icon/Facebook.png'
import twitter from '../../Icon/Twitter.png'
import Youtube from '../../Icon/YouTube.png'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const {idTeam} = useParams()
    const [team, setTeam] = useState({})
    console.log(team)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[idTeam])


    // Destructuring
    const {strTeam, intFormedYear, strSport, strCountry, strGender, strTeamBadge, strStadiumThumb, strStadiumDescription, strDescriptionEN, strTeamFanart3} = team


    // Conditional rendering
    let genderChange;
    if(strGender === 'female'){
        genderChange = <img src="https://www.worldsoccer.com/wp-content/uploads/2019/10/GettyImages-1153124570.jpg" />
    }else{
        genderChange = <img src={strTeamFanart3} />
    }


    return (
        <div>
            <div className="banner-two">
                <img src={strStadiumThumb} alt=""/>
                <div className="logo">
                    <img src={strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="details">
                <div className="Details-info">
                    <div className="team-details">
                        <h2>{strTeam}</h2>
                        <h5>Founded: <span>{intFormedYear}</span></h5>
                        <h5>Sport Types: <span>{strSport}</span></h5>
                        <h5>Country: <span>{strCountry}</span></h5>
                        <h5>Gender: <span>{strGender}</span></h5>
                    </div>
                    <div className="team-img">
                        {genderChange}
                    </div>
                </div>
                <p>{strStadiumDescription}</p>
                <p>{strDescriptionEN}</p>
                <div className="social-icon">
                    <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt=""/></a>
                    <a href="https://www.twitter.com/" target="_blank"><img src={twitter} alt=""/></a>
                    <a href="https://www.youtube.com/" target="_blank"><img src={Youtube} alt=""/></a>
                </div>
                    <Link className="go-back" to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default Details;