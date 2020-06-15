import React from 'react';
import {View, Text, FlatList,TouchableHighlight} from 'react-native';
import SubHeader from '../../components/subHeader';


export default props => {

  const noticeData = [
    {
      title:'01월 서비스 점검기간 안내',
      date:'2020.01.11'
    },
    {
      title:'12월 서비스 점검기간 안내',
      date:'2019.12.10'
    },
  ]

  return(
    <View style={{flex:1,}}>
      <SubHeader title="공지사항" navigation={props.navigation}/>
      <FlatList
        data={noticeData}
        renderItem={({item})=>
          <TouchableHighlight
            onPress={()=> {props.navigation.navigate('noticeView')}}
            underlayColor={'#fff'}
          >
            <View style={{paddingHorizontal:30,paddingVertical:15,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
              <Text>{item.title}</Text>
              <Text style={{marginTop:5,color:'#888',fontSize:12}}>{item.date}</Text>
            </View>
          </TouchableHighlight>
        }
        keyExtractor={ index => index }
        ListEmptyComponent={()=>
          <View style={{justifyContent:'center',alignItems:'center',height:300,}}>
            <Text>등록된 공지사항이 없습니다</Text>
          </View>
        }
      >

      </FlatList>
    </View>
  )
}