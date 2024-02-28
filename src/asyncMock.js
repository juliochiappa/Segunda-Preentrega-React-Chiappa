export const products = [
  {
    id: 1,
    title: "Electroporador Facial",
    price: 52432,
    description: "Trabaja en líneas y arrugas de la piel",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1707279450/images_uckazq.jpg",
    stock: 7,
    category: "aparatos",
  },
  {
    id: 2,
    title: "Altafrecuencia Facial",
    price: 164500,
    stock: 8,
    description: "Estimulador de Cabello y cuero cabelludo",
    category: "aparatos",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708119333/images_xqhozn.jpg",
  },
  {
    id: 3,
    title: "Máscara Facial",
    price: 199000,
    stock: 7,
    description: "Reductora y Lifting",
    category: "aparatos",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708094761/images_o9oxjm.jpg",
  },
  {
    id: 4,
    title: "Limpiador Facial",
    price: 15800,
    stock: 5,
    description: "Removedor de Puntos",
    category: "aparatos",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708118914/images_bhdbww.jpg",
  },
  {
    id: 5,
    title: "Tratamiento Facial Premium",
    price: 124432,
    description: "Masaje facial, aplicación de cremas y lociones",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708283986/images_ljzmmx.jpg",
    stock: 4,
    category: "tratamientos",
  },
  {
    id: 6,
    title: "Masajes Corporales",
    price: 152432,
    description: "Masajes descontracturantes en pareja",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708283859/images_o9evxx.jpg",
    stock: 8,
    category: "tratamientos",
  },
  {
    id: 7,
    title: "Masajes Corporales",
    price: 55890,
    description: "Masajes con piedras calientes",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708284257/images_qihauu.jpg",
    stock: 6,
    category: "tratamientos",
  },
  {
    id: 8,
    title: "Reductor de estrías",
    price: 12432,
    description: "Reduce las estrías de tus piernas",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708284460/images_s6tpsv.jpg",
    stock: 5,
    category: "tratamientos",
  },
  {
    id: 9,
    title: "Cremas y Lociones Faciales",
    price: 22432,
    description: "Fortalece y elimina arrugas e imperfecciones de la piel",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708282448/images_cgegwa.jpg",
    stock: 3,
    category: "kit",
  },
  {
    id: 10,
    title: "Cremas y Lociones Faciales",
    price: 15432,
    description: "Kit Facial para cutis seco",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708283008/images_krpyti.jpg",
    stock: 4,
    category: "kit",
  },
  {
    id: 11,
    title: "Brochas y Pinceles Faciales",
    price: 58565,
    description: "Kit para aplicación de cremas",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708283157/images_rwn0q3.jpg",
    stock: 2,
    category: "kit",
  },
  {
    id: 12,
    title: "Espumas, cremas y lociones Faciales",
    price: 82560,
    description: "Kit completo de cremas Anti-age, lociones y gel contornos de ojos",
    img: "https://res.cloudinary.com/daiikhnag/image/upload/v1708283517/images_zm4mkp.jpg",
    stock: 3,
    category: "kit",
  },
];

// Función que muestra todos los productos del array products

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};

// Función que muestra un producto de acuerdo al id

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id: ${id}`);
        }
      }, 1000);
    } else {
      reject("No hay productos para mostrar");
    }
  });
};
