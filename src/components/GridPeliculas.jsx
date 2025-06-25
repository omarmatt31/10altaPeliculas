import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const GridPeliculas = ({peliculas}) => {
    return (
        <Container className='px-5 bg-info'>
            <Row className='d-flex justify-content-between'>
                {
                    //peliculas.map((item, indice)=> <CardPelicula key={indice} pelicula={item}></CardPelicula>)
                }             
            </Row>
        </Container>
    );
};

export default GridPeliculas;