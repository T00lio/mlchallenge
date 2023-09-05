import "./Breadcrumb.css";

const Breadcrumbs = ({ categories }) => {
  console.log(categories);
  return (
    <div className="bc">
      {categories.map((category, index) => (
        <div className="crumb" key={category.id}>
          <span>{category.name}</span>{" "}
          {categories.length - 1 === index ? "" : ">"}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
