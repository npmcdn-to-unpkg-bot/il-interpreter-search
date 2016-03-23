import Interpreter from './Interpreter';

export default class DataList extends React.Component {
  render() {

    let interpreterEntries = this.props.entries.map(interpreter => <Interpreter key={ interpreter.id } {...interpreter} />)
    return (
      <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID #</th>
                  <th>Zipcode Listed</th>
                  <th>Name</th>
                  <th>Phone (area)</th>
                  <th>+ Level</th>
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
