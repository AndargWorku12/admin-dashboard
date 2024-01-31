// export interface Product {
//     id: number;
//     name: string;
//     category: string;
//     price: number;
//     quantity: number;
//     photo?: File | null;
//   }
  // types.ts
type Product = {
  id: string;
  name: string;
  photo: string;
  category: string;
  date: string;
  price: number;
  quantity: number;
};

export default Product;
