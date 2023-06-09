import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MenuItem} from '../interfaces/appInterfaces';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListItemMenu: FC<Props> = ({menuItem}) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useThemeContext();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color={colors.primary} />
        <Text
          style={{
            ...styles.itemText,
            color: colors.text,
          }}>
          {menuItem.name}
        </Text>
        <View
          style={{
            flex: 1,
          }}
        />
        <Icon name="chevron-forward-outline" size={23} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
