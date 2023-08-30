// import logo from "./logo.svg";
import "../App.css";
import { useState } from "react";
import _ from "lodash";

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      person: "Tom",
      age: 30,
    },
    {
      id: 2,
      person: "Jane",
      age: 20,
    },
  ]);

  const [object, setObject] = useState({
    id: 1,
    animal: "cat",
    color: "black",
  });

  const handleUpdateOne = () => {
    let arr = [...state];
    arr[1] = { id: 3, person: "Jack", age: 45 };
    setState(arr);
  };

  const handleUpdateTwo = () => {
    setObject({ ...object, animal: "dog", color: "brown" });
  };

  //2a
  const arrOne = [
    {
      id: 20,
      name: "alex",
    },
    {
      id: 30,
      name: "alina",
    },
  ];

  const arrTwo = [
    {
      id: 40,
      name: "hello",
    },
    {
      id: 30,
      name: "world",
    },
  ];

  let result = _.xorBy(arrOne, arrTwo, "id");
  let res = _.filter(_.concat(arrOne, arrTwo), ["id", 30]);

  //2b
  const str = ["u", "ec"];
  const arr = [
    {
      storageVal: "u",
      table: ["E", "F"],
    },
    {
      storageVal: "data",
      table: ["E", "F"],
    },
    {
      storageVal: "ec",
      table: ["E"],
    },
  ];

  let ans2b = [];
  _.forEach(arr, function (arrValue, arrKey) {
    _.forEach(str, function (strValue, strKey) {
      if (strValue === arrValue.storageVal) {
        ans2b = _.concat(ans2b, arrValue.table);
      }
    });
  });

  //2c
  const a = [["E"], ["F"]];
  let ans2c = _.flattenDeep(a);

  //2d
  const t = [
    ["E", "F"],
    [["F"], ["G"]],
  ];
  let ans2d = _.uniq(_.flattenDeep(t));

  return (
    <>
      <div>
        1.1
        {state.map((ele) => {
          return (
            <p key={ele.id}>
              {ele.person}, {ele.age}
            </p>
          );
        })}
        <button onClick={handleUpdateOne}>Update</button>
        <hr />
      </div>
      <div>
        1.2
        <p key={object.id}>
          {object.color} {object.animal}
        </p>{" "}
        <button onClick={handleUpdateTwo}>Update</button>
        <hr />
      </div>
      <div>
        2a
        <p>{JSON.stringify(result)}</p>
        <p>{JSON.stringify(res)}</p>
        <hr />
      </div>
      <div>
        2b
        <p>{JSON.stringify(ans2b)}</p>
        <hr />
      </div>
      <div>
        2c
        <p>{JSON.stringify(ans2c)}</p>
        <hr />
      </div>
      <div>
        2d
        <p>{JSON.stringify(ans2d)}</p>
        <hr />
      </div>
    </>
  );
}

export default App;
