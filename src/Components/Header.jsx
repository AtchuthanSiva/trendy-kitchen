import React from 'react';
import '../Style/Header.css';
import { Link } from 'react-router-dom';
import { Badge, Container, FormControl, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
    return (
        <Navbar className='color-nav' variant="dark" style={{ height: 82 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Trendy Kitchen</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl className='m-auto' style={{ width: 500 }} placeholder='Search for products' />
                </Navbar.Text>
                <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                       <FaShoppingCart color="white" fontSize="25px" />
                       <Badge>{13}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        <span style={{ padding: 10}}>Empty cart</span>
                    </Dropdown.Menu>
                </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header
