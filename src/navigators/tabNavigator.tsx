import React from 'react'
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../repositories/firebase'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import SearchTweetScreen from '../screens/SearchTweetScreen'
import UserScreen from '../screens/UserScreen'
import UpdateUserScreen from '../screens/UpdateUserScreen'
import CreateTweetScreen from '../screens/CreateTweetScreen'
import TweetScreen from '../screens/TweetScreen'
import FollowListScreen from '../screens/FollowListScreen'

const Stack = createStackNavigator()

const TimelineStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main" mode="modal">
    <Stack.Screen
      name="Main"
      component={HomeScreen}
      options={{
        // eslint-disable-next-line react/display-name
        headerTitle: () => <AntDesign name="twitter" size={30} color="#1da1f2" />,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="CreateTweet"
      component={CreateTweetScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const HomeStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={TimelineStackNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Tweet"
      component={TweetScreen}
      options={{
        headerTitle: 'γγ€γΌγ',
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="User"
      component={UserScreen}
      options={{
        headerTitle: null,
        headerBackTitleVisible: false,
        headerTransparent: true,
      }}
    />
    <Stack.Screen
      name="UpdateUser"
      component={UpdateUserScreen}
      options={{
        headerTitle: 'ε€ζ΄',
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="FollowList"
      component={FollowListScreen}
      options={{
        headerBackTitleVisible: false,
        headerStyle: {
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="CreateTweet"
      component={CreateTweetScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const SearchStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SearchTweet"
      component={SearchTweetScreen}
      options={{
        headerTitle: null,
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Tweet"
      component={TweetScreen}
      options={{
        headerTitle: 'γγ€γΌγ',
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="User"
      component={UserScreen}
      options={{
        headerTitle: 'γγ€γΌγ',
        headerBackTitleVisible: false,
        headerTransparent: true,
      }}
    />
    <Stack.Screen
      name="UpdateUser"
      component={UpdateUserScreen}
      options={{
        headerTitle: 'ε€ζ΄',
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="FollowList"
      component={FollowListScreen}
      options={{
        headerBackTitleVisible: false,
        headerStyle: {
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="CreateTweet"
      component={CreateTweetScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const UserStackNavigator = () => {
  const [user] = useAuthState(auth)
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={UserScreen}
        options={{
          headerTitle: null,
          headerBackTitleVisible: false,
          headerTransparent: true,
        }}
        initialParams={{ uid: user?.uid }}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerTitle: null,
          headerBackTitleVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="UpdateUser"
        component={UpdateUserScreen}
        options={{
          headerTitle: 'ε€ζ΄',
          headerBackTitleVisible: false,
        }}
        initialParams={{ uid: user?.uid }}
      />
      <Stack.Screen
        name="FollowList"
        component={FollowListScreen}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    tabBarOptions={{ showLabel: false }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === 'HomeTab') {
          return <MaterialCommunityIcons name="home" size={24} color={focused ? '#1da1f2' : 'gray'} />
        }
        if (route.name === 'SearchTab') {
          return <MaterialIcons name="search" size={24} color={focused ? '#1da1f2' : 'gray'} />
        }
        if (route.name === 'UserTab') {
          return <MaterialCommunityIcons name="account" size={24} color={focused ? '#1da1f2' : 'gray'} />
        }
      },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
    <Tab.Screen name="SearchTab" component={SearchStackNavigator} />
    <Tab.Screen name="UserTab" component={UserStackNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
