import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container } from 'native-base';
import React,{Component} from 'react';
import {View,Text,SafeAreaView,Image,Dimensions,ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SwiperFlatList from 'react-native-swiper-flatlist';
const {height,width}=Dimensions.get("window")
// In this page we can develop for banners 
//we have to add some banner images in our local storage
var banners=[{"url":require('../../src/images/banner1.png')},
{"url":require('../../src/images/banner2.jpg')},
{"url":require('../../src/images/banner3.jpg')},
{"url":require('../../src/images/banner4.jpg')},
{"url":require('../../src/images/banner5.jpg')},]
export default class  Home extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            displayData:false
        }
        AsyncStorage.getItem ("JSON_DATA").then((value)=>{
            console.log(value)
            if(value != null && value !=""){
                this.setState({data:JSON.parse(value)})
            }

        }).done()
    }
    render(){
        return(
            <Container>
                <ImageBackground source={require('../../src/images/bg46.png')} resizeMode='cover' style={{flex:1}}>
                    <View style={{alignContent:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'500',textAlign:'center',color:"blue",lineHeight:30}}>Welcome to FinancePeer</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                        <View>
                    {/*Here we can display the 5 banners for this we have to install another package */}
                    <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={0}
                    paginationActiveColor="green"
                    paginationStyle={{alignItems:'flex-end'}}
                    showPagination
                    data={banners}
                    renderItem={({ item }) => (
                      <Image style={{height:250,width:width}} source={item.url}></Image>
                    )}
                    />
                    </View>
                    </View>
                    <ScrollView>
                    {this.state.data != null && this.state.data != "" && !this.state.displayData ?<View style={{alignItems:'center',justifyContent:'center',marginTop:50,}}>
                       <Text style={{fontSize:20,color:"#00F",fontWeight:"bold"}} onPress={()=>this.setState({displayData:true})}>Click here to  get data from storage</Text></View>:null}
                    {this.state.displayData ?<View>
                    {this.state.data.map((item)=>{
                        console.log(item.id)
                    return(<View style={{alignItems:"flex-start",justifyContent:'center',marginTop:30,padding:"3%"}}> 
                        <Text style={{fontSize:16,color:"#000",textAlign:"left",lineHeight:25,fontWeight:"500"}}> <Text style={{fontWeight:"bold",fontSize:16}}>ID : </Text> {item.id}</Text>
                    <Text style={{fontSize:16,color:"#000",textAlign:"left",lineHeight:25}}><Text style={{fontWeight:"bold",fontSize:16}}>TITLE : </Text> {item.title}</Text>
                    <Text style={{fontSize:16,color:"#000",textAlign:"left",lineHeight:25}}><Text style={{fontWeight:"bold",fontSize:16}}>BODY : </Text>{item.body}</Text>
                    </View>)
                })}
                    </View>:null}
                    </ScrollView>
                </ImageBackground>
                </Container>
           
        )
    }
}