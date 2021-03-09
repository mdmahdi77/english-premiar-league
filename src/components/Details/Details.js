import React, { useEffect, useState } from 'react';
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
    },[])

    const{strTeam, intFormedYear, strSport, strCountry, strGender, strStadium, strStadiumThumb, strStadiumDescription, strDescriptionEN} = team

    let genderChange;
    if(strGender == 'female'){
        genderChange = <img src="https://www.worldsoccer.com/wp-content/uploads/2019/10/GettyImages-1153124570.jpg" />
    }else{
        genderChange = <img src="https://img.fifa.com/image/upload/t_l4/v1581117518/lxnih3mmbd4ucvm7pwt1.jpg" />
    }
    return (
        <div>
            <div className="banner">
                <img src={strStadiumThumb} alt=""/>
                <div>
                    <h1>{strStadium}</h1>
                </div>
            </div>
            <div className="details">
                <div className="Details-info">
                    <div className="team-details">
                        <h2>{strTeam}</h2>
                        <h6>Founded: {intFormedYear}</h6>
                        <h6>Sport Types: {strSport}</h6>
                        <h6>Country: {strCountry}</h6>
                        <h6>Gender: {strGender}</h6>
                    </div>
                    <div className="team-img">
                        {genderChange}
                    </div>
                </div>
                <p>{strStadiumDescription}</p>
                <p>{strDescriptionEN}</p>
                <div className="social-icon">
                    <a href=""><img src="" alt=""/></a>
                </div>
            </div>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Details;