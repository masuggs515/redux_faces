// Reducer
const INITIAL_STATE = { face: '⋋_⋌' };

const faceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "HAPPY":
            return { ...state, face: action.payload }

        case "SAD":
            return { ...state, face: action.payload }

        case "ANGRY":
            return { ...state, face: action.payload }

        case "LAUGHING":
            return { ...state, face: action.payload }

        case "SHOCKED":
            return { ...state, face: action.payload }
    }
    return state;
};

const faceStore = Redux.createStore(faceReducer);


// DOM manipulation

const face = document.querySelector('#face');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const laughingBtn = document.querySelector('#laughing');
const shockedBtn = document.querySelector('#shocked');
const body = document.querySelector('body')

happyBtn.addEventListener('click', e=>{
    faceStore.dispatch({type: 'HAPPY', payload:'(^_^)'});
    const faceState = faceStore.getState();
    face.innerText = faceState.face;
    body.classList = 'happy';
});



sadBtn.addEventListener('click', e=>{
    faceStore.dispatch({type: 'SAD', payload:';n;'});
    const faceState = faceStore.getState();
    face.innerText = faceState.face;
    body.classList = 'sad';
});

angryBtn.addEventListener('click', e=>{
    faceStore.dispatch({type: 'ANGRY', payload:'⋋_⋌'});
    const faceState = faceStore.getState();
    face.innerText = faceState.face;
    body.classList = 'angry';
});

laughingBtn.addEventListener('click', e=>{
    faceStore.dispatch({type: 'LAUGHING', payload: '(≧▽≦)'});
    const faceState = faceStore.getState();
    face.innerText = faceState.face;
    body.classList = 'laughing';
});

shockedBtn.addEventListener('click', e=>{
    faceStore.dispatch({type: 'SHOCKED', payload: '°O°'});
    const faceState = faceStore.getState();
    face.innerText = faceState.face;
    body.classList = 'shocked';
});
