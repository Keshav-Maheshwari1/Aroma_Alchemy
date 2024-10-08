import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base URL for products
const API_URL = "https://aroma-alchemy.onrender.com/api/perfumes";

// Fetch products from API
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// Fetch a single product by ID
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Return the product data
  }
);

// Post new product to API
export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (newProduct) => {
    const response = await axios.post(API_URL, newProduct);
    return response.data;
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, updatedProduct }) => {
    console.log(updatedProduct);
    const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
    return response.data; // Return the updated product
  }
);

// Delete product from API
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id; // Return the id of the deleted product
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch product cases
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Success log
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Error log
      })
      // Fetch product by ID cases
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload; // Store the fetched product // Success log
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Error log // Error log
      })
      // Post product cases
      .addCase(postProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload); // Add the new product to the state Success log
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Error log
      })
      // Update product cases
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload; // Update the product in the state
        }
        console.log("Product updated successfully:", action.payload); // Success log
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Update product failed:", action.error.message); // Error log
      })
      // Delete product cases
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
        console.log("Product deleted successfully:", action.payload); // Success log
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Delete product failed:", action.error.message); // Error log
      });
  },
});

export default productSlice.reducer;
