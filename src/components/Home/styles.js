import { StyleSheet } from 'react-native';
import {Constants, Colors} from './../../common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  btnTxt: {
    color: Colors.white, 
    fontSize: 14,  
    fontFamily: Constants.fontHeader
  },
  btnView: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.red
  }
})