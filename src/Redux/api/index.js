import axios from "axios"

const baseUrl = 'https://contact.herokuapp.com/contact'
export const generalHeader = {
    headers: {
        'Accept': 'application/json',
    }
}

export const handleGetContact = async () => {
    return await axios.get(`${baseUrl}`, generalHeader)
}

export const handleGetContactById = async (payload) => {
    return await axios.get(`${baseUrl}/${payload}`, generalHeader)
}

export const handleAddContact = async (payload) => {
    return await axios.post(`${baseUrl}`, payload, generalHeader)
}

export const handleEditContact = async (id, payload) => {
    return await axios.put(`${baseUrl}/${id}`, payload, generalHeader)
}

export const handleDeleteContact= async (payload) => {
    return await axios.delete(`${baseUrl}/${payload}`, generalHeader)
}
