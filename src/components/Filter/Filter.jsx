import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Пошук контактів
      <input
        type="text"
        value={nameFilter}
        onChange={handleChange}
        className={styles.input}
        placeholder="Введіть ім’я"
      />
    </label>
  );
}
