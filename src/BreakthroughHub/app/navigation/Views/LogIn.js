import React from "react";
import { NativeBaseProvider,Center, Box, VStack,HStack, Input, FormControl, Icon, Pressable, Link, Button,Text, View} from 'native-base';
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    PageLogo,
    Colors,
    Styles
} from './../../components/styles'


const LogIn = props => {
    const [show, setShow] = React.useState(false);
    return (
        <SafeAreaView style={Styles.bodyContainer}> 
            <NativeBaseProvider>
                <Box safeArea p="8" w="100%" maxW="550" py="8">
                    <Center><PageLogo source={require('./../../assets/breakthrough-logo.png')}/></Center>
                    <VStack space={7} mt="10">
                        <FormControl>
                                                 
                            <Input borderColor="teal.500" _focus={{borderColor:"yellow.700", backgroundColor:Colors.backgroundColor}} variant="outline" size="xl" 
                                    InputRightElement={<Icon as={<MaterialCommunityIcons name="account" />} size={5} mr="2" color="yellow.700" />} 
                                    placeholder="Enter Username" />
                        </FormControl>
                        <FormControl>
                            <Input borderColor="teal.500" _focus={{borderColor:"yellow.700", backgroundColor:Colors.backgroundColor}} size="xl" type={show ? "text" : "password"} 
                                        InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                        <Icon as={<MaterialCommunityIcons name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="yellow.700" />
                                        </Pressable>} placeholder="Enter Password" />
                                <Link _text={{
                                    fontSize: "md",
                                    fontWeight: "500",
                                    color:"teal.700"
                                    }} alignSelf="flex-end" mt="1">
                                    Forget Password?
                                </Link>
                        </FormControl>
                        {["lg"].map(size =>
                        <Button mt="1" colorScheme="teal" key={size} size={size} onPress={()=> props.navigation.navigate('MainContainer')} >
                            Sign in
                        </Button>)}
                        <HStack mt="1" justifyContent="center">
                            <Text fontSize="lg" color="yellow.700" _dark={{
                            color: "warmGray.200"
                             }}>
                            I'm a new user.{" "}
                            </Text>
                            <View>
                                <TouchableOpacity>
                                <Text underline fontSize="lg" color="teal.700" onPress={()=> props.navigation.navigate('SignUp')}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </HStack>
                    </VStack>
                </Box>
                <Center><Box mt='20%'><Text color="muted.300" fontSize="md">{'\u00A9'}KingdomOfGod2023</Text></Box></Center>
            </NativeBaseProvider>
        </SafeAreaView>
     );
};

export default LogIn;