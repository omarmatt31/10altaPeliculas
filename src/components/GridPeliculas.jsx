import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPelicula from './CardPelicula';

const GridPeliculas = ({peliculas}) => {
    return (
        <Container className='px-5'>
            <Row className='d-flex justify-content-between'>
                {
                    <CardPelicula></CardPelicula>
                    //peliculas.map((item, indice)=> <CardPelicula key={indice} pelicula={item}></CardPelicula>)
                }             
            </Row>
        </Container>
    );
};

export default GridPeliculas;