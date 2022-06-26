import React from 'react';
import {View, Text,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';



function App() {
  return (
    <View>
        <View style={{top:5,height:58,borderWidth: 1,}}>
        <TouchableOpacity>  
        <Image source={require('./Images/greater.png')} 
        style={{top:20,left:15}}
        />
        </TouchableOpacity>
        <Text style={{position:'absolute',alignSelf:'center',fontSize:24,fontFamily:'poppins',top:10,fontWeight:'200',fontStyle:'normal',color:'black'}}>No Crop Post</Text>
      </View>
      
      <TouchableOpacity>  
      <View style={{top:100,left:95}}>
        <Image source={require("./Images/circle4.png")} 
        style={{height:190,width:200,left:10,backgroundColor:'white',borderRadius:17}}
        />
      </View></TouchableOpacity>
      <TouchableOpacity>
      <View style={{position:'absolute',alignSelf:'flex-end',top:-38,right:160}}>
       <Image source={require("./Images/upload4.png")} 
       style={{height:90,width:90,backgroundColor:'white',borderRadius:8}}
        />
      </View></TouchableOpacity>
      <View style={{top:115,alignSelf:'center'}}>
        <Text style={{color:'black',fontSize:18}}>Upload an image</Text>
      </View>
      <View  style={{top:119,alignSelf:'center'}}>
        <Text style={{color:'black',fontSize:16}}>Select an iMage to make some cool grids</Text>
      </View>

        <TouchableOpacity>
        <View style={{top:150,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
        <Text style={{fontSize:20,alignSelf: "center",top:10,color:'white'}}>Add Image</Text>
        </View></TouchableOpacity>
</View>
  )
}
export default App;

