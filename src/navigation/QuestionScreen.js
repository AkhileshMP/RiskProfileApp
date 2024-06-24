import * as React from "react";
import { Questions } from './../components'

const QuestionScreen = ({navigation}) => {
    return(
        <Questions
        navigation={navigation}
        gotoResult={()=>navigation.navigate('Results')}
        goBack={()=> navigation.goBack()}
        />
    )
}

export default QuestionScreen;