import './App.css';
import { useState } from 'react';


const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');


  return (
    <>
  {/* Form */}
  <form method=''>
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
      <button>Add Employee</button>
      <hr />
    </div>
  </form>
  {/* Form End */}
</>
  );
}

export default App;
