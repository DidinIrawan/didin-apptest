import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../Utils/ResponsiveUI'
import color from '../../../Assets/color/Index'
const ButtonPrimary = ({
    fontSizes,
    label,
    colors,
    bgColor,
    borderColor,
    Font,
    borderWidth = true,
    heights = responsiveHeight(55.5),
    width_,
    onPress,
    disable,
    margin,
    ImageProp,
    ImageHeight,
    ImageWidth,
    disableBgColor = color.Hue_Grey,
    marginDefault = responsiveHeight(16),
    marginImg = responsiveWidth(10),
    disableTxtColor = color.Primary_Grey,
    defaultRight = responsiveHeight(0),
    defaultLeft = responsiveHeight(0),
    defaultVertical = responsiveHeight(0),
}) => {
    const Family = (value) => {
        if (value == 'InterRegular') {
          return 'Inter-Bold'
        } else if (value == 'Inter-400') {
          return 'Inter-Medium'
        } else if (value == 'Inters') {
          return 'Inter-Regular'
        } else if (value == 'Inter-Semi') {
          return 'Inter-SemiBold'
        } else {
          return 'PlusJakartaSans-Bold'
        }
      }
  return (
    <TouchableOpacity
      style={[styles.container,
      {
        borderColor: disable ? color.Primary_White : borderColor,
        backgroundColor: disable ? disableBgColor : bgColor,
        height: borderWidth == true ? null : heights,
        borderWidth: borderWidth ? 2 : null,
        padding: margin ? null : marginDefault,
        marginHorizontal: margin ? null : responsiveWidth(20),
        paddingRight: margin ? defaultRight : null,
        paddingLeft: margin ? defaultLeft : null,
        paddingVertical: margin ? defaultVertical : null
      },
      ]}
      onPress={onPress}
      disabled={disable}
    >
      {ImageProp ?
        <>
          <Image source={ImageProp} style={{ height: ImageHeight ? responsiveHeight(ImageHeight) : null, width: ImageWidth ? responsiveWidth(ImageWidth) : null, resizeMode: 'contain', marginRight: marginImg }} />
        </>
        : null
      }
      <Text style={{ color: disable ? disableTxtColor : colors, fontFamily: Family(Font), fontSize: fontSizes }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        borderRadius: responsiveHeight(30),
        flexDirection: 'row'
    },
})