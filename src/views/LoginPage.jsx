
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <Container
            fluid
            className="p-3"
            style={{ maxWidth: '90%', backgroundColor: '#fc4b1a5b', margin: '10px auto', borderRadius: '10px',
                borderTop: '10px solid #333',
                borderBottom: '10px solid #333' }}
        >
            <Row>
                <Col md={4} className="d-none d-md-block">
                    <img
                        src="https://png.pngtree.com/thumb_back/fw800/background/20240216/pngtree-pizza-menu-cover-background-image_15627187.jpg"
                        alt="Decorative"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Col>
                <Col md={8}>
                    <Form className='customForm'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
