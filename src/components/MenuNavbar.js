

import React from 'react';
import Nav from 'react-bootstrap/Nav';


const MenuNavbar = () => {
    return (
        <div>
            <Nav 
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link eventKey="link" className="text-dark">All Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="text-dark">Men</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="text-dark">Women</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <Nav.Link eventKey="link-3" className="text-dark">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <Nav.Link eventKey="link-3" className="text-dark">
                        Beauty & Fragrance
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <Nav.Link eventKey="link-3" className="text-dark">
                        Baby & Toys
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <Nav.Link eventKey="link-3" className="text-dark">
                        Grocery
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <Nav.Link eventKey="link-3" className="text-dark">
                        Sports
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default MenuNavbar
