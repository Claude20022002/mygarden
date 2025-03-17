import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetcher = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/plants"
                );
                setData(response.data);
            } catch (err) {
                console.error(
                    "Erreur lors de la récupération des données :",
                    err
                );
            }
        };

        fetcher(); // ← On appelle bien la fonction
    }, []); // ← [] pour exécuter le useEffect qu'une seule fois

    return (
        <div>
            <h1>Liste des Plantes 🌱</h1>
            {data ? (
                <ul>
                    {data.data.map((plant) => (
                        <li key={plant.id}>
                            {plant.common_name || "Nom inconnu"}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    );
}
