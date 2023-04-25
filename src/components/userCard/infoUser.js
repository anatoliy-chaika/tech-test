import { useEffect, useState } from 'react';
import {
  FollowButton,
  FollowsP,
  TweetsP,
  FollowingButton,
} from './userCard.stuled';
import { updateData } from 'Servises/hepers';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export const Infouser = ({ item: { followers, tweets, id } }) => {
  const [userId, setUserId] = useState('');
  const [newFollower, setFollower] = useState(followers);
  const [isFollow, setIsFollow] = useLocalStorage(id, false);

  const toggle = () => {
    setUserId(id);
    if (!isFollow) {
      setIsFollow(true);
      setFollower(prev => prev + 1);
    } else {
      setIsFollow(false);
      setFollower(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const edit = async () => {
      try {
        await updateData(userId, newFollower);
      } catch (error) {
        console.log(error);
      }
    };
    edit();
  }, [userId, newFollower]);

  return (
    <div>
      <TweetsP>{tweets} Tweets</TweetsP>
      <FollowsP>
        {new Intl.NumberFormat('en-US').format(newFollower)} Followers
      </FollowsP>
      {!isFollow ? (
        <FollowButton type="button" onClick={toggle}>
          Follow
        </FollowButton>
      ) : (
        <FollowingButton type="button" onClick={toggle}>
          Following
        </FollowingButton>
      )}
    </div>
  );
};
