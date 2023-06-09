import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../themes/appTheme';
import {useThemeContext} from '../context/themeContext/ThemeContext';
export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {currentTheme, colors},
  } = useThemeContext();

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />

      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          backgroundColor: colors.primary,
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        onPress={currentTheme === 'light' ? setDarkTheme : setLightTheme}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22,
          }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
