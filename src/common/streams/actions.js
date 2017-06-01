export const ADD_WIDGET = 'ADD_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';

export const addWidget = (i, data) => ({
  type: ADD_WIDGET,
  i,
  data
});

export const updateWidget = (i, data) => ({
  type: UPDATE_WIDGET,
  i,
  data
});

export const deleteWidget = (i) => ({
  type: DELETE_WIDGET,
  i
});
