import React from 'react';
import InlineSVG from 'svg-inline-react';
import classes from '../styles/header.module.css';
// import { EyeIcon } from '@primer/octicons-react';
// import millify from 'millify';
const simpleIcons = require('simple-icons');

const Header = ({ visitor }) => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6" style={{ fontWeight: '500' }}>
                    <h3>Web Badge</h3>
                    <p className='m-0'>2152 Free Badges & <abbr title='Scalable Vector Graphics' className='initialism'>SVG</abbr> of popular brands</p>
                    {/* <div className="">
                        <EyeIcon /> {millify(visitor)} Visitor
                    </div> */}
                </div>
                <div className="col-md-6">
                    <ul className={`nav justify-content-md-end justify-content-sm-center ${classes.list}`}>
                        <li className="nav-item" style={{ width: '65px' }} className={classes.hoverIcon}  >
                            <a className="nav-link" href="https://github.com/mrhrifat/web-badge" target="_blank" rel="noopener noreferrer">
                                {<InlineSVG src={simpleIcons.Get('github').svg} />}
                            </a>
                        </li>
                        <li className="nav-item" style={{ width: '65px' }} className={classes.hoverIcon} >
                            <a className="nav-link" href="https://ko-fi.com/mrhrifat" target="_blank" rel="noopener noreferrer">
                                {<InlineSVG src={simpleIcons.Get('kofi').svg} />}
                            </a>
                        </li>
                        <li className="nav-item" style={{ width: '65px' }} className={classes.hoverIcon} >
                            <a className="nav-link" href="https://patreon.com/mrhrifat" target="_blank" rel="noopener noreferrer">
                                {<InlineSVG src={simpleIcons.Get('patreon').svg} />}
                            </a>
                        </li>
                        <li className="nav-item" style={{ width: '65px' }} className={classes.hoverIcon} >
                            <a className="nav-link" href="https://buymeacoffee.com/mrhrifat" target="_blank" rel="noopener noreferrer">
                                {<InlineSVG src={simpleIcons.Get('buymeacoffee').svg} />}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;
