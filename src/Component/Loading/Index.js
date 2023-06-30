import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from '../../Utils/ResponsiveUI'
import color from '../../../Assets/color/Index'
const Loading = ({
    isLoading, onRequestClose
}) => {
  return (
    <Modal visible={isLoading} transparent={true} onRequestClose={onRequestClose}>
        <View style={styles.container}>
            <View style={styles.conLoad}>
                <ActivityIndicator size={50} color={color.Primary} animating={true}/>
            </View>
        </View>
        
    </Modal>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        justifyContent: 'center'
    },
    conLoad:{
        flexDirection: 'row', 
        padding:responsiveHeight(20), 
        backgroundColor: color.bgColors, 
        justifyContent: 'center',
        alignItems: 'center', 
        alignSelf: 'center', 
        borderRadius: 10
    }
})