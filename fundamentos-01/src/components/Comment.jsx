/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment(){
        setLikeCount((state) =>{ //get last state even if modified (closure)
            return state + 1
        })
    }

    function handleDeleteComment(){
        onDeleteComment(content)
    }
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
                        <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                   <button onMouseDown={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}