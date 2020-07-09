import React, {useState, useEffect} from 'react'
import {View ,StyleSheet, Text,SafeAreaView,Image,ImageBackground ,Switch, TouchableOpacity,CheckBox,FlatList} from 'react-native'
import styles from './MainScreen1Style'
import axios from 'axios';
import {Images} from '@assets'



export  function MainScreen1(){
    useEffect(() => {
        getData();
      }, []);
    const [data , setData] = useState([]);
    const getData = () => {
        axios({
            method: 'get',
            url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/devices',
          }).then(function (response) {
            setData(response.data);
          });
    }
    const [isEnabled ,setIsEnabled] = useState(false);
    // const [chooseView , setChooseView] = useState(true);

    const changeStatus = (id: string) => {
        const cloneData = [...data];
        let itemSelected = cloneData.find((item) => item.id === id);
        console.log('itemSelected',itemSelected)
        if(itemSelected) {
          itemSelected.isCheck = !itemSelected.isCheck
        setData(cloneData);
        }
    };

    const Item = ({name, id, isCheck}) => {
        return (
          <View style={styles.BorderItem}>
            <View style={styles.Item}>
              <Text style={styles.nameItem}>{name}</Text>
              <CheckBox
                style={{justifyContent: 'center'}}
                value={isCheck}
                onValueChange={ () =>changeStatus(id)}
                >
              </CheckBox>
            </View>
          </View>
        );
      };

      const CheckFull = (bool: boolean) => {
        const cloneData = [...data];
        for (let item of cloneData) {
          item.isCheck = !isEnabled;
          console.log(".." ,isEnabled)
        }
        setData(cloneData);
      };

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        CheckFull()
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={Images.header}
                style={styles.BackGruondImage}>
                <Text style={[styles.Text , {marginBottom:10}]} >CYLOCK</Text>
                <ImageBackground source={Images.Icon}
                    style={[styles.IconImage,styles.center]}
                >
                    <Image source={Images.Check_safe1}
                    style={styles.ImageCheck_safe1}
                    />
                </ImageBackground>
                <Text style={styles.Text}> Block All Devices </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    
                />
            </ImageBackground>
            
            <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Item
                            name={item.name}
                            id ={item.id}
                            isCheck={item.isCheck}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            
            <View style={[styles.center , {margin:20}]}>
                <TouchableOpacity style={[styles.center , styles.Button]}>
                    <Text style={styles.Text}>Block Devices</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



