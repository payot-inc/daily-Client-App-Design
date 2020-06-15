import React,{useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {ActivityIndicator} from 'react-native-paper'

export default () => {

  setTimeout(() => { setLoading(false) }, 3000);

  const [loading, setLoading] = useState(true); 

  return (
    <Modal 
      visible={loading}
      transparent={true}
    >
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#rgba(0,0,0,0.8)'}}>
        <View style={{padding:20,backgroundColor:'#fff',borderRadius:10}}>
          <ActivityIndicator animating={true} color={'#01a1dd'}  size={40}/>
          <Text style={{marginTop:20,color:'#494949'}}>정보를 불러오고 있습니다</Text>
        </View>
      </View>
    </Modal>
  )
}