import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
//content: String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/draedpunk.png',
      name: 'Pamela Rodrigues',
      role: 'Full Stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala, rede! 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifollio. '},
      {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-25 13:50:33'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/botoxparty.png',
      name: 'Power Guido',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala, rede! 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifollio. '},
      {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-15 13:50:33'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content = {post.content}
                publishedAt={post.publishedAt}
             />
            )
          })}
        </main>

      </div>
    </div>
  )
}
