import ProductDetail from "../components/productDetail";
import Breadcrumbs from "../components/breadcrumb";
import Header from "../components/Header";
import Subheader from "../components/subheader";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Subheader />
      <Breadcrumbs />
      <ProductDetail />;
    </>
  );
};

export default ProductDetailPage;
