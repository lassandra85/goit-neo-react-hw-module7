import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  if (loading) return <p>Завантаження контактів...</p>;
  if (error) return <p className={styles.error}>Помилка: {error}</p>;
  if (!contacts.length) return <p>Контактів не знайдено</p>;

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          {contact.name}: {contact.number}
          <button className={styles.button} onClick={() => handleDelete(contact.id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
