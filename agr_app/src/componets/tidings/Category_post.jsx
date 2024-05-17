import classes from '../UI/Tidings/Tidings.module.css';

export default function Category_post({category_post, filterNewsByCategory}){
    const getCategoryClass = (category_post) => {
        switch (category_post) {
          case 'Мастер-классы':
            return classes.news_category_master_class;
          case 'Олимпиады':
            return classes.news_category_olympiad;
          default:
            return classes.news_category_default;
        }
      };
    return(
        <span onClick={() => filterNewsByCategory(category_post)} className={`${classes.news_category} ${getCategoryClass(category_post)}`}>{category_post}</span>
    );
}