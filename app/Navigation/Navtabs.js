import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../Screens/Home';
import Nothing from '../Screens/Nothing';

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../Assets/img/ic_home.png')}
            style={styles.iconStyle}
          />
        ),
      },
    },
    Favorit: {
      screen: Nothing,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../Assets/img/ic_love2.png')}
            style={styles.iconStyle}
          />
        ),
      },
    },
    Additem: {
      screen: Nothing,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <View style={styles.centerTabButton}>
            <Icon
              name="circle-with-plus"
              size={40}
              color="#fff"
              style={styles.centerTabButtonIcon}
            />
          </View>
        ),
      },
    },
    Notification: {
      screen: Nothing,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../Assets/img/ic_chat.png')}
            style={styles.iconStyle}
          />
        ),
      },
    },
    Profile: {
      screen: Nothing,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../Assets/img/ic_person.png')}
            style={styles.iconStyle}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      labelStyle: {
        marginTop: -5,
      },
      showLabel: false,
    },
    barStyle: { backgroundColor: '#fff' },
  },
);

const styles = StyleSheet.create({
  centerTabButton: {
    marginTop: -30,
    backgroundColor: '#F6B343',
    borderRadius: 50,
    height: 70,
    width: 70,
    borderWidth: 5,
    borderColor: '#FFF',
  },
  centerTabButtonIcon: {
    lineHeight: 60,
    marginLeft: 10,
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
});

export default BottomTabs;
