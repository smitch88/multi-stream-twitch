import * as _ from 'lodash';
import { fromJS, Map, Seq } from 'immutable';

export const LOAD_SHARED_LAYOUT = 'LOAD_SHARED_LAYOUT';

export const loadSharedLayout = (layout) => ({
  type: LOAD_SHARED_LAYOUT,
  data: fromJS(layout)
});

export const UPDATE_LAYOUT = 'UPDATE_LAYOUT';

export const updateLayout = (widgets, _) => ({
  type: UPDATE_LAYOUT,
  data: fromJS(widgets)
});

export const ADD_WIDGET = 'ADD_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';

// Incoming `data` does not have grid coordinates so we merge in x, y, h, w, minH, minW

const generateWidgetInstance = (data) => (
  Map({
    ...data,
    x: 0,
    y: Infinity,
    w: 6,
    h: 6,
    minW: 3,
    minH: 4,
    maxW: 12,
    maxH: 12,
    static: false
  })
);

export const addWidget = (i, data) => ({
  type: ADD_WIDGET,
  i,
  data: fromJS(generateWidgetInstance(data))
});

export const updateWidget = (i, data) => ({
  type: UPDATE_WIDGET,
  i,
  data: fromJS(data)
});

export const deleteWidget = (i) => ({
  type: DELETE_WIDGET,
  i
});
