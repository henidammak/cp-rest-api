import axios from 'axios';
import { ADD, DELETE, EDIT, GET } from './types';

export const addUser = (fullName,email,age) => async(dispatch) =>{
try {
    const newUser={fullName,email,age}
    const res = await axios.post('/users/add',newUser)
    dispatch({
        type:ADD,
        payload:res.data
    })
} catch (error) {
    alert('post error')
}
}

export const getUser = () => async(dispatch)=>{
    try {
        const res=await axios.get('/users/get')
        console.log(res)
        dispatch({
            type:GET,
            payload:res.data
        })
    } catch (error) {
      alert('get error')  
    }
}

export const deleteUser = (id) => async(dispatch) =>{
    try {
        const res = await axios.delete(`/users/delete/${id}`)
        dispatch({
            type:DELETE,
            payload:res.data
        })
    } catch (error) {
      alert('delete error')  
    }
}

export const editUser = (id,fullName,email,age) => async(dispatch) =>{
    try {
        const editedUser ={fullName,email,age}
        const res = await axios.put(`/users/update/${id}`,editedUser)
        dispatch({
            type:EDIT,
            payload:res.data
        })
    } catch (error) {
        alert('put error')
    }
}