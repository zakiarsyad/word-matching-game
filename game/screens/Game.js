import React, { useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { generateBoard, setOpenedCard, setFoundCard, closeCard } from '../store/actions'

export default Game = (props) => {
    const dispatch = useDispatch()
    const board = useSelector(state => state.board)
    const openedCard = useSelector(state => state.openedCard)
    const foundCard = useSelector(state => state.foundCard)

    useEffect(() => {
        dispatch(generateBoard())
    }, [])

    useEffect(() => {
        if (openedCard.length == 2) {
            if (openedCard[0][1] == openedCard[1][1]) {
                dispatch(setFoundCard(openedCard[0][0], openedCard[1][0]))
                dispatch(closeCard())
            } else {
                dispatch(closeCard())
            }
        }
        if (foundCard.length == 8) props.navigation.navigate('End')
    }, [openedCard, foundCard])

    const hanldePress = val => {
        dispatch(setOpenedCard(val))
    }

    return (
        <View style={styles.container}>
            <Text>GAME</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {board.map((square, i) => {
                    return (
                        <View
                            key={i}
                            style={{ borderWidth: 1, flexBasis: '30%', height: 100, width: '100%' }}>
                            {(i == 4) && 
                                <View style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
                                </View>
                            }
                            {openedCard[0] && i == openedCard[0][0] && 
                                <View
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>{square}</Text>
                                </View>
                            }
                            {openedCard[1] && i == openedCard[1][0] &&
                                <View
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>{square}</Text>
                                </View>
                            }
                            {foundCard &&
                                foundCard.map((el, index) => {
                                    if (i == el) return (
                                        <View
                                            key={index}
                                            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>{square}</Text>
                                        </View>
                                    )
                                })
                            }
                            {(i != 4) &&
                                <TouchableOpacity
                                    onPress={() => hanldePress({ i, square })}
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                </TouchableOpacity>
                            }
                        </View>
                    )
                })}
            </View>
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