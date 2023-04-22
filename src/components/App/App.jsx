import { getUsers, getFullArray } from 'Servises/hepers';
import { GlobalStyles } from 'components/GlobalStules.js/GlobalStules.stuled';
import { UserCard } from 'components/userCard/userCard';
import { useState, useEffect } from 'react';
import { ButtonMore, UlOfCards } from './App.styled';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [fullArray, setFullArray] = useState([]);

  const handleLoad = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getUsers(page);
        setUsers(prev => [...prev, ...data]);
        const response = await getFullArray();
        setFullArray(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [page]);

  return (
    <>
      <UlOfCards>
        {users.map(item => {
          return <UserCard key={item.id} item={item}></UserCard>;
        })}
      </UlOfCards>
      {users.length <= fullArray.length && (
        <ButtonMore type="button" onClick={() => handleLoad()}>
          Load more
        </ButtonMore>
      )}
      <GlobalStyles />
    </>
  );
};
