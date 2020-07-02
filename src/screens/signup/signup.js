import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import {
  Input,
  Button,
  GenderPicker,
  CityPicker,
  DatePicker,
} from '../../components';
import Pallete from '../../components/pallete';

const image = require('../../res/images/SignUpBG.png');

const { primaryColor } = Pallete;

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    gender: '',
    email: '',
    city: '',
    password: '',
    dob: new Date(),
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    setUser({
      ...user,
      dob: selectedDate,
    });
  };

  const hanldeChange = name => value => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onRegisterClick = () => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(user));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.bgImage}>
        <ScrollView style={styles.formContainer}>
          <Text style={styles.heading}>Explore with us</Text>
          <Input
            label="Full Name"
            onChange={hanldeChange('name')}
            value={user.name}
            style={styles.inputItems}
          />
          <Input
            label="Email"
            onChange={hanldeChange('email')}
            value={user.email}
            style={styles.inputItems}
          />
          <GenderPicker
            style={styles.inputItems}
            selectedValue={user.gender}
            onValueChange={hanldeChange('gender')}
          />
          <Input
            label="Phone Number"
            onChange={hanldeChange('phone')}
            value={user.phone}
            style={styles.inputItems}
          />
          <CityPicker
            style={styles.inputItems}
            selectedValue={user.city}
            onValueChange={hanldeChange('city')}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            onChange={hanldeChange('password')}
            value={user.password}
            style={styles.inputItems}
          />
          <DatePicker
            show={showDatePicker}
            onChange={onDateChange}
            setShow={setShowDatePicker}
            value={user.dob}
            style={styles.inputItems}
          />
          <Button
            style={styles.inputItems}
            title={'Register'}
            onPress={onRegisterClick}
          />
        </ScrollView>
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
    position: 'relative',
  },
  formContainer: {
    width: '80%',
    marginTop: 25,
  },
  inputItems: {
    margin: 5,
  },
  heading: {
    alignSelf: 'center',
    marginBottom: 15,
    fontSize: 25,
    position: 'relative',
    color: primaryColor.main,
  },
});

export { Register };
