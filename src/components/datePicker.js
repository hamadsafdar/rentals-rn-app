import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet } from 'react-native';
import { Input } from './input';
import { IconButton } from './iconButton';

const DatePicker = props => {
  const {
    value: selectedValue,
    onChange: onDateChange,
    show: showDialog,
    style: customStyle,
    setShow,
  } = props;

  return (
    <View style={{ ...styles.container, ...customStyle }}>
      <Input style={styles.input} label="Date of Birth" />
      <IconButton style={styles.iconBtn} onPress={() => setShow(true)} />
      {showDialog && (
        <DateTimePicker value={selectedValue} onChange={onDateChange} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    width: 150,
  },
  iconBtn: { margin: 5 },
});

DatePicker.propTypes = {
  show: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export { DatePicker };
