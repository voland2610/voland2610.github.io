import { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import newsData from '../posts.json';
import Tidings_button from './Tidings_button';
import classes from '../UI/Tidings/Tidings.module.css';
import Category_post from './Category_post';
import pagination_button from '../UI/Pagination_button/Pagination_button.module.css';
import Category from '../category/Category';

export default function Tidings() {
    const [newsType, setNewsType] = useState([]);
    const [currentP, setCurrentP] = useState(1);
    const [newsPage] = useState(5); // сколько должно выводиться на странице постов
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
      setNewsType(newsData);  
      // Получаем уникальные категории из данных новостей
      const uniqueCategories = [...new Set(newsData.map(item => item.category))];
      setCategories(uniqueCategories);
    }, []);

    const filterNewsByCategory = (category) => {
      setSelectedCategory(category);
      setCurrentP(1); // Сбросить текущую страницу при смене категории
    }

    const showAllNews = () => {
      setSelectedCategory(null); // Сбросить выбранную категорию
      setCurrentP(1); // Сбросить текущую страницу
    }

    const handleSearch = (e) => {
      setSearchKeyword(e.target.value);
      setCurrentP(1); // Сбросить текущую страницу при поиске
    }

    const filteredNews = newsType
      .filter(item => selectedCategory ? item.category === selectedCategory : true)
      .filter(item => item.title.toLowerCase().includes(searchKeyword.toLowerCase()));

    const lastIndex = currentP * newsPage;
    const firstIndex = lastIndex - newsPage;
    const currentNow = filteredNews.slice(firstIndex, lastIndex);

    const paginating = numPage => setCurrentP(numPage);
    const listPageNext = () => setCurrentP(prev => prev + 1)
    const listPagePrev = () => setCurrentP(next => next - 1)

    return (
      <div className={classes.news_container}>
        <h1>Агрегатор новостей С.Ю Витте</h1>
        <input
          type="text"
          placeholder="Поиск по ключевому слову"
          value={searchKeyword}
          onChange={handleSearch}
          className={classes.search_input}
        />
        <Category
          categories={categories}
          showAllNews={showAllNews}
          filterNewsByCategory={filterNewsByCategory}
        />
        {currentNow.map((item, index) => (
          <div className={classes.news_item} key={index}>
            <h3 className={classes.news_title}>{item.title}</h3>
            <Category_post disableClick={false} filterNewsByCategory={filterNewsByCategory} category_post={item.category}></Category_post>
            <p className={classes.news_date}>{item.date}</p>
            <Tidings_button postId={item.id} />
          </div>
        ))}
        <Pagination
          newsPage={newsPage}
          total={filteredNews.length}
          paginating={paginating}
        />
        <button className={pagination_button.button_list} onClick={listPagePrev}>Пред стр</button>
        <button className={pagination_button.button_list} onClick={listPageNext}>След стр</button>
      </div>
    );
}
