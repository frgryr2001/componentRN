import React from 'react';
import {FlatList} from 'react-native';
import {View, SafeAreaView} from 'react-native';
import {styles} from '../themes/appTheme';

import {FlatListItemMenu} from '../components/FlatListItemMenu';
import {menuItems} from '../data/menuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {useThemeContext} from '../context/themeContext/ThemeContext';

export const HomeScreen = () => {
  const {
    theme: {dividerColor},
  } = useThemeContext();

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,
          borderColor: dividerColor,
        }}
      />
    );
  };
  const renderHeaderList = React.useCallback(
    () => <HeaderTitle title="Options a menu" />,
    [],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        ...styles.globalMargin,
      }}>
      <View>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <FlatListItemMenu menuItem={item} />}
          keyExtractor={item => item.name}
          ListHeaderComponent={renderHeaderList}
          ItemSeparatorComponent={() => itemSeparator()}
        />
      </View>
    </SafeAreaView>
  );
};
