import store from '.'

export const generateBoard = () => {
    let board = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']

    let currentIndex = board.length

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        let temporaryValue = board[currentIndex];
        board[currentIndex] = board[randomIndex];
        board[randomIndex] = temporaryValue;
    }

    board.splice(4, 0, '')

    return ({
        type: 'GENERATEBOARD',
        board
    })
}

export const setOpenedCard = val => dispatch => {
    dispatch(openCard([val.i, val.square]))
}

// buka kartu jika di tap
export const openCard = card => ({ type: 'OPENCARD', card })

// tutup kartu jika tidak sama
export const closeCard = () => ({ type: 'CLOSECARD' })

// kartu terbuka terus jika sama
export const setFoundCard = (cardIndex1, cardIndex2) => ({ type: 'FOUNDCARD', cardIndex1, cardIndex2 })

export const clearGame = () => ({ type: 'CLEARGAME'})
