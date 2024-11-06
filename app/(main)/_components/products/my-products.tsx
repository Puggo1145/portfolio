// components
import { ProductsGeminiEffect } from "./products-gemini-effect";
import { ProductsParallax } from "./parallax";

const MyProducts = () => {
  return (
    <div className="w-full flex flex-col gap-x-4">
      <ProductsGeminiEffect />
      <ProductsParallax />
    </div>
  )
}

export default MyProducts;