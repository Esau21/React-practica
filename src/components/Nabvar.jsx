import React from 'react';
import './navbar.css';
const Nabvar = () => {

    const user = {
        name: 'Hedy Lamarr',
        lastname: 'Bris',
        puesto: 'Desarrollador',
        decripcion: 'esta es una breve introduccion',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h6>{user.name}</h6>
                </div>
                <div className="card-body">
                    <img
                        className="avatar"
                        src={user.imageUrl}
                        alt={'Foto de ' + user.name}
                        style={{
                            width: user.imageSize,
                            height: user.imageSize
                        }}
                    />
                    <p>{user.name ?? 'sin nombre'}</p>
                    <p>{user.lastname ?? 'sin apellido'}</p>
                    <p>{user.puesto ?? 'no hay puesto'}</p>
                    <p>{user.decripcion ?? 'no hay descripcion'}</p>
                </div>
            </div>
        </>
    )
}

export default Nabvar