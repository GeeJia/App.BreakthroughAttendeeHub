
import styled from "styled-components";
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: "#A2D5BD",
    secondary: "#8CB5A2", 
    danger: "#FD3636",   
    backgroundColor: "#F6F6F6",
    textInputBackgroundColor: "#E8E8E8",
    darkLight: "#9CA3AF"
};

const {primary, secondary, danger, backgroundColor, textInputBackgroundColor} = Colors;

export const Styles = StyleSheet.create({
    bodyContainer:{
        flex: 1, 
        backgroundColor: Colors.backgroundColor,
    },
    inputContainer: {
        flexDirection: 'row', 
        marginTop:20,
        paddingHorizontal:20,
    },
    inputIcon: {
        marginTop: 15,
        position: 'absolute'
    },
    input: {
        borderColor: "teal.500",
        _focus:{borderColor:"yellow.700", backgroundColor:Colors.backgroundColor},
        size:"xl",
        variant:"outline"
    },
    success: {
        borderColor: Colors.primary,
    },
    error: {
        borderColor: Colors.primary,
    },   
})



export const StyledContainer = styled.View`
    flex: 1; 
    background-color: ${backgroundColor};
    paddingHorizontal:0%;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 1px;
`;
export const InnerContainer = styled.View`
    flex:1;
    width: 100%;
    align-items: center;
    padding-top: 100px;
`;
export const PageLogo = styled.Image`
    width: 200px;
    height: 150px;
    margin-top: 50px;
    margin-bottom: 50px;`;

export const StyledFormArea = styled.View`
    width: 100%;
    marginTop: 70px;
    marginLeft: 20px;
    paddingHorizontal:5%;
`
