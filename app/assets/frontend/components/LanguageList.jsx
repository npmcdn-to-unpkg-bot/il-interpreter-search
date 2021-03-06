import ReactCSS from "reactcss";
import Language from "./Language";


export default class LanguageList extends ReactCSS.Component {

  classes() {
    return {
      "default": {
        subtext: {
          color: "#adadad"
        },
        count: {
          color: "#707070",
          fontSize: "18px",
          border: "1px solid",
          padding: "3px 5px 7px 8px"
        }
      }
    }
  }


  render() {

    let links = this.props.languages.map(link => <Language key={link.lid} {...link} />);
    let total = this.props.languages.length;
    let type = this.props.shownType;

    return (
      <div className="py4 mx2">
        <p is="subtext">{total == 1 ? "" : "There are"} <span is="count">{ type == "intro" ? total : total }</span>  {type} languages registered in this database. </p>
        <div id="nav-secondary" className="pl2 my2 border-left border-thick border-darken" >
          <div className="mxn2 flex flex-wrap">
            { links }
          </div>
        </div>
      </div>
    )
  }
}
