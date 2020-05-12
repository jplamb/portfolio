import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default function Projects(props) {
	return (
		<Container>
		// This is a great example of how content can be separated from form
		// and showcases how DRY principles can be followed
		<CardDeck>
			<Card style={{ width: '10rem' }}>
				<Card.Body>
					<Card.Title>Coding Camp</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						A mini-course in learning how to code
					</Card.Subtitle>
					<Card.Text>
	  				A introductory level course in programming basics using React.
						Students learned the fundamentals of programming, like data
						structures, algorithms, and best practices while also building
						a portfolio website.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card style={{ width: '10rem' }}>
				<Card.Body>
					<Card.Title>Career Camp</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						A guided career wayfinding course
					</Card.Subtitle>
					<Card.Text>
	  				Using the book <i>Designing Your Life</i> by Bill Burnett and
						Dave Evans, students learned to identify what careers will satisfy
						them and how to find those jobs.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card style={{ width: '10rem' }}>
				<Card.Body>
					<Card.Title>This Website!</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						An example of what's built during the coding camp.
					</Card.Subtitle>
					<Card.Text>
	  				This is a basic website using React and React-Bootstrap to show
						how quick and straightforward building websites can be.
					</Card.Text>
				</Card.Body>
			</Card>
		</CardDeck>
	</Container>
	);
}
