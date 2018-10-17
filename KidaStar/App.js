import React from 'react';
import HomeScreen from "./App/Screens/HomeScreen";
import DetailsScreen from "./App/Screens/DetailsScreen";
import LostAndFoundScreen from "./App/Screens/LostAndFoundScreen";

import {createStackNavigator} from "react-navigation";

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Credential: LostAndFoundScreen
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}