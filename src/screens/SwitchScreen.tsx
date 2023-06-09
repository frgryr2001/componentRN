import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';
import {useThemeContext} from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {
    theme: {colors},
  } = useThemeContext();

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.switchText,
            color: colors.text,
          }}>
          isActive
        </Text>
        <CustomSwitch
          isOn
          onChange={(value: boolean) => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.switchText,
            color: colors.text,
          }}>
          isHungry
        </Text>
        <CustomSwitch
          isOn
          onChange={(value: boolean) => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text
          style={{
            ...styles.switchText,
            color: colors.text,
          }}>
          isHappy
        </Text>
        <CustomSwitch
          isOn
          onChange={(value: boolean) => onChange(value, 'isHappy')}
        />
      </View>
      <Text
        style={{
          ...styles.switchText,
          color: colors.text,
        }}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  switchText: {fontSize: 25},
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical: 10,
  },
});
