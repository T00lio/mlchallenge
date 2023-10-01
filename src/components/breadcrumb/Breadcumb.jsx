import "./Breadcrumb.css";

const Breadcrumbs = ({ categories }) => {
  if (!categories || !Array.isArray(categories)) return null;

  return (
    <div className="bc">
      {categories.map((category, index) => (
        <div className="crumb" key={category.id}>
          <span>{category.name}</span>{" "}
          {categories.length - 1 === index ? " " : " > "}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
