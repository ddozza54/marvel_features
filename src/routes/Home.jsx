import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../constants';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getcharacters = async () => {
    const json = await (
      await fetch(
        `${baseURL}v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    getcharacters();
  }, []);

  return (
    <>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          {characters.map((character) => (
            <div key={character.id} className="flex">
              <Link to={`/character/${character.id}`}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
              </Link>
              <h2>{character.name}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
