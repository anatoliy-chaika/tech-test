import styled from '@emotion/styled';
import img from '../Images/background.png';

export const CardContainer = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  padding-top: 28px;
  margin: auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.58px 6.87px 20.62px 0px rgba(0, 0, 0, 0.23);
`;

export const HeroDiv = styled.div`
  width: 380px;
  height: 175px;

  margin-bottom: 18px;
  background-image: url(${img});
  box-shadow: (5px 5px 1px rgba(0, 0, 0, 0.7));
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const Line = styled.div`
  position: relative;
  background-color: #ebd8ff;
  height: 8px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Circle = styled.div`
  position: absolute;

  left: 50%;
  transform: translate(-50%, -55%);
  background-color: #ebd8ff;
  width: 80px;
  height: 80px;
  padding: 18px;

  background-size: cover;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Img = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 68px;
  height: 68px;
`;

export const TweetsP = styled.p`
  text-align: center;
  margin-top: 66px;
  color: #ebd8ff;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const FollowsP = styled.p`
  text-align: center;
  margin-top: 16px;
  color: #ebd8ff;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const FollowButton = styled.button`
  display: block;
  cursor: pointer;
  min-width: 196px;
  min-height: 50px;
  padding: 14px 28px 14px 28px;
  border: none;
  border-radius: 10px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;
`;
