import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../constants';

export default function CharacterDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState();
  const getDetails = async () => {
    const json = await (
      await fetch(`${baseURL}v1/public/characters/${id}`)
    ).json();
    setDetail(json.data.results);
    console.log(json.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {isLoading ? (
        <h4>Loading....</h4>
      ) : (
        <div>
          {detail.map((details) => (
            <div>
              <h1>{details.name}</h1>
              <img
                src={`${details.thumbnail.path}.${details.thumbnail.extension}`}
              />
              <p>
                {details.description ? details.description : 'No Description'}
              </p>
              {/* <h4>Comics</h4>
              {details.comics.items.map((comic) => (
                <div>
                  <h4>{comic.name}</h4>
                  <span>{comic.resourceURL}</span>
                </div>
              ))} */}
              {/* <h4>Stories</h4>
              {details.stories.items.map((story, i) => (
                <div key={i}>
                  <h4>{story.name}</h4>
                  <img src={`${story.resourceURI}`.jpg} />
                  <span>{story.resourceURI}</span>
                </div>
              ))} */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
