import React from 'react';

const footerStyles = ({ height }) => ({
  footer__container: {
    display: height === 0 ? 'none' : 'flex',
    height: `${(height/16)}em`|| '1em',
    color: 'inherit',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 10px',
    borderTop: '1px solid #333'
  }
});

const Footer = (props) => {
  const styles = footerStyles(props);
  return (
    <div
      className="footer-component"
      style={ styles.footer__container }
    >
      { props.children }
    </div>
  );
};

export default Footer;
