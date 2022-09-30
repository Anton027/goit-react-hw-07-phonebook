import { GlobalStyle } from './GlobalStyle';

import { Box } from "components/Box";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selector';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

    return (
      <Box
        margin="0 auto"
        padding="0 40px"
      >
        <Box as="h1" marginBottom="15px">
          Phonebook
        </Box>
        <ContactForm/>
        
        <Box padding="20px 0">
          <Box as="h2" marginBottom="15px">
            Contacts
          </Box>
          <Filter/>
          <Box as="ul"
            display="flex"
            flexDirection="column"
            padding="10px 0"
          >
            {isLoading && !error && <h2>Request in progress...</h2>}
            <ContactsList/>
          </Box>
        </Box>
        <GlobalStyle />
      </Box>
    );
}