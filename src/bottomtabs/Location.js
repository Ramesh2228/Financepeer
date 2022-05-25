import React,{Component} from 'react';
import {View,Text,Image,Platform,PermissionsAndroid,Button,ActivityIndicator,TouchableOpacity} from 'react-native'
import {  Container } from 'native-base';
import GeoLocation from 'react-native-geolocation-service';

const API_KEY = "AIzaSyDb-7f98Jq-s8pzod1MiX18q4zEUTFv_AA";

export default class  Location extends Component{
    constructor(props){
        super(props);
        this.state={
            address:"",
            loading:false
        }
    }
    hasLocationPermission=async()=>{
        if(Platform.OS =='ios'){
            const hasPermission=await this.hasLocationPermissionIOS();
            return hasPermission
        }
        const hasPermission=await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
        if(hasPermission){
            return true;
        }
        const status=await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        if(status=PermissionsAndroid.RESULTS.GRANTED){
            return true;
        }
    }
    _getCurrentLocation=async()=>{
        this.setState({loading:true});
        const hasLocationPermission=await this.hasLocationPermission();
        if (!hasLocationPermission) {
            return;
        }
            GeoLocation.getCurrentPosition(
                (position) => {
                  console.log(position);
                  this._getGeoAddress(position.coords.latitude,position.coords.longitude)
                },
                (error) => {
                  // See error code charts below.
                  console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
          
    }
        _getGeoAddress=(lat,lon)=>{
    var geocodingAPI='https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat +" "+ lon +"&key="+API_KEY+"&sensor=true";
    fetch(geocodingAPI).then((res)=>{
        return res.json()
    }).then((json)=>{
        //console.log(json)
        if(json.status =="OK"){
            var result=json.results[0];
            var addArray=[],addrObj={};
            var addrString=result.formatted_address.split(',');
            addArray.push(addrString[0]);
            addArray.push(addrString[1]);
            addArray.push(addrString[2]);
            addArray.push(addrString[3]);
            addArray.push(addrString[4]);
            addArray.push(addrString[5]);
            addArray.push(addrString[6]);
            addrObj=addArray.toString();
            this.setState({address:addrObj,loading:false})

        }
    })
    }
    render(){
        return(
        <Container>
            <View style={{alignContent:"center",justifyContent:'center',paddingHorizontal:'3%',paddingVertical:"3%"}}>
            <Text style={{color:"blue",fontSize:18,fontWeight:'700',textAlign:'center'}}>In this page we will get the customer location</Text>
            <Text style={{color:"#000",fontSize:18,fontWeight:'700',textAlign:'center',marginTop:30}}>To get location click on below location icon</Text>
        </View>
        <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{width: 100, height: 100,alignSelf:'center',marginTop:20}}
          />
        {this.state.loading ?<ActivityIndicator size={"large"} color={'blue'}/>:null}
        <Text style={{color:"#000",fontSize:18,fontWeight:"600",textAlign:"center",lineHeight:30}}>{this.state.address}</Text>
       <View style={{alignSelf:'center',justifyContent:'center'}}>
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>this._getCurrentLocation()}
            style={{alignItems:'center',flexDirection:'row',padding:10}}
            >
                <Text style={{color:"#fff",backgroundColor:"#000",padding:10,marginTop:50,borderRadius:10}}> Get Location</Text>
            </TouchableOpacity></View>
        </Container>)
    }
}