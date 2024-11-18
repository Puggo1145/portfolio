// components
import { ProductsGeminiEffect } from "./products-gemini-effect";
import { ProductsParallax } from "./parallax";
import { ProductTimeline } from "./product-timeline";

const MyProducts = () => {
  return (
    <div className="w-full flex flex-col gap-x-4">
      <ProductsGeminiEffect />
      <ProductsParallax />
      <ProductTimeline />
    </div>
  )
}

export default MyProducts;