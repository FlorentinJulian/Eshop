import { useCartContext } from "../Context/CartContext";

interface propsType {
  size: string;
}

export const CartCountBadge: React.FC<propsType> = ({ size }) => {
  const { product } = useCartContext();
  return (
    <div
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      {product.lenght}
    </div>
  );
};
