import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import Home from './Stacks/HomeTemp'
import Categories from './Stacks/CategoryTemp'
import INTRO from './Stacks/Intro'
import Account from './Stacks/Settings'
import Wishlist from './Stacks/wishlist'
import BottomIconImage from '../../common/BottomIconImage'
import { store } from '../../redux/store/index'
import { Platform } from 'react-native'

const TabBarComponent = props => <BottomTabBar {...props} />
AppDrawer = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: store.getState().appConfig.languageJson.Home,
        tabBarIcon: ({ tintColor }) => (
          <BottomIconImage
            color={tintColor}
            iconName={'home-outline'}
          />
        )
      })
    },
    Categories: {
      screen: Categories,
      navigationOptions: () => ({
        tabBarLabel: store.getState().appConfig.languageJson.Categories,
        tabBarIcon: ({ tintColor }) => (
          <BottomIconImage
            color={tintColor}
            iconName={'grid-outline'}
          />
        )
      })
    },
    Wishlist: {
      screen: Wishlist,
      navigationOptions: () => ({
        tabBarLabel: store.getState().appConfig.languageJson.Wishlist,
        tabBarIcon: ({ tintColor }) => (
          <BottomIconImage
            color={tintColor}
            iconName={'heart-outline'}
          />
        )
      })
    },
    Account: {
      screen: Account,
      navigationOptions: () => ({
        tabBarLabel: store.getState().appConfig.languageJson.Account,
        tabBarIcon: ({ tintColor }) => (
          <BottomIconImage
            color={tintColor}
            iconName={'person-outline'}
          />
        )
      })
    }
  },
  {
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        activeTintColor={store.getState().appConfig.themeStyle.primary}
        inactiveTintColor={store.getState().appConfig.themeStyle.iconPrimaryColor}
        style={{
          backgroundColor: store.getState().appConfig.themeStyle.primaryBackgroundColor,
          borderTopWidth: 0, // remove top border in android
          elevation: 9,
          shadowColor: store.getState().appConfig.themeStyle.primary,
          shadowOpacity: 0.2,
          shadowOffset: {
            height: 0
          },
          shadowRadius: 4
        }}
        labelStyle={{
          marginTop: Platform.OS === 'android' ? -7 : -2,
          marginBottom: Platform.OS === 'android' ? 9 : 0
        }}
      />
    )
  }
)

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: INTRO,
    App: AppDrawer
  })
)
