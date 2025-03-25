import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/yuumi-kunii.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yuumi Kunii</strong>
                            <time title="24 de maio de 2025 às 13h22" dateTime="2025-03-24 13:20:30">Há 1h</time>
                        </div>

                        <button title="Deletar">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom, Pamela!! Parabens!</p>
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