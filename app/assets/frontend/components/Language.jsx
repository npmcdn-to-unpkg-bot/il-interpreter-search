export default class Language extends React.Component {
  render() {
    return (
      <div className="px2 col-6 sm-col-4 md-col-3  ">
        <a href="#intdb-spanish" className="h6 caps bold inline-block py1 color-inherit text-decoration-none hover-underline underline">
          {this.props.language} ({this.props.count})
        </a>
      </div>
    )
  }
}
