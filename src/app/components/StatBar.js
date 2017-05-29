import React from 'react';
import StatsIcon from 'react-icons/lib/md/insert-chart';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const statBarStyles = () => ({
  statbar__container: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    width: 'auto'
  },
  statbar__icon: {
    fontSize: '2em',
    cursor: 'pointer'
  },
  statbar__content: (isExpanded) => ({
    width: isExpanded ? 600 : 0,
    border: '1px solid #fff',
    height: 40
  })
});

class StatBar extends React.Component {

  constructor(props){
    super(props);
    this.closeIntervalId = undefined;
    this.state = {
      expanded: false
    };
  }

  open = () => {
    this.setState({ expanded: true });
  }

  close = () => {
    if(!this.closeIntervalId){
      this.closeIntervalId = setTimeout(() => {
        this.setState({ expanded: false });
        this.closeIntervalId = undefined;
      }, 1500);
    }
  }

  render(){
    const styles = statBarStyles(this.props);
    return (

        <div
          className="stat-bar"
          style={ styles.statbar__container }
        >
          <StatsIcon
            style={ styles.statbar__icon }
            onMouseEnter={ this.open }
          />
          {
            this.state.expanded &&
              <CSSTransitionGroup
                transitionName="slideIn"
                transitionAppearTimeout={100}
                transitionEnterTimeout={2500}
                transitionLeaveTimeout={2500}
                transitionAppear={ true }
              >
                <div
                  style={ styles.statbar__content(this.state.expanded) }
                  onMouseLeave={ this.close }
                >
                  Viewing: 3 streams
                </div>
              </CSSTransitionGroup>
          }
      </div>
    );
  }
}

export default StatBar;
