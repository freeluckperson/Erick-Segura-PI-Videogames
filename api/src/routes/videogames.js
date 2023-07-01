const videogamesRouter = require("express").Router();

const getAllVideogames = require(`../controllers/getAllVideogames`);


videogamesRouter.get("/", async (req, res) => {
  try {
    let AllVideogames = await getAllVideogames();
    res.status(200).json(AllVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



module.exports = videogamesRouter;
