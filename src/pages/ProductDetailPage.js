import ProductDetail from "../components/productDetail";
import Breadcrumbs from "../components/breadcrumb";
import { useLocation } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();
  return (
    <>
      <Breadcrumbs current="Detail" detail={true} />
      <ProductDetail />;
    </>
  );
};

export default ProductDetailPage;
