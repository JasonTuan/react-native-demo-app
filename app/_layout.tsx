import { Stack } from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";

export default function RootLayout() {
  // return <Stack />;
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
              name="index" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: 'Home',
                title: 'Home',
              }}
          />
          <Drawer.Screen
              name="about-us" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: 'About Us',
                title: 'About Us',
              }}
          />
        </Drawer>
      </GestureHandlerRootView>
  );
}
