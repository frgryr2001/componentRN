import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {useThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTitle: FC<Props> = ({title}) => {
  const {
    theme: {colors},
  } = useThemeContext();
  return (
    <View
      style={{
        marginBottom: 20,
        marginTop: 20,
      }}>
      <Text
        style={{
          ...styles.title,
          color: colors.primary,
        }}>
        {title}
      </Text>
    </View>
  );
};
