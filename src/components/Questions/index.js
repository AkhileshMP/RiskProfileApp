import * as React from 'react';
import { useState, useCallback } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { Colors, Constants } from './../../common';
import styles from './styles';
import { actions } from './../../redux/UserRedux';

const Questions = ({ goBack, gotoResult }) => {

  const dispatch = useDispatch();

  const [selQuestion, setSelQuestion] = useState([]);

  const setSelectedValues = useCallback((data) => {
    dispatch(actions.setSelectedValues(data));
  }, [dispatch]);

  //toast messages
  const toast = (message) => {
    Toast.show(message, 6);
  }

  const handleOptionSelect = (itemId, optionId, score) => {
    setSelQuestion(prevSelQuestion => {
      const updatedSelQuestion = prevSelQuestion.filter(selitem => selitem.id !== itemId);
      updatedSelQuestion.push({ id: itemId, optionId, score });
      return updatedSelQuestion;
    });
  };

  return (
    <View style={{ backgroundColor: Colors.white }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: 'transparent' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: '100%', backgroundColor: 'transparent' }}>
          <View style={{ marginTop: 20 }}>
            {Constants.questions.map((item, index) => {
              const selectedItem = selQuestion.find(selitem => selitem.id === item.id);

              return (
                <View key={item.id} style={{ paddingHorizontal: 10 }}>
                  <View style={[styles.rowView, { marginTop: 5 }]}>
                    <Text>{item.id + '. '}</Text>
                    <Text>{item.question}</Text>
                  </View>
                  <View style={{ marginTop: 5 }}>
                    {item.options.map((opt) => {
                      const isSelected = selectedItem != null && selectedItem.optionId === opt.id;

                      return (
                        <TouchableOpacity
                          key={opt.id}
                          style={[styles.rowView, { marginLeft: 15, marginTop: 5 }]}
                          onPress={() => handleOptionSelect(item.id, opt.id, opt.score)}
                        >
                          <View style={styles.circleView}>
                            {isSelected && (<View style={styles.inCircleView} />)}
                          </View>
                          <Text style={{ marginLeft: 10 }}>{opt.option}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            })}
            <View style={[styles.rowView, { paddingHorizontal: 10 }]}>
             
              <TouchableOpacity style={styles.btnBView}
                onPress={goBack}>
                <Text style={[styles.btnBTxt]} allowFontScaling={false}>{'Back'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView}
                onPress={() => {
                  if (selQuestion.length < Constants.questions.length) {
                    toast('Please select the answer for all questions');
                  } else {
                    setSelectedValues(selQuestion);
                    gotoResult();
                  }
                }}>
                <Text style={[styles.btnTxt]} allowFontScaling={false}>{'Result'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Questions;