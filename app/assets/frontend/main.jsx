
import Content from './components/Content';
import DataList from './components/DataList';
import LanguageList from './components/LanguageList';

import InterpreterTypeSelector from './components/InterpreterTypeSelector';
import CredentialLevelSelector from './components/CredentialLevelSelector';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { interpretersList: [], menuList: [], filterDepth: "intro" }
  }

  componentDidMount() {
    $.ajax("/interpreters")
    .success(data => this.setState({ interpretersList: data}))
    .error(error => console.log(error));
    this.extendMenu();
  }

  extendMenu (languageType) {
    let newLanguageType = languageType

    console.log("(extendMenu fn) depth is: ", this.state.filterDepth);
    $.ajax("/default_menu_sort?menu=" + languageType)
    .success(menu => this.setState({ menuList: menu }))
    .error(error => console.log(error));
  }

  addDataFilter (selection) {
    let newFilterDepth = selection
    console.log(selection, ": incoming selection")

    switch (selection) {
      case "asl": {
        console.log(selection, "-> should be asl only");
        this.extendMenu(selection);
      }
        break;
        case "lep": {
          console.log(selection, "-> should be lep onlly");
          this.extendMenu(selection);
        }
        case "spanish": {
          console.log(selection, "-> should be spanish only");
          console.log(selection, "-> language=spanish");
          this.extendMenu(selection);
        }

        break;
      default: {
        console.log(3, "default nothing");
        // this.extendMenu();
      }


    }
    this.setState({filterDepth: newFilterDepth})
  };


  render() {
    return (
      <div>
        <Content />

        <InterpreterTypeSelector
          asl={this.state.filterDepth == "asl" ? true : null}
          sendDataSelection={this.addDataFilter.bind(this)}
          lep={this.state.filterDepth == "lep" ? true : null}  />

        <LanguageList shownType={this.state.filterDepth} languages={this.state.menuList} />
        <CredentialLevelSelector sendDataSelection={this.addDataFilter.bind(this)} />

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
