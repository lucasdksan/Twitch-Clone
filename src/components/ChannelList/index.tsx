import React from 'react';
import {
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RightSide,
  WhiteCircle,
  List
} from './styles';
import data from './data';

interface ItemProps{
  item: typeof data[0];
}

const ChannelList: React.FC = () => {
  const ChannelItem:React.FC<ItemProps> = ({item})=>(
    <ChannelContainer>
      <LeftSide>
        <Avatar source={item.image}/>
        <Column>
          <UserName>{item.name}</UserName>
          <Info>{item.info}</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle/>
      </RightSide>
    </ChannelContainer>
  );
  return (
    <List>
      {data.map(item=>(
        <ChannelItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default ChannelList;
