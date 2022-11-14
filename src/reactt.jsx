import React from 'react';
import { student } from './list';
import "./App.css"


class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            data: student,
            id: '',
            name: '',
            status: '',
            address: '',
            univ: '',
            job: '',
            search: 'id',
            active: null,
        };
    }
    render() {
        const onChange = (event) => {
            console.log(event.target.name);
            this.setState({ [event.target.name]: event.target.value });
        };

        const onFilter = (e) => {
            const { value } = e.target;
            let res = student.filter((i) =>
                `${i[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
            );
            this.setState({
                data: res,
            });
        };

        const onDelete = (id) => {
            console.log(id);
            let res = this.state.data.filter((value) => value.id !== id);
            this.setState({ data: res });
        };
        const onAdd = () => {
            let user = {
                id: this.state.id,
                name: this.state.name,
                status: this.state.status,
                address: this.state.address,
                univ: this.state.univ,
                job: this.state.job,
            };
            this.setState({
                data: [...this.state.data, user],
                name: '',
                status: '',
                address: '',
                univ: '',
                job: '',
            });
            console.log(user);
        };
        const onSelect = (e) => {
            this.setState({ search: e.target.value });
        };
        const onEdit = ({ id, name, status, address, univ, job }, isSave) => {
            if (isSave) {
                let res = this.state.data.map((value) =>
                    value.id === this.state.active.id
                        ? { ...value, name: this.state.name, status: this.state.status, address: this.state.address, univ: this.state.univ, job: this.state.job }
                        : value
                );
                this.setState({ active: null, data: res });
            } else {
                this.setState({
                    name: name,
                    status: status,
                    address: address,
                    univ: univ,
                    job: job,
                    active: { id, name, status, address, univ, job },
                });
            }
        };
        const Oncancel = (value) => {
            console.log(value);
            this.setState({ active: null })
        }
        return (
            <div>
                <h1> name: {this.state.name}</h1>
                <h1> status: {this.state.status}</h1>
                <input
                    value={this.state.name}
                    name='name'
                    onChange={onChange}
                    type='text'
                    placeholder='Name'
                    className='inp'
                />
                <input
                    value={this.state.address}
                    name='address'
                    onChange={onChange}
                    placeholder='Address'
                    className='inp'
                />
                <input
                    value={this.state.status}
                    name='status'
                    onChange={onChange}
                    placeholder='Status'
                    className='inp'
                />
                <input
                    value={this.state.univ}
                    name='univ'
                    onChange={onChange}
                    placeholder='Univ'
                    className='inp'
                />
                <input
                    value={this.state.job}
                    name='job'
                    onChange={onChange}
                    placeholder='Job'
                    className='inp'
                />
                <button onClick={onAdd} className={'delete'}>add</button>
                <hr />
                <select onChange={onSelect} name='' id=''>
                    <option value='id'>ID</option>
                    <option value='name'>Name</option>
                </select>
                <input onChange={onFilter} type='text' placeholder='search' />
                <hr />
                <div className="tablescroll">
                    <table border={0} width={'85%'}>

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
                                    let cancel = this.state.active?.id === id
                                    return (
                                        <tr key={id}>
                                            <td> {id}</td>
                                            <td>
                                                {' '}
                                                {this.state.active?.id === id ? (
                                                    <input
                                                        onChange={onChange}
                                                        name='name'
                                                        value={this.state.name}
                                                        type='text'
                                                        className='inp'

                                                    />
                                                ) : (
                                                    name
                                                )}
                                            </td>
                                            <td>{address}</td>

                                            <td>
                                                {this.state.active?.id === id ? (
                                                    <input
                                                        onChange={onChange}
                                                        name='status'
                                                        value={this.state.status}
                                                        type='text'
                                                        className='inp'
                                                    />
                                                ) : (
                                                    status
                                                )}
                                            </td>
                                            <td>
                                                {this.state.active?.id === id ? (
                                                    <input
                                                        onChange={onChange}
                                                        name='univ'
                                                        value={this.state.univ}
                                                        type='text'
                                                        className='inp'

                                                    />
                                                ) : (
                                                    univ
                                                )}
                                            </td>
                                            <td>
                                                {this.state.active?.id === id ? (
                                                    <input
                                                        onChange={onChange}
                                                        name='job'
                                                        value={this.state.job}
                                                        type='text'
                                                        className='inp'
                                                    />
                                                ) : (
                                                    job
                                                )}
                                            </td>
                                            {cancel ?
                                                (<React.Fragment>
                                                    <td>
                                                        <button className="delete" onClick={() => Oncancel(id)}>cancel</button>

                                                    </td>
                                                    <td>
                                                        <button className='edit' onClick={() => onEdit({ id, name, status, address, univ, job }, this.state.active?.id === id)}>save</button>
                                                    </td>
                                                </React.Fragment>) :
                                                (<React.Fragment>
                                                    <td>
                                                        <button className="delete" onClick={() => onDelete(id)}>delete</button>

                                                    </td>
                                                    <td>
                                                        <button className='edit' onClick={() => onEdit({ id, name, status, address, univ, job }, this.state.active?.id === id)}>edit</button>
                                                    </td>
                                                </React.Fragment>)
                                            }
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <th colSpan={5}>
                                        <h1>Noup</h1>
                                    </th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Student;
