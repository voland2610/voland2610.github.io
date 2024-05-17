import classes from '../UI/Tidings/Tidings.module.css'

export default function Category({ categories, showAllNews, filterNewsByCategory }){
    return(
        <div className={classes.categories_container}>
          <div onClick={() => showAllNews()} className={classes.categories_name}>Все</div>
            {categories.map((category, index) => (
              <div className={classes.categories_name} key={index} onClick={() => filterNewsByCategory(category)}>{category}</div>
            ))}
        </div>
    );
}