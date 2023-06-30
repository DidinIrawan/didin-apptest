import { Image, ImageBackground, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidth } from '../../../Utils/ResponsiveUI'
const ModalDetailContact = ({
    visible, 
    onPress, 
    imgContact='',
    setVisible,
    firstName= '',
    lastName='',
    age='',
    phoneNumber=''
}) => {
    const [animateBg, setAnimateBG] = useState(false)
    useEffect(() => {
        if (setVisible === false) {
            imgContact='',
            firstName= '',
            lastName='',
            age='',
            phoneNumber=''
        }
    }, [visible, setVisible])
  return (
    <View>
      <Modal
            visible={visible}
            transparent
            animationType='fade'
        >
            <View style={styles.container} onTouchEnd={setVisible}>
                <View style={styles.conWhite}>
                    <View style={styles.imgBackground}>
                        <ImageBackground 
                            imageStyle={{
                                borderTopLeftRadius: responsiveHeight(40), 
                                borderTopRightRadius: responsiveHeight(40), 
                                borderColor:'white',
                                borderWidth:1
                            }} 
                            style={styles.imgContact} 
                            source={{uri: imgContact}}
                        >
                            <View style={styles.conImg}>
                                <Image style={styles.imgContacts} source={{uri: imgContact}} resizeMode={'cover'}/>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.textName}>
                        <Text style={styles.labelFirstName}>{firstName}</Text>
                        <Text style={styles.labelLastName}>{lastName}</Text>
                    </View>
                    <Text style={styles.labelAge}>{age}</Text>
                    <View style={{borderColor:'#3d4142',borderWidth:3, height: responsiveHeight(1)}}/>
                    <Text style={styles.labelNumber}>{phoneNumber}</Text>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ModalDetailContact

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(33, 33, 33, 0.75)',
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center',
        justifyContent:'flex-end',
    },
    conWhite: {
        backgroundColor: '#252d30',
        height: '70%',
        width: '100%',
        borderRadius: 8,
        borderRadius:responsiveHeight(40),
        borderColor:'black',
        borderWidth:2
    },
    imgBackground: {
        alignItems: 'center',
        alignItems:'center',
    },
    textName: {
        // marginBottom: responsiveHeight(15),
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:responsiveHeight(15)
    },
    labelFirstName:{
        fontFamily:'Inter-SemiBold',
        color:'white',
        fontSize: responsiveHeight(24), 
        fontWeight: '600',
        lineHeight: responsiveHeight(24.6),
        marginRight: responsiveHeight(5)
    },
    labelLastName:{
        fontFamily:'Inter-SemiBold',
        color:'white',
        fontSize: responsiveHeight(24), 
        fontWeight: '600',
        lineHeight: responsiveHeight(24.6)
    },
    imgContact:{
        width: '100%',
        height: responsiveHeight(300),
        opacity:0.8,
    },
    imgContacts:{
        width: responsiveHeight(160),
        height: responsiveHeight(160),
        borderRadius: responsiveHeight(50),
        alignItems:'center',
        justifyContent:'center',
        marginBottom: responsiveHeight(20),
        // marginTop: responsiveHeight(70),
        
    },
    conImg:{
        alignItems:'center',
        alignSelf:'center',
        shadowRadius:responsiveHeight(10),
        shadowColor:'white',
        shadowOpacity:0.5,
        shadowOffset:{width:responsiveHeight(2), height: responsiveHeight(2)},
        bottom: responsiveHeight(40),
        position:'absolute'
    },
    modalBackground: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelAge:{
        fontFamily:'Inter-SemiBold',
        color:'white',
        fontSize: responsiveHeight(16), 
        fontWeight: '600',
        lineHeight: responsiveHeight(24.6),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginBottom: responsiveHeight(15),
        marginTop: responsiveHeight(10)
    },
    labelNumber:{
        fontFamily:'Inter-SemiBold',
        color:'white',
        fontSize: responsiveHeight(16), 
        fontWeight: '600',
        lineHeight: responsiveHeight(24.6),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop: responsiveHeight(10)
    }
})