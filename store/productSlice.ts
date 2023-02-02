import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./models/Product";
import axios from 'axios'

export const fetchProducts = createAsyncThunk("todos/getAllProducts", () => {
    return axios.get('https://northwind.vercel.app/api/products')
        .then(res => res.data);

})


interface ProductState {
    products: Product[],
    length: number,
    loading:boolean,
    error:string
}

let initalState: ProductState = {
    products: [],
    length: 0,
    loading:true,
    error:''
}

export const productSlice = createSlice({
    name: 'products',
    initialState: initalState,
    reducers: {
        add: (state: ProductState, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
            state.length += 1;
        },
        remove: (state: ProductState, action: PayloadAction<number>) => {
            state.products = state.products.filter(q => q.id != action.payload);
            state.length -= 1;
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = "";

        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = []
            state.error = "error message"
        })

    }
})




export const AddProductToApi = (data: any) => {
    return (dispatch: any) => {

       return axios.post('https://northwind.vercel.app/api/products', data)
            .then(res => {
                dispatch(add(res.data))
            })
    }
}


export const { add, remove } = productSlice.actions;

export default productSlice.reducer