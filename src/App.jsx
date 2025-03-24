import { Post } from './Post';

import './style.css';
 
export function App() {
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus praesentium aliquid culpa soluta, 
// repellat neque labore ex sapiente officia molestias libero doloribus ea. Optio eius illo at rem eum!
  return (
    <div>
      <Post 
        author="Pamela Rodrigues" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus praesentium aliquid culpa soluta, " />
      <Post 
        author="Daenerys Targaryen" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus praesentium aliquid culpa soluta, " />
      <Post 
        author="Sir Jorha Mormont" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae delectus praesentium aliquid culpa soluta, " />
    </div>
  )
}
