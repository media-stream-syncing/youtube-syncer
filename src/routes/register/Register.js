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
  let pwstor = {
    'width': '63%',
    'text-align': 'inline',
    'margin': 'auto',
    'padding': '0',
    'font-size': '12px'
  };
  return (
    <div className={s.root}>
        <div className={s.container}>
        <div className="loginBox" style={{'textAlign':'center'}}>
          <h1>Sign Up</h1>
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

          <form onSubmit={onSubmit}>
          <div style={{'textAlign':'center'}}>
          <TextField
            name="username"
            label="username"
            value={user.username}
            onChange={onChange}
          />
          </div>
          <div style={{'textAlign':'center'}}> 
          <TextField
            name="email"
            label="email"
            value={user.email}
            onChange={onChange}
          />
          </div>
          <TextField
            type={type}
            name="password"
            label="password"
            value={user.password}
            onChange={onPwChange}
          />
        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} style={pwstor}/> 
              <Button 
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              > show</Button>
            </div>
            )} 
        </div>
        <TextField
          type={type}
          name="pwconfirm"
          label="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
        />
        <br />
        <Button
          className="signUpSubmit"
          primary="true"
          type="submit"
          label="submit"
        >submit</Button>
      </form>
      
    </div>
    </div>
    </div>
        
  );
}

export default withStyles(s)(Register);
