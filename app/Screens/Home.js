/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  Dimensions,
  RefreshControl,
} from 'react-native';
import _ from 'lodash';
import Ripple from 'react-native-material-ripple';

class Home extends Component {
  constructor(props) {
    super(props);
    this.width = Dimensions.get('window').width - 20;
    this.state = {
      data: [
        {
          food_name: 'Gado Gado from Indonesia',
          chef_name: 'Chef Abraham Adam',
          food_img: require('../Assets/img/gado-gado.jpg'),
          chef_img: require('../Assets/img/chef2.jpg'),
          like_count: 9078,
          comment_count: 189,
          posted_time: '2 mins ago',
        },
        {
          food_name: 'Dadar Gulung Khas Jawa',
          chef_name: 'Laila Sukmaningsih',
          food_img: require('../Assets/img/dadar-gulung.jpg'),
          chef_img: require('../Assets/img/chef1.jpg'),
          like_count: 1089,
          comment_count: 86,
          posted_time: '10 mins ago',
        },
        {
          food_name: 'Nasi Kuning Sunda',
          chef_name: 'Chef Pandu Wicaksono',
          food_img: require('../Assets/img/nasi-kuning.jpg'),
          chef_img: require('../Assets/img/chef3.jpg'),
          like_count: 2097,
          comment_count: 109,
          posted_time: '20 mins ago',
        },
        {
          food_name: 'Ayam Geprek Istimewa',
          chef_name: 'Chef Wisnu Sanjaya',
          food_img: require('../Assets/img/ayam-geprek.jpg'),
          chef_img: require('../Assets/img/chef4.jpg'),
          like_count: 5976,
          comment_count: 287,
          posted_time: '45 mins ago',
        },
        {
          food_name: 'Cappucino Latte Coffe',
          chef_name: 'Chef Lina Larissa',
          food_img: require('../Assets/img/cappucino.jpg'),
          chef_img: require('../Assets/img/chef12.jpg'),
          like_count: 6543,
          comment_count: 552,
          posted_time: '1 hour ago',
        },
      ],
      fullData: [],
      query: '',
    };
  }

  componentDidMount() {
    this.setState({ fullData: this.state.data });
  }

  contains = ({ food_name }, query) => {
    if (food_name.includes(query)) {
      return true;
    }
    return false;
  };

  handleSearch = text => {
    const formatQuery = text.charAt(0).toUpperCase() + text.slice(1);
    const data = _.filter(this.state.fullData, food => {
      return this.contains(food, formatQuery);
    });
    this.setState({ query: formatQuery, data });
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  renderHeader = () => (
    <View style={Styles.headerContainer}>
      <View style={Styles.imgHeaderLeft}>
        <Image
          source={require('../Assets/img/chef13.jpg')}
          style={Styles.imgHeaderLeft}
        />
      </View>
      <View style={Styles.textInputStyle}>
        <TextInput
          style={Styles.textInput}
          placeholder="Search any food here.."
          onChangeText={this.handleSearch}
        />
      </View>
      <View style={Styles.notifIcon}>
        <Image
          source={require('../Assets/img/ic_notif.png')}
          style={Styles.notifIcon}
        />
      </View>
    </View>
  );

  listItems = ({ item }) => (
    <View style={Styles.dataFoodContainer}>
      <View style={Styles.dataFoodHeader}>
        <View style={Styles.dataFoodAvatar}>
          <Image source={item.chef_img} style={Styles.imgHeaderLeft} />
        </View>
        <View style={Styles.dataFoodDesc}>
          <Text style={Styles.foodName}>{item.food_name}</Text>
          <Text style={Styles.chefName}>{item.chef_name}</Text>
        </View>
        <View style={Styles.dataFoodFollow}>
          <Ripple style={Styles.btnStyle}>
            <Text style={Styles.btnTextStyle}>FOLLOW</Text>
          </Ripple>
        </View>
        <View style={Styles.dataFoodMore}>
          <Image
            source={require('../Assets/img/ic_more.png')}
            style={Styles.imgMore}
          />
        </View>
      </View>
      <View style={Styles.imgBannerFood}>
        <Ripple>
          <Image
            source={item.food_img}
            style={[Styles.imgBanner, { width: this.width }]}
          />
        </Ripple>
      </View>
      <View style={Styles.dataFoodFooterContainer}>
        <View style={Styles.likeContainer}>
          <Image
            source={require('../Assets/img/ic_love.png')}
            style={Styles.likeIcon}
          />
          <Text style={Styles.countLabel}>{item.like_count}</Text>
        </View>
        <View style={Styles.commentContainer}>
          <Image
            source={require('../Assets/img/ic_comment.png')}
            style={Styles.commentIcon}
          />
          <Text style={Styles.countLabel}>{item.comment_count}</Text>
        </View>
        <Text style={Styles.showMore}>Show More ...</Text>
        <Text style={Styles.showTime}>{item.posted_time}</Text>
      </View>
    </View>
  );

  renderDataFoods = () => {
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={(list, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={this.listItems}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      />
    );
  };

  searchData = () => (
    <View style={Styles.searchContainer}>
      <Text style={Styles.searchText}>Search: </Text>
      <View style={Styles.searchTextContentWrapper}>
        <Text style={Styles.searchTextContent}>
          {this.state.query ? this.state.query : '-'}
        </Text>
      </View>
    </View>
  );

  mainContent = () => (
    <View style={Styles.mainContent}>
      <View
        style={[
          Styles.tabContainer,
          { marginBottom: this.state.query ? 60 : 20 },
        ]}>
        <View style={Styles.tabHeaderLeft}>
          <Ripple>
            <Text style={Styles.textTabLeft}>Following</Text>
          </Ripple>
          {this.state.query ? this.searchData() : null}
        </View>
        <View style={Styles.tabHeaderRight}>
          <Ripple>
            <Text style={Styles.textTabRight}>Recent</Text>
          </Ripple>
        </View>
      </View>
      {this.renderDataFoods()}
    </View>
  );

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.content}>
          {this.renderHeader()}
          {this.mainContent()}
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  imgHeaderLeft: {
    height: 40,
    width: 40,
    borderRadius: 50,
    flex: 1,
  },
  textInput: {
    marginLeft: 15,
    marginRight: 5,
    height: 40,
    color: '#111',
    borderRadius: 10,
    paddingLeft: 20,
    borderWidth: 0,
    backgroundColor: '#ECECEC',
  },
  textInputStyle: {
    flex: 8,
  },
  imgHeaderRight: {
    height: 40,
    width: 40,
    borderRadius: 50,
    flex: 1,
  },
  notifIcon: {
    height: 35,
    width: 35,
    flex: 1,
    marginTop: 1,
  },
  mainContent: {
    backgroundColor: '#ECECEC',
    flex: 1,
    height: 100,
  },
  tabContainer: {
    height: 50,
    flexDirection: 'row',
  },
  tabHeaderLeft: {
    flex: 1,
  },
  tabHeaderRight: {
    flex: 1,
    backgroundColor: '#6AE89E',
  },
  textTabLeft: {
    color: '#111',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 18,
    fontWeight: '500',
  },
  textTabRight: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 18,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  searchText: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchTextContent: {
    color: '#fff',
    padding: 5,
    fontStyle: 'italic',
  },
  searchTextContentWrapper: {
    marginTop: 8,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  btnStyle: {
    backgroundColor: '#49BCF8',
    height: 30,
    borderRadius: 5,
    marginLeft: 5,
  },
  btnTextStyle: {
    paddingHorizontal: 5,
    textAlign: 'center',
    lineHeight: 30,
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  imgMore: {
    height: 25,
    width: 25,
  },
  dataFoodContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 0,
  },
  dataFoodHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  dataFoodAvatar: {
    flex: 1,
    height: 40,
    width: 40,
  },
  dataFoodDesc: {
    flex: 5,
    marginLeft: 15,
    marginRight: 5,
  },
  dataFoodFollow: {
    flex: 1.7,
  },
  dataFoodMore: {
    flex: 1,
    alignItems: 'flex-end',
  },
  foodName: {
    fontWeight: '700',
  },
  chefName: {
    fontWeight: '300',
  },
  imgBannerFood: {
    margin: 5,
    alignItems: 'center',
  },
  imgBanner: {
    height: 200,
    borderRadius: 5,
  },
  likeIcon: {
    height: 30,
    width: 30,
    marginTop: -5,
  },
  dataFoodFooterContainer: {
    margin: 10,
    flexDirection: 'row',
  },
  likeContainer: {
    flexDirection: 'row',
  },
  commentContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  commentIcon: {
    height: 30,
    width: 30,
    marginTop: -5,
  },
  countLabel: {
    fontWeight: '600',
    paddingLeft: 5,
  },
  showMore: {
    color: '#0067EF',
    fontWeight: '700',
    paddingLeft: 10,
  },
  showTime: {
    textAlign: 'right',
    paddingLeft: 20,
  },
});

export default Home;
