import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from '../../Utils/ResponsiveUI'
import icAdd from '../../Assets/ic_add.png'
import icBack from '../../Assets/ic_back.png'
const Header = ({
    navigation,
    onPressAdd = () => {},
    label,
    OnBack,
    onPressBack,
    onAdd,
    labelBack
}) => {
  return (
    <View style={styles.container}>
        {OnBack === true ?
            <TouchableOpacity onPress={onPressBack} style={{flexDirection:'row', alignItems:'center'}}>
                <Image style={styles.imgBack} source={icBack} resizeMode={'contain'}/>
                <Text style={styles.labelBack}>{labelBack}</Text>
            </TouchableOpacity>
        :
            <Image style={styles.img} source={{uri:'https://source.unsplash.com/1024x768/?doctor'}}/>
        }
        <Text style={styles.label}>{label}</Text>
        { onAdd == true ?
            <TouchableOpacity onPress={onPressAdd} style={styles.buttonAdd}>
                <Image source={icAdd} style={styles.icAdd} resizeMode={'contain'}/>
            </TouchableOpacity>
        :
        <></>
        }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveHeight(30),
        flexDirection:'row',
        backgroundColor:'#252d30',
        marginTop: responsiveHeight(20),
        marginBottom: responsiveHeight(20),
        justifyContent:'space-between'
    },
    label:{
        fontSize: responsiveHeight(20),
        fontFamily:'Inter-SemiBold',
        lineHeight:responsiveHeight(20.6),
        color: 'white'
    },
    labelBack:{
        fontSize: responsiveHeight(20),
        fontFamily:'Inter-SemiBold',
        lineHeight:responsiveHeight(20.6),
        color: 'white',
        marginLeft: responsiveHeight(10)
    },
    imgBack:{
        width: responsiveHeight(30),
        height:responsiveHeight(30),
        borderRadius:responsiveHeight(10)
    },
    img:{
        width: responsiveHeight(40),
        height:responsiveHeight(40),
        borderRadius:responsiveHeight(10)
    },
    buttonAdd:{
        width: responsiveHeight(40),
        height:responsiveHeight(40),
        backgroundColor: '#0f66fc',
        borderRadius:responsiveHeight(15),
        justifyContent:'center',
        alignItems:"center"
    },
    icAdd:{
        width: responsiveHeight(18),
        height: responsiveHeight(18),
    }
})