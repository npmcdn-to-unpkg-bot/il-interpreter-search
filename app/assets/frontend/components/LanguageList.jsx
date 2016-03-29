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

    let links = this.props.languages.map(link => <Language {...link} />);
    let total = this.props.languages.length;

    return (
      <div className="py4 mx2">
        <p is="subtext">There are <span is="count"><strong >{total}</strong></span> languages are registered in this database.</p>
        <div id="nav-secondary" className="pl2 my2 border-left border-thick border-darken" >
          <div className="mxn2 flex flex-wrap">
            { links }
          </div>
        </div>



      </div>
    )
  }
}
