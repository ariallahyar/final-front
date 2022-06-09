import React from "react";
import CommunityForm from "./CommunityForm";

import entries from "../mock-entries.json";

const CommunityPage = () => {
  return (
    <>
      <h2>Community curated</h2>
      <div className="container-community">
        <section>
          {entries.results.map(({ nameOfPlace, city, comment }) => {
            return (
              <article>
                <h4>{nameOfPlace}</h4>
                <p>{city}</p>
                <p>{comment}</p>
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
