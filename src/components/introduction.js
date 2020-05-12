import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Introduction extends Component {
  render() {
    return (
			<Jumbotron>
				<h3 class="display-4">
					John Lamb
				</h3>
				<p class="lead">
					Software Engineer
				</p>
				<hr class="my-4" />
				<p class="lead">
					Hi, I'm John and I like race cars.
				</p>
			</Jumbotron>
		)
	}
}
