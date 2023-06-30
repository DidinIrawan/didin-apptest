const { createStackNavigator, CardStyleInterpolators } = require("@react-navigation/stack");
const { default: Index } = require("../Screen/Index");
const { default: EditContact } = require("../Screen/EditContact");
const { default: AddContact } = require("../Screen/AddContact");

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                <Stack.Screen
                    name='Index'
                    component={Index}
                />
                <Stack.Screen
                    name='EditContact'
                    component={EditContact}
                />
                <Stack.Screen
                    name='AddContact'
                    component={AddContact}
                />
            </Stack.Navigator>
        </>
    )
}

export default AppStack;