export default class Interpreter extends React.Component {
  render() {
    return (
      <tr>
        <td>id-xxxx</td>
        <td>{this.props.zipcode}</td>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.level}</td>
      </tr>
    )
  }
}
