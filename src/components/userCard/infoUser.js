import { useEffect, useState } from 'react';
import {
  FollowButton,
  FollowsP,
  TweetsP,
  FollowingButton,
} from './userCard.stuled';
import { updateData } from 'Servises/hepers';
import { isUser, addId, deleteId } from 'Servises/hepers';

export const InfoUser = ({ item: { followers, tweets, id } }) => {
  const [userId, setUserId] = useState('');
  const [newFollower, setFollower] = useState(followers);

  const isFollow = isUser(id);

  const toggle = () => {
    setUserId(id);
    if (!isFollow) {
      addId(id);
      setFollower(prev => prev + 1);
    } else {
      deleteId(id);
      setFollower(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const edit = async () => {
      try {
        await updateData(id, newFollower);
      } catch (error) {
        console.log(error);
      }
    };
    edit();
  }, [userId, id, newFollower]);

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
