import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../Api";

export const fetchDataAsyncAction = createAsyncThunk("posts/fetchData", async () => {
    const data = await fetchData();
    return data;
}
);