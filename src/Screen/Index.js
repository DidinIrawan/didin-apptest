import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardListContact from '../Component/Card/Index'
import Header from '../Component/Headers/Index'
import color from '../../Assets/color/Index'
import { DeleteContact, GetContact, GetContactById } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import SearchComponent from '../Component/SearchComponent/Index'
import ModalDelete from '../Component/Modal/ModalDelete/Index'
import ModalDetailContact from '../Component/Modal/ModalDetailContact/Index'
import Loading from '../Component/Loading/Index'
import { responsiveHeight } from '../Utils/ResponsiveUI'

const Index = ({
  navigation
}) => {
  const [visible, setVisible] = useState(false)
  const [modal, setModal] = useState(false)
  const [changeText, setChangeText] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [lastName, setLastName] = useState('')
  const [photo, setPhoto] = useState('')
  const [idContact, setIdContact] = useState('')

  const [resultData, setResultData] = useState('')
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch();
  async function getData() {
    setLoad(true)
    GetContact(dispatch)
    setLoad(false)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const navFocusListener = navigation.addListener('didFocus', () => { getData() });
    return () => { navFocusListener.remove(); };
  }, [])

  async function getDataById(payload) {
    setLoad(true)
    await GetContactById(payload, dispatch)
    if (state.isLoad == false) {
      setLoad(false)
      setModal(true)
    }
  }
  const state = useSelector(state => state?.getContactReducer);

  console.log('ini states', state);
  return (
    <SafeAreaView style={{ backgroundColor: '#252d30', flex: 1 }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Header
        label={'Contact'}
        onAdd={true}
        onPressAdd={() => navigation.navigate('AddContact')}
      />
      <View style={{ backgroundColor: '#2791B5', borderTopLeftRadius: responsiveHeight(30), borderTopRightRadius: responsiveHeight(30), height: responsiveHeight(100), flex: 1 }}>
        <View style={{ marginTop: responsiveHeight(20), marginBottom: responsiveHeight(20) }}>
          <SearchComponent
            placeholder={'Search Contact'}
            onChangeText={e => setChangeText(e)}
          />
        </View>

        <View style={{ backgroundColor: '#252d30', borderTopLeftRadius: responsiveHeight(30), borderTopRightRadius: responsiveHeight(30), flex: 1 }}>
          <ScrollView style={{ marginTop: responsiveHeight(20), }}>
            <View>
              {state?.getContact?.map((field, index) => {
                return (
                  <View key={index}>
                    <CardListContact
                      label={field.firstName}
                      imageCard={field.photo}
                      onPressDelete={() => { setVisible(true), setIdContact(field.id) }}
                      onPressButtonEdit={() => navigation.navigate('EditContact', {
                        name: field.firstName,
                        lastNames: field.lastName,
                        ages: field.age,
                        photo: field.photo,
                        id: field.id,
                        isPhoto: true
                      })}

                      onPressDetail={() => {
                        getDataById(field.id)
                      }}
                    />
                    <View style={{ marginLeft: responsiveHeight(35), backgroundColor: '#3d4142', height: responsiveHeight(1) }} />
                  </View>
                )
              })}
            </View>

          </ScrollView>
        </View>
      </View>
      <ModalDelete
        visible={visible}
        onPress={() => setVisible(!visible)}
        setDelete={
          async () => {
            DeleteContact(idContact)
            getData()
            setVisible(!visible)
          }} />
      <ModalDetailContact
        visible={modal}
        onPress={() => setVisible(!modal)}
        setVisible={() => setModal(false)}
        firstName={!modal ? '' : state?.getContactById?.firstName}
        lastName={!modal ? '' : state?.getContactById?.lastName}
        age={!modal ? '' : state?.getContactById?.age}
        phoneNumber={'(+62) 8133 0000 000'}
        imgContact={!modal ? '' : state.getContactById?.photo}
      />
      <Loading isLoading={load} />
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({})
