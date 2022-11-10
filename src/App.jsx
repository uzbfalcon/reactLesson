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
      active: null,
    };
  }
  render() {

    const onFilter = (e) => {
      // console.log(e.target.value);
      const { value } = e.target
      let res = student.filter((item) => item.name.toLowerCase().includes(value.toLocaleLowerCase()))
      this.setState({ data: res })

    }
    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res })
    }
    const onEdit = ({ id, name, status, address, univ, job }, isSave) => {
      if (isSave) {
        this.setState({ active: null })
      }
      else {
        this.setState({
          name : name,
          status:status,
          active: { id, name, status, address, univ, job }
        })
      }
    }

    return (
      <div>
        <input onChange={onFilter} type="text" placeholder="Search" className="filter" />

        <div className="tablescroll">
          <table border={0} width={'90%'}>
            <thead>
              <tr>
                <th className="sticky-col first-col">ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Status</th>
                <th>Univ</th>
                <th>Job</th>
                <th>Delete</th>
                <th className="sticky-col second-col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.length ? (
                this.state.data.map(({ id, name, status, address, univ, job }) => {
                return (
                  <tr key={id}>
                    <th className="first-col sticky-col">{id}</th>
                    <td>{
                      this.state.active?.id === id ? <input type="text" value={this.state.active.name}/> : name
                    }</td>
                    <td>{address}</td>
                    <td>{
                      this.state.active?.id === id ? <input type="text" value={this.state.active.status} /> : status
                    }</td>
                    <td>{
                      this.state.active?.id === id ? <input type="text" value={this.state.active.univ}/> : univ
                    }</td>
                    <td>{
                      this.state.active?.id === id ? <input type="text" value={this.state.active.job}/> : job
                    }</td>

                    <td>
                      <button className="delete" onClick={() => onDelete(id)}>delete</button>
                    </td>
                    <td className="sticky-col second-col">
                      <button className="edit" onClick={() => onEdit({ id, name, status, address, univ, job }, this.state.active?.id === id)}>{this.state.active?.id === id ? 'save' : 'edit'}</button>
                    </td>
                  </tr>
                )
              })) : (
              <td colSpan={5}>
                <h1>Noup</h1>
              </td>)
              }
            </tbody>
          </table>
        </div>
      </div >



    )
  }

}



export default Student