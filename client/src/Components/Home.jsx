import { useState} from 'react';
import Axios from 'axios';


const Home = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [empList, setEmpList] = useState([]);
  const [active, setActive] = useState(false);

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

  const fetchEmployeeList = () => {
    Axios.get('http://localhost:3001/emplist')
      .then((response) => {
        console.log(response.data); // Log the response data
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleButtonClick = () => {
    // Call the function to fetch the employee list
    setActive(!active);
    fetchEmployeeList();
  };
  

  return (
    <>
  {/* Form */}
  <form onSubmit={(e) => e.preventDefault()}>
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
        onClick={handleButtonClick}
      >
        Show Employees
      </button>
    </div>
  </form>
  {/* Form End */}
  <div className='content'
    style={{
      display : active ? 'block' : 'none'
    }}
  >
    <h1>Employee List</h1>
    {empList.map((employee) => (
      <div key={employee.id}>
        <p>Name: {employee.name}</p>
        <p>Age: {employee.age}</p>
        <p>Position: {employee.position}</p>
        <p>Email: {employee.email}</p>
        <hr />
      </div>
    ))}
  </div>
</>
  );
}

export default Home;
