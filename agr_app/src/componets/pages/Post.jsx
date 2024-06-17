import { useParams } from 'react-router-dom';
import Posts from '../posts.json';
import classes from '../UI/Posts_content/Posts.module.css';
import { Link } from 'react-router-dom'; 
import Category_post from '../tidings/Category_post';

export default function Post(){
  const { postId } = useParams(); 

 
  const post = Posts.find(item => item.id === parseInt(postId));

  
  if (!post) {
    return (
    <>
      <div className={classes.page_none}>
        <p>Пост не найден!</p>
        <Link className={classes.page_none_button} to={'/'}>Вернуться на главную</Link>
      </div> 
    </>
    ); 
  }

  return (
    <div>
      <h1 className={classes.title}>{post.title}</h1>
      <Category_post category_post={post.category}></Category_post>
      <p className={classes.date}>{post.date}</p>
      <div className={classes.post}>
        {post.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <Link className={classes.post_button} to={'/'}>Вернуться на главную страницу</Link>
    </div>
  );
};
