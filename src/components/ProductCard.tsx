import React from "react";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product; onDetail?: () => void }> = ({ product, onDetail }) => (
  <div className="rounded-lg bg-[#19191f] text-white flex flex-col md:flex-row items-center hover:shadow-xl transition">
    <img src={product.image} alt={product.title} className="w-full md:w-56 h-40 object-cover rounded-l-lg" />
    <div className="p-7 flex-1">
      <div className="text-xl font-semibold">{product.title}</div>
      <div className="text-gray-400 mb-3">{product.description}</div>
      {onDetail && (
        <button className="px-4 py-2 rounded bg-[#dd0c1b] text-white text-sm hover:bg-red-700 transition" onClick={onDetail}>查看詳情</button>
      )}
    </div>
  </div>
);

export default ProductCard;
