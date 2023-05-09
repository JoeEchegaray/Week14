import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Nav() {
    return (
        <Navbar className='navbar bg-body-tertiary'>
            <Container>
                <Navbar.Brand className='' href="#">Joe's Movie Review App</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Nav;