// import { useLogger } from "@react-navigation/devtools";
import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Button } from "react-native-web";

const linkingOptions = {
  config: {
    screens: {
      Home: "",
      Detail: "detail",
    },
  },
};

export default function App() {
  const navigationRef = useNavigationContainerRef();

  // useLogger(navigationRef);

  return (
    <NavigationContainer ref={navigationRef} linking={linkingOptions}>
      <RootStack />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="go to Detail"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
    </View>
  );
}

function DetailScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text>Detail Screen</Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
