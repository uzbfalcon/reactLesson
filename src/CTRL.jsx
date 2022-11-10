import React from "react";


class GetName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: 'UZBFALCON'
        }
        console.log('constructor');
    }
    render() {
        const plus = () => {
            this.setState({ count: this.state.count + 1 })
        }
        const minus = () => {
            this.setState({ count: this.state.count - 1 })

        }
        const onChange = (e) => {
            this.setState({ title: e.target.value })
        }
        return (
            <div>
                <h1>This Count: {this.state.count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <hr />
                <h1>Title : {this.state.title}</h1>
                <input onChange={onChange} type="text" />
            </div>
        )

    }
}

export default GetName