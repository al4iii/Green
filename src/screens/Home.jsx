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
import store from '../store/store';

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

const ItemNews = ({title, image, weight, date, newPrice, discount}) => (
  <View style={styles.itemNews}>   
      <View>
        <Image style={{width: '100%', height: 140}} source={{uri: image}} />
        <Text
          style={[
            styles.title,
            {fontSize: 12, fontWeight: '900', color: 'black', marginVertical: 10},
          ]}>
          {date}
        </Text>
        <Text style={[styles.title, {fontSize: 12}]}>{title}</Text>
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

  const renderItemNews = ({item}) => (
    <ItemNews title={item.title} image={item.image} date={item.date} />
  );
  return (
    <ScrollView style={styles.center}>
      <ImageSlider
        data={[
          {img: store.dateHome[0].image},
          {img: store.dateHome[1].image},
          {img: store.dateHome[2].image},
          {img: store.dateHome[3].image},
          {img: store.dateHome[4].image},
          {img: store.dateHome[5].image},
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
      {!isEnabled ? (
        <FlatList
          data={store.dateHome}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{marginTop: 30}}
        />
      ) : (
        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={store.dateHomeNews}
            renderItem={renderItemNews}
            keyExtractor={item => item.id}
            numColumns={2}
            style={{marginTop: 30, marginHorizontal: 10,}}
          />
        </View>
      )}
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
  },
  itemNews: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 5,
    borderRadius: 10,
    height: 300,
    // width: 350,
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
