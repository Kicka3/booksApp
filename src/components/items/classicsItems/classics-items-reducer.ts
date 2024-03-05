export const initialState = [
    {
        id: '1',
        title: 'Will Smith',
        author: 'Mark Manson',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto beatae consequatur facilis repellendus, sed vel velit voluptate voluptatum.',
        src: 'https://lamcdn.net/lookatme.ru/post_image-image/V7k7_5vmSz2slJyEIO-06A-small.png'
    },
    {
        id: '2',
        title: 'CAPTP',
        author: 'Andruxa Kozlov',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto beatae consequatur facilis repellendus, sed vel velit voluptate voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto beatae consequatur facilis repellendus, sed vel velit voluptate voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto beatae consequatur facilis repellendus, sed vel velit voluptate voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto beatae consequatur facilis repellendus, sed vel velit voluptate voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto beatae consequatur facilis repellendus, sed vel velit voluptate voluptatum.',
        src: 'https://lamcdn.net/lookatme.ru/post_image-image/V7k7_5vmSz2slJyEIO-06A-small.png'
    },
    {
        id: '3',
        title: 'Haggard',
        author: 'Henry ololoev',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto beatae consequatur facilis repellendus, sed vel velit voluptate voluptatum.',
        src: 'https://lamcdn.net/lookatme.ru/post_image-image/V7k7_5vmSz2slJyEIO-06A-small.png'
    },
]

//types
export type InitialStateType = typeof initialState
type ReducerActionsType = DeleteBookACType
    | CreateBookACType
    | UpdateTitleBookACType

export type ItemType = {
    id: string,
    title: string,
    author: string,
    desc: string,
    src: string,
}


//reducer

export const classicsItemsReducer = (state: InitialStateType = initialState, action: ReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'CLASSIC/DELETE-BOOK': {
            return state.filter(el => el.id !== action.payload.id)
        }
        case 'CLASSIC/CREATE-BOOK': {
            let newCard = {
                id: Math.random().toString(36).substr(2, 10),
                title: action.payload.title,
                author: action.payload.author,
                desc: action.payload.desc,
                src: action.payload.img,
            }
            return [newCard, ...state]
        }
        case 'CLASSIC/UPDATE-TITLE-BOOK': {
            return state.map(el => el.id === action.payload.id
                ? {
                    ...el, title: action.payload.newTitle,
                    author: action.payload.newAuthor,
                    desc: action.payload.newDesc, src: action.payload.newImg
                }
                : el)
        }
        default:
            return state
    }
}

// actions

type DeleteBookACType = ReturnType<typeof deleteBookAC>
export const deleteBookAC = (id: string) => ({
    type: 'CLASSIC/DELETE-BOOK',
    payload: {
        id
    }
} as const)


export type CreateBookACType = ReturnType<typeof createBookAC>
export const createBookAC = (title: string, author: string, desc: string, img: string) => ({
    type: 'CLASSIC/CREATE-BOOK',
    payload: {
        title,
        author,
        desc,
        img
    }
} as const)

type UpdateTitleBookACType = ReturnType<typeof updateTitleBookAC>
export const updateTitleBookAC = (id: string | undefined, newAuthor: string, newTitle: string, newDesc: string, newImg: string) => ({
    type: 'CLASSIC/UPDATE-TITLE-BOOK',
    payload: {
        id,
        newAuthor,
        newTitle,
        newDesc,
        newImg
    }
} as const)