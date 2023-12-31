import React, {useState} from 'react';
import { register, login } from '../service/authService';
import '../css/login.css';

const SlideNavbar = () => {

  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    phoneNumber: '',
    role: ''
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    try {
      const response = await login(email, password);
      if (response.accessToken) {
        // Assuming the response has an accessToken field
        localStorage.setItem('accessToken', response.accessToken);
        // You can redirect the user or perform other actions upon successful login
      } else {
        // Handle case where login is not successful
        // You might want to set an error message in your state and display it to the user
      }
    } catch (error) {
      // Handle the error case
      // You might want to set an error message in your state and display it to the user
      console.error('Login failed:', error);
    }
  };

  const handleInputChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await register(signUpData);
    if (response && response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
    }
  };


  return (
    <div className="main">  
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleRegister}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="firstName" value={signUpData.firstName} onChange={handleInputChange} placeholder="First name" required />
          <input type="text" name="lastName" value={signUpData.lastName} onChange={handleInputChange} placeholder="Last name" required />
          <input type="email" name="email" value={signUpData.email} onChange={handleInputChange} placeholder="Email" required />
          <input type="password" name="password" value={signUpData.password} onChange={handleInputChange} placeholder="Password" required />
          <input type="date" name="dob" value={signUpData.dob} onChange={handleInputChange} required />
          <input type="tel" name="phoneNumber" value={signUpData.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
          <select name="role" value={signUpData.role} onChange={handleInputChange} required>
            <option value="" disabled>Choose Role</option>
            <option value="ROLE_LANDLORD">Landlord</option>
            <option value="ROLE_TENANT">Tenant</option>
          </select>
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SlideNavbar;
