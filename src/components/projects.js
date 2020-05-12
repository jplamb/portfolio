import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default function Projects(props) {
	const cardData = [
		{
			"title": "Coding Camp",
			"subtitle": "A mini-course in learning how to code",
			"body": `A introductory level course in programming basics using React.
						Students learned the fundamentals of programming, like data
						structures, algorithms, and best practices while also building
						a portfolio website.`
		},
		{
			"title": "Career Camp",
			"subtitle": "A guided career wayfinding course",
			"body": `Using the book \<i\>Designing Your Life\<\/i\> by Bill Burnett and
							Dave Evans, students learned to identify what careers will satisfy
							them and how to find those jobs.`
		},
		{
			"title": "This Website!",
			"subtitle": "An example of what's built during the coding camp.",
			"body": `This is a basic website using React and React-Bootstrap to show
		 						how quick and straightforward building websites can be.`
		}
	];
	const cards = cardData.map((data) =>
		<Card style={{ width: '10rem' }}>
			<Card.Body>
				<Card.Title>{data.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{data.subtitle}</Card.Subtitle>
				<Card.Text>{data.body}</Card.Text>
			</Card.Body>
		</Card>
	);

	return (
		<Container>
			<h3>Projects</h3>
			<CardDeck>
				{cards}
			</CardDeck>
		</Container>
	);
}
