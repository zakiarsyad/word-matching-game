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
            <Text>HOME</Text>
            <TouchableOpacity onPress={hanldeStart}>
                <Text style={{ backgroundColor: 'blue', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>START GAME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});