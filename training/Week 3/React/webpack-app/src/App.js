import React from "react";
import data from "./data";

const App = () => {
  console.log(data);

  return (
    <>
      {data.recipe.map((info) => {
        return (
          <React.Fragment key={info.idCategory}>
            <img src={info.strCategoryThumb} />
            <p>{info.strCategory}</p>
            <p>{info.strCategoryDescription}</p>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default App;
