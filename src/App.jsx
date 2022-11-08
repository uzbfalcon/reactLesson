import React from "react";
import { student } from './list'
import "./App.css"


class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: student,
      name: 'Lochinbek',
      surname: 'Khujamov',
    };
  }
  render() {
    
    const onFilter = (e) => {
      console.log(e.target.value);
      let res = student.filter((value) => value.name.includes(e.target.value))
      this.setState({ data: res })

    }
    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res })
    }


    return (
      <div>
        <input onChange={onFilter} type="text" placeholder="Search" className="filter" />

        <div className="tablescroll">
          <table border={0} width={'90%'}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{status}</td>

                    <td>
                      <button className="edit">edit</button>
                    </td>
                    <td>
                      <button className="delete" onClick={() => onDelete(id)}>delete</button>
                    </td>
                  </tr>
                )
              })}
              <td colSpan={5}>
                <h1>Noup</h1>
              </td>
            </tbody>
          </table>
        </div>
      </div >



    )
  }

}



export default Student