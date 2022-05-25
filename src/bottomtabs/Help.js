import { Container, Content,Footer } from 'native-base';
import React,{Component} from 'react';
import {View,Text,SafeAreaView,ActivityIndicator,FlatList} from 'react-native'
export default class  Help extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            isLoading:false
        }

    }
    _getDataFromApiCall=async()=>{
        this.setState({isLoading:true})
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            this.setState({ data: json.movies });
          } catch (error) {
            console.log(error);
          } finally {
            this.setState({ isLoading: false });
          }
        
    }
    render(){
        return(<Container>
            <Content>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"#00f",fontSize:18,textAlign:'justify'}}> In this screen we will get data from API call</Text>
            </View>
            <View style={{ flex: 1, padding: 24 }}>
        {this.state.isLoading ? <ActivityIndicator size ="large" color={"red"}/> : (
          <FlatList
            data={this.state.data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
            </Content>
            <Footer style={{backgroundColor:"#DDD",borderTopWidth:1,justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:"#00F",fontSize:20,fontWeight:'600',textAlign:"center"}} onPress={()=>{this._getDataFromApiCall()}}>GET THE DATA</Text>
            </Footer>
        </Container>)
    }
}