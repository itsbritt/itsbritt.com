// React
// React
import React from 'react';

// Components
import MobileFooter from '../MobileFooter/MobileFooter';

const Footer = ({ isDesktopView }) => {
	return <footer className="global-footer">{!isDesktopView && <MobileFooter />}</footer>;
};

export default Footer;
