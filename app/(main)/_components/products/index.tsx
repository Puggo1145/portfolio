// components
import { ProductsGeminiEffect } from "./products-gemini-effect";
import { ProductsParallax } from "./parallax";
import { ExpandableProducts } from "./expandable-products";

const MyProducts = () => {
  return (
    <div className="w-full flex flex-col gap-x-4">
      <ProductsGeminiEffect />
      <ProductsParallax />
      <ExpandableProducts />
    </div>
  )
}

export default MyProducts;