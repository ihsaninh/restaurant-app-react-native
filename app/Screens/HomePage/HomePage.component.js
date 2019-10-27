/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  Dimensions,
  RefreshControl,
} from 'react-native';
import _ from 'lodash';
import { Styles } from './HomePage.component.styles';
import Ripple from 'react-native-material-ripple';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.width = Dimensions.get('window').width - 20;
    this.state = {
      data: [
        {
          food_name: 'Gado Gado from Indonesia',
          chef_name: 'Chef Abraham Adam',
          food_img: require('../../Assets/img/gado-gado.jpg'),
          chef_img: require('../../Assets/img/chef2.jpg'),
          like_count: 9078,
          comment_count: 189,
          posted_time: '2 mins ago',
        },
        {
          food_name: 'Dadar Gulung Khas Jawa',
          chef_name: 'Laila Sukmaningsih',
          food_img: require('../../Assets/img/dadar-gulung.jpg'),
          chef_img: require('../../Assets/img/chef1.jpg'),
          like_count: 1089,
          comment_count: 86,
          posted_time: '10 mins ago',
        },
        {
          food_name: 'Nasi Kuning Sunda',
          chef_name: 'Chef Pandu Wicaksono',
          food_img: require('../../Assets/img/nasi-kuning.jpg'),
          chef_img: require('../../Assets/img/chef3.jpg'),
          like_count: 2097,
          comment_count: 109,
          posted_time: '20 mins ago',
        },
        {
          food_name: 'Ayam Geprek Istimewa',
          chef_name: 'Chef Wisnu Sanjaya',
          food_img: require('../../Assets/img/ayam-geprek.jpg'),
          chef_img: require('../../Assets/img/chef4.jpg'),
          like_count: 5976,
          comment_count: 287,
          posted_time: '45 mins ago',
        },
        {
          food_name: 'Cappucino Latte Coffe',
          chef_name: 'Chef Lina Larissa',
          food_img: require('../../Assets/img/cappucino.jpg'),
          chef_img: require('../../Assets/img/chef12.jpg'),
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
    this.renderFulldata();
  }

  renderFulldata = () => {
    const { data } = this.state;
    this.setState({ fullData: data });
  };

  contains = ({ food_name }, query) => {
    if (food_name.includes(query)) {
      return true;
    }
    return false;
  };

  handleSearch = text => {
    const { fullData } = this.state;
    const formatQuery = text.charAt(0).toUpperCase() + text.slice(1);
    const data = _.filter(fullData, food => {
      return this.contains(food, formatQuery);
    });
    this.setState({ query: formatQuery, data });
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  renderHeader = () => (
    <View style={Styles.headerContainer}>
      <View style={Styles.imgHeaderLeft}>
        <Image
          source={require('../../Assets/img/chef13.jpg')}
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
          source={require('../../Assets/img/ic_notif.png')}
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
            source={require('../../Assets/img/ic_more.png')}
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
            source={require('../../Assets/img/ic_love.png')}
            style={Styles.likeIcon}
          />
          <Text style={Styles.countLabel}>{item.like_count}</Text>
        </View>
        <View style={Styles.commentContainer}>
          <Image
            source={require('../../Assets/img/ic_comment.png')}
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
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={(list, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={this.listItems}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
        }
      />
    );
  };

  searchData = () => {
    const { query } = this.state;
    return (
      <View style={Styles.searchContainer}>
        <Text style={Styles.searchText}>Search: </Text>
        <View style={Styles.searchTextContentWrapper}>
          <Text style={Styles.searchTextContent}>{query ? query : '-'}</Text>
        </View>
      </View>
    );
  };

  mainContent = () => {
    const { query } = this.state;
    return (
      <View style={Styles.mainContent}>
        <View style={[Styles.tabContainer, { marginBottom: query ? 60 : 20 }]}>
          <View style={Styles.tabHeaderLeft}>
            <Ripple>
              <Text style={Styles.textTabLeft}>Following</Text>
            </Ripple>
            {query ? this.searchData() : null}
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
  };

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

export default HomePage;
