import {

} from './actionTypes'

const initialState = {
    board: [], 
    openedCard: [],
    foundCard: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GENERATEBOARD':
            return {
                ...state,
                board: action.board
            }
        case 'CLOSECARD':
            return {
                ...state,
                openedCard: []
            }
        case 'FOUNDCARD':
            return {
                ...state,
                foundCard: [...state.foundCard, action.cardIndex1, action.cardIndex2]
            }
        case 'OPENCARD':
            return {
                ...state,
                openedCard: [...state.openedCard, action.card]
            }
        case 'CLEARGAME':
            return {
                ...state,
                openedCard: [],
                foundCard: []
            }
        default:
            return state
    }
}