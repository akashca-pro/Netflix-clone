import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setapiData] = useState({
    name : "",
    key :"",
    published_at : "",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjgyZTE2NzU1YzQ1YzdjMDYyNzhkZmQyNjdhMzU3NyIsIm5iZiI6MTczNzgxNDQwOC4wOCwic3ViIjoiNjc5NGYxODhjNWE1NDViOTUxMmFkYzc1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.xqBbj5CMR9r21S-HUAtm9eqHgXVbVlrRUPfQY_Q-e9g'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>navigate('/')}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen>
      </iframe>
      <div className="player-info">
      <p>{apiData.published_at}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
