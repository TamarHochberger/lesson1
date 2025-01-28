import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";
    const PostSlice = createSlice({
        name: "posts",
        initialState: {
            postsList: [],
            error: false,
            loading: false
        },
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.postsList = [];
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.loading = false;
                state.postsList = action.payload;
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.postsList = [];
                state.error = true;
                
            })
    }
});

export default PostSlice.reducer;
