import {
  SET_GUESS,
  SET_FEEDBACK,
  SET_AURAL,
  SET_ANSWER
} from '../actions/gameActions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === SET_GUESS) {
    if (action.guess === null) {
      return Object.assign({}, state, {
        guesses: []
      });
    } else {
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
      });
    }
  } else if (action.type === SET_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  } else if (action.type === SET_AURAL) {
    return Object.assign({}, state, {
      auralStatus: action.aural
    });
  } else if (action.type === SET_ANSWER) {
    return Object.assign({}, state, {
      correctAnswer: action.correctAnswer
    });
  }
  return state;
};
