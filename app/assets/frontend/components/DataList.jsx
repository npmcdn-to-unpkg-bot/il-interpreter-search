import Interpreter from './Interpreter';

export default class DataList extends React.Component {
  render() {

    let interpreterEntries = this.props.entries.map(interpreter => <Interpreter key={ interpreter.aoicid } {...interpreter} />)
    return (
      <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID #</th>
                  <th>Name</th>

                  <th>Phone (area)</th>
                  <th>Email Contact</th>
                  <th>Zipcode Listed</th>
                  <th>+ Level</th>
                  <th><strong>Language</strong></th>

                </tr>
              </thead>
              <tbody>
                {interpreterEntries}
              </tbody>
            </table>
          </div>
    )
  }
}
