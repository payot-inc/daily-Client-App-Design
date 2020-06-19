import React,{useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import Confirm from '../components/confirm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {

  const [confirm, setConfirm]  = useState(false)

  return(
    <View style={{flex:1,}}>
      <Confirm 
        title="추가금 결제"
        description="13,500원의 추가금을 결제하시겠습니까?"
        visible={confirm}
        close={()=>setConfirm(false)}
      />

      <View style={{padding:30,paddingBottom:0,}}>
        <TouchableOpacity
          onPress={()=>{props.navigation.goBack(null)}}
          style={{position:'absolute',left:20,top:20,width:40,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'#f2f2f2',zIndex:99,borderRadius:20}}
        >
          <Icon name="arrow-left" size={30} color={'#d2d2d2'}></Icon>
        </TouchableOpacity>

        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../assets/img/logo_v_blue.png')} style={{resizeMode:'contain',height:100}}/>
          <Text style={{marginTop:10,fontSize:12,color:'#888',textAlign:'center'}}>데일리세탁 부산 금정구</Text>
        </View>

        <View style={{flexDirection:'row',borderTopWidth:1,borderBottomWidth:1,borderColor:'#e2e2e2',marginTop:20,paddingVertical:10,}}>
          <View style={{flex:1,justifyContent:'space-between',borderRightWidth:1,paddingRight:10,borderColor:'#e2e2e2'}}>
            <Text style={{fontSize:10,color:'#888'}}>RECEIPT NO:</Text>
            <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}> 0809</Text>
          </View>
          <View style={{flex:1,justifyContent:'space-between',marginHorizontal:10}}>
            <Text style={{fontSize:10,color:'#888'}}>DATE:</Text>
            <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}>12/06/2020</Text>
          </View>
          <View style={{flex:1,justifyContent:'space-between',borderLeftWidth:1,paddingLeft:10,borderColor:'#e2e2e2'}}>
            <Text style={{fontSize:10,color:'#888'}}>STAFF:</Text>
            <Text style={{textAlign:'right',marginTop:5,fontSize:13,}}>김지민</Text>
          </View>
        </View>
      </View>

      <ScrollView>

        <View style={{paddingHorizontal:20,paddingVertical:30,}}>
          <View style={{marginBottom:10,justifyContent:'space-around'}}>
            <Text style={{color:'#494949',zIndex:2,fontSize:16,}}>고객님이 주문한 상품</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#f8f8f8',padding:5,marginBottom:5,}}>
            <Text style={{flex:1,fontSize:12}}>생활빨래 80리터</Text>
            <Text style={{width:30,fontSize:12}}>1개</Text>
            <Text style={{width:60,textAlign:'right',fontSize:12}}>19,800원</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#f8f8f8',padding:5,marginBottom:5,}}>
            <Text style={{flex:1,fontSize:12}}>와이셔츠</Text>
            <Text style={{width:30,fontSize:12}}>3개</Text>
            <Text style={{width:60,textAlign:'right',fontSize:12}}>4,500원</Text>
          </View>
  
          <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:30,}}/>
        
          <View style={{marginBottom:10,justifyContent:'space-around'}}>
            <Text style={{color:'#494949',zIndex:2,fontSize:16,}}>검수완료된 품목</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#EFF4F6',padding:5,marginBottom:5,}}>
            <Text style={{width:70,color:'#01a1dd',fontSize:12}}>변경없음</Text>
            <Text style={{flex:1,fontSize:12}}>생활빨래 80리터</Text>
            <Text style={{width:30,fontSize:12}}>1개</Text>
            <Text style={{width:60,textAlign:'right',fontSize:12}}>19,800원</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#EFF4F6',padding:5,marginBottom:5,}}>
            <Text style={{width:70,color:'#d22828',fontSize:12}}>수량변경</Text>
            <Text style={{flex:1,fontSize:12}}>와이셔츠</Text>
            <Text style={{width:30,fontSize:12,color:'#d22828'}}>4개</Text>
            <Text style={{width:60,textAlign:'right',fontSize:12,color:'#d22828'}}>6,000원</Text>
          </View>


          <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:30,}}/>

    
          <View style={{marginBottom:10,justifyContent:'space-around'}}>
            <Text style={{color:'#494949',zIndex:2,fontSize:16,}}>추가 세탁금액</Text>
          </View>
          <View>
            <Text style={{marginBottom:10,color:'#888',fontSize:12,}}>와이셔츠에 심각한 오염이 있어 고급세탁을 진행하였습니다</Text>
            <Text style={{textAlign:'right',color:'#d22828'}}>3,000원</Text>
          </View>
        </View>

        <View style={{paddingHorizontal:20,paddingVertical:30,backgroundColor:'#F9EEF3'}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10,}}>
            <Text style={{color:'#888'}}>검수로 변경된 금액</Text>
            <Text style={{color:'#494949'}}>9,000원</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
            <Text style={{color:'#888'}}>추가 세탁금액</Text>
            <Text style={{color:'#494949'}}>3,000원</Text>
          </View>
          <View style={{height:1,backgroundColor:'#c2c2c2',marginVertical:15,}}/>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text>합계</Text>
            <Text style={{color:'#D20A61',fontWeight:'bold'}}>12,000원</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={()=>setConfirm(true)}
          style={{height:50,backgroundColor:'#D20A61',justifyContent:'center',alignItems:'center'}}
        >
          <Text style={{color:'#fff'}}><Text style={{fontWeight:'bold'}}>12,000원</Text> 추가금 결제하기</Text>
        </TouchableOpacity>
      </ScrollView>

      
    </View>


  )
}