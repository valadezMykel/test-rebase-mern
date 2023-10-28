import React, { useReducer } from "react";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg"
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg"
    }
  ];

  const [praise, givePraise] = useReducer((praiseState, inputs) => {
    console.log(inputs.dogName)
    if(inputs.dogName === 'Harry'){
      return {...praiseState, Harry: praiseState.Harry + 1}
    } else if (inputs.dogName === 'Hermione') {
      return {...praiseState, Hermione: praiseState.Hermione + 1}
    }
  },{Harry: 0, Hermione: 0})

  return (
    <div className="App">
      <div className="row mt-5">
        {dogs.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.name} has been praised {praise[item.name]} times!</p>
              <button className="btn btn-primary" onClick={() =>{ givePraise({dogName: item.name})}}>Praise</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
