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
          color: "#707070"
        }
      }
    }
  }


  render() {

    let links = this.props.languages.map(link => <Language key={link.lid} {...link} />);
    let total = this.props.languages.length;

    return (
      <div className="py4 mx2">
        <div id="nav-secondary" className="pl2 my2 border-left border-thick border-darken" >
          <div className="mxn2 flex flex-wrap">
            { links }
          </div>
        </div>

        <p is="subtext">You have <strong is="count">{total}</strong> languages available in this list.</p>

      </div>
    )
  }
}
