import React from 'react';

import Context from './Context';

class Provider extends React.Component {
    state = {
        color: 'red',

        changeColor: d => this.setState({ color: d }),
        setBlue: () => this.setState({ color: 'blue' })
    };

    componentDidUpdate = () => console.log('Theme Context Provider Update');

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


export default Provider;