export default class LanguageList extends React.Component {
  render() {
    return (
    <div id="nav-secondary" className="pl2 my2 border-left border-thick border-darken" >
      <div className="px2 col-6 sm-col-4 md-col-3  ">
        <a href="#intdb-spanish" className="h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline underline">Spanish</a>
      </div>
      <div className="px2 col-6 sm-col-4 md-col-3  ">
        <a href="#intdb-polish" className="h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline underline">Polish</a>
      </div>
      <div className="px2 col-6 sm-col-4 md-col-3  ">
        <a href="#intdb-margin" className="h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline underline">Mandarin</a>
      </div>
      <div className="px2 col-6 sm-col-4 md-col-3  ">
        <a href="#intdb-padding" className="h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline underline">Cantonese</a>
      </div>
      <div className="px2 col-6 sm-col-4 md-col-3  ">
        <a href="#intdb-articles" className="h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline underline">Japanese</a>
      </div>
    </div>
    )
  }
}
