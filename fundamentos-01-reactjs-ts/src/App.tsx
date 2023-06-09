import { Header } from './components/Header';

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';
/*
 author: {avatar_url: "", name: "", roles: ""}
publishedAt: Date
content: string
 */
const posts: PostType[] = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/gafb.png",
          name: 'Gabriel Augusto',
          role: " Developer SAM_XPE"
      },
      content:[
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design doctorcare'},
      ],
      publishedAt: new Date('2023-06-08 11:00:00')
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/Rocketseat.png",
          name: 'Rocketseat',
          role: " Educator company"
      },
      content:[
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design doctorcare'},
      ],
      publishedAt: new Date('2023-06-06 11:00:00')
  }
]
function App() {

  return (
    <div>
      <Header/>
      

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {posts.map(post =>{
              return (
              <Post
              key={post.id}
              post ={post}
              />
              )
          })}

        </main>
      
      </div>
    </div>
  )
}

export default App
