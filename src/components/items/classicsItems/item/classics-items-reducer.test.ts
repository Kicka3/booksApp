import {
    classicsItemsReducer,
    createBookAC, CreateBookACType,
    deleteBookAC,
    InitialStateType, updateTitleBookAC
} from "../../classicsItems/classics-items-reducer";


let startState: InitialStateType = [];
beforeEach(() => {
    startState = [
        {
            id: '1',
            title: 'Will Smith',
            author: 'Mark Manson',
            desc: 'Lorem333',
            src: 'aaaa'
        },
        {
            id: '2',
            title: 'Valya',
            author: 'Merlineoosss',
            desc: 'Lorem2222',
            src: 'sssss'
        },
    ]
});

test('state length should decrease by 1', () => {
    const action = deleteBookAC("1");

    const endState = classicsItemsReducer(startState, action);

    expect(endState.length).toBe(1);
});

test('state length should increase by 1', () => {
    const action = createBookAC('newTitle', 'Demon', 'blabla yo','srcImg')

    const endState = classicsItemsReducer(startState, action);

    expect(endState.length).toBe(3);
});

test('the card in the state should be updated', () => {
    const action = updateTitleBookAC('2','newAuthor', 'newTitle', 'newDesc yo','newImg')

    const endState = classicsItemsReducer(startState, action);

    expect(endState[1].title).toBe('newTitle');
    expect(endState[1].author).toBe('newAuthor');
    expect(endState[1].desc).toBe('newDesc yo');
});


