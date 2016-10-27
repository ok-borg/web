import * as React from 'react'
import {SearchInput} from '../SearchInput/Component';
import {Logo} from '../Logo/Component';

interface IProps {
    showSearch?: boolean
    inputOnChange?: (e: Event) => void
    inputSearchValue?: string
}

export const Navbar = (props: IProps) => {
    return (
        <div id="navbar" className="navbar-fixed row">
            <nav className={props.showSearch ? 'visible-bg' : ''}>
                <div className="nav-wrapper">
                    {props.showSearch &&
                    <Logo className='nav-sive left'/>
                    }
                    {props.showSearch &&
                    <SearchInput
                        value={props.inputSearchValue}
                        onChange={props.inputOnChange}
                        className='left col s5'/>
                    }
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