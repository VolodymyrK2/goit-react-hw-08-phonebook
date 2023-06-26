import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Spinner} from '@chakra-ui/react'
import ContactForm from 'components/ContactForm/ContactForm'
import Filter from 'components/Filter/Filter'
import ContactList from 'components/ContactsList/ContactsList'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from "react"
import { fetchContacts } from 'redux/contacts/operations'
import { selectIsLoading, selectError } from 'redux/contacts/selectors'
import css from './Contacts.module.css'

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm/>
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter />
        {isLoading && <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        }
        {error && Notify.failure({error})}
        <ContactList/>
      </div>
    )
}
export default Contacts