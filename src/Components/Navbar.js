import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Container>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#">Joe's Movie Review App</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
}

export default NavBar;