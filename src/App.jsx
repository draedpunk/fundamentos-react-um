import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';
 
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        <Post 
        author="Pamela Rodrigues" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus praesentium aliquid culpa soluta, " />
       <Post 
        author="Daenerys Targaryen" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus praesentium aliquid culpa soluta, " />
        <Post 
        author="John Snow" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus praesentium aliquid culpa soluta, " />
        </main>

      </div>
    </div>
  )
}
