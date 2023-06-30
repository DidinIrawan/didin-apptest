import { Image, ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';
import Header from '../Component/Headers/Index';
import TextInputBox from '../Component/TextInputBox/Index';
import { responsiveHeight, responsiveWidth } from '../Utils/ResponsiveUI';
import ButtonPrimary from '../Component/Button/Index';
import color from '../../Assets/color/Index';
import camera from '../Assets/camera.png';
import Loading from '../Component/Loading/Index';
import { AddContacts } from '../Redux/action';

const AddContact = ({
  navigation
}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [imageContact, setImageContact] = useState(null)
  const [isfocusFirstName, setIsfocusFirstName] = useState(false);
  const [isfocusLastName, setIsfocusLastName] = useState(false);
  const [isfocusAge, setIsfocusAge] = useState(false);
  const [errorMessage, seterrorMessage] = useState('')
  const [tempFilePreviewUri, setTempFilePreviewUri] = useState('');
  const [endcodeImage, setEndcodeImage] = useState('');
  const [loading, setLoading] = useState('');
  console.log(endcodeImage, 'ini data nya image');

  const data = {
    "firstName": firstName,
    "lastName": lastName,
    "age": age,
    "photo": `data:image/jpeg;base64,${endcodeImage}`
}

const pickDocument = async () => {
  const maxFileSize = 3000000
  try {
      const selectedFile = await DocumentPicker.pickSingle({
          type: DocumentPicker.types.images,
          copyTo: 'cachesDirectory'
      });
      if (selectedFile.size > maxFileSize) {
          seterrorMessage(`Ukuran maksimal file yang diunggah ${maxFileSize/1000000}MB.`)
          return
      }
      let imagePath = selectedFile.uri
      if (Platform.OS == 'ios') {
          const path = selectedFile.fileCopyUri.split('/');
          const nameFile = selectedFile.name
          const dirs = RNFetchBlob.fs.dirs
          imagePath = `${dirs.CacheDir}/${path[path.length - 2]}/${nameFile}`
      } else {
          imagePath = selectedFile.uri
      }
      await RNFetchBlob.fs.readFile(imagePath, 'base64')
      .then(data => {
          setEndcodeImage(data)
      })
  } catch (error) {
      if (DocumentPicker.isCancel(error)) {
          // User cancelled the picker, exit any dialogs or menus and move on
      }else{
          throw err
      }
  }
}
async function handleAddContact(payload) {
  AddContacts(payload)
}
  return (
    <SafeAreaView style={{ backgroundColor: '#252d30', flex:1 }}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Header
            OnBack={true}
            onPressBack={() => navigation.push('Index')}
            labelBack={'Add Contact'}
        />
            <View style={{flex:1,}}>
                <View style={styles.pictureContact}>
                    <ImageBackground style={styles.imgContact} imageStyle={styles.imgRadius} source={{uri: `data:image/jpeg;base64,${endcodeImage}`}}>
                        <View style={styles.photoIconView}>
                            <TouchableOpacity onPress={pickDocument}>
                                <Image
                                    source={camera}
                                    style={styles.photoIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <ScrollView style={{ }}>
                        <View style={styles.formContact}>
                            <View style={styles.bodyForm}>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{width: '48%'}}>
                                        <TextInputBox
                                            label={'First Name'}
                                            placeholders={'E.g., Agus'}
                                            fontFamilys={'Inters'}
                                            mandatory={true}
                                            bgColor={'transparent'}
                                            placeholderStyle={'Inter-400'}
                                            placeholderColor={color.Primary_White}
                                            borderColors={isfocusFirstName ? color.Primary : color.Huest_Grey}
                                            onBlur={() => setIsfocusFirstName(false)}
                                            onFocusInput={() => setIsfocusFirstName(true)}
                                            onChangeText={(e) => {
                                            setFirstName(e)
                                            }}
                                            value={firstName}
                                            fontPlaceholder={responsiveHeight(14)}
                                        />
                                    </View>
                                    <View style={{width: '48%'}}>
                                        <TextInputBox
                                            label={'Last Name'}
                                            placeholders={'E.g., Budi'}
                                            fontFamilys={'Inters'}
                                            mandatory={true}
                                            bgColor={'transparent'}
                                            placeholderStyle={'Inter-400'}
                                            placeholderColor={color.Primary_White}
                                            borderColors={isfocusLastName ? color.Primary : color.Huest_Grey}
                                            onBlur={() => setIsfocusLastName(false)}
                                            onFocusInput={() => setIsfocusLastName(true)}
                                            onChangeText={(e) => {
                                            setLastName(e)
                                            }}
                                            value={lastName}
                                            fontPlaceholder={responsiveHeight(14)}
                                        />
                                    </View>
                                </View>
                                <View style={{marginTop: responsiveHeight(12)}}>
                                    <TextInputBox
                                        label={'Age'}
                                        placeholders={'E.g., 23'}
                                        fontFamilys={'Inters'}
                                        mandatory={true}
                                        bgColor={'transparent'}
                                        placeholderStyle={'Inter-400'}
                                        placeholderColor={color.Primary_White}
                                        borderColors={isfocusAge ? color.Primary : color.Huest_Grey}
                                        onBlur={() => setIsfocusAge(false)}
                                        onFocusInput={() => setIsfocusAge(true)}
                                        onChangeText={(e) => {
                                        setAge(e)
                                        }}
                                        value={age}
                                        fontPlaceholder={responsiveHeight(14)}
                                    />
                                </View>
                            <View style={styles.conButton}>
                                <ButtonPrimary 
                                    label={'Add Contact'}
                                    colors={color.Primary_White}
                                    Font={'Inter-400'}
                                    fontSizes={responsiveHeight(14)}
                                    bgColor={color.Primary}
                                    borderColor={color.bgColors}
                                    borderWidth={true}
                                    onPress={()=> handleAddContact(data)}
                                    margin={true}
                                    defaultVertical={responsiveHeight(13)}
                                />
                            </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </View>
            {/* <ModalDetailContact visible={true}/> */}
            <Loading isLoading={loading}/>
    </SafeAreaView>
  )
}

export default AddContact

const styles = StyleSheet.create({
  pictureContact:{
    width: responsiveHeight(150),
    height: responsiveHeight(150),
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius: responsiveHeight(20),
    marginBottom: responsiveHeight(40)
},
imgContact:{
    width: responsiveHeight(150),
    height: responsiveHeight(150),
    borderRadius: responsiveHeight(40),
},
imgRadius:{
    borderRadius: responsiveHeight(20),
},
photoIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.RGB_Grey,
    borderRadius: responsiveHeight(20),
},
photoIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: responsiveHeight(50),
    height: responsiveHeight(50),
    
},
formContact:{
    backgroundColor:'#161d1f',
    borderTopRightRadius: responsiveHeight(30),
    borderTopLeftRadius: responsiveHeight(30),
},
bodyForm:{
    marginHorizontal: responsiveWidth(20), 
    height:responsiveHeight(660), 
    marginTop: responsiveHeight(40),
},
conButton:{
    marginTop: responsiveHeight(50)
}
})
