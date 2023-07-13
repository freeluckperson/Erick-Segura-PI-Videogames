import React, { useState } from "react";
import axios from "axios"
import styles from "./Form.module.css";

function Form() {
  const [gameData, setGameData] = useState({
    name: "",
    released: "",
    imag: "",
    rating: "",
    platforms: [],
    description: "",
    genres: [],
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
     if (gameData.imag.includes('http')) {errors.imag = ""}else{errors.imag = "Imag required"}
     if (gameData.released.length > 8) {errors.released = ""}else{errors.released = "released required"}
     if (gameData.rating.length > 0) {errors.rating = ""}else{errors.rating = "rating required"}
     if (gameData.name.length <= 15) {errors.name = ""}else{errors.name = "Max 15 characters"}
     if (gameData.description.length <= 20) {errors.description = ""}else{errors.description = "Max 20 characters"}
     if(gameData.genres.length > 0){errors.genres = ""} else {errors.genres = "The game must have at least one gender"}
     if(gameData.platforms.length > 0) {errors.genres = ""} else {errors.platforms = "the game must have at least one platform"}
    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setErrors(validate({ ...gameData, [name]: value }));
    setGameData({ ...gameData, [name]: value });
  };

  const handlePlatformChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setGameData({ ...gameData, platforms: selectedOptions });
  };

  const handleGenreChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setGameData({ ...gameData, genres: selectedOptions });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/videogames/", gameData)
    .then(res=> alert(res))
    // console.log(gameData);
    // Aquí puedes enviar los datos del videojuego al servidor o realizar otras acciones necesarias
  };

  return (
    <div className={styles.container}>
      <h1>Crear Nuevo Videojuego</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={gameData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="released">Released</label>
          <input
            type="date"
            name="released"
            value={gameData.released}
            onChange={handleInputChange}
            required
          />
          {errors.released && <span>{errors.released}</span>}
        </div>
        <br />
        <br />

        <label htmlFor="imag">Imag:</label>
        <input
          type="text"
          name="imag"
          value={gameData.imag}
          placeholder="https://imag.jpg"
          onChange={handleInputChange}
          required
        />
        {errors.imag && <span>{errors.imag}</span>}
        <br />
        <br />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={gameData.rating}
          onChange={handleInputChange}
          required
        />
        {errors.rating && <span>{errors.rating}</span>}
        <br />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          name="description"
          rows="4"
          cols="50"
          value={gameData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        {errors.description && <span>{errors.description}</span>}
        <br />
        <br />

        <label htmlFor="platforms">Platforms:</label>
        <select
          name="platforms"
          multiple
          value={gameData.platforms}
          onChange={handlePlatformChange}
          required
        >
          <option value="Xbox One">Xbox One</option>
          <option value="Xbox 360">Xbox 360</option>
          <option value="Xbox">Xbox</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="PlayStation 4">PlayStation 4</option>
          <option value="PlayStation 3">PlayStation 3</option>
          <option value="PlayStation 2">PlayStation 2</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="Nintendo 3DS">Nintendo 3DS</option>
          <option value="Nintendo DS">Nintendo DS</option>
          <option value="Nintendo 64">Nintendo 64</option>
          <option value="Game Boy Advance">Game Boy Advance</option>
          <option value="Game Boy Color">Game Boy Color</option>
          <option value="Game Boy">Game Boy</option>
          <option value="GameCube">GameCube</option>
          <option value="SNES">SNES</option>
          <option value="NES">NES</option>
          <option value="PC">PC</option>
          <option value="Linux">Linux</option>
          <option value="iOS">iOS</option>
          <option value="PS Vita">PS Vita</option>
          <option value="PSP">PSP</option>
          <option value="Wii U">Wii U</option>
          <option value="Classic Macintosh">Classic Macintosh</option>
          <option value="Apple II">Apple II</option>
          <option value="Commodore / Amiga">Commodore / Amiga</option>
          <option value="Atari 7800">Atari 7800</option>
          <option value="Atari 5200">Atari 5200</option>
          <option value="Atari 2600">Atari 2600</option>
          <option value="Atari Flashback">Atari Flashback</option>
          <option value="Atari 8-bit">Atari 8-bit</option>
          <option value="Atari ST">Atari ST</option>
          <option value="Atari Lynx">Atari Lynx</option>
          <option value="Atari XEGS">Atari XEGS</option>
          <option value="Genesis">Genesis</option>
          <option value="SEGA CD">SEGA CD</option>
          <option value="SEGA 32X">SEGA 32X</option>
          <option value="SEGA Master System">SEGA Master System</option>
          <option value="Dreamcast">Dreamcast</option>
          <option value="3DO">3DO</option>
          <option value="Jaguar">Jaguar</option>
          <option value="Game Gear">Game Gear</option>
          <option value="Neo Geo">Neo Geo</option>
        </select>
        {errors.platforms && <span>{errors.platforms}</span>}
        <br />
        <br />

        <label htmlFor="genres">Genres:</label>
        <select
          name="genres"
          multiple
          value={gameData.genres}
          onChange={handleGenreChange}
          required
        >
          <option value="4">Action</option>
          <option value="51">Indie</option>
          <option value="3">Adventure</option>
          <option value="5">RPG</option>
          <option value="10">Strategy</option>
          <option value="2">Shooter</option>
          <option value="40">Casual</option>
          <option value="14">Simulation</option>
          <option value="7">Puzzle</option>
          <option value="11">Arcade</option>
          <option value="83">Platformer</option>
          <option value="59">Massively Multiplayer</option>
          <option value="1">Racing</option>
          <option value="15">Sports</option>
          <option value="6">Fighting</option>
          <option value="28">Board Games</option>
          <option value="34">Educational</option>
          <option value="17">Card</option>
        </select>
        {errors.genres && <span>{errors.genres}</span>}
        <br />
        <br />

        <button type="submit">Crear Nuevo Videojuego</button>
      </form>
    </div>
  );
}

export default Form;
