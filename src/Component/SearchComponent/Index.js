import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../Utils/ResponsiveUI'
import color from '../../../Assets/color/Index'
import PngSearch from '../../Assets/search.png'
const SearchComponent = ({
    placeholder,
    onChangeText
}) => {
  return (
    <View style={styles.container}>
        <View style={styles.flexCon}>
            <Image source={PngSearch} style={styles.conIconSearch} />
            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                placeholderTextColor={color.TextInputBG}
            />
        </View>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.Huest_Grey,
        width: responsiveWidth(396),
        alignSelf: 'center',
        justifyContent: 'center',
        height: responsiveHeight(50),
        backgroundColor: color.Primary_White,

    },
    conIconSearch: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        marginRight: responsiveWidth(8)
    },
    flexCon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(16),
    },
    textInput: {
        width: responsiveWidth(336),
        color: color.Primary_Black
    }
})