import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardPelicula = () => {
    return (
         <Col xs={12} sm={6} md={3} lg={3} className='my-4 mx-2 p-0'>
            <Card className='bg-secondary'>
                <Card.Header className='bg-secondary'>
                    <Card.Text className='text-center text-light fw-bold'>El Señor de los Anillos
                    </Card.Text>
                </Card.Header>
                <Card.Body className='m-0 pb-3 bg-light'>
                        <Card.Text className='d-flex'>
                        <p className='my-0 py-0'>Descripción: </p>
                        <div className='mx-2 px-2 py-0 my-0  fw-light'>Pelicula de lsoe cksahcaksjd fsdjhf saklf </div>
                        </Card.Text>
                        <Card.Text className='d-flex'>
                        <p className='my-0 py-0'>Género: </p>
                        <div className='mx-2 px-2 py-0 my-0  fw-light'>Drama</div>
                        </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-secondary text-end">
                </Card.Footer>
            </Card> 
        </Col>
    );
};

export default CardPelicula;