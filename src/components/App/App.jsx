import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import { getUsers, getFullArray } from 'Servises/hepers';
// import { GlobalStyles } from 'components/GlobalStules.js/GlobalStules.stuled';
// import { UserCard } from 'components/userCard/userCard';
// import { useState, useEffect } from 'react';
// import { ButtonMore, UlOfCards } from './App.styled';
import { SharedLayout } from 'components/SharedLayout/sharedLayout';

// const [users, setUsers] = useState([]);
// const [page, setPage] = useState(1);
// const [fullArray, setFullArray] = useState([]);

// const handleLoad = () => {
//   setPage(prev => prev + 1);
// };

// useEffect(() => {
//   const fetch = async () => {
//     try {
//       const { data } = await getUsers(page);
//       setUsers(prev => [...prev, ...data]);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetch();
// }, [page]);

// useEffect(() => {
//   const fetch = async () => {
//     try {
//       const response = await getFullArray();
//       setFullArray(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetch();
// }, []);

const Home = lazy(() => import('../../Pages/Home/home'));
const Tweets = lazy(() => import('../../Pages/Tweets/tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    // <>
    //   <UlOfCards>
    //     {users.map(item => {
    //       return <UserCard key={item.id} item={item}></UserCard>;
    //     })}
    //   </UlOfCards>
    //   {users.length !== fullArray.length && (
    //     <ButtonMore type="button" onClick={() => handleLoad()}>
    //       Load more
    //     </ButtonMore>
    //   )}
    //   <GlobalStyles />
    // </>
  );
};
