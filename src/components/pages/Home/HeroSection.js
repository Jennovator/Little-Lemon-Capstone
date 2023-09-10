import { Link } from 'react-router-dom';
import './Home.css';
import RestaurantFood from '../../../assets/restauranfood.jpg';
import pages from '../../utils/pages';

const HeroSection = () => {
    return (
        // Hero Section
        <section className="hero">
            <div className="container grid">
                <div className="hero-info">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p className="company-info">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link className="button-primary" to={pages.get('reservation').path}>
                        Reserve a table
                    </Link> 
                </div>
                <img className="hero-image" src={RestaurantFood} alt="Restaurant Food"/>
            </div>
        </section>
    )
}

export default HeroSection;