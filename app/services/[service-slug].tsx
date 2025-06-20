import {Text, View} from 'react-native';
import {useLocalSearchParams, useRouter} from "expo-router";

interface ServiceDetailUrlParams {
    serviceSlug: string;
}

export default function ServiceDetail() {
    const parames = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Service Detail Screen {parames.serviceSlug}</Text>
        </View>
    )
}
