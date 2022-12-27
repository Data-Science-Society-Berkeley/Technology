import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import graybg from "../Services Images/gray-carousel-bg.png";
import '../services.css';

const carouselHeader = {
    color: "Dark White",
    fontSize: "3vw",
    fontFamily: "Montserrat", 
    fontWeight: "bold",
    background: "rgba($accent, .8)",
    alignItems: "center",
    justifyContent: "center",
    resize: "none",
    //textShadow: "1px 0 0 #333333, 0 -1px 0 #333333, 0 1px 0 #333333, -1px 0 0 #333333"
}

const carouselText = {
    color: "Dark White",
    fontSize: "max(1.5vw, 12px)",
    fontFamily: "Montserrat", 
    fontStyle: "italic",
    margin: "3vw 0 0 0",
    alignItems: "center",
    lineHeight: "max(2.7vw, 18px)",
}

const clientText = {
    color:"Dark White",
    fontSize: "max(1.5vw, 12px)",
    margin:"2vw 0 max(2vw, 18px) 0", 
    lineHeight: "max(2.7vw, 18px)",
}

export default function CarouselPage() {
return (
	<div>
	<Carousel>
		<Carousel.Item interval={8000}>
            <img
             className="d-block w-100"   
                src={graybg}
                alt="Gray Background"
            />
            <Carousel.Caption style={{top:"10%", margin: "0 4vw 0 4vw", overflowY: "auto",}}>
                <h3 style={carouselHeader}>CLIENT TESTIMONIALS</h3>
                <p style={carouselText}>“I have never worked with students more competent than my analysts at DSS... The first thing that impressed me was their process, which was clearly documented and thorough, but not cumbersome on the client... My team used machine learning models to understand churn-user behavior and label users as churned or active. When COVID-19 hit mid-project, I fully anticipated these students to take a step back. Instead, they doubled down. My team exceeded the original parameters of the projects. I'm chomping at the bit to hire them back.”
                </p>
                <p style={clientText}>- Richard Wu, CEO, Simmer (YC S19)</p>
            </Carousel.Caption>
		</Carousel.Item>
		
        <Carousel.Item interval={8000}>
            <img
             className="d-block w-100"   
                src={graybg}
                alt="Gray Background"
            />
            <Carousel.Caption style={{top:"10%", margin: "0 4vw 0 4vw", overflowY: "auto",}}>
                <h3 style={carouselHeader}>CLIENT TESTIMONIALS</h3>
                <p style={carouselText}>“Over the past semester, the Data Science Society volunteers helped Medic develop a tool to synthesize datasets from scratch, given only a Community Health Toolkit app's configuration code. This type of tool can give us a playground to test aspects of our apps and models, ensuring we're building high quality apps for community health and allowing us to start designing our analyses faster. This was a challenging project, and the team really stepped up, delivering a fully functional dataset generator in just a few months. I looked forward to our check-ins, where everyone participated enthusiastically in our discussions and blew me away with the pace of their progress. I'm looking forward to future Data Science Society / Medic collaborations!”
                </p>
                <p style={clientText}>- Lucas Goldstone, Data Scientist at Medic</p>
            </Carousel.Caption>
		</Carousel.Item>

        <Carousel.Item interval={8000}>
            <img
             className="d-block w-100"   
                src={graybg}
                alt="Gray Background"
            />
            <Carousel.Caption style={{top:"10%", margin: "0 4vw 0 4vw", overflowY: "auto",}}>
                <h3 style={carouselHeader}>CLIENT TESTIMONIALS</h3>
                <p style={carouselText}>“DSS provided us with a great experiment proposal which we are going to execute... The DSS team has done a tremendous job over a course of a semester, and I would like to thank them for all of their hard, professional work. I highly recommend other organizations to collaborate with DSS and I hope I'll be able to work with them again in the future.” 
                </p>
                <p style={clientText}>- Omry Sitner, Business Development Manager at monday.com</p>
            </Carousel.Caption>
		</Carousel.Item>

        <Carousel.Item interval={8000}>
            <img
             className="d-block w-100"   
                src={graybg}
                alt="Gray Background"
            />
            <Carousel.Caption style={{top:"10%", margin: "0 4vw 0 4vw", overflowY: "auto",}}>
                <h3 style={carouselHeader}>CLIENT TESTIMONIALS</h3>
                <p style={carouselText}>“Working with DSS gave us great and immediately actionable insight into a new Blockchain project we had launched. I really hope we can work with DSS again on our next big project!” 
                </p>
                <p style={clientText}>- Michael Todasco, Senior Director of Innovation at PayPal</p>
            </Carousel.Caption>
		</Carousel.Item>

        <Carousel.Item interval={8000}>
            <img
             className="d-block w-100"   
                src={graybg}
                alt="Gray Background"
            />
            <Carousel.Caption style={{top:"10%", margin: "0 4vw 0 4vw", overflowY: "auto",}}>
                <h3 style={carouselHeader}>CLIENT TESTIMONIALS</h3>
                <p style={carouselText}>“My company hired DSS to analyze data in the winter of 2019 and fall of 2020, and they did an amazing job. They took the project seriously and I greatly appreciated the professional manner in which they handled it. Most importantly, they gathered insights from the data that were incredibly valuable and helped us in building a stronger product. I would definitely use DSS again!” 
                </p>
                <p style={clientText}>- Cory Linton, CEO of edify.ai</p>
            </Carousel.Caption>
		</Carousel.Item>

        <Carousel.Item interval={8000}>
            <img
             className="d-block w-100"   
                src={graybg}
                alt="Gray Background"
            />
            <Carousel.Caption style={{top:"10%", margin: "0 4vw 0 4vw", overflowY: "auto",}}>
                <h3 style={carouselHeader}>CLIENT TESTIMONIALS</h3>
                <p style={carouselText}>“Our team worked with DSS to analyze and model our member behavior. The consultants delivered high quality presentations of their insights. Their metrics, visualizations, and model provided new perspectives for us to consider when evaluating engagement. The team was very professional and skilled, and they were a pleasure to work with.” 
                </p>
                <p style={clientText}>- Michelle Leahy, Business Operations Manager, Data & Engineering at SoFi</p>
            </Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
