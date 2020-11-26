import React from 'react';

import Context from './Context';

class Provider extends React.Component {
    state = {
        data: 'test',

        changeData: d => this.setState({ data: d }),
        setABC: () => this.setState({ data: 'ABC' })
    };

    componentDidUpdate = () => console.log('Test Context Provider Update');

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


export default Provider;