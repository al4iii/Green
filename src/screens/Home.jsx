import React from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  StyleSheet,
  Switch,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageSlider} from 'react-native-image-slider-banner';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Nutella',
    image:
      'https://vambuket.by/wp-content/uploads/2020/11/407D2AF9-BBAF-4379-B88E-BAD713786E42-768x768.png',
    weight: '350г',
    price: '24.59',
    newPrice: '13.59',
    discount: '-22%',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Корм для собак «Chappi» мясное изобилие',
    image:
      'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/4046/00154046/norm/thumbs/00154046.n_1_180x180@2x.png',
    weight: '15 кг',
    price: '74.89',
    newPrice: '64.99',
    discount: '-13%',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Мобильный телефон «Vertex»',
    image:
      'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/3611/01373611/norm/thumbs/01373611.n_1_180x180@2x.png',
    weight: '',
    price: '32.00',
    newPrice: '37.59',
    discount: '-12%',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
    title: 'Nutella',
    image:
      'https://vambuket.by/wp-content/uploads/2020/11/407D2AF9-BBAF-4379-B88E-BAD713786E42-768x768.png',
    weight: '350г',
    price: '24.59',
    newPrice: '13.59',
    discount: '-22%',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd97f63',
    title: 'Корм для собак «Chappi» мясное изобилие',
    image:
      'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/4046/00154046/norm/thumbs/00154046.n_1_180x180@2x.png',
    weight: '15 кг',
    price: '74.89',
    newPrice: '64.99',
    discount: '-13%',
  },
  {
    id: '58694a0f-3da1-471f-bd96-11e29d72',
    title: 'Мобильный телефон «Vertex»',
    image:
      'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/3611/01373611/norm/thumbs/01373611.n_1_180x180@2x.png',
    weight: '',
    price: '32.00',
    newPrice: '37.59',
    discount: '-12%',
  },
];

const Item = ({title, image, weight, price, newPrice, discount}) => (
  <View style={styles.item}>
    <View style={{flexDirection: 'row'}}>
      <View>
        <Image style={{width: 120, height: 140}} source={{uri: image}} />
        <Text style={[styles.title, {fontSize: 12}]}>{title}</Text>
      </View>
      <View style={{marginLeft: 65}}>
        <Text style={[styles.title, {fontSize: 20}]}>{weight}</Text>
        <Text
          style={[
            styles.title,
            ,
            {
              fontSize: 25,
              color: 'yellow',
              fontWeight: '600',
              paddingVertical: 12,
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            },
          ]}>
          {price}
        </Text>
        <Text
          style={[
            styles.title,
            {fontSize: 30, fontWeight: '900', color: 'black'},
          ]}>
          {newPrice}
        </Text>
        <Text
          style={[
            styles.title,
            {paddingLeft: 60, paddingTop: 10, fontSize: 25},
          ]}>
          {discount}
        </Text>
      </View>
    </View>
  </View>
);

const Home = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      image={item.image}
      weight={item.weight}
      price={item.price}
      newPrice={item.newPrice}
      discount={item.discount}
    />
  );
  return (
    <ScrollView style={styles.center}>
      <ImageSlider
        data={[
          {
            img: DATA[0].image,
          },
          {
            img: DATA[1].image,
          },
          {
            img: DATA[2].image,
          },
          {
            img: DATA[3].image,
          },
          {
            img: DATA[4].image,
          },
          {
            img: DATA[5].image,
          },
        ]}
        autoPlay={true}
        timer={2500}
        headerStyle={{padding: 0}}
      />
      <View
        style={{
          paddingHorizontal: '20%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text>{'Акции'}</Text>
        <Switch
          trackColor={{false: 'green', true: 'green'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text>{'Новости'}</Text>
      </View>
      <View style={{paddingHorizontal: 16, marginTop: 20}}>
        <Text>{`Акции действует ${'с 31 августа по 13 сентября'}`}</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginTop: 30}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  title: {
    width: 150,
    fontSize: 15,
  },
});

export default Home;
