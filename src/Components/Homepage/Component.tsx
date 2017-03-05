import * as React from 'react'
import {connect} from "react-redux";
import {Navbar} from '../../Shared/Navbar/Component';
import {Logo} from '../../Shared/Logo/Component';
import {SearchInput} from '../../Shared/SearchInput/Component';
import {searchData} from '../../Shared/SearchInput/Actions';
import {Topic, BorgSearchResponse} from '../../Models/Topic/Main';
import {Result} from '../../Shared/Result/Component';

interface IState {
  query: string
  firstQuery: boolean
}

interface IProps {
  borgSearchResponse: BorgSearchResponse | null;
  searchData: (query: string) => void;
}

function mapStateToProps(state: any) {
  return {
    borgSearchResponse: state.SearchState.data
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    searchData: (query: string) => dispatch(searchData(query))
  };
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
    this.props.searchData(this.state.query);
  }

  homepageHtml() {
    return (
      <div>
        <Navbar/>
        <main className="container">
          <div className="row">
            <div className="logo-wrapper center-align">
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
      <div>
        <Navbar
          inputOnChange={this.handleChange}
          inputSearchValue={this.state.query}
          inputOnSearch={this.handleSubmit}
          showSearch={true}
        />
        <main className="results">
          {
            this.props.borgSearchResponse &&
            (this.props.borgSearchResponse.data.length > 0 ?
              this.props.borgSearchResponse.data
                .map((obj: Topic) => {
                  return (
                    <Result topic={obj}/>
                  );
                }) : <div>Your search returned no matches.</div>)
          }
        </main>
      </div>
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