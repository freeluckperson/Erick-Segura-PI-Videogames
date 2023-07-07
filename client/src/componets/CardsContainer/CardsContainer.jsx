import React from 'react'
import { Card } from '../'
import styles from './CardsContainer.module.css'

const videoGames = [
  {
    "id": "54e5093a-7e65-4e3a-bec1-eb48f6c561e9",
    "name": "Choza fresca IIV",
    "imag": "https.jpg",
    "rating": 4,
    "genres": [
      "Massively Multiplayer"
    ]
  },
  {
    "id": "bebad3f6-2568-4bfd-b94c-ec1726ec9e13",
    "name": "Subiendo la loma",
    "imag": "https.jpg",
    "rating": 3,
    "genres": [
      "Indie"
    ]
  },
  {
    "id": 58617,
    "name": "Borderlands 3",
    "released": "2019-09-13",
    "rating": 3.9,
    "imag": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    "genres": [
      "Shooter",
      "Adventure",
      "Action",
      "RPG"
    ],
    "platforms": [
      "PC",
      "PlayStation 5",
      "Xbox One",
      "PlayStation 4",
      "Xbox Series S/X"
    ]
  },
  {
    "id": 326252,
    "name": "Gears 5",
    "released": "2019-09-10",
    "rating": 3.93,
    "imag": "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
    "genres": [
      "Shooter",
      "Action"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "Xbox Series S/X"
    ]
  },
  {
    "id": 258322,
    "name": "Blasphemous",
    "released": "2019-09-09",
    "rating": 4.04,
    "imag": "https://media.rawg.io/media/games/b01/b01aa6b2d6d4f683203e9471a8b8d5b5.jpg",
    "genres": [
      "Indie",
      "Platformer",
      "Adventure",
      "Action"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "macOS",
      "Linux"
    ]
  },
  {
    "id": 14211,
    "name": "Children of Morta",
    "released": "2019-09-03",
    "rating": 3.94,
    "imag": "https://media.rawg.io/media/games/434/43431e04f0cd5419a3d8e31a5c8c3d5d.jpg",
    "genres": [
      "Indie",
      "Adventure",
      "Action",
      "RPG"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "macOS",
      "Linux"
    ]
  },
  {
    "id": 295019,
    "name": "GreedFall",
    "released": "2019-09-10",
    "rating": 3.36,
    "imag": "https://media.rawg.io/media/games/c68/c6842e7b1e4a8c5fdff79504b7284e49.jpg",
    "genres": [
      "Adventure",
      "Action",
      "RPG"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4"
    ]
  },
  {
    "id": 58637,
    "name": "Code Vein",
    "released": "2019-09-26",
    "rating": 3.57,
    "imag": "https://media.rawg.io/media/games/16a/16a81cc458b0acb6ed2bcfd2a10f1527.jpg",
    "genres": [
      "Action",
      "RPG"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4"
    ]
  },
  {
    "id": 59637,
    "name": "Untitled Goose Game",
    "released": "2019-09-20",
    "rating": 4.05,
    "imag": "https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg",
    "genres": [
      "Indie",
      "Family",
      "Action",
      "Puzzle"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "macOS"
    ]
  },
  {
    "id": 326229,
    "name": "FIFA 20",
    "released": "2019-09-27",
    "rating": 3.18,
    "imag": "https://media.rawg.io/media/games/031/031af38e6a558d4cd4bf91ee80904cdf.jpg",
    "genres": [
      "Sports"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch"
    ]
  },
  {
    "id": 338386,
    "name": "NBA 2K20",
    "released": "2019-09-05",
    "rating": 3.07,
    "imag": "https://media.rawg.io/media/games/fdb/fdb65025dee2f0edb8c2b587afaff853.jpg",
    "genres": [
      "Action",
      "Simulation",
      "Sports"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "iOS",
      "Android"
    ]
  },
  {
    "id": 58861,
    "name": "The Surge 2",
    "released": "2019-09-24",
    "rating": 3.58,
    "imag": "https://media.rawg.io/media/games/24b/24bf67a50cb870ed6aad844f8b276115.jpg",
    "genres": [
      "Adventure",
      "Action",
      "RPG"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4"
    ]
  },
  {
    "id": 292842,
    "name": "The Legend of Zelda: Link's Awakening (2019)",
    "released": "2019-09-20",
    "rating": 4.34,
    "imag": "https://media.rawg.io/media/games/1bb/1bb38f1354db6596ccd6bdcb4a7f6cbc.jpg",
    "genres": [
      "Adventure",
      "Action",
      "RPG"
    ],
    "platforms": [
      "Nintendo Switch"
    ]
  },
  {
    "id": 367197,
    "name": "Ni no Kuni: Wrath of the White Witch Remastered",
    "released": "2019-09-19",
    "rating": 4.08,
    "imag": "https://media.rawg.io/media/games/0b8/0b8beb60852f43eb3e5e57b1b7ce209d.jpg",
    "genres": [
      "RPG"
    ],
    "platforms": [
      "PC",
      "PlayStation 4",
      "Nintendo Switch"
    ]
  },
  {
    "id": 327269,
    "name": "eFootball PES 2020",
    "released": "2019-09-10",
    "rating": 3.2,
    "imag": "https://media.rawg.io/media/games/2ed/2ed38a102fe66a0ea98a8e09c660a458.jpg",
    "genres": [
      "Sports"
    ],
    "platforms": [
      "PC",
      "PlayStation 4",
      "iOS",
      "Android"
    ]
  },
  {
    "id": 263548,
    "name": "Little Misfortune",
    "released": "2019-09-17",
    "rating": 3.93,
    "imag": "https://media.rawg.io/media/games/669/6691144e293eebc308d86ca3c8317c5a.jpg",
    "genres": [
      "Casual",
      "Indie",
      "Adventure"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "iOS",
      "Linux"
    ]
  },
  {
    "id": 275636,
    "name": "Daymare: 1998",
    "released": "2019-09-16",
    "rating": 2.65,
    "imag": "https://media.rawg.io/media/games/52c/52cd2071a3d6b9930bf7453cc3832bee.jpg",
    "genres": [
      "Indie",
      "Adventure",
      "Action"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4"
    ]
  },
  {
    "id": 274757,
    "name": "Sayonara Wild Hearts",
    "released": "2019-09-19",
    "rating": 4.39,
    "imag": "https://media.rawg.io/media/games/77c/77ca75b962f0ca9f7de6eb03814d6b5b.jpg",
    "genres": [
      "Casual",
      "Indie",
      "Action"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "iOS",
      "macOS"
    ]
  },
  {
    "id": 15056,
    "name": "Police Stories",
    "released": "2019-09-18",
    "rating": 3.38,
    "imag": "https://media.rawg.io/media/screenshots/9e1/9e11b9a8958de594c9e294fd0e569c7e.jpg",
    "genres": [
      "Shooter",
      "Action",
      "Strategy",
      "Simulation",
      "Indie"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "macOS",
      "Linux"
    ]
  },
  {
    "id": 244694,
    "name": "Catherine: Full Body",
    "released": "2019-09-03",
    "rating": 4.17,
    "imag": "https://media.rawg.io/media/games/f55/f5532538a538a505204fd4f3f2b19c1c.jpg",
    "genres": [
      "Adventure",
      "Action",
      "RPG",
      "Puzzle"
    ],
    "platforms": [
      "PlayStation 4",
      "Nintendo Switch",
      "PS Vita"
    ]
  },
  {
    "id": 302836,
    "name": "AI: The Somnium Files",
    "released": "2019-09-17",
    "rating": 4.26,
    "imag": "https://media.rawg.io/media/screenshots/e03/e035196b873383c7cb7d868f2a73a24c.jpg",
    "genres": [
      "Adventure"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch"
    ]
  },
  {
    "id": 372700,
    "name": "Rebel Cops",
    "released": "2019-09-17",
    "rating": 3.65,
    "imag": "https://media.rawg.io/media/screenshots/309/3091c8ba532fd7f6e13a8ce83601a887.jpg",
    "genres": [
      "Strategy",
      "RPG"
    ],
    "platforms": [
      "PC",
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "iOS",
      "macOS"
    ]
  }
] 

const CardsContainer = () => {
  return (
    <div className={styles.container}>
      {videoGames.map((vg) => {
        return <Card name={vg.name} imag={vg.imag} genres={vg.genres} />;
      })}
    </div>
  );
};

export default CardsContainer;
