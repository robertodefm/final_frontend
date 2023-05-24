import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'

export const useCabulasStore = defineStore('cabulasStore',{
    getters:{
        totalApontamentos: (state) =>{
            return state.apontamentos.length
        },
        totalCarateres: (state) =>{
            let contador = 0
            state.apontamentos.forEach( cabula => {
                contador += cabula.content.length
            })
            return contador
        },
        getApontamentoContent: state=>{
            return(id) =>{
                return state.apontamentos.filter( cabula => cabula.id === id)[0].content
            }
        }
    },
    actions:{
        async getApontamentos(){
            onSnapshot(collection(db,'apontamentos'), (querySnapshot)=>{
                let apontamentos = []
                querySnapshot.forEach((doc)=>{
                    let cabula = {
                        id: doc.id,
                        content: doc.data().content
                    }
                    apontamentos.push(cabula)
                })
                this.apontamentos = apontamentos
            })
        },
        async updateApontamento (id,content){
            let index = this.apontamentos.findIndex( cabula => cabula.id == id)

            await updateDoc(doc(db,'apontamentos',id),{
                content
            })
        },
        async deleteApontamento (idToDelete){

            await deleteDoc(doc(db,'apontamentos',idToDelete))
        },
        async addApontamento (newApontamento){
            let id = new Date().getTime().toString()

            await setDoc(doc(db,'apontamentos',id),{
                content:newApontamento
            })
        }
    },
    state: () => {
        return{
            apontamentos: [
                {
                    id:'id1',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris1.'
                },
                {
                    id:'id2',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris2.'
                },
                {
                    id:'id3',
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris3.'
                }
            ]
        }
    }
})