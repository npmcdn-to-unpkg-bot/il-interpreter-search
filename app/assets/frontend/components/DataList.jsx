export default class DataList extends React.Component {
  render() {
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
                <tr>
                  <td>1,222</td>
                  <td>63301</td>
                  <td>M. L. A.</td>
                  <td>573</td>
                  <td>yes</td>
                </tr>

                <tr>
                  <td>1,239</td>
                  <td>60630</td>
                  <td>E C-N</td>
                  <td>773</td>
                  <td>yes</td>
                </tr>
              </tbody>
            </table>
          </div>
    )
  }
}
