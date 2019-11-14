import 'semantic-ui-css/semantic.min.css'
import React from 'react'

const Home = (props) => {

    return (
        <table className="ui celled striped padded table">
        <tbody>
          <tr>
          <th>
              <h3 className="ui center aligned header">
                Bug ID
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Project Name
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Bug Name
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Priority
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Attachment
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Status
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Opened
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Age
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Closed
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Submitted By
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Location
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Assigned To
              </h3>
            </th>
          </tr>
          </tbody>
      </table>
    )
}

export default Home