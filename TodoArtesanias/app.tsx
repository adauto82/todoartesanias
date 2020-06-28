declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import CSS from 'csstype';


const h1Styles = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    position: 'absolute',
    right: 0,
    bottom: '2rem',
    padding: '0.5rem',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
};

export class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark"><h1>TodoArtesanias</h1></nav>
        );
    }
}

export class Hello extends React.Component {
    render() {
        return (
            <div className="todoartesanias">
                <Header />
                <h1>Welcome to Tijuana!!</h1>
            </div>       
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));