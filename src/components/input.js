import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, View } from 'react-native';
import pallete from './pallete';

const { grey, commonColor } = pallete;

const Input = props => {
  const {
    label: placeholderText,
    onChange: onChangeHandler,
    style,
    ...rest
  } = props;

  return (
    <View style={[styles.outter, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderText}
        onChangeText={onChangeHandler}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outter: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: commonColor.black,
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput: {
    borderBottomColor: grey.dark,
    borderBottomWidth: 1,
    margin: 5,
    height: 35,
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

Input.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: 'Label',
  onChangeHandler: () => alert('No Function passed'),
};

export { Input };
