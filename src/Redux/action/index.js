import axios from "axios";
import { handleAddContact, handleDeleteContact, handleEditContact, handleGetContact, handleGetContactById } from "../api";
import {Alert} from 'react-native'

export const GetContact = dispatch => {
    try {
        handleGetContact()
        .then(res => {
            console.log("data contact", res.data.data);
            dispatch({
                type: 'GET_CONTACT_SUCCESS',
                data: res.data.data
            })
        })
        .catch(err => {
            console.log("err get contact =>",err);
        })
    } catch (err) {
        console.log('errr getcontact', err);
    }
}
export const GetContactById =(payload, dispatch)=>{
    handleGetContactById(payload)
    .then(res => {
        console.log('contact id', res.data.data);
        dispatch({
            type: 'GET_CONTACT_BY_ID',
            data: res.data.data,
            isLoad: false,
        })
    })
    .catch(err => {
        console.log("err get id", err);
    })  
}
export const EditContactData = (id, payload) => {
    console.log('ini payload',payload);
    console.log('ini payload id',id);
    handleEditContact(id, payload)
    .then(res => {
        console.log("sukses edit", res.data);
        Alert.alert("Sukses edit Contact")
    })
    .catch(err => {
        console.log("err edit", err);
    })
}

export const AddContacts=(payload)=>{
    console.log('ini payload add ',payload);
    handleAddContact(payload)
    .then(res => {
        console.log('success add contact => ', res.data);
        Alert.alert("Sukses add Contact")
    })
    .catch(err => {
        console.log("error add contact => ", err);
    })
}

export const DeleteContact = (payload) => {
    console.log(payload,'ini payload delete');
    handleDeleteContact(payload)
    .then(res => {
        Alert.alert('Success Delete Contact')
    })
    .catch(err => {
        Alert.alert('Error Delete Contact')
        console.log("error delete", err);
    })
}