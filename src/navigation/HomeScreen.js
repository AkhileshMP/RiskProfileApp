import * as React from "react";
import { Home } from './../components'

const HomeScreen = ({navigation}) => {
    return(
        <Home
        navigation={navigation}
        gotoQuest={()=>navigation.navigate('Questions')}
        />
    )
}

export default HomeScreen;