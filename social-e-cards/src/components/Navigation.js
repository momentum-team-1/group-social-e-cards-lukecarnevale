import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Login from './Login'

function Navigation () {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      <Navbar color='faded' light>
        <NavbarBrand href='/' className='mr-auto'>social-e-Cards</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/cards/all/'>Cards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/auth/friends/'>Friends</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/auth/users/me/'>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/auth/users/me/'>Log out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
