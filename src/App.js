// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let person = 'Mahbub Shahin';
  let style ={
    backgroundColor: 'lightSalmon',
    borderRadius: '10px',
    padding: '20px',
    margin: '50px',
    fontSize: '22px',
    width: '800px'
  }

  const heroes = ['Salman-shah', 'Shuvo', 'Shakil', 'Shahin', 'Rakib', 'Aman'];

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$45.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>{person}</h1>
        <Counter></Counter>
        <Users></Users>
        <p style={style}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis aut nesciunt quidem, explicabo velit tenetur itaque quo, sequi eos omnis quam dolore pariatur delectus saepe id similique voluptate rerum quasi molestias fugiat totam qui culpa harum earum. Aspernatur in itaque nihil explicabo quibusdam animi, sequi, ipsum, repellendus qui aperiam debitis.</p>

        <ul>
          {
            heroes.map(hero => <li>{hero}</li>)
          }
        </ul>

        <Person name='Shakil' age='26'></Person>
        <Person name='Shahin' age='27'></Person>
        <Person name='Rakib' age='25'></Person>
        <Person name='Aman' age='24'></Person>

        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
      </header>
    </div>
  );
}


function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid red', margin:'10px', padding: '10px', width:'600px'}} >
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightsalmon',
    width: '400px',
    margin: '20px',
    padding: '20px'
  }
  // const{name, price} = props.Product;
  return (
    <div style = {productStyle}>
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
