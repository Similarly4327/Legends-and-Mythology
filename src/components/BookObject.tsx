import { Link } from 'react-router-dom';
import type { Book } from '../content/types';
import { BookEmblem } from './BookEmblem';
import { Icon } from './Icon';
import styles from './BookObject.module.css';
import { useBookMotion } from '../hooks/useBookMotion';

export function BookObject({ book }: { book: Book }) {
  const move = useBookMotion();
  return <article className={styles.book} data-book={book.id}>
    <Link to={`/boeken/${book.id}`} onClick={event => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button === 0) { event.preventDefault(); move(book.id, 'opening'); } }} className={styles.link} aria-label={`Open ${book.title.toLocaleLowerCase('nl')}`}>
      <div className={styles.object} aria-hidden="true">
        <div className={styles.pages} />
        <div className={styles.cover}>
          <div className={styles.spine} />
          <span className={styles.corner} /><span className={styles.corner} /><span className={styles.corner} /><span className={styles.corner} />
          <span className={styles.coverLabel}>LEGENDS & MYTHOLOGY</span>
          <div className={styles.emblem}><BookEmblem kind={book.emblem} /></div>
          <span className={styles.coverTitle}>{book.shortTitle}<br />wezens</span>
          <span className={styles.ornament}>✧</span>
          <span className={styles.volume}>VOLUME {book.volume}</span>
        </div>
      </div>
      <div className={styles.caption}>
        <span className={styles.bookNumber}>BOEK {book.volume}</span>
        <h2>{book.title}</h2>
        <p>{book.invitation}</p>
        <span className={styles.open}>Open het boek <Icon name="arrow-right" /></span>
      </div>
    </Link>
  </article>;
}
