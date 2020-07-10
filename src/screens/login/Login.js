import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Input, Button } from '../../components';
import { Navigation } from 'react-native-navigation';
const image = require('../../res/images/appBg.png');

const Login = props => {
  const [creds, setCreds] = useState({
    email: '',
    password: '',
  });

  const hanldeChange = name => value => {
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const onLoginClick = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.bgImage}>
        <View style={styles.formContainer}>
          <Input
            label="Email"
            onChange={hanldeChange('email')}
            value={creds.email}
            style={styles.textInput}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            onChange={hanldeChange('password')}
            value={creds.password}
            style={styles.textInput}
          />
          <Button title={'Login'} onPress={onLoginClick} />
          <Button
            title={'Register'}
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'rentals.RegisterScreen',
                },
              })
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    marginTop: 10,
  },
  textInput: {
    margin: 5,
  },
});

export { Login };
