import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props){
    console.log(props);
    return (
        // <div>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src="https://github.com/draedpunk.png" />
                    <div className={styles.authorInfo}>
                        <strong>Pamela Rodrigues</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title="24 de maio de 2025 às 13h22" dateTime="2025-03-24 13:20:30">Publicado hà 1h</time>
            </header>

            <div className={styles.content}>
                    
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>
                <textarea placeholder="Deixe um comentário" />

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

        // </div>
    );
}