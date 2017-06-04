import * as _ from 'lodash';

const getLastWidgetInDimension = (dimension, layout) => (
  _.chain(layout)
  .orderBy(dimension, 'asc')
  .first()
  .value()
);

const newWidgetOverlaps = ([refX, refY], [oldW, oldH, nextW, nextH], lastYWidget, widgets) => {
  const cols = 12;

  const [yMax, yWidget] = lastYWidget;

  if(!yWidget || refY > yMax){
    return false;
  }

  // check if there is even enough space for nextW
  if(nextW > cols || yMax > refY + oldH || (refY === 0 && yWidget)){
    return true;
  }

  const yWidgetOffset = yWidget.y + yWidget.h;

  const setOfRectanglePositions = (
    _.chain(_.range(oldW, nextW))
    .reduce((acc, wIndex) => {
      _.map(_.range(nextH), (hIndex) => {
          acc[`${wIndex}, ${refY + hIndex}`] = true;
        });
        return acc;
      }, [])
    .keys()
    .value()
  );
  // Add in bottom right corner of last y position
  const initialWidgetMap = !yWidget ? {} : { [`${oldW}, ${yWidgetOffset + nextH}`]: true };
  const setOfWidgetPositions = (
    _.chain(widgets)
    .reduce((acc, { x, y }) => {
      acc[`${x}, ${y}`] = true;
      return acc;
    }, initialWidgetMap)
    .keys()
    .value()
  );
  return _.intersection(setOfRectanglePositions, setOfWidgetPositions).length > 0;
};

/*
* Returns an x,y position map for a widget based on the current `layout`
* that packs the grid as much as possible
*/
export const getPackedPosition = (layout) => {
  // widget sizing constraints
  const constraints = {
    w: 6,
    h: 10
  };

  // Empty case
  if(_.isEmpty(layout)){
    return {
      x: 0,
      y: Infinity
    };
  }

  // non-empty case
  const orderedWidgets = _.orderBy(layout, ['x', 'y'], ['asc', 'asc']);

  const xIndexed = _.reduce(orderedWidgets, (acc, item) => {
    const ref = acc[item.x];
    if(ref){
      const [totalY, items] = ref;
      acc[item.x][0] = totalY + item.h;
      acc[item.x][1].push(item);
    } else {
      acc[item.x] = [item.h, [item]];
    }
    return acc;
  }, {});

  // No widgets in position x just add it below
  if(!xIndexed[0]){
    return {
      x: 0,
      y: Infinity
    };
  }

  const minimumX = (
    _.chain(xIndexed)
    .keys()
    .map(_.parseInt)
    .min()
    .value()
  );

  const { x, y, w, h } = _.last(xIndexed[minimumX][1]);
  const lastXWidgetsCoordinates = [x, y];
  const boundingBox = [w, h, w + constraints.w, constraints.h];

  // Remove the minimum reference and just look at everything to "right"
  delete xIndexed[minimumX];

  const lastYWidget = (
    _.chain(xIndexed)
    .values()
    .reduce((acc, [maxY, items]) => {
      if(maxY > acc[0]){
        return [maxY, _.last(items)];
      }
      return acc;
    }, [0, null])
    .value()
  );

  // Determine if the new widget is going to overlap a previous one
  const doesOverlap = (
    newWidgetOverlaps(lastXWidgetsCoordinates, boundingBox, lastYWidget, orderedWidgets)
  );

  if(doesOverlap){
    return {
      x,
      y: Infinity
    };
  } else {
    return {
      x: x + constraints.w,
      y: Infinity
    }
  }
};
