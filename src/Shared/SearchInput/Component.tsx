import * as React from 'react'

interface IProps {
    onChange?: (e: Event) => void
    value?: string
    className?: string
}

export const SearchInput = (props: IProps) => {
    return (
        <div id="searchInput" className={props.className}>
            <div className="search-input-wrapper">
                <input
                    id="search"
                    ref={(input) => input && input.focus()}
                    type="search"
                    value={props.value || ''}
                    onChange={props.onChange}
                    required/>
            </div>
        </div>
    );
};