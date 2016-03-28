export default class Interpreter extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.aoicid}</td>
        <td>{this.props.first_name + " " + this.props.middle_name + " " + this.props.last_name}</td>

        <td>{this.props.phone}</td>
        <td>{this.props.reg_email}</td>
        <td>{this.props.zip}</td>
        <td>{this.props.certification}</td>
        <td><strong>{this.props.language}</strong></td>
      </tr>
    )
  }
}
