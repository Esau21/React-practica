import React, { useState } from 'react';
import './products.css';
import Swal from 'sweetalert2';

const Productos = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const handleClick2 = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }

    const productos = [
        {
            name: "Manzana",
            imgUrl: "https://i.pinimg.com/originals/5e/d5/40/5ed540c5f50aa0588fb2a28155846d9e.jpg",
            price: 12.80,
            descripcion: "Manzana gala"
        },
        {
            name: "Sandia",
            imgUrl: "https://frutasolivar.com/wp-content/uploads/2020/07/31606320_s-1.jpg.webp",
            price: 15.50,
            descripcion: "Sandía dulce"
        },
        {
            name: "Fresa",
            imgUrl: "https://media.istockphoto.com/id/1157946861/es/foto/fresa-de-baya-roja-aislada.jpg?s=612x612&w=0&k=20&c=lSELqZMZv9TmXjdTLczmiSzl3Z-jI81rRa_WloV8gcQ=",
            price: 10.00,
            descripcion: "Fresas frescas"
        }
    ];

    function myButon() {
        Swal.fire({
            title: "Genial",
            text: "Tu diste click a este notificacion",
            icon: 'success',
        });
    }

    return (
        <div className='container-fluid mt-4'>
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h6 className='card-title'>Lista de productos</h6>
                    </div>
                    <div className="card-body">
                        <button className='btn btn-outline-success' onClick={handleClick}>Incrementar</button>
                        <button className='btn btn-outline-danger' onClick={handleClick2}>Decrementar</button>
                        <button className='btn btn-outline-warning' onClick={handleReset}>Resetear</button>
                        <p>{counter}</p>
                        <div className="table-responsive">
                            <table className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Descripcion</th>
                                        <th>Imagen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map(product => (
                                        <tr key={product.name}>
                                            <td>{product.name}</td>
                                            <td>${product.price}</td>
                                            <td>{product.descripcion}</td>
                                            <td><img className="img" src={product.imgUrl} alt={'Foto de' + product.imgUrl} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productos;

