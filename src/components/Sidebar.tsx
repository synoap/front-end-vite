import styles from './Siderbar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover} 
      src='https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=40'
      />
    
    <div className={styles.profile}>
    <Avatar src='https://github.com/4W3Dev.png'
    onClick={() => alert('Hello to my World!')}
    />

      <strong>Eliandro Viana</strong>
      <span>Full Stack Developer</span>
    </div>

    <footer>
    <a href="#">
      <PencilLine size={20} />
      Edit Profile
    </a>
    </footer>
    </aside>
  )
}