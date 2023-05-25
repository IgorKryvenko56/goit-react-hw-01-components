import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './Friendlist.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statusType={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
 FriendListItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
 };

export default FriendListItem;