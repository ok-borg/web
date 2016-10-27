import * as React from 'react'
import {connect} from "react-redux";
import {Navbar} from '../Shared/Navbar/Component';
import {Logo} from '../Shared/Logo/Component';
import {SearchInput} from '../Shared/SearchInput/Component';

interface IState {
    query: string
    firstQuery: boolean
}

interface IProps {
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

class Homepage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {query: "", firstQuery: true};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        
        this.setState({
            query: target.value,
            firstQuery: false
        });
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        console.info('Query', this.state.query);
    }

    homepageHtml() {
        return (
            <div>
                <Navbar/>
                <main className="container">
                    <div className="row">
                        <div className="center-align">
                            <Logo/>
                        </div>
                    </div>
                    <div id="search-form" className="row">
                        <form>
                            <SearchInput value={this.state.query} onChange={this.handleChange}/>
                            <div className="search-button-wrapper">
                                <button type="submit"
                                        name="search"
                                        className="search-button"
                                        onClick={this.handleSubmit}>Search
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }

    searchHtml() {
        return (
            <Navbar
                inputOnChange={this.handleChange}
                inputSearchValue={this.state.query}
                inputOnSearch={this.handleSubmit}
                showSearch={true}
            />
        )
    }

    render() {
        return (
            <div id="homepage">
                {this.state.firstQuery ? this.homepageHtml() : this.searchHtml()}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Homepage);