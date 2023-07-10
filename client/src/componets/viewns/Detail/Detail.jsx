import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const st = {width: '500px', height: '500px', borderRadius: '80%'}

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoGame, setVideoGame] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
      if (data.name) {
        setVideoGame(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setVideoGame({});
  }, [id]);

  const { name, imag, rating, platforms, released, description, genres } = videoGame;
  

  return (
    <div>
      <img src={imag || videoGame.image} style={st}/>
      <h1>► ID | {videoGame.id}</h1>
      <h1>► NAME | {name}</h1>
      <h1>► RATING | {rating}</h1>
      <h1>► RELEASED | {released}</h1>
      <h1>► PLATFORMS | {platforms?.map(plat => <div>{plat}</div>)}</h1>
      <h1>► GENRES | {genres?.map(gen => <div>{gen}</div>)}</h1>
      <h1>► DESCRIPTION | {description}</h1>
    </div>
  );
};

export default Detail;
