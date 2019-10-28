import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsCharacters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
               // console.log(response.data);
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log("not found", error)
            });
    }, []);

    return (
        <div className="container">
            <div className="characters-box">
            {characters.map((person, index) => {
          return <StarWarsCard key={index} name={person.name} gender={person.gender} year={person.birth_year} />;
        })}
            </div>
        </div>
    )
}

