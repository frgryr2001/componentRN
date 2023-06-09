import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimations} from '../hooks/useAnimations';
import {useThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMoving} = useAnimations();

  const {
    theme: {colors},
  } = useThemeContext();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          transform: [{translateX: position}],
          opacity,
          backgroundColor: colors.primary,
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMoving(-100);
        }}
        color={colors.primary}
      />

      <Button
        title="FadeOut"
        onPress={() => fadeOut()}
        color={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
