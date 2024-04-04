import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface user{
    isLogin: boolean;
}
const initialState: user={
    isLogin: false,
}

export const UserLogin = createSlice({
    name:"userlogin",
    initialState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<boolean>)=>{
            state.isLogin = action.payload;
        }
    }
})

export const {setUserLogin} = UserLogin.actions;

export default UserLogin.reducer;