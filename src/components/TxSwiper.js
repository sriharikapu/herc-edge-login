import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import originator from "./buttons/originatorButton.png";
import recipient from "./buttons/recipientButton.png";

// import styles from '../assets/styles';
export default class TxSwiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.props.cards,
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0
    }
  }




  renderCard = card => {
    let factomEntry
    let data = card.data;
    let header = card.header;
    let locationImage = header.tXLocation === 'recipient' ? recipient : originator;
    let price = card.header.price;
    let metricsHash, ediT, docHash, imageHash;


    // if(data.hasOwnProperty('documents')) {
    // docNum = data.documents.length
    // docHash = <Text style={styles.text}>Document IPFS Hash:{data.documents}</Text>;
    // }    

    // if(data.hasOwnProperty('images')) {
    //   imageHash = <Text style={styles.text}>Image StorJ Hash: {data.images}</Text>;
    // }

    // if(data.hasOwnProperty('properties')) {
    //   metricsHash = <Text style={styles.text}>Metrics IPFS Hash: {data.properties}</Text>;
    // }

    return (
      <View key={card.key} style={styles.card}>
        <Image style={styles.assetLocationLabel} source={locationImage} />
        {/* {dTime} */}
        <View style={styles.transPropField}>
          {/* <Text style={styles.transRevName}>Herc ID:</Text> */}
          {/* <Text style={styles.revPropVal}>{this.props.hercId}</Text> */}
        </View>
        {/* {ediT} */}
        {/* {docHash}
        {imageHash}
        {metricHash} */}
        {/* {price} */}
      </View>
    )
  };

  onSwipedAllCards = () => {
    console.log('Swiped all cards');
    this.setState({
      swipedAllCards: true
    })
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render() {
    console.log(this.state.cards, 'cards in swiper')
    return (
      <Swiper
        backgroundColor={'#002740'}
        // marginBottom={}
        ref={swiper => {
          this.swiper = swiper
        }}
        onSwiped={this.onSwiped}
        onTapCard={this.swipeLeft}
        cards={this.state.cards}
        cardIndex={this.state.cardIndex}
        cardVerticalMargin={10}
        renderCard={this.renderCard}
        onSwipedAll={this.onSwipedAllCards}
        stackSize={3}
        cardHorizontalMargin={5}
        stackSeparation={15}
        overlayLabels={{
          bottom: {
            title: 'SAVE',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          },
          left: {
            title: 'DISCARD',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30
              }
            }
          },
          right: {
            title: 'COMPLETE',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30
              }
            }
          },
          top: {
            title: 'TRANSFER',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          }
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      >
        <Button onPress={this.swipeLeft} title='Swipe Left' />
      </Swiper>
    )
  }
}
// const mapStateToProps = (state) => {
//   cards: Object.values(state.AssetReducers.selectedAsset.transactions)
// }
const styles = StyleSheet.create({
  container: {
    // flex: 1,

    width: '95%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    //  flex: 1,
    height: '80%',
    width: '90%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#F3c736',
    justifyContent: "flex-start",
    backgroundColor: '#091141',
    alignSelf: 'center',
    alignContent: "center",
    // left: 0,
    top: -2,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#F3c736',
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: 'transparent',
    height: 17,
    // width: 50
  },
  image: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
    // borderRadius: 50 / 2,
  },
  imgcontainer: {
    flex: 1,
    backgroundColor: "blue",

    justifyContent: "center",
    margin: 5
  },
  assetLocationLabel: {
    height: 30,
    width: 150,
    resizeMode: "contain",
    marginTop: 10,
    alignSelf: "center"
    // marginRight: 10
  },
  done: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'transparent'
  },
  transReview: {
    color: '#f3c736',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: "200",
    fontFamily: 'dinPro',
  },
  transDocField: {

    height: 45,
    width: '100%',
    // flexDirection: "row",
    justifyContent: "space-around",

    padding: 2,
    margin: 2,
    // textAlign:'center',
    // textAlignVertical: 'center',
    // backgroundColor: '#021227',
    alignSelf: 'center',
    borderColor: '#F3c736',


  },
  transRevName: {
    fontFamily: 'dinPro',
    fontSize: 14,
    color: 'white',
    margin: 2,
    marginBottom: 5,
    textAlign: 'left'

  },
  transRevTime: {
    color: '#f3c736',
    fontSize: 14,
    fontFamily: 'dinPro',
    textAlign: 'center'
  },
  revPropVal: {
    fontFamily: 'dinPro',
    fontSize: 14,
    color: '#f3c736',
    margin: 2,
    // textAlign: 'right'
  },
  transPropField: {
    height: 20,
    width: 225,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    margin: 2,
    // textAlign:'center',
    // textAlignVertical: 'center',
    backgroundColor: "#021227",
    alignSelf: "center"
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 3,
    borderColor: '#F3c736',
    height: 17,

  }
})
