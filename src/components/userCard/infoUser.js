import { FollowButton, FollowsP, TweetsP } from './userCard.stuled';

export const Infouser = ({ item }) => {
  return (
    <div>
      <TweetsP>{item.tweets} Tweets</TweetsP>
      <FollowsP>
        {new Intl.NumberFormat('en-US').format(item.followers)} Followers
      </FollowsP>
      <FollowButton>Follow</FollowButton>
    </div>
  );
};
