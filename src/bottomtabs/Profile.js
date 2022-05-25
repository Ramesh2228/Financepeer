import React,{Component} from 'react';
import {View,Text,Button,Alert} from 'react-native'
import { Container,Content,Footer } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data=require("../json/data.json")
export default class  Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            viewdata:false

        }
    }
    _viewData=()=>{
        this.setState({viewdata:true})
                  
    }
    _saveData=()=>{
        this.setState({viewdata:false})
        AsyncStorage.setItem("JSON_DATA",JSON.stringify(data));
        Alert.alert("Data saved successfully")
    }
    render(){
        return(<Container>
            <Content>
                <View><Text style={{textAlign:'center',fontSize:18,color:"#00f"}}> In this page we can get the data from our project folder and save the data </Text></View>
               {this.state.viewdata ? <View>
                {data.map((item)=>{
                    return(<View style={{alignItems:"flex-start",justifyContent:'center'}}> 
                        <Text style={{fontSize:16,color:"#000",textAlign:"left",lineHeight:25,fontWeight:"500"}}> <Text style={{fontWeight:"bold",fontSize:16}}>ID : </Text> {item.id}</Text>
                    <Text style={{fontSize:16,color:"#000",textAlign:"left",lineHeight:25}}><Text style={{fontWeight:"bold",fontSize:16}}>TITLE : </Text> {item.title}</Text>
                    <Text style={{fontSize:16,color:"#000",textAlign:"left",lineHeight:25}}><Text style={{fontWeight:"bold",fontSize:16}}>BODY : </Text>{item.body}</Text>
                    </View>)
                })}
                </View>:null}
            </Content>
            <Footer style={{backgroundColor:"#DDD",borderTopWidth:1}}>
          <View style={{alignSelf:"center",justifyContent:"center"}}>
             {!this.state.viewdata ? <Text style={{color:"#000",fontWeight:"500",fontSize:18}} onPress={()=>{this._viewData()}}> VIEW </Text>:<Text style={{color:"#000",fontWeight:"500",fontSize:18}} onPress={()=>{this._saveData()}}> SAVE </Text>}
          </View>
  
            </Footer>
        </Container>)
    }
}