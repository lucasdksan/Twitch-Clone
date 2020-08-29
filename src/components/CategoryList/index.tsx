import React from 'react';
import { 
  CategoryConteiner,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Infor,
  List,
} from './styles';
import data from './data';

interface ItemProps{
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps>= ({item}) => (
    <CategoryConteiner>
      <CategoryImage source={item.source}/>
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle/>
        <Infor>{item.infor}</Infor>
      </CategoryStatus>
    </CategoryConteiner>
  );
  return (
    <List>
      {data.map(item=>(
        <CategoryItem key={item.name} item={item}/>
      ))}
    </List>
  );
};

export default CategoryList;
