import {Platform, StyleSheet, TouchableOpacity, Share,  Image, Text, View, StatusBar, TouchableHighlight} from 'react-native';

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
import { InterstitialAdManager, NativeAdsManager,  BannerView, AdSettings  } from 'react-native-fbads';
const advert2 = firebase.admob().rewarded('ca-app-pub-2457999726327943/1552662776')
const advert = firebase.admob().interstitial('ca-app-pub-2457999726327943/6120810784')
const request = new AdRequest();
request.addKeyword('foobar');
export default class Welcome extends Component {

  componentDidMount = () => {
  //  AdSettings.addTestDevice(AdSettings.currentDeviceHash);
//     advert.loadAd(request.build());
//     advert2.loadAd(request.build())

//     advert2.on('onAdLoaded', () => {
//        console.log('Advert2 ready to show.')
//     })
    
//     advert2.show()

// advert.on('onAdLoaded', () => {
//   console.log('Advert ready to show.');
// });

// setTimeout(() => {
//   if (advert.isLoaded()) {
//     console.log('working')
//     advert.show();
//   } else {
//     console.log('error occured')
//   }
// }, 1000);
  }
  static navigationOptions = {
    title: "Welcome"
  }
  goToPage = (val) => {
    this.props.navigation.navigate(val)
  }
  share = () => {
    Share.share({
      message: 'Checkout Vestige Products - https://play.google.com/store/apps/details?id=com.vestigeproductslist',
      url: 'https://play.google.com/store/apps/details?id=com.vestigeproductslist',
      title: 'Start Your Own Business'
    }, {
      // Android only:
      dialogTitle: 'Share the app',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.mainContainer}>
               <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>Welcome</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
                <View style={styles.content}>

 
                    <View style={styles.messageBox}>
                       
                            <Text style={styles.topText}>Welcome Mesage</Text>
                       
                            <Text style={styles.messageBoxBodyText}>This application helps to post jobs and find jobs in punjab. To start, click on the button below</Text>
                           
                            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.goToPage('Jobs')}>
            <Text style={styles.fullWidthButtonText}>Start Now</Text>
            </TouchableHighlight>
          
            
          
                    </View>

                </View>
                <View style={styles.footer}>
       <Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-2457999726327943/5218792655"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
  </View>
            </View>
            
    );
  }
};
const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#8e44ad',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    margintop: {
      marginTop:20
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20                //Step 3
    },
    mainContainer:{
      flex:1                  //Step 1
  },
  content:{
      backgroundColor:'#ebeef0',
      flex:1                //Step 2
  },
  messageBox:{
    alignItems : 'center'
  },
  messageBoxBodyText:{
    margin:10,
    fontSize:18
  },
  messageBoxBodyText2:{
    margin:10,
    fontSize:18,
    fontWeight : 'bold'
  },
  topText:{
    fontSize:25,
    marginTop : 10,
    fontWeight : 'bold'
  },
  topText2:{
    fontSize:20,
    marginTop : 10,
    marginLeft:10
  },
  inputsContainer: {
    flex: 1,
    alignItems : 'center'
  },
  fullWidthButton: {
    backgroundColor: '#8e44ad',
    height:40,
    width:'80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : 25,
    marginBottom:20,
    marginTop:10
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  },
  footer:{
    position:'absolute',
    bottom : 20,
    width : '100%'
  }
  });