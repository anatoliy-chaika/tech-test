import { useState, useEffect } from 'react';

import { getFullArray, getUsers } from 'Servises/hepers';
import { UserCard } from 'components/userCard/userCard';

import { ButtonBack, ButtonMore, H1Styled, UlOfCards } from './tweets.styled';

const Tweets = () => {
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
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [page]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getFullArray();
        setFullArray(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <ButtonBack to="/"> Back to main</ButtonBack>
      <H1Styled>Pupular Tweets</H1Styled>
      <UlOfCards>
        {users.map(item => {
          return <UserCard key={item.id} item={item}></UserCard>;
        })}
      </UlOfCards>
      {users.length !== fullArray.length && (
        <ButtonMore type="button" onClick={() => handleLoad()}>
          Load more
        </ButtonMore>
      )}
    </>
  );
};

export default Tweets;
