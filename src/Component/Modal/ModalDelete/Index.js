import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from '../../Button/Index'
import { responsiveHeight, responsiveWidth } from '../../../Utils/ResponsiveUI'
import color from '../../../../Assets/color/Index'
const ModalDelete = ({
    visible, 
    onPress, 
    setDelete
}) => {
  return (
    <View>
      <Modal
            visible={visible}
            transparent
        >
            <View style={styles.container}>
                <View style={styles.conWhite}>
                    <View style={styles.textTittle}>
                        <Text style={styles.label}>Delete</Text>
                    </View>
                    <View style={styles.textTittle2}>
                        <Text style={styles.labelWarning}>Are you sure you want to delete?</Text>
                    </View>
                    <ButtonPrimary
                        label={'Yes, Delete'}
                        colors={color.Primary_White}
                        Font={'Inter-400'}
                        fontSizes={responsiveHeight(14)}
                        bgColor={color.Primary_Red}
                        borderColor={color.bgColors}
                        borderWidth={true}
                        onPress={setDelete}
                    />
                    <ButtonPrimary
                        label={'Cancel'}
                        colors={color.Primary_Black}
                        Font={'Inter-400'}
                        fontSizes={responsiveHeight(14)}
                        bgColor={color.bgColors}
                        borderColor={color.bgColors}
                        borderWidth={true}
                        onPress={onPress}
                    />
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ModalDelete

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(33, 33, 33, 0.75)',
        flex: 1,
        justifyContent: 'center',
        padding: responsiveHeight(24)
    },
    conWhite: {
        backgroundColor: color.bgColors,
        height: responsiveHeight(263),
        width: responsiveWidth(380),
        borderRadius: 8,
    },
    textTittle: {
        marginTop: responsiveHeight(24),
        marginBottom: responsiveHeight(12),
        alignItems: 'center'
    },
    textTittle2: {
        marginBottom: responsiveHeight(36),
        alignItems: 'center'
    },
    label:{
        fontSize: responsiveHeight(20),
        color: 'black'
    },
    labelWarning:{
        fontFamily:'Inter-Regular',
        color:'black',
        fontSize: responsiveHeight(16)
    }
})