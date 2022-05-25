import { Container } from 'native-base';
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Button,Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// In this page we can develop to take photo from selife camera and display the file 

export default class  Camera extends Component{
    constructor(props){
        super(props);
        this.state={
            image:""
        }

    }
    _chooseFile=()=>{
        let options={
            title:'Select Image',
            
            storageOptions:{
                skipBackup:true
            }
        }
        ImagePicker.showImagePicker(options,(Response)=>{
            if(Response.didCancel){
                console.log("User Cancelled")
            }
            else if(Response.customButton){
                console.log(Response.customButton)
            }
            else {
                this.setState({image:Response.uri})
            }
        })
    }
    render(){
        return(
        <Container><View style={{alignItems:"center",justifyContent:'center'}}>
            <Text style={{fontSize:18,color:"blue",textAlign:'center'}}> In this page we can display the image which is taken from camera </Text>
            <Text style={{lineHeight:30,fontWeight:'800',color:"#000",fontSize:16,textAlign:"center"}}> You want to open camera click on below button </Text>
            {this.state.image !=null && this.state.image!= "" ?<Image source={{uri:this.state.image}} style={{height:400,width:400,marginTop:50}}></Image>:null}
           
           
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>this._chooseFile()}
            style={{alignItems:'center',flexDirection:'row',padding:10}}
            >
                <Text style={{color:"#fff",backgroundColor:"#000",padding:10,marginTop:50,borderRadius:10}}> Choose File</Text>
            </TouchableOpacity>
            
            </View>
            </Container>
            )
    }
}