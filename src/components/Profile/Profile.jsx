import React from 'react';
import PropTypes from 'prop-types';
import { ProfileWrapper } from './Profile.styled'
import { Description } from './Profile.styled';
import { Avatar } from './Profile.styled';
import { Name } from './Profile.styled';
import { Tag } from './Profile.styled';
import { Location } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatItem } from './Profile.styled';
import { StatLabel} from './Profile.styled';
import { StatQuantity} from './Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      
      <Stats>
        
        <StatItem>
           <StatLabel>Followers</StatLabel>
           <StatQuantity>{stats.followers}</StatQuantity>
          
        </StatItem>
        
        <StatItem>
           <StatLabel>Views</StatLabel>
           <StatQuantity>{stats.views}</StatQuantity>
          
        </StatItem>
        
        <StatItem>
           <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
          
        </StatItem>
      </Stats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
     followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,  
    }).isRequired,
};

export default Profile;
