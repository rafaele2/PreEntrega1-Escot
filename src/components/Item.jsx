import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Container from 'react-bootstrap/Container';
export const Item = ({item})=>{
    return(
<Container fluid>

  
  <Row xs={"auto"} lg={"auto"} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col lg={"auto"}>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${item.img}`} />
  <Card.Body>
    <Card.Title>Nombre producto: {item.description}</Card.Title>
    <Card.Text>
    Precio: $ {item.price} 
    
   
    
    </Card.Text>
   
    <Link to={`/item/${item.id}`}>
  <button className='boton-ver'>Ver detalle...</button>
  </Link>
  </Card.Body>
  </Card>
          </Col>
        ))}
      </Row>  
 
  </Container>      
  
  
    )
}