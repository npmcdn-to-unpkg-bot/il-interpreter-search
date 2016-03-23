
import CredentialLevelFilter from './components/CredentialLevelFilter';
import Content from './components/Content';
import DataList from './components/DataList';
import LanguageList from './components/LanguageList'

let mockInterpreters = [
  { name: "MLA", phone: "573-XXX-XXXX", level: "yes" , zipcode: 63301, language: "spanish" },
  { name: "ECN", phone: "773-XXX-XXXX", level: "yes", zipcode: 60630, language: "spanish" },
  { name: "NBF", phone: "773-XXX-XXXX", level: "no", zipcode: 60600, language: "spanish" },
  { name: "MLZ", phone: "773-XXX-XXXX", level: "no", zipcode: 60600, language: "spanish" }
]

class Main extends React.Component {
  render() {
    return (
      <div>
        <LanguageList />
        <CredentialLevelFilter interpreters={mockInterpreters} />
        <DataList />
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
