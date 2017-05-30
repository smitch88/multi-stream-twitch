import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/*
* Ref: https://github.com/STRML/react-grid-layout
* Wrapper grid component around `react-grid-layout` in case we want to switch to
* another implementation in the future like `masonry`
*/

const styles = {
  grid__container: {
    height: '100%',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll'
  },
  grid__item: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent'
  }
};

class Grid extends React.Component {

  constructor(props){
    super(props);
    this.defaults = {
      breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 30,
      draggableSelector: '.grid-item-component'
    };
    // Maps directly to https://github.com/STRML/react-grid-layout#responsive-grid-layout-props
    this.state = Object.assign({}, this.defaults, props);
  }

  generateLayout = () => ({
    lg: this.props.layout,
    md: this.props.layout,
    sm: this.props.layout
  })

  childrenToGridItems = () => (
    /*
    * The grid items require that the `key` matches the `layouts` defintion
    * This is problematic when passing in dynamic children bc we need to
    * destructure the component, extract the id, and place it on the `GridItem`
    */
    this.props.children.map((child, index) => (
      <div
        key={ child.props.i }
        className="grid-item-component"
        style={ styles.grid__item }
      >
        { child }
      </div>
    ))
  )

  handleLayoutChange = (currentLayout, allLayouts) => {
    if(this.props.onLayoutChange){
      // Communicate externally and respond w/ new layout after changes occurred
      console.log('layout changed, passing to callback', currentLayout, allLayouts);
      this.props.onLayoutChange(currentLayout);
    }
  }

  render(){
    const { breakpoints, cols, rowHeight, draggableSelector } = this.state;
    return (
      <div style={ styles.grid__container }>
        <ResponsiveReactGridLayout
          className="grid-component"
          draggableHandle={ draggableSelector }
          rowHeight={ rowHeight }
          layouts={ this.generateLayout() }
          breakpoints={ breakpoints }
          cols={ cols }
          margin={[15, 15]}
          containerPadding={[15, 15]}
          onLayoutChange={ this.handleLayoutChange }
        >
          { this.childrenToGridItems() }
        </ResponsiveReactGridLayout>
      </div>
    )
  }
}

Grid.propTypes = {
  layout: PropTypes.array.isRequired,
  children: PropTypes.any // TODO: Lookup `children` element prop reference
};

export default Grid;
