import React,{useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet,Dimensions,TouchableOpacity,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import faker from 'faker';
import SubHeader from '../../components/subHeader';
import ImageView from '../../components/imageView';
import Confirm from '../../components/confirm'

const OrderCancle = props => {
    return(
        <Modal
            visible={props.visible}
            transparent={true}
            animationType={'fade'}
            onRequestClose={props.close}
        >
            <View style={{flex:1,justifyContent:'center',padding:20,}}>
                <View style={{backgroundColor:'#fff',borderRadius:10,overflow:'hidden',backgroundColor:'#fff',elevation:10,zIndex:3,padding:20,}}>
                    <View style={{marginBottom:30,}}>
                        <Text style={{fontSize:18,marginBottom:5}}>예약취소</Text>
                        <Text style={{color:'#9a9a9a'}}>현재 <Text style={{color:'#d22828'}}>무료</Text>로 취소가 가능합니다</Text>
                        <Text style={{color:'#9a9a9a'}}>예약을 취소할까요?</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',}}>
                        <TouchableOpacity
                            onPress={props.close}
                            style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20,backgroundColor:'#e2e2e2',paddingHorizontal:20}}
                        >
                            <Text style={{color:'#494949'}}>다시 생각 해 볼게요</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={props.close}
                            style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20,backgroundColor:'#292929',marginLeft:10,paddingHorizontal:20}}
                        >
                            <Text style={{color:'#fff'}}>네, 취소합니다</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                onPress={props.close}
                activeOpacity={1}
                style={{flex:1,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',zIndex:1,width:'100%',height:'100%',zIndex:1}}
            >
            </TouchableOpacity>
        </Modal>
    )
}

export default props => {

    const state = {
        seletedIndex: 0,
        goodsItem:[
            {name:'생활빨래 80리터', amount:1,  price:15000},
            {name:'패딩점퍼', amount:1,  price:7000},
            {name:'와이셔츠', amount:3,  price:9000},
        ]
    }

    const data = props.navigation.getParam('item', {});

    const screen = {
        width:Dimensions.get('window').width,
    }

    const [imageView, setImageView] = useState(false);

    const [orderCancle, setOrderCancle] = useState(false);

    return(
        
        <View style={{paddingBottom:60}}>

            <SubHeader navigation={props.navigation} title={'이용내역 상세'}/>

            <ScrollView 
                contentContainerStyle={{backgroundColor:'#f2f2f2'}}
            >
                <View style={styles.section}>
                    <View style={styles.sectionCont}>          
                        <View style={{marginBottom:30}}>
                            <View style={[{flexDirection:'row',justifyContent:'space-around',alignItems:'center',position:'relative',paddingBottom:15}]}>
                                <View style={{position:'relative',flex:1,alignItems:'center'}}>
                                    <View style={{height:5,backgroundColor:'#D3EDF6',position:'absolute',top:30,right:0,width:'50%'}}></View>
                                    <View style={{width:90,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#D3EDF6',borderRadius:5,}}>
                                        <Icon name="check" color={'#01a1dd'} style={{marginBottom:3}} size={16}></Icon>
                                        <Text style={{textAlign:'center',color:'#494949'}}>주문완료</Text>
                                    </View>
                                </View>
                                <View style={{position:'relative',flex:1,alignItems:'center'}}>
                                    <View style={{height:5,borderRadius:2,backgroundColor:'#D3EDF6',position:'absolute',top:30,left:0,width:'100%'}}></View>
                                    <View style={{width:90,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#D3EDF6',borderRadius:5,}}>
                                        <Icon name="check" color={'#01a1dd'} style={{marginBottom:3}} size={16}></Icon>
                                        <Text style={{textAlign:'center', color:'#494949'}}>수거중</Text>
                                    </View>
                                </View>
                                <View style={{position:'relative',flex:1,alignItems:'center'}}>
                                    <View style={{height:5,backgroundColor:'#01a1dd',position:'absolute',top:30,left:0,width:'50%'}}></View>
                                    <View style={{width:5,height:'50%',backgroundColor:'#01a1dd',position:'absolute',bottom:-15,left:'50%',}}></View>
                                    <View style={{width:90,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#01a1dd',borderRadius:5,}}>
                                        <Icon name="truck" color={'#fff'} style={{marginBottom:3}} size={16}></Icon>
                                        <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>수거완료</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[{flexDirection:'row',justifyContent:'space-around',alignItems:'center',position:'relative',paddingTop:15,}]}>
                                <View style={{position:'relative',flex:1,alignItems:'center'}}>
                                    <View style={{height:5,backgroundColor:'#e2e2e2',position:'absolute',top:30,right:0,width:'50%'}}></View>
                                    <View style={{width:90,height:60,alignItems:'center',justifyContent:'center',borderWidth:3,borderColor:'#e2e2e2',backgroundColor:'#fff',borderRadius:5,}}>
                                        <Text style={{textAlign:'center',color:'#888'}}>배송완료</Text>
                                    </View>
                                </View>
                                <View style={{position:'relative',flex:1,alignItems:'center'}}>
                                    <View style={{height:5,backgroundColor:'#e2e2e2',position:'absolute',top:30,left:0,width:'100%'}}></View>
                                    <View style={{width:90,height:60,alignItems:'center',justifyContent:'center',borderWidth:3,borderColor:'#e2e2e2',backgroundColor:'#fff',borderRadius:5,}}>
                                        <Text style={{textAlign:'center',color:'#888'}}>배송중</Text>
                                    </View>
                                </View>
                                <View style={{position:'relative',flex:1,alignItems:'center'}}>
                                    <View style={{height:5,borderRadius:2,backgroundColor:'#e2e2e2',position:'absolute',top:30,left:0,width:'50%'}}></View>
                                    <View style={{width:5,height:'50%',backgroundColor:'#e2e2e2',position:'absolute',top:-15,left:'50%',}}></View>
                                    <View style={{width:90,height:60,alignItems:'center',justifyContent:'center',borderWidth:3,borderColor:'#e2e2e2',backgroundColor:'#fff',borderRadius:5,}}>
                                        <Text style={{textAlign:'center', color:'#888'}}>작업완료</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    

                        <View style={[styles.boxItem]}>
                            <View  style={styles.contRow}>
                                <Text style={{color:'#494949'}} >주문확인</Text>
                                <Text style={{color:'#888'}}>2020.05.20 11:34</Text>
                            </View>
                        </View>
                        <View style={[styles.boxItem]}>
                            <View  style={styles.contRow}>
                                <Text style={{color:'#494949'}}>수거완료</Text>
                                <Text style={{color:'#888'}}>2020.05.20 11:34</Text>
                            </View>
                            <View style={styles.divider}/>
                            <View style={[styles.contRow,{justifyContent:'flex-start'}]}>
                                <TouchableOpacity 
                                    onPress={()=> setImageView(true)}
                                    style={{width:60,height:60,backgroundColor:'#f2f2f2',marginRight:10,borderRadius:5}}
                                
                                >
                                    <Image source={{uri:faker.image.business()}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.boxItem]}>
                            <View  style={styles.contRow}>
                                <Text style={{color:'#494949'}}>추가결제요청</Text>
                                <Text style={{color:'#888'}}>2020.05.20 11:34</Text>
                            </View>
                            <View style={styles.divider}/>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Text style={{flex:1,marginBottom:15}}>맡기신 세탁물에 <Text style={{color:'#01a1dd'}}>추가결제</Text> 요청이 있습니다</Text>
                                <TouchableOpacity
                                    onPress={()=>{props.navigation.navigate('receiptView')}}
                                    style={{paddingHorizontal:20,height:34,borderRadius:5,justifyContent:'center',alignItems:'center',backgroundColor:'#292929'}}
                                >
                                    <Text style={{color:'#fff'}}>자세한 내용 확인하기</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{fontSize:12,color:'#888',marginTop:15}}>
                                ※ 추가결제금에 대한 결제가 이루어지지 않는다면 세탁물은 발송되지 않습니다.
                            </Text>
                        </View>
                        <View style={[styles.boxItem]}>
                            <View  style={styles.contRow}>
                                <Text style={{color:'#494949'}}>주문취소</Text>
                                <Text style={{color:'#888'}}>2020.05.20 12:10</Text>
                            </View>                            
                        </View>
                        <View style={[styles.boxItem]}>
                            <View  style={styles.contRow}>
                                <Text style={{color:'#494949'}}>주문취소 수수료 결제</Text>
                                <Text style={{color:'#888'}}>3,000원</Text>
                            </View>                            
                        </View>
                        
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>기사정보</Text>
                    </View>
                    <View style={styles.sectionCont}>
                        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',borderRadius:5}}>
                            <Image source={{uri:faker.image.avatar()}} style={{width:70,height:70,borderRadius:5}}/>
                            <View style={{marginLeft:20}}>
                                <Text style={{fontSize:16}}>박수민<Text style={{fontSize:12,color:'#888'}}>(베르나딘)</Text></Text>
                                <Text style={{marginTop:5}}>010-8525-0000</Text>
                                <Text style={{marginTop:5,fontSize:12,color:'#888'}}>오늘도 즐거운 하루되세요!</Text>
                            </View>
                            <TouchableOpacity
                                style={{position:'absolute',top:15,right:15,width:40,height:40,borderRadius:20,backgroundColor:'#46BF33',justifyContent:'center',alignItems:'center'}}
                            >
                                <Icon name="phone" color="#fff" size={20}></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>주문정보</Text>
                    </View>
                    <View style={styles.sectionCont}>
                        <View style={styles.lineItem}>
                            <Text style={{marginBottom:10,}}>수거/배달장소</Text>
                            <Text style={{color:'#888'}}>부산광역시 금정구 부산대학로 63번길 2</Text>
                            <Text style={{marginBottom:10,color:'#888'}}>과학기술연구동 201호</Text>
                            <Text style={{color:'#888'}}>출입구정보: 비밀번호 #2214</Text>
                        </View>
                        <View style={styles.divider}/>
                        <View style={[styles.contRow,{marginBottom:10,}]}>
                            <Text>수거일</Text>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>2020년 5월 20일</Text>
                            </View>
                        </View>
                        <View style={[styles.contRow,{marginBottom:10,}]}>
                            <Text>수거시간</Text>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>오전 10시~12시</Text>
                            </View>
                        </View>
                        <View style={styles.contRow}>
                            <Text>수거방법</Text>
                            <View>
                                <Text style={{color:'#888'}}>대면수거</Text>
                            </View>
                        </View>
                        
                        <View style={styles.divider}/>
                        <View>
                            <Text style={{marginBottom:10,}}>요구사항</Text>
                            <View>
                                <Text style={{color:'#888'}}>-</Text>
                            </View>
                        </View>
                        <View style={styles.divider}/>

                        <Text style={{color:'#888',marginBottom:20,lineHeight:21,}}>수거 2시간이전 취소시 3,000원에 취소수수료가 부과되며 수거완료이후에는 취소가 불가능한 점을 알려드립니다</Text>

                        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                            <TouchableOpacity
                                style={{height:34,backgroundColor:'#292929',borderRadius:5,justifyContent:'center',alignItems:'center',paddingHorizontal:20}}
                                onPress={()=>setOrderCancle(true)}
                            >
                                <Text style={{color:'#fff'}}>주문취소</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>선택한 상품</Text>
                    </View>
                    <View style={{padding:20,}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View>
                                <Text>이불패드/커버</Text>
                                <Text style={{fontSize:12,color:'#888'}}>1개 x 8,900원</Text>
                            </View>
                            <Text>8,500원</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:10,}}/>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View>
                                <Text>목도리/스카프</Text>
                                <Text style={{fontSize:12,color:'#888'}}>1개 x 3,900원</Text>
                            </View>
                            <Text>3,900원</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>검수된 상품</Text>
                    </View>
                    <View style={{padding:20,}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View>
                                <Text>이불패드/커버</Text>
                                <Text style={{fontSize:12,color:'#888'}}>1개 x 8,900원</Text>
                            </View>
                            <Text>8,500원</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#e2e2e2',marginVertical:10,}}/>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View>
                                <Text>목도리/스카프</Text>
                                <Text style={{fontSize:12,color:'#888'}}>2개 x 3,900원</Text>
                            </View>
                            <Text>7,800원</Text>
                        </View>
                        <View style={{backgroundColor:'rgba(210,10,85,0.05)',marginTop:10,padding:5,borderRadius:4}}>
                            <Text style={{color:'#D20A55',fontSize:12,}}>ㄴ 수량 1개가 추가되었습니다</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.sectionTitleText}>결제정보</Text>
                    </View>
                    <View style={styles.sectionCont}>
                        <View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>상품합계</Text>
                                <Text>29,800원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>검수 후 추가금액</Text>
                                <Text>3,000원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>추가 세탁금액</Text>
                                <Text>3,000원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>배송비</Text>
                                <Text>0원</Text>
                            </View>
                            <View style={[styles.contRow,]}>
                                <Text style={{color:'#888'}}>취소수수료</Text>
                                <Text>0원</Text>
                            </View>
                        </View>
                       <View style={styles.divider}></View>
                        <View>
                            <View style={[styles.contRow,{marginBottom:10,}]}>
                                <Text style={{color:'#888'}}>쿠폰할인</Text>
                                <Text>-5,000원</Text>
                            </View>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>이벤트할인</Text>
                                <Text>-3,000원</Text>
                            </View>
                        </View>
                       <View style={styles.divider}></View>
                       <View>
                            <View style={[styles.contRow,{marginBottom:10}]}>
                                <Text style={{color:'#888'}}>결제금액</Text>
                                <Text style={{color:'#D20A61'}}>32,000원</Text>
                            </View>
                            <View style={[styles.contRow,{marginBottom:10}]}>
                                <Text style={{color:'#888'}}>추가결제금액</Text>
                                <Text>4,500원</Text>
                            </View>
                            <View style={styles.contRow}>
                                <Text style={{color:'#888'}}>결제수단</Text>
                                <Text>신한카드(0811)</Text>
                            </View>
                        </View>
                    </View>
                </View>
              
            </ScrollView>

            <ImageView 
                visible={imageView}
                close={()=>setImageView(false)}
            />

            <OrderCancle
                visible={orderCancle}
                close={()=>setOrderCancle(false)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        marginBottom:20,
        backgroundColor:'#fff'
    },
    sectionTitle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderColor:'#e2e2e2',
    },
    sectionTitleText:{
        fontSize:16,
        color:'#01a1dd'
    },
    sectionCont:{       
        padding:20,
    },
    sectionContTitle:{
        fontSize:16,
        color:'#494949',
        marginBottom:10,
    },
    contRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    boxItem:{
        marginBottom:10,
        padding:15,
        borderWidth:1,
        borderColor:'#e2e2e2',
        borderRadius:5,
    },
    productItemName:{
        marginBottom:5,
        fontSize:16,
    },

    divider:{
        height:1,
        backgroundColor:'#e2e2e2',
        marginVertical:20
    }
})