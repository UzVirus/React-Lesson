import '../Main.css';
import WayToTeach from './WayToTeach';
import { ways } from '../data';

import Button from './Button';

export default function Main() {
  return (
    <main>
      <section>
        <h3>Наш подход к обучению</h3>
        <ul>
            <WayToTeach 
                title={ways[0].title}
                description={ways[0].description}
            />
            <WayToTeach { ... ways[1]} />
            <WayToTeach { ... ways[2]} />
        </ul>
      </section>
      <section>
        <h3>Чем мы отличаемся от других</h3>
        <Button />
      </section>
    </main>
  )
}