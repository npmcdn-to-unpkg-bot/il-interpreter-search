import Content from './components/Content';
import DataList from './components/DataList';
import DataFilters from './components/DataFilters';
import LanguageList from './components/LanguageList';


let mockLanguages = [
  { lid: 100, language: "spanish", count: 123 },
  { lid: 200, language: "tagalog", count: 234 },
  { lid: 300, language: "japanese", count: 345 },
  { lid: 400, language: "polish", count: 456 }
]

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { interpretersList: []}
  }

  componentDidMount() {
    $.ajax("/interpreters")
    .success(data => this.setState({ interpretersList: data}))
    .error(error => console.log(error));
  }

  render() {
    return (
      <div>
        <LanguageList languages={mockLanguages} />
        <DataFilters  />
        <DataList entries={this.state.interpretersList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById("react")
  );
}

$(documentReady);
