import {createSlice } from '@reduxjs/toolkit';
const initialState = {
    users: []
}
export const usersSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // adduser fonction 
        addUser : (state, action) => {
           state.users = [...state.users,action.payload]  
        }

    }}
)
export const { addUser } = usersSlice.actions;
export const selectUser = (state) => state.users.users;
export default usersSlice.reducer;