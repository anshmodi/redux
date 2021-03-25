import { createSlice } from  '@reduxjs/toolkit'

const initialState = [
    { id:1, title:'First Post', content:'Hello' },
    { id:1,title:'Secont Post', content:'More content' }
]

const postSlice = createSlice ({
    name:'posts',
    initialState,
    reducers: {
        postAdd( state, action) {
            state.push(action.payload)
          }
    }
})


 export const { postAdd } = postSlice.actions

export default postSlice.reducer