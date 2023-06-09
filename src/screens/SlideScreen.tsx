import React from 'react';
import {Animated, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions, Text, View} from 'react-native';
import {ImageSourcePropType, SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimations} from '../hooks/useAnimations';
import {StackScreenProps} from '@react-navigation/stack';
import {useThemeContext} from '../context/themeContext/ThemeContext';

const {width: screenWidth} = Dimensions.get('screen');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlideScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const {opacity, fadeIn} = useAnimations();
  const isVisible = React.useRef(false);
  const {
    theme: {colors},
  } = useThemeContext();
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text
          style={{
            ...styles.title,
            color: colors.primary,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            ...styles.subTitle,
            color: colors.text,
          }}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        {isVisible && (
          <Animated.View
            style={{
              opacity,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                width: 140,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
              }}
              activeOpacity={0.8}
              onPress={() => {
                if (isVisible.current) {
                  navigation.navigate('HomeScreen');
                  isVisible.current = false;
                }
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Extra
              </Text>
              <Icon name="chevron-forward-outline" color={'white'} size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
});
