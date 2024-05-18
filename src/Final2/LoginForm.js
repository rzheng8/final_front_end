
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginForm.css';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const checkLogin = (e) => {
//     e.preventDefault();
//     if (username === 'user' && password === 'password') {
//       navigate('/dashboard2'); // Redirect to the dashboard
//     } else {
//       alert('Invalid Username or Password!');
//     }
//   };

//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form" onSubmit={checkLogin}>
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Sign In</h3>
//           <div className="form-group mt-3">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               className="form-control mt-1"
//               id="username"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               className="form-control mt-1"
//               id="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      navigate('/dashboard2'); // Redirect to the dashboard
    } else {
      setErrorMessage('Invalid Username or Password!');
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={checkLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
          <div className="form-group mt-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control mt-1"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
