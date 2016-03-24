import Content from './components/Content';
import DataList from './components/DataList';
import DataFilters from './components/DataFilters';
import LanguageList from './components/LanguageList';

let mockInterpreters = [
  { id: 1, name: "MLA", phone: "573-XXX-XXXX", level: "yes" , zipcode: 63301, language: "spanish" },
  { id: 2, name: "ECN", phone: "773-XXX-XXXX", level: "yes", zipcode: 60630, language: "spanish" },
  { id: 3, name: "NBF", phone: "773-XXX-XXXX", level: "no", zipcode: 60600, language: "spanish" },
  { id: 4, name: "MLZ", phone: "773-XXX-XXXX", level: "no", zipcode: 60600, language: "spanish" }
]

let mockLanguages = [
  { lid: 100, language: "spanish", count: 123 },
  { lid: 200, language: "tagalog", count: 234 },
  { lid: 300, language: "japanese", count: 345 },
  { lid: 400, language: "polish", count: 456 }
]

class Main extends React.Component {

  render() {
    return (
      <div>
        <LanguageList languages={mockLanguages}/>
        <DataFilters  />
        <DataList entries={mockInterpreters}/>
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
