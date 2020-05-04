import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    return (
      <Container fluid>
				<Row>
					<Col>
						<Sidebar></Sidebar>
					</Col>
					<Col xs={8}>
						<Introduction></Introduction>
						<About></About>
						<Projects></Projects>
						<Blog></Blog>
						<Timeline></Timeline>
					</Col>
				</Row>
      </Container>
    );
  }
}

export default App;
