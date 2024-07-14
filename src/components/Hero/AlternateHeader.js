import { MENU_ITEMS } from "../../constants/index";

function AlternateHeader() {
  return (
    <nav className="relative p-3 justify-between container-xl top-0 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-start">
          <a href="/" className="text-white text-2xl font-bold no-underline">
            TopShop
          </a>
        </div>

        <nav className="hidden md:block">
          <div className="mr-auto flex items-end space-x-4">
            {MENU_ITEMS.map((item, index) => (
              <a
                key={`${item.id}+${index}`}
                to={item.url}
                className="text-white px-3 py-2 text-lg font-medium no-underline"
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <div className="-mr-2 flex md:hidden">
          <button className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AlternateHeader;
