import Language from "./Language";

export default class LanguageList extends React.Component {
  render() {

    let links = this.props.languages.map(link => <Language key={link.lid} {...link} />);

    return (
    <div id="nav-secondary" className="pl2 my2 border-left border-thick border-darken" >
      { links }
    </div>
    )
  }
}
