import { Link } from 'react-router-dom'; 
import classes from '../UI/Tidings/Tidings_button/Tidings_button.module.css';

export default function Tidings_button({ postId }){ 
    return (
        <Link to={`/news_side/${postId}`} className={classes.news_button}>Подробнее</Link>
    );
}

