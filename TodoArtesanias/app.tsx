declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');


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
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12"> 
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar12">
                        <a className="navbar-brand d-none d-md-block" href="#">
                            <i className="fa d-inline fa-lg fa-circle"></i>
                            <b>Tienda Online de Artesanos</b>
                        </a>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"> <a className="nav-link" href="Home.html">Home</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Tienda</a> </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"> <a className="nav-link" href="Login.html">Ingresar</a> </li>
                            <li className="nav-item text-light"> <a className="nav-link text-primary" href="Registro.html">Registrarse</a> </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2 ml-3" type="text" placeholder="Busca diseños y artistas"/> <button className="btn my-2 my-sm-0 btn-outline-light" type="submit">Buscar</button> </form>
                    </div>
                </div>
                <h1><b>Tienda Online de Artesanos</b></h1>
            </nav>
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