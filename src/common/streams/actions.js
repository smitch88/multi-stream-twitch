import * as _ from 'lodash';

export const UPDATE_LAYOUT = 'UPDATE_LAYOUT';

const indexByWidgetId = (widgets) => (
  _.reduce(widgets, (acc, widget) => {
    acc[widget.i] = widget;
    return acc;
  }, {})
);

export const updateLayout = (updatedLayout, allLayouts) => ({
  type: UPDATE_LAYOUT,
  // We convert the updatedLayout array into a map here so we can do an easy merge
  updatedLayout: indexByWidgetId(updatedLayout)
});

export const ADD_WIDGET = 'ADD_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';

// Incoming `data` does not have grid coordinates so we merge in x, y, h, w, minH, minW

const generateWidgetInstance = (data) => ({
  ...data,
  x: 0,
  y: 0,
  w: 6,
  h: 6,
  minW: 3,
  minH: 4
});

export const addWidget = (i, data) => ({
  type: ADD_WIDGET,
  i,
  data: generateWidgetInstance(data)
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
