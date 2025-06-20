import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem,} from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";
import Home from "@/app/index";
import mockMenuData from '../mock/menu.json';
import {useEffect, useState} from "react";

interface MenuItem {
    id: number;
    name: string;
    path: string;
    icon?: string;
    children?: MenuItem[];
}

function CustomDrawerContent(props: any) {
    const [parentMenu, setParentMenu] = useState<MenuItem|null>(null);
    const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuData);

    useEffect(() => {
        if (parentMenu !== null) {
            const items = menuItems
                .find(item => item.id === parentMenu.id)
                ?.children || [];
            setMenuItems(items);
        } else {
            setMenuItems(mockMenuData);
        }
    }, [parentMenu]);

    return (
        <DrawerContentScrollView {...props}>
            {
                parentMenu !== null && (
                    <View style={styles.drawerSubTitleRow}>
                        <Ionicons
                            name="chevron-back"
                            size={24}
                            onPress={() => setParentMenu(null)}/>
                        <Text
                            style={styles.drawerSubTitleRowTitle}
                            onPress={() => setParentMenu(null)}
                        >
                            {parentMenu.name}
                        </Text>
                    </View>
                )
            }
            {
                menuItems.map((item: MenuItem) => (
                    <DrawerItem
                        key={item.id}
                        icon={_ => item.icon ? <Ionicons name={item.icon} size={24}/> : null}
                        label={item.name}
                        onPress={() => {
                            if (item.children && item.children.length > 0) {
                                setParentMenu(item);
                            } else {
                                props.navigation.push(item.path);
                            }
                        }}
                    />
                ))
            }
            <DrawerItem
                icon={_ => <Ionicons name="help-buoy-outline" size={24}/>}
                label="Help"
                onPress={() => alert('Link to help')}/>
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
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerSubTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
    },
    drawerSubTitleRowTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
