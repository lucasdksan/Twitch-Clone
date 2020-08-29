import React from 'react';
import data from './data';
import {
  StreamContainer,
  StreamThubnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  TagRow,
  TagView,
  TagText,
  List,
  StreamDescription,
  StreamCategory
} from './styles';

interface ItemProps{
  item: typeof data[0];
}

const StreamList: React.FC = () => {
  const StreamItem:React.FC<ItemProps> = ({item})=>(
    <StreamContainer>
      <StreamThubnail source={item.image}/>
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUserName numberOfLines={1}>{item.name}</StreamUserName>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>{item.description}</StreamDescription>
          <StreamCategory>{item.category}</StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView><TagText>{item.tag}</TagText></TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  return (
    <List>
      {data.map(item=>(
        <StreamItem key={item.name} item={item}/>
      ))}
    </List>
  );
};

export default StreamList;
