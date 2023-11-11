import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SIgn_img from './SIgn_img';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons
import './Login.css'; // Import your CSS file for styling
import Dashboard from './pages/Dashboard';

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => ({
      ...inpval,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userlibrary");
    const { email, password } = inpval;

    if (email === "") {
      toast.error('Email field is required', {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error('Please enter a valid email address', {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error('Password field is required', {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error('Password length must be greater than five', {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid details");
        } else {
          console.log("User logged in successfully");
          history("/Dashboard");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Log IN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <div className="password-input">
                  <Form.Control type={showPassword ? 'text' : 'password'} name='password' onChange={getdata} placeholder="Password" />
                  <div className="password-toggle-button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </Form.Group>
              <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                Login
              </Button>
              <Button className='btn btn-link'  href='/' >SignUp</Button>
            </Form>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
