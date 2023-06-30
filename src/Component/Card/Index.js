import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../Utils/ResponsiveUI'
import color from '../../../Assets/color/Index'
import icEdit from '../../Assets/ic_edit.png';
import icDelete from '../../Assets/ic_close.png';
const CardListContact = ({
    label = '',
    widthImg = responsiveHeight(72),
    heightImg = responsiveHeight(72),
    resizeModeImg,
    isShadow,
    imageCard = 'https://source.unsplash.com/1024x768/?doctor',
    age = '0812233444455',
    gender = 'Male',
    shadowRadius = responsiveHeight(20),
    shadowOpacity = responsiveHeight(0.1),
    widthOffset = responsiveHeight(2),
    heightOffset = responsiveHeight(20),
    elevation = responsiveHeight(2),
    onPressChecked = () => { },
    onPressButtonEdit,
    onPressDelete,
    onPressDetail
}) => {
  return (
    <TouchableOpacity style={[styles.container, {
        shadowRadius: isShadow ? shadowRadius : null,
        shadowOpacity: isShadow ? shadowOpacity : null,
        shadowOffset: { width: widthOffset, height: heightOffset },
    }]}
    onPress={onPressDetail}
    >
        <View style={styles.body}>
            <View style={styles.conImg}>
                <Image source={{ uri: imageCard }}
                    style={[styles.img, { width: widthImg, height: heightImg, resizeMode: resizeModeImg }]}
                />
            </View>
            <View style={styles.conRow}>
                <View style={styles.conText}>
                    <View>
                        <Text style={styles.textLabel}>{label}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textAge}>{age}</Text>
                    </View>
                </View>
                <View style={styles.conButton}>
                    <TouchableOpacity style={styles.buttonDelete} onPress={onPressDelete}>
                        <Image source={icDelete} style={styles.icDelete} resizeMode={'contain'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonEdit} onPress={onPressButtonEdit}>
                        <Image source={icEdit} style={styles.icEdit} resizeMode={'contain'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CardListContact

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(386),
        height: responsiveHeight(120),
        borderRadius: responsiveHeight(8),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    conImg: {
        marginRight: responsiveHeight(16),
        justifyContent: 'center',
        marginLeft: responsiveHeight(16),
    },
    conText: {
        alignSelf: 'center',
        flex: 1
    },
    conButton: {
        marginRight: responsiveHeight(16),
        flexDirection:'row'
    },
    img: {
        borderRadius: responsiveHeight(20),
        resizeMode: 'contain'
    },
    rowContainer: {
        flexDirection: 'row',
        marginTop: responsiveHeight(10),
    },
    textAge: {
        fontSize: responsiveHeight(16),
        fontFamily: 'Inter-Regular',
        lineHeight: responsiveHeight(19.1),
        fontWeight: '400',
        color: color.Hue_Grey,
    },
    box: {
        borderRadius: responsiveHeight(4),
        borderWidth: responsiveHeight(1),
        width: responsiveHeight(45),
        height: responsiveHeight(16),
        marginLeft: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        fontSize: responsiveHeight(10),
        fontFamily: 'Inter-Bold',
        lineHeight: responsiveHeight(12.1),
        fontWeight: '400',
        color: color.Primary_Black
    },
    conRow: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    textRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    ConLink:{
        flexDirection:'row',
        marginTop: responsiveHeight(16),
        alignItems:'center'
    },
    imgLink:{
        width:responsiveHeight(9.6),
        height: responsiveHeight(12.8),
        marginRight: responsiveHeight(7.2)
    },
    textLink:{
        fontSize: responsiveHeight(12),
        fontFamily:'Inter-SemiBold',
        fontWeight:'600',
        lineHeight:responsiveHeight(16.8),
        color: color.Primary,
    },
    line:{
        borderWidth: responsiveHeight(0.8),
        borderColor: color.Primary
    },
    textLabel:{
        fontSize: responsiveHeight(20),
        fontFamily:'Inter-SemiBold',
        lineHeight:responsiveHeight(20.6),
        color: 'white'
    },
    buttonDelete:{
        width: responsiveHeight(35),
        height:responsiveHeight(35),
        borderRadius:responsiveHeight(50),
        backgroundColor: 'red',
        marginRight: responsiveHeight(10),
        alignItems:'center',
        justifyContent:'center'
    },
    buttonEdit:{
        width: responsiveHeight(35),
        height:responsiveHeight(35),
        borderRadius:responsiveHeight(50),
        backgroundColor: 'green',
        alignItems:'center',
        justifyContent:'center'
    },
    icEdit:{
        width: responsiveHeight(15),
        height:responsiveHeight(15),
    },
    icDelete:{
        width: responsiveHeight(15),
        height:responsiveHeight(15),
    },
})