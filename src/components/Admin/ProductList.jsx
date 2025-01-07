import React, { useState } from 'react';
import productData from "../../utils/productData.json";
import ProductCard from '../Card';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service';








const ProductList = () => {
   const [products,setProducts]=useState([]); 
   const[error,setError]=useState(null);
    const navigate = useNavigate();
    const [reload, setReload] = useState(false); 


   const API_URL = "http://localhost:5000/api/product"
 
   const [isLoading, setIsLoading] = useState(true);
 
   useEffect(() => {
     const fetchData = async () => {
       setIsLoading(true);
       try {
         const response = await api.get(`/api/product/getAllProducts`);
         if (response.data && response.data.success) {
           setProducts(response.data.data);
         }
       } catch (error) {
        setProducts([]);
         console.error('Error fetching products:', error);
         setError(error.message);
       } finally {
         setIsLoading(false);
       }
     };
 
     fetchData();
   }, [reload]);


   const handleDeleteProduct = async (id) => {
    console.log(id); 
   
       try {
         const response = await api.delete(`/api/product/deleteProduct/${id}`, {
           headers: {
             Authorization: `Bearer ${window.localStorage.getItem("token")}`,
           },
           withCredentials: true,
         });

         if (response.status === 200) {
          alert("Product deleted successfully!");
          setReload((prev) => !prev); // Toggle reload state to refetch data
        } else {
          console.error("Failed to delete the product");
        }
       } catch (error) {
         console.error("Error deleting event:", error);
       }
     };


   const handleEditProduct = (product) => {
    console.log("Navigating to edit page with product:", product);
    navigate("/admin/add-product", { state: { product } });
  };

   if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
   if (error && !products && !products.length>0) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
   if (!products && !products.length>0) return <div className="min-h-screen flex items-center justify-center">Products not found</div>;
 
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          onDelete={()=>handleDeleteProduct(product._id)}
          onEdit={() => handleEditProduct(product)}
          enableEdit={true}
          onHover={() =>
            console.log("Ongoing Event Hovered")
          }
        />
      ))}
    </div>
  );
};

export default ProductList;

