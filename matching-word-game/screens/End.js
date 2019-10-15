import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { useDispatch } from 'react-redux'

import { clearGame } from '../store/actions'

export default End = (props) => {
    const dispatch = useDispatch()

    const handlePlayAgain = () => {
        props.navigation.navigate('Home')
        dispatch(clearGame())
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Congratulation !</Text>
            <Text style={{ color: 'white', marginBottom: 50 }}>You have completed this game </Text>
            <TouchableOpacity onPress={handlePlayAgain}>
                <Text style={{ backgroundColor: 'black', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>PLAY AGAIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2941d'
    }
});