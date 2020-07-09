import React from 'react'
import {View , StyleSheet ,Dimensions} from 'react-native'

const w= Dimensions.get('window').width
const h= Dimensions.get('window').height

export default StyleSheet.create({
    Text : {
        fontSize:20 ,
        fontWeight:"700",
        color:'#FFFFFF'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    BackGruondImage: {
        width:Dimensions.get('window').width,
        height: 300,
        justifyContent:'center',
        alignItems:'center'
    },
    IconImage:{
        width:170,
        height:170,
    },
    ImageCheck_safe1:{
        height:88,
        width:88
    },
    Button:{
        height:50,
        width:200,
        backgroundColor:'#6AC604',
        borderRadius:25,
    },
    bottomView:{

    },
    Item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: w / 20,
        paddingVertical: h / 45,
        margin:10
      },
      BorderItem: {borderBottomColor: '#F6F6F6', borderBottomWidth: 1},
      nameItem: {
        fontSize: 20,
      },
      ListItem: {
        height: ((h - (w * 264) / 375) * 3) / 5.5,
      },
})



