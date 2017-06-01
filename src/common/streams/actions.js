export const UPDATE_WIDGET_LAYOUT = 'UPDATE_WIDGET_LAYOUT';

export const updateWidget = (widgetId, data) => ({
  type: UPDATE_WIDGET_LAYOUT,
  i: widgetId,
  // merge data
  data
});
