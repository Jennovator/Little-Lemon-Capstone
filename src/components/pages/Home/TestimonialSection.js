import jacky from "../../../assets/jacky.jpeg";
import neil from "../../../assets/neil.jpeg";
import romel from "../../../assets/romel.jpeg";
import jennie from "../../../assets/jennie.jpeg";
import ReviewCard from "./Cards/ReviewCard";
import "./Home.css";

const customers = [
    {
        fullName: 'Jackelyn Soria',
        image: jacky,
        rating: [1, 1, 1, 1, 0.5],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Neil Berja',
        image: neil,
        rating: [1, 1, 1, 1, 1],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Romel Cuntapay',
        image: romel,
        rating: [1, 1, 1, 1, 0.5],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Jennie Bosi',
        image: jennie,
        rating: [1, 1, 1, 1],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
];

const TestimonialSection = () => {
    return (
        <section className="testimonials">
            <div className="container grid">
                <h2>Our Reviews!</h2>
                {customers.map((customer, index) =>
                    <ReviewCard key={index} customer={customer} />
                )}
            </div>
        </section>
    )
}

export default TestimonialSection;