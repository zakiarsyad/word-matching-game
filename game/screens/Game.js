import React, { useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { generateBoard, setOpenedCard, setFoundCard, closeCard, clearGame } from '../store/actions'
import hacktivLogo from '../assets/hacktiv.png'

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
        if (foundCard.length == 8) {
            setTimeout(() => {
                props.navigation.navigate('End')
            }, 1000)
        }
    }, [openedCard, foundCard])

    const hanldePress = val => {
        dispatch(setOpenedCard(val))
    }

    const handleRestart = () => {
        props.navigation.navigate('Home')
        dispatch(clearGame())
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', marginBottom: 50 }}>Tap and find the same word</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {board.map((square, i) => {
                    return (
                        <View
                            key={i}
                            style={{ borderWidth: 1, borderColor: 'white', flexBasis: '30%', height: 100, width: '100%' }}>
                            {(i == 4) && 
                                <View style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
                                <Image
                                    style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}
                                    source={hacktivLogo} />
                                </View>
                            }
                            {openedCard[0] && i == openedCard[0][0] && 
                                <View
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{square}</Text>
                                </View>
                            }
                            {openedCard[1] && i == openedCard[1][0] &&
                                <View
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{square}</Text>
                                </View>
                            }
                            {foundCard &&
                                foundCard.map((el, index) => {
                                    if (i == el) return (
                                        <View
                                            key={index}
                                            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>{square}</Text>
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
            <TouchableOpacity onPress={ handleRestart } style={{ marginTop: 20 }}>
                <Text style={{ backgroundColor: 'black', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>RESTART</Text>
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