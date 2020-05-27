import React, { useState, useEffect } from "react";
import signUpFormSchema from "../validation/signUpFormSchema";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledContainer = styled.div`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px auto;
  padding: 16px 8px 12px 16px;
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div.inputs {
    display: flex;
    flex-direction: column;
  }
  div.already {
    font-size: 12px;
    margin-top: 2%;
  }
  div.already p {
    margin: 0;
  }

  div.signUpLogin {
    display: flex;
    justify-content: center;
  }
  div.signUpLogin p {
    margin: 0;
  }
`;

const initialFormValues = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

const initialDisabledBtn = true;

function SignUp() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabledBtn, setDisabledBtn] = useState(initialDisabledBtn);

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(signUpFormSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(...formValues);
    axiosWithAuth()
      .post("/api/register", formValues)
      .then((res) => {
        console.log("SIGNUP- RES:", res);
      })
      .catch((err) => console.log("SIGNUP ERROR:", err));
  };

  useEffect(() => {
    signUpFormSchema.isValid(formValues).then((valid) => {
      setDisabledBtn(!valid);
    });
  }, [formValues]);

  return (
    <StyledContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="form-group inputs">
        <h4>Sign Up</h4>
        <div>
          <input
            value={formValues.email}
            onChange={onInputChange}
            placeholder="Email"
            name="email"
            type="email"
          />
          {/* <label>Username:
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label> */}
          <input
            value={formValues.password}
            onChange={onInputChange}
            placeholder="Password"
            name="password"
            type="password"
          />
          <input
            value={formValues.passwordConfirmation}
            onChange={onInputChange}
            placeholder="Confirm Password"
            name="passwordConfirmation"
            type="password"
          />
        </div>
        <div className="already">
          <p>Already have an account?</p>
          <Link className="signup-link" to="/login">
            Log In
          </Link>
        </div>
      </div>
      <div className="form-group submit">
        <div className="errors">
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.passwordConfirmation}</div>
        </div>
        <button disabled={disabledBtn} onSubmit={handleSubmit}>
          submit
        </button>
      </div>
    </StyledContainer>
  );
}

export default SignUp;
