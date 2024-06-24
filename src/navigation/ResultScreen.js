import * as React from "react";
import { Result } from './../components'

const ResultScreen = ({navigation}) => {
    return(
        <Result
        navigation={navigation}
        goBack={()=> navigation.goBack()}
        />
    )
}

export default ResultScreen;