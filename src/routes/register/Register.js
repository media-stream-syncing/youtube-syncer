import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PasswordStr from "./PasswordStr";
import "./Register.css";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function Register({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) {
  const classes = useStyles();
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className="loginBox">
          <h1>Sign Up</h1>
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

          <form onSubmit={onSubmit}>
          <TextField
            name="username"
            floatingLabelText="user name"
            value={user.username}
            onChange={onChange}
            errorText={errors.username}
          />
          <TextField
            name="email"
            floatingLabelText="email"
            value={user.email}
            onChange={onChange}
            errorText={errors.email}
          />
          <TextField
            type={type}
            name="password"
            floatingLabelText="password"
            value={user.password}
            onChange={onPwChange}
            errorText={errors.password}
          />
        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} /> 
              <Button 
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              />
            </div>
            )} 
        </div>
        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br />
        <Button
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
        
      </div>
    </div>
  );
}

export default withStyles(s)(Register);
