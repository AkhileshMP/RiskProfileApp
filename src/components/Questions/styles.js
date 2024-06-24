import { StyleSheet } from 'react-native';
import {Constants, Colors} from './../../common';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10
  }, 
  rowView: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  circleView: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inCircleView: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.gray
  },
  btnTxt: {
    color: Colors.white, 
    fontSize: 14,  
    fontFamily: Constants.fontHeader
  },
  btnBTxt: {
    color: Colors.black, 
    fontSize: 14,  
    fontFamily: Constants.fontHeader
  },
  btnView: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnBView: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.gray,
    borderWidth: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
})