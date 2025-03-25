import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){

    return (
        <div className={styles.comment}>
            <img src="https://github.com/draedpunk.png" alt="Usuario" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pamela Rodrigues</strong>
                            <time title="24 de maio de 2025 às 13h22" dateTime="2025-03-24 13:20:30">Há 1h</time>
                        </div>

                        <button title="Deletar">Deletar comentário
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom, Devon!! Parabens!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}