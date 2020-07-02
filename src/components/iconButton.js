import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableHighlight } from 'react-native';

const IconButton = props => {
  const { style: customStyle, onPress: onTap } = props;

  return (
    <TouchableHighlight style={customStyle} onPress={onTap}>
      <Icon name="calendar" size={40} />
    </TouchableHighlight>
  );
};

IconButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export { IconButton };
