import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import GridPeliculas from "./GridPeliculas";

const FormularioPeliculas = () => {
    const peliculasLocalStorage = JSON.parse(localStorage.getItem('listaPeliculas')) || []
    const [peliculas, setPeliculas]=useState(peliculasLocalStorage)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    useEffect(()=>{

        localStorage.setItem('listaPeliculas', JSON.stringify(peliculas))
        }, [peliculas])

    const agregarPelicula= (data)=>{
        setPeliculas([...peliculas, data])
        reset()
    }

    return (
        <>
            <section className="container bg-secondary py-4 px-5 rounded-3 w-50 mb-3">
                <Form onSubmit={handleSubmit(agregarPelicula)}>
                        <Form.Group className="mb-2" controlId="formBasicNombre">
                            <Form.Label className="text-light">Nombre de la Pelicula</Form.Label>
                            <Form.Control type="text" placeholder="Ej: El Señor de los Anillos" {...register('inputNombre', {
                                required: 'Ingrese el nombre de la Pelicula'
                            })}/>
                            <Form.Text className="mb-2 text-danger">{errors.inputNombre?.message}</Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicDuenio">
                            <Form.Label className="text-light">Descripción</Form.Label>
                            <Form.Control as="textarea" {...register('inputDescripcion', {
                                required: 'Ingrese la descripción de la pelicula'
                            })}/>
                            <Form.Text className="mb-2 text-danger">{errors.inputDescripcion?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-5 w-50" controlId="formBasicSintomas">
                            <Form.Label className="text-light">Género</Form.Label>
                            <Form.Select {...register('inputGenero', {
                                required: 'Seleccione un genero'
                            })}>
                                <option value="" selected disabled hidden>Seleccione un genero</option>
                                <option>Comedia</option>
                                <option>Drama</option>
                                <option>Infantil</option>
                            </Form.Select>
                            <Form.Text className="mb-2 text-danger">{errors.inputGenero?.message}</Form.Text>
                        </Form.Group>
                    <div className="text-center">
                        <Button variant="info" type="submit" className="mt-3 text-light">
                            Guardar Pelicula
                        </Button>
                    </div>
                </Form>
            </section>
            <section className="container p-0 my-0 rounded-3 w-75 mb-5">
                <h4 className="text-center text-light">Peliculas Agregadas</h4>
                <GridPeliculas peliculas={peliculas}></GridPeliculas>
            </section>
        </>
    );
};

export default FormularioPeliculas;