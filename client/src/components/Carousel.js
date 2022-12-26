import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselPage() {
return (
	<div>
	<h4>React-Bootstrap Carousel Component</h4>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
