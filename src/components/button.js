import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import pallete from './pallete';

const { primaryColor, commonColor } = pallete;

const Button = props => {
  const { onPress: onButtonPress, style: customStyle, title: btnText } = props;

  return (
    <TouchableOpacity onPress={onButtonPress} und>
      <View style={{ ...styles.button, ...customStyle }}>
        <Text style={styles.btnText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor.main,
    borderRadius: 25,
    padding: 10,
    width: 150,
    alignSelf: 'center',
    elevation: 8,
  },
  btnText: {
    color: commonColor.white,
    fontSize: 18,
    alignSelf: 'center',
  },
});

export { Button };
