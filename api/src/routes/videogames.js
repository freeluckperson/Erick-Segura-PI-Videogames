const videogamesRouter = require("express").Router();

const getAllVideogames = require(`../controllers/getAllVideogames`);
const getVideogamesById = require(`../controllers/getVideogameById`);

videogamesRouter.get("/", async (req, res) => {
  try {
    let AllVideogames = await getAllVideogames();
    res.status(200).json(AllVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

videogamesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const videogame = await getVideogamesById(id);
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// videogamesRouter.get(`/:id`, async (req, res) => {
//   try {
//     const { id } = req.params;
//     res.status(200).json();
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

module.exports = videogamesRouter;
