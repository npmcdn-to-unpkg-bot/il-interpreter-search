export default class Language extends React.Component {

  passLanguageToFilter(event) {
    event.preventDefault();
    console.log(4, "This is the language: " + this.refs.value);
  }

  render() {

  let language = this.props.language;

    return (
      <div className="px2 col-6 sm-col-4 md-col-3 ">
        <a ref={language} href="#datalist" className="h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline underline">

          {language} ({this.props.count})
        </a>
      </div>
    )
  }
}
