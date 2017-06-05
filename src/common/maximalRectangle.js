export const findFit = ({ w, h }, matrix) => {
  console.log('finding for', JSON.stringify(matrix));
  const minimumViableArea = (w * h);
	var m; // iterator for columns
	var n; // iterator for rows
	var M = matrix[0].length; // number of columns;
	var N = matrix.length; // number of rows
	var c = []; // linear cache
	var s = []; // stack of {col, row} pairs
	var best_ll = {col: 0, row: 0}; // lower-left corner
	var best_ur = {col: -1, row: -1}; // upper-right corner
	var best_area = 0; // int. Superfluous, since you can compute it from `best_ll` and `best_ur`
  var areas = [];
	for (m = 0; m != M + 1; ++m) {
		c[m] = 0;
		s[m] = {col: 0, row: 0};
	}
	for (n = 0; n != N; ++n) {
		for (m = 0; m != M; ++m) {
			c[m] = matrix[n][m] ? (c[m] + 1) : 0; // update cache
		}
		var open_width = 0;
		for (m = 0; m != M + 1; ++m) {
			if (c[m] > open_width) { /* Open new rectangle? */
				s.push({col: m, row: open_width});
				open_width = c[m];
			} else if (c[m] < open_width) { /* Close rectangle(s)? */
				var m0;
				var n0;
				var area;
				do {
					var cell = s.pop();
					m0 = cell.col;
					n0 = cell.row;
					area = open_width * (m - m0);
          if (area >= minimumViableArea) {
            console.log('found area meow', area, open_width, n - open_width + 1, h);
						best_area = area;
						best_ll = {col: m0, row: n};
						best_ur = {col: m + 1, row: n - open_width};
					}
					open_width = n0;
				} while (c[m] < open_width);
				open_width = c[m];
        console.log('new open_width', m, n, c[m]);
				if (open_width != 0) {
					s.push({col: m0, row: n0});
				}
			}
		}
	}
	return {
		best_area: best_area,
		ll_col: best_ll.col + 1,
		ll_row: best_ll.row + 1,
		ur_col: best_ur.col + 1,
		ur_row: best_ur.row + 1,
    areas
	}
}
