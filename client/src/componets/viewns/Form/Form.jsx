import React, { useState } from "react";

const Form = () => {
  const [game, setGame] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    releaseDate: "",
    rating: "",
    genres: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setGame((prevGame) => ({
    //   ...prevGame,
    //   [name]: value,
    // }));
    setGame(([name] = value));
  };

  const handleGenresChange = (event) => {
    const selectedGenres = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setGame((prevGame) => ({
      ...prevGame,
      genres: selectedGenres,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los campos del formulario
    const newErrors = {};

    if (game.name.trim() === "") {
      newErrors.name = "El nombre es requerido";
    }

    if (game.image.trim() === "") {
      newErrors.image = "La imagen es requerida";
    }

    if (game.description.trim() === "") {
      newErrors.description = "La descripción es requerida";
    }

    if (game.platforms.trim() === "") {
      newErrors.platforms = "Las plataformas son requeridas";
    }

    if (game.releaseDate.trim() === "") {
      newErrors.releaseDate = "La fecha de lanzamiento es requerida";
    }

    if (game.rating.trim() === "") {
      newErrors.rating = "El rating es requerido";
    }

    if (game.genres.length === 0) {
      newErrors.genres = "Debe seleccionar al menos un género";
    }

    setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //   // Crear el objeto de videojuego con los valores del formulario
    //   const newGame = {
    //     name: game.name,
    //     image: game.image,
    //     description: game.description,
    //     platforms: game.platforms,
    //     releaseDate: game.releaseDate,
    //     rating: game.rating,
    //     genres: game.genres,
    //   };

    //   // Hacer algo con el objeto de videojuego (por ejemplo, enviarlo a un servidor)
    //   console.log(newGame);
    // }
  };

  return (
    <div>
      <h1>Crear Nuevo Videojuego</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={game.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <br />

        <label>
          Imagen:
          <input
            type="text"
            name="image"
            value={game.image}
            onChange={handleChange}
            required
          />
          {errors.image && <span>{errors.image}</span>}
        </label>
        <br />

        <label>
          Descripción:
          <textarea
            name="description"
            value={game.description}
            onChange={handleChange}
            required
          />
          {errors.description && <span>{errors.description}</span>}
        </label>
        <br />

        <label>
          Plataformas:
          <input
            type="text"
            name="platforms"
            value={game.platforms}
            onChange={handleChange}
            required
          />
          {errors.platforms && <span>{errors.platforms}</span>}
        </label>
        <br />

        <label>
          Fecha de Lanzamiento:
          <input
            type="date"
            name="releaseDate"
            value={game.releaseDate}
            onChange={handleChange}
            required
          />
          {errors.releaseDate && <span>{errors.releaseDate}</span>}
        </label>
        <br />

        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={game.rating}
            min="1"
            max="5"
            onChange={handleChange}
            required
          />
          {errors.rating && <span>{errors.rating}</span>}
        </label>
        <br />

        <label>
          Géneros:
          <select
            multiple
            name="genres"
            value={game.genres}
            onChange={handleGenresChange}
            required
          >
            <option value="accion">Acción</option>
            <option value="aventura">Aventura</option>
            <option value="estrategia">Estrategia</option>
            <option value="rpg">RPG</option>
            <option value="deportes">Deportes</option>
          </select>
          {errors.genres && <span>{errors.genres}</span>}
        </label>
        <br />

        <button type="submit">Crear Videojuego</button>
      </form>
    </div>
  );
};

export default Form;

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// import axios from "axios";
// import styles from "./Form.module.css";
// import React, { useState } from "react";

// const Form = () => {
//   const [form, setForm] = useState({
//     email: "",
//     name: "",
//     imag: "",
//     rating: "",
//     released: "",
//     description: "",
//     platforms: [],
//     genres: [],
//   });

//   const [errors, setErrors] = useState({
//     email: "",
//     name: "",
//     imag: "",
//     rating: "",
//     released: "",
//     description: "",
//     platforms: [],
//     genres: [],
//   });

//   //el handler lee lo que escribo en el input y lo guarda en el estado
//   const handlerChange = (event) => {
//     validate({ ...form, [event.target.name]: event.target.value });
//     setForm({ ...form, [event.target.name]: event.target.value });
//   };

//   const validate = (form) => {
//     if (/\S+@\S+\.\S+/.test(form.email)) {
//       setErrors({ ...errors, email: "" });
//     } else {
//       setErrors({ ...errors, email: "Hay un error en email" });
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     // axios.post("http://localhost:3001/videogames/", form)
//     // .then(res => alert(res))
//     // .catch(err => alert(err))
//     console.log(form);
//   };

//   return (
//     <form onSubmit={submitHandler} className={styles.container}>
//       <div>
//         <label>email: </label>
//         <input
//           className={styles.inputs}
//           type="text"
//           value={form.email}
//           onChange={handlerChange}
//           name="email"
//         />
//         <span>{errors.email && errors.email}</span>
//       </div>

//       <div>
//         <label>name: </label>
//         <input
//           className={styles.inputs}
//           placeholder="name"
//           type="text"
//           value={form.name}
//           onChange={handlerChange}
//           name="name"
//         />
//       </div>

//       <div>
//         <label>imag: </label>
//         <input
//           className={styles.inputs}
//           placeholder="https://wallpapercave.com/wp/T7EjKt1.jpg"
//           type="text"
//           value={form.imag}
//           onChange={handlerChange}
//           name="imag"
//         />
//       </div>

//       <div>
//         <label>rating: </label>
//         <select
//           className={styles.inputs}
//           name="rating"
//           onChange={handlerChange}
//           value={form.rating}
//         >
//           <option hidden>Select Rating</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//         </select>
//       </div>

//       <div>
//         <label>released: </label>
//         <input
//           className={styles.inputs}
//           placeholder="ej: 4/7/2023"
//           type="text"
//           value={form.released}
//           onChange={handlerChange}
//           name="released"
//         />
//       </div>

//       <div>
//         <label>platforms: </label>
//         <input
//           className={styles.inputs}
//           placeholder="platforms"
//           type="text"
//           value={form.platforms}
//           onChange={handlerChange}
//           name="platforms"
//         />
//       </div>

//       <div>
//         <label>genres: </label>
//         <input
//           placeholder="genres"
//           type="checkbox"
//           value={form.genres}
//           onChange={handlerChange}
//           name="genres"
//         />
//       </div>

//       <button type="submit">SUBMIT </button>
//     </form>
//   );
// };

// export default Form;
