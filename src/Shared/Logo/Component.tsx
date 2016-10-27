import * as React from 'react'

interface IProps {
    className?: string
}

export const Logo = (props: IProps) => {
    return (
        <a href="/">
            <img className={"mascot "+props.className} src="public/images/borg_mascot.png" alt=""/>
        </a>
    );
};