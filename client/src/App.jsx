import './App.css';
import { useState } from 'react';
import Axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [empList, setEmpList] = useState([]);

  const addEmp = () => {
    Axios.post('http://localhost:3001/create', { 
      // THe body that goes with request
      name : name,
      age: age,
      position: position,
      email: email,
    }).then(() => {
      console.log('Success');
    })
  }

  const getEmp = () => {
    Axios.get('http://localhost:3001/emplist')
    .then(res => setEmpList(res.json()))
  }

  console.log(empList);

  return (
    <>
  {/* Form */}
  <form>
    <div className="box-outer">
      <h2 className="heading">Sign Up Form</h2>
      <label htmlFor='name'>Full Name</label>
      <input
        type="text"
        name="name"
        className="input-control"
        placeholder="Enter full name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='age'>Age</label>
      <input
        type="number"
        name="age"
        className="input-control"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor='position'>Position</label>
      <input
        type="text"
        name="position"
        className="input-control"
        placeholder="Enter Position"
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor='email'>Email</label>
      <input
        type="email"
        name="email"
        className="input-control"
        placeholder="Enter email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <hr />
      <button
        onClick={addEmp}
      >
        Add Employee
      </button>
      <hr />
      <button
        onClick={getEmp}
      >
        Show Employees
      </button>
    </div>
  </form>
  {/* Form End */}
</>
  );
}

export default App;
