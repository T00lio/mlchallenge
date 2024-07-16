import { API } from "../../utils/httpsClient";

export const categories = [
  {
    id: 1,
    name: "Clothing",
    image:
      "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Clothing",
    url: `${API}sites/MLA/search?q=idumentaria`,
  },
  {
    id: 2,
    name: "Electronics",
    image:
      "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Electronics",
    url: `${API}sites/MLA/search?q=electronica`,
  },
  {
    id: 3,
    name: "Books",
    image:
      "https://images.unsplash.com/photo-1505063366573-38928ae5567e?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Books",
    url: `${API}sites/MLA/search?q=libros`,
  },
  {
    id: 4,
    name: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Home & Garden",
    url: `${API}sites/MLA/search?q=hogar`,
  },
  {
    id: 5,
    name: "Toys & Games",
    image:
      "https://images.unsplash.com/photo-1595550903979-1969e5adeb92?q=80&w=4171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Toys & Games",
    url: `${API}sites/MLA/search?q=jugueteria`,
  },
  {
    id: 6,
    name: "Health & Beauty",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Health & Beauty",
    url: `${API}sites/MLA/search?q=belleza`,
  },
  {
    id: 7,
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sports",
    url: `${API}sites/MLA/search?q=deportes`,
  },
  {
    id: 8,
    name: "Automotive",
    image:
      "https://images.unsplash.com/photo-1544894079-4184d7a29169?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Automotive",
    url: `${API}sites/MLA/search?q=auto`,
  },
  {
    id: 9,
    name: "Other",
    image:
      "https://images.unsplash.com/photo-1710129084868-9ff5127b7e6e?q=80&w=4192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Other",
    URL: `${API}sites/MLA/search?q=otros`,
  },
];
