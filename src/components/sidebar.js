import React, { Component } from 'react'
import logo from '../images/profile.jpeg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default class Sidebar extends Component {
  render() {
    return (
			<Container>
				<Image src={logo} roundedCircle thumbnail />
				<div class="text-center font-weight-bold">John Lamb</div>
				<Nav defaultActiveKey="" className="flex-column">
					<Nav.Link href="">Home</Nav.Link>
					<Nav.Link href="">About Me</Nav.Link>
					<Nav.Link href="">Projects</Nav.Link>
					<Nav.Link href="">Blog</Nav.Link>
					<Nav.Link href="">Timeline</Nav.Link>
				</Nav>
			</Container>
		)
	}
}
