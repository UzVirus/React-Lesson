import '../Header.css';
import logo from '/vite.svg';

export default function Header() {
  const now = new Date();  
  return (
    <header>
      <img src={logo} alt="Логотип" />
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  )
}