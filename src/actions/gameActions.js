export const SET_GUESS = 'SET_GUESS';
export const setGuess = guess => ({
  type: SET_GUESS,
  guess
});

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const SET_AURAL = 'SET_AURAL';
export const setAural = aural => ({
  type: SET_AURAL,
  aural
});

export const SET_ANSWER = 'SET_ANSWER';
export const setAnswer = correctAnswer => ({
  type: SET_ANSWER,
  correctAnswer
});
