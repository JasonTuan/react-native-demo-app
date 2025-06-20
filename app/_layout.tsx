import {GestureHandlerRootView} from "react-native-gesture-handler";
import DrawerLeftMenu from "@/components/DrawerLeftMenu";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <DrawerLeftMenu />
        </GestureHandlerRootView>
    );
}
