import React from 'react';
const calendarIcon = require('./calendarIcon.png');
import { View, Image, StyleSheet } from 'react-native';

const CalenderIcon = () => {
  return (
    <View>
      <Image source={calendarIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'rgba(0,0,0,0)',
    padding: '12px 16px',
  },
});

export { CalenderIcon };
