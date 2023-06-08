import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post(){
    return(
   <article className={styles.post}>
    <header>
        <div className={styles.author}>
            <Avatar src="https://github.com/gafb.png"/>
            <div className={styles.authorInfo}>
                <strong>Gabriel Augusto</strong>
                <span> Software Developer</span>
            </div>
        </div>
        <time title="06 de junho às 20:50" dateTime='2023-06-06 20:50:00'>Publicado há 1h</time>
    </header>

    <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> 👉{'  '} <a href=""> jane.design doctorcare </a> </p>
        
        <p> <a href="">#novoprojeto</a>{' '}
        <a href="">#nlw</a> {' '}
        <a href="">#rocketseat </a> </p>
    </div>

    <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário'/>

        <footer>
            <button type="submit">Publicar</button>
        </footer>
        
    </form>
    <div className={styles.commenList}>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
   </article>
    )
}