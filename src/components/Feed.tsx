import styles from "./Feed.module.css";
import { useFetchApi } from "../hooks/useFetchApi";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar/Avatar";

type Post = {
  title: string;
  excerpt: string;
  body: string;
};

export function Feed() {
  const { data: posts, isFetching } = useFetchApi<Post[]>("api/public_posts");

  return (
    <body>
      {isFetching && <p>Loading...</p>}
      {posts?.map((post) => {
        return (
          <article className={styles.feed}>
            <header className={styles.header}>
              <div className={styles.author}>
              <Avatar hasBorder={true} src='https://github.com/4W3Dev.png'/>
                <div className={styles.authorInfos}>
                  <strong>Eliandro</strong>
                  <span>Web Developer</span>
                </div>
              </div>
              <time
                className={styles.time}
                title="23 de agosto as 08:13h"
                dateTime="2023-23-08 15:10:00"
              >
                Publicado ha 1h
              </time>
            </header>
            <ul key={post.title}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.excerpt}>👉{' '}{post.excerpt}</p>
              <p className={styles.body}>{post.body}</p>
            </ul>
            <p className={styles.hashtags}>
              <a href="#">#design</a>{' '}
              <a href="#">#software</a>{' '}
              <a href="#">#engineer</a>{' '}
            </p>

            <form action="" className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            placeholder="Escrever aqui"
          />
            <footer>
          <button type="submit">Publicar</button>
            </footer>
            </form>
            <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
            </div>
          </article>
        );
      })}
    </body>
  );
}
