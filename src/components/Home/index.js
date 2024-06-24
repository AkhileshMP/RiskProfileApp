import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Home = ({gotoQuest}) => {
  return (
    <SafeAreaView style={styles.container}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Risk Profile App</Text>
      <TouchableOpacity style={styles.btnView}
        onPress={gotoQuest}>
          <Text style={[styles.btnTxt]} allowFontScaling={false}>{'Start Questionair'}</Text>
        </TouchableOpacity> 
    </View>  
    </SafeAreaView>
  );
}

export default Home;