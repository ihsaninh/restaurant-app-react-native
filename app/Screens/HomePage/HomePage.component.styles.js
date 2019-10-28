import { StyleSheet } from 'react-native';

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
  renderEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
    paddingTop: 50,
  },
});

export { Styles };
