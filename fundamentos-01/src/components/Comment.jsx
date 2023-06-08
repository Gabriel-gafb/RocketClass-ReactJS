import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gafb.png" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Gabriel Augusto</strong>
                            <time title="06 de junho às 20:50" dateTime='2023-06-06 20:50:00'>Cerca de 1h atráss</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom fulano, parabéns!!</p>
                </div>
                <footer>
                   <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}