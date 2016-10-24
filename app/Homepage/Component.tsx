import * as React from 'react'
import {connect} from "react-redux";
import {Navbar} from '../Shared/Navbar/Component';

interface IProps {
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

class Homepage extends React.Component<IProps, {}> {
    componentDidMount() {

    }

    render() {
        return (
            <div id="homepage">
                <Navbar/>

                <main className="container">
                    <div className="row">
                        <div className="center-align">
                            <img className="mascot" src="images/borg_mascot.png" alt=""/>
                        </div>
                    </div>
                    <div id="search-form" className="row">
                        <form>
                            <div className="search-input-wrapper">
                                <input id="search" type="search" required/>
                            </div>
                            <div>
                                <button type="submit" name="action">Search</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Homepage);