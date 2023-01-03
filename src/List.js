import React from 'react';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: []};
  }
  componentDidMount() {
    axios.get('http://172.105.35.50:4007/api/documentation/User/get_v1/users')
      .then(res => {
        this.setState({
          mydata: res.data.user_list,
        })
      })
  }
  render() {
    return (
      <div>
        <hr />
        <table border={3} width='100%'>
          <tr>
            <th>NAME</th>
            <th>GENDER</th>
            <th>Email</th>
            <th>phoneno</th>
          </tr>
          {this.state.mydata.map((value) => (
            <tr key={value.user_list}>
              <td> {value.st_name}</td>
              <td> {value.st_gender}</td>
              <td> {value.st_email}</td>
              <td> {value.st_phoneno}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default List;