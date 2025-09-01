import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !phone) return alert('Введіть ім’я та телефон');

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Ім’я
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Телефон
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? 'Додаємо...' : 'Додати контакт'}
      </button>

      {error && <p className={styles.error}>Помилка: {error}</p>}
    </form>
  );
}
