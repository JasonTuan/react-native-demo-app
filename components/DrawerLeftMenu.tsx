import * as React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList,} from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";
import AboutUs from "@/app/about-us";
import Home from "@/app/index";

function Feed() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Feed Screen</Text>
        </View>
    );
}

function Article() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Article Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            {/*<DrawerItem*/}
            {/*    icon={_ => <Ionicons name="home" size={24} color={props.color}/>}*/}
            {/*    label="Home"*/}
            {/*    onPress={() => props.navigation.push({*/}
            {/*        name: 'Home',*/}
            {/*    })}/>*/}
            <DrawerItemList {...props} />
            <DrawerItem
                icon={_ => <Ionicons name="accessibility-outline" size={24}/>}
                label="Help"
                onPress={() => alert('Link to help')}/>
            {/*<DrawerItem*/}
            {/*    icon={_ => <Ionicons name="telescope" size={24} color="red"/>}*/}
            {/*    label="About Us"*/}
            {/*    onPress={() => props.navigation.push({*/}
            {/*        name: 'About Us',*/}
            {/*    })}/>*/}
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerLeftMenu() {
    return (
        <Drawer.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                drawerActiveTintColor: 'green',
                drawerIcon: ({color, size}) => <Ionicons name="chevron-forward" size={size} color={color}/>,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="About Us" component={AboutUs}/>
            <Drawer.Screen name="Feed" component={Feed}/>
            <Drawer.Screen name="Article" component={Article}/>
        </Drawer.Navigator>
    );
}
