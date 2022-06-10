import React, { useEffect, useState } from "react";
import CommunityForm from "./CommunityForm";

const CommunityPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch("https://arieats.herokuapp.com/recommendations")
      .then((res) => res.json())
      .then((data) => setRecommendations(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Community curated</h2>
      <div className="container-community">
        <section>
          {recommendations.map(({ nameOfPlace, city, comment, website }) => {
            return (
              <article>
                <h4>{nameOfPlace}</h4>
                <p>{city}</p>
                <p>{comment}</p>
                <a href={website} target={"_blank"} rel="noreferrer">
                  {website}
                </a>
              </article>
            );
          })}
        </section>
        <CommunityForm />
      </div>
    </>
  );
};

export default CommunityPage;
