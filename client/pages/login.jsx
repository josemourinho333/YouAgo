import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggingIn, setLoggingIn] = useState(true);

  //setEmail handler 
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  //setPass handler
  const setPassHandler = (e) => {
    setPassword(e.target.value);
  };

  //confirmPass handler
  const confirmPassHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  //login button handler
  const loginHandler = (e) => {
    e.preventDefault();
    console.log('hello tryign to log in', email, password);
    if (loggingIn) {
      if (!email || !password) {
        setError('Please enter email and password');
        return;
      }

      setError(null);
      console.log('happy path for login');
    };

    if (!loggingIn) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      setError(null);
      console.log('happy path for register');
    };
  };

  //toggle between logging in or siging up
  const switchLogInOrSignUp = (e) => {
    e.preventDefault();
    setLoggingIn(!loggingIn);
  };

  return (
    <div className="flex flex-col bg-base-300 h-screen justify-center items-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title font-extrabold text-3xl">{loggingIn ? "Login" : "Sign Up"}</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text lg:text-xl">Email</span>
              </label>
              <input value={email} onChange={(e) => setEmailHandler(e)} type="email" placeholder="email" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text lg:text-xl">Password</span>
              </label>
              <input value={password} onChange={(e) => setPassHandler(e)} type="password" placeholder="password" className="input input-bordered w-full" />
            </div>
            { !loggingIn && 
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:text-xl">Confirm Password</span>
                </label>
                <input value={confirmPassword} onChange={(e) => confirmPassHandler(e)} type="password" placeholder="password" className="input input-bordered w-full" />
              </div>
            }
            <div className="form-control mt-6 gap-y-3">
              {error && <div className="mb-1 text-error">{error}</div>}
              <button className="btn btn-info" onClick={(e) => loginHandler(e)}>{loggingIn ? "Login" : "Sign Up"}</button>
              <button className="btn">{loggingIn ? "Sign in with Google" : "Sign up with Google"}</button>
            </div>
            <div className="divider">OR</div> 
            <div className="form-control">
              <button className="btn btn-accent" onClick={(e) => switchLogInOrSignUp(e)}>{loggingIn ? "Sign Up" : "Log In"}</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login;