const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios"); // ← pour faire des requêtes HTTP

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Une route GET sur /plants pour appeler l'API Trefle
app.get("/plants", async (req, res) => {
    try {
        const response = await axios.get(
            `https://trefle.io/api/v1/plants?token=${process.env.TOKEN}`
        );
        res.json(response.data); // renvoyer les données à ton frontend
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des plantes :",
            error.message
        );
        res.status(500).json({ error: "Impossible de récupérer les plantes" });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur Express démarré sur le port ${PORT}`);
});
