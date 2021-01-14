import React from 'react';

const getTitle = (title) => title; 

const arr = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


const List = () => {
  return (
    <div>
      {arr.map((item) => 
        <div key={item.objectID}>
          <span> {item.objectID} </span>
          <span>
            <a href={item.url}> {item.title} </a>
          </span>
          <span> {item.author} </span>
          <span> {item.num_comments} </span>
          <span> {item.points} </span>
        </div>)}
    </div>
  );
};

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1> {getTitle('Hacker Stories')} </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
      <button>Procurar</button>
      <hr />
      <List />
      <List />
    </div>
  );
}

export default App;
