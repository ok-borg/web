import * as React from 'react'

interface IProps {
}

export const Navbar = (props: IProps) => {
    return (
        <div id="navbar" className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right">
                        <li>
                            <a href="#"><img src="http://materializecss.com/images/yuna.jpg" className="circle"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};