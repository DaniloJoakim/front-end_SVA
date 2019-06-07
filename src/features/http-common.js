import axios from 'axios';
import Vue from 'vue'
//const token = localStorage.getItem('user-token')
 //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYW5pbG9AZ21haWwuY29tIiwiaXNzIjoiYXBpIiwiaWF0IjoxNTU5MTkxMTU5fQ.TWBeSSAFDvRC-3ByGilwX9DUivadOLMZD7w-ra-U6Oc'



export const userKey = '__knowledge_user'
 export const HTTP = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
  /*  headers: {
      Authorization: `Bearer ${token}`
    }*/
})

export function showError(e){
  if(e && e.response && e.response.data) {
    Vue.toasted.global.defaultError({ msg : e.response.data.mensagem})
  } else if(typeof e === 'string') {
    Vue.toasted.global.defaultError({ msg : e})
  } else {
    Vue.toasted.global.defaultError()
  }
}

export default { HTTP, showError, userKey } 