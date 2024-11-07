export const HighlightsType = {
    _id: 0,
    _base: "",
    title: "",
    name: "",
    image: "",
    color: "",
    buttonTitle: "",
  };
  
  export const CategoryProps = {
    _id: 0,
    image: "",
    name: "",
    _base: "",
    description: "",
  };
  
  export const ProductProps = {
    _id: 0,
    _base: "",
    reviews: 0,
    rating: 0,
    quantity: 0,
    overView: "",
    name: "",
    isStock: false,
    isNew: false,
    images: [""],
    discountedPrice: 0,
    regularPrice: 0,
    description: "",
    colors: [""],
    category: "",
    brand: "",
  };
  
  export const BlogProps = {
    _id: 0,
    image: "",
    title: "",
    description: "",
    _base: "",
  };
  
  export const UserTypes = {
    currentUser: {
      firstName: "",
      lastName: "",
      email: "",
      avatar: "",
      id: "",
    },
  };
  
  export const OrderTypes = {
    orderItems: [ProductProps],
    paymentId: "",
    paymentMethod: "",
    userEmail: "",
  };
  