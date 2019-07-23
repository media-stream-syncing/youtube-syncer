import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './YoutubeIdInput.css';

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

class YoutubeIdInput extends React.Component {
    
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    render() {
        const classes = useStyles();
        const handleChange = name => event => {
            setValues({ ...values, [name]: event.target.value });
        };
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off"/>
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
            </div>
        );
    }
}

export default withStyles(s)(YoutubeIdInput);