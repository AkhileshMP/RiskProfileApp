import { StyleSheet, Platform } from 'react-native';
import {Constants, Colors} from './../../common';

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    btnTxt: {
        color: Colors.white, 
        fontSize: 14,  
        fontFamily: Constants.fontHeader
    },
    btnView: {
        marginTop: 20,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: Colors.red
    }
})