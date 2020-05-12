import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';

export default class About extends Component {
  render() {
    return (
			<Container>
			<h3>
				About Me
			</h3>
				<p>
					I am a software engineer working on Indeed's Incubator team. We work on
					prototyping product ideas. For example, one of my first projects was a
					system allowing jobseekers to apply for positions by texting the company.
					Companies could sign up for the product and print signs advertising
					open positions. When a jobseeker saw the sign and was interested in the
					position, they could apply by texting the number on the sign.
				</p>
				<p>
					Due to the coronavirus outbreak, I began work on a jobseeker marketplace
					intended to connect jobseekers who were laid off with companies seeking
					immediate applicants.
				</p>
			</Container>
		)
	}
}
