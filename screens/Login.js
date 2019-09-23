import React, {Component} from 'react';
import {Platform, Text, View, TextInput,Picker, TouchableHighlight,  Image,KeyboardAvoidingView,  ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from './styles.js';
import firebase from 'react-native-firebase';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
import Icon from 'react-native-vector-icons/FontAwesome';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');
export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      gender : '',
      profile : '',
      location : '',
      vacancies : '',
      shift : '',
      loading: false,
      cardheight:300
    }
    
  }

  signUp = () =>{
    this.setState(() => ({ cardheight:370}));
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({ passwordError: " Password is required."}));
    } else {
      this.setState(() => ({ passwordError: null}));
    }
    if (this.state.mobile.trim() === "") {
      this.setState(() => ({ mobileError: " Mobile Number is required."}));
    } else {
      this.setState(() => ({ mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === "") {
      this.setState(() => ({ confirmPasswordError: " Confirm Password is required."}));
    } else {
      this.setState(() => ({ confirmPasswordError: null}));
    }
    if(this.state.email && this.state.mobile && this.state.password && this.state.confirmPassword)
    {
      this.setState(() => ({ cardheight:300}));
    }

    if(this.state.email && this.state.password && this.state.mobile && this.state.confirmPassword && service.validateEmail(this.state.email))
    {
      
     this.setState ({ loading: true});
      setTimeout(() => 
      {this.setState({loading: false})
      this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
      this.props.navigation.navigate('Login')
       }, 3000)
      }

  
   // alert(this.state.password)
   }
  goBack = () =>{
    this.props.navigation.pop()
   }

   forgotpassword = () => 
   {
    this.props.navigation.navigate('forgot')
   }


   submit = () => {
   
       if (this.state.profile && this.state.location && this.state.mobile)
       {
           console.log('details', this.state.profile, this.state.shift, this.state.vacancies, this.state.location, this.state.gender, this.state.salary, this.state.mobile)
           firebase.database().ref("jobs").push ({
            profile: this.state.profile,
            location: this.state.location,
            shift: this.state.shift,
            salary: this.state.salary,
            phone :   this.state.mobile
         });
         this.props.navigation.navigate('Jobs')
       }
       else
       {
           alert("please enter profile, location and mobile number")
       }
   }


  render() {
    return (
    
    
      <View style={{flex:1}}>
    
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Post Job</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
              
                
                <ScrollView style={{width:'100%'}}>
                <View style={{ marginTop:20, alignItems:'center' }}>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/user.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(profile) => this.setState({profile})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Profile"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                />
                </View>
                

                

     <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/loc.png')}></Image>
                <TextInput style={styles.inputBox}
                onChangeText={(location) => this.setState({location})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Location"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
              />
                </View>


                <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/mobile.png')}></Image>
                 <TextInput style={styles.inputBox}
                onChangeText={(mobile) => this.setState({mobile})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Mobile Number"
                placeholderTextColor = "#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
               />
                </View>


                <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/salary.png')}></Image>
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.salary}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({salary: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Salary"   value="j5000-10000" /> 
                    <Picker.Item label="5000-10000" value="5000-10000" />  
                    <Picker.Item label="10000-20000" value="10000-20000" />  
                    <Picker.Item label="20000-30000" value="20000-30000" /> 
                    <Picker.Item label="30000-40000" value="30000-40000" />
                    <Picker.Item label="40000-50000" value="40000-50000" /> 
                </Picker>  
                </View>

                
                <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}}source={require('../images/shift.png')}></Image>
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.shift}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({shift: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Shift" value="Shift" />
                    <Picker.Item label="Day" value="Day" />  
                    <Picker.Item label="Night" value="Night" />  
                    <Picker.Item label="Rotational" value="Rotational" />
                </Picker>  
                </View>
                <View style={{flexDirection:'row',  borderWidth : 1, width:'85%', backgroundColor : '#ffffff', borderRadius:100, marginTop:20}}>
                <Image style={{width:25,marginLeft:20, marginTop:15,  height:25}} source={require('../images/gender.png')}></Image>
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.gender}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({gender: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Gender" value="Gender" />
                    <Picker.Item label="Male" value="Male" />  
                    <Picker.Item label="Female" value="Female" />  
                    <Picker.Item label="Both" value="Both" />  
                </Picker>  
                </View>
              
                  
 
               
                
                </View>
                <TouchableHighlight style={styles.fullWidthButton2} onPress={() => this.submit()}>
            <Text style={styles.fullWidthButtonText2}>Submit</Text>
            </TouchableHighlight>
                
                </ScrollView>
                
 <View style={styles.footer}>
       <Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-2457999726327943/7471203861"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
  </View>
           

      </View>
      
    );
}


}