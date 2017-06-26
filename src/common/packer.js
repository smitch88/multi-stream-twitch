import * as _ from 'lodash';

// Returns a 2d matrix of the widgets w/ flip bits set to 1
const generate2dMatrix = (cols, widgets) => {
  const emptyRow = (c) => _.map(_.range(c), _.constant(0));
  let maxY = _.reduce(widgets, (acc, { y, h }) => {
    if((y + h) > acc){
      return y + h;
    }
    return acc;
  }, 0);

  // creates an 2mxn matrix based on the max dimensions
  const baseMatrix = _.map(_.range(maxY*2), (i) => emptyRow(cols));
  return (
    _.reduce(widgets, (acc, { x, y, w, h }) => {
      _.forEach(_.range(h), (hIndex) => {
        _.forEach(_.range(w), (wIndex) => {
          acc[y + hIndex][x + wIndex] = 1;
        });
      });
      return acc;
    }, baseMatrix)
  );
};

// TODO: Fix this find block fit so it puts the grid item next to the current if it can fit
const findBlockFit = (block, matrix) => {
  const { h: blockHeight, w: blockWidth } = block;
  const maxLength = matrix.length - 1;
  //console.log('Finding where I can put a rectangle of w x h in matrix', JSON.stringify(matrix));
  //console.log('Dimensions', blockHeight, blockWidth);
  return {
    x: 0,
    y: Infinity
  };
};

/*
* Returns an x,y position map for a widget based on the current `layout`
* that packs the grid as much as possible
*/
export const getPackedPosition = (cols, constraints, layout) => {
  const widgets = _.orderBy(layout, ['x', 'y'], ['asc', 'asc']);
  if(_.isEmpty(widgets)){
    return {
      x: 0,
      y: 0
    };
  }
  const matrix = []; // TODO: generate2dMatrix(cols, widgets);
  return findBlockFit(constraints, matrix);
};
