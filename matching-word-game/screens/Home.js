import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default Home = (props) => {
    const hanldeStart = () => {
        props.navigation.navigate('Game')
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: 50 }}>WORD MATCHING GAME</Text>
            <TouchableOpacity onPress={hanldeStart}>
                <Text style={{ backgroundColor: 'black', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>START</Text>
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