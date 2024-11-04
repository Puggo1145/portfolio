// components
import { ProductsGeminiEffect } from "./products-gemini-effect";
import { HeroParallaxDemo } from "./parallax";

const MyProducts = () => {
  return (
    <div className="w-full flex flex-col gap-x-4">
      <ProductsGeminiEffect />
      <HeroParallaxDemo />
    </div>
  )
}

export default MyProducts;