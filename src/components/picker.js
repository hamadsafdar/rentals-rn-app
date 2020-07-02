import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from '@react-native-community/picker';
import { View, StyleSheet, Text } from 'react-native';
import { citiesList } from '../res/cities';
import pallete from './pallete';

const { commonColor } = pallete;

const GenderPicker = props => {
  const {
    selectedValue: value,
    onValueChange: onChange,
    style: pickerStyle,
  } = props;

  return (
    <View style={{ ...styles.outter, ...pickerStyle }}>
      <Text style={styles.pickerText}>Gender:</Text>
      <Picker
        style={styles.picker}
        selectedValue={value}
        onValueChange={onChange}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
    </View>
  );
};

const CityPicker = props => {
  const {
    selectedValue: value,
    onValueChange: onChange,
    style: pickerStyle,
  } = props;

  return (
    <View style={{ ...styles.outter, ...pickerStyle }}>
      <Text style={styles.pickerText}>City:</Text>
      <Picker
        style={styles.picker}
        selectedValue={value}
        onValueChange={onChange}>
        {citiesList.map((city, index) => (
          <Picker.Item key={index} label={city.city} value={city.city} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  outter: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: commonColor.black,
    borderWidth: 1,
    borderRadius: 5,
    width: 170,
  },
  picker: {
    height: 25,
    marginBottom: 3,
  },
  pickerText: { marginLeft: 5 },
});

GenderPicker.propTypes = {
  selectedValue: PropTypes.string,
  onValueChange: PropTypes.func,
  style: PropTypes.object,
};

CityPicker.propTypes = {
  selectedValue: PropTypes.string,
  onValueChange: PropTypes.func,
  style: PropTypes.object,
};

export { GenderPicker, CityPicker };
