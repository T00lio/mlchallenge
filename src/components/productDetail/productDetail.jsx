import { useParams } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "../productDetail/productDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetail = ({ data: { product, description }, categories }) => {
  const { addToCart } = useCart();
  const params = useParams();
  console.log(product);

  const handleAddToCartClick = () => {
    addToCart({
      productId: params.id,
      imageUrl: product?.thumbnail,
      title: product?.title,
      price: product?.price,
    });
  };

  return (
    <div className="container-xl">
      <div className="grid gap-6 bg-white rounded-2xl border-2 items-start max-w-6xl px-4 mx-auto py-6 md:grid-cols-2 bg">
        <div className="grid gap-3 items-start">
          <div className="grid grid-cols-4 gap-3 overflow-x-auto">
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={product?.pictures[0]?.url || ""}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={product?.pictures[1]?.url || ""}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={product?.pictures[2]?.url || ""}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={product?.pictures[3]?.url || ""}
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 4</span>
            </button>
          </div>
          <div className="md:col-span-4">
            <img
              src={product?.pictures[0]?.url || ""}
              alt="Product Image"
              width={600}
              height={900}
              className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
            />
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {product?.title || ""}
            </h1>
            <div>
              <p>{product?.warranty}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5"></div>
            </div>
          </div>
          <div className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <label htmlFor="color" className="text-base">
                Price: {product?.price}
              </label>
              <button
                id="color"
                defaultValue="black"
                className="flex items-center gap-2"
              >
                <label
                  htmlFor="color-black"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  Black
                </label>
                <label
                  htmlFor="color-white"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  White
                </label>
                <label
                  htmlFor="color-blue"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  Blue
                </label>
              </button>
            </div>
            <button
              onClick={handleAddToCartClick}
              className="lg  border-2 font-black text-white bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-500 to-indigo-300 p-4 rounded-xl :hover:bg-[#000000] :hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="col-span-2 mt-8">
          <div className="grid gap-4">
            <h2 className="font-bold text-2xl">Product Description</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p>{description?.plain_text || ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
