import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';


const Result = ({goBack}) => {

  const [rResult, setResult] = useState('');

  const selValues = useSelector((state) => state.user.result);
  
  useEffect(()=>{
    calculateResult()
  }, [])

  const calculateResult = () => {
    //sum of all score
    if(selValues.length > 0){
      const sum = selValues.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
      //identify the result range
      let val = 18/3
      //find the result
      let rval = (sum <= val) ? 'Low' : ((sum > val) && (sum <= (2 * val))) ? 'Medium' : 'High'
      //set to state
      setResult(rval)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Your risk profile is: {rResult}</Text>
      <TouchableOpacity style={styles.btnView}
        onPress={goBack}>
          <Text style={[styles.btnTxt]} allowFontScaling={false}>{'Back'}</Text>
        </TouchableOpacity>
    </View>
  );
}
export default Result; 
