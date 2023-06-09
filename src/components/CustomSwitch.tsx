import React, {FC, useState} from 'react';
import {Switch} from 'react-native';
import {useThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void;
}

export const CustomSwitch: FC<Props> = ({isOn, onChange}) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const {
    theme: {colors},
  } = useThemeContext();
  const toggleSwitch = () => {
    setIsEnabled((previousState: boolean) => !previousState);
    onChange!(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
