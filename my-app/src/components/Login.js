import React, { useState, useEffect } from "react";
import loginFormSchema from "../validation/loginFormSchema";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

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
`;

const initialFormValues = {
    email: "",
    password: "",
};

const initialFormErrors = {
    email: "",
    password: "",
};

const initialDisabledBtn = true;

function Login() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabledBtn, setDisabledBtn] = useState(initialDisabledBtn);

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        yup
            .reach(loginFormSchema, name)
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

    const { push } = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosWithAuth()
            .post("api/login", formValues)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                push("/todolist");
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loginFormSchema.isValid(formValues).then((valid) => {
            setDisabledBtn(!valid);
        });
    }, [formValues]);

    return (
        <form onSubmit={handleSubmit}>
            <StyledContainer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
                <div className="form-group inputs">
                    <h4>Login</h4>
                    <div>
                        <input
                            value={formValues.email}
                            onChange={onInputChange}
                            placeholder="Email"
                            name="email"
                            type="email"
                        />
                        <input
                            value={formValues.password}
                            onChange={onInputChange}
                            placeholder="Password"
                            name="password"
                            type="password"
                        />
                    </div>
                </div>
                <div className="form-group submit">
                    <div className="errors">
                        <div>{formErrors.email}</div>
                        <div>{formErrors.password}</div>
                    </div>
                    <button disabled={disabledBtn} onSubmit={handleSubmit}>
                        submit
          </button>
          Still don't have an account?
          <Link className="signup-link" to="/signup">
                        Sign Up
          </Link>
                </div>
            </StyledContainer>
        </form>
    );
}

export default Login;
