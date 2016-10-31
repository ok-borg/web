import * as React from 'react'
import {SearchInput} from '../SearchInput/Component';
import {Logo} from '../Logo/Component';

interface IProps {
    showSearch?: boolean
    inputOnChange?: (e: Event) => void
    inputOnSearch?: (e: Event) => void
    inputSearchValue?: string
}

export const Navbar = (props: IProps) => {
    const RenderLogo = () => {
        return props.showSearch ? <Logo className='nav-sive left'/> : '';
    };

    return (
        <div id="navbar" className="navbar-fixed row">
            <nav className={props.showSearch ? 'visible-bg' : ''}>
                <div className="nav-wrapper">
                    {RenderLogo()}
                    {props.showSearch &&
                    <SearchInput
                        value={props.inputSearchValue}
                        onChange={props.inputOnChange}
                        className='left col s5'/>
                    }
                    {props.showSearch &&
                    <button
                        type="submit"
                        name="search"
                        className="search-button"
                        onClick={props.inputOnSearch}
                    >Search</button>
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