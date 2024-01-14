const products = [
    {
      id: '1',
      nombre: 'Memoria Notebook 4GB Kingston',
      price: 22990,
      category: 'memorias_ram',
      img: 'https://www.pcfactory.cl/public/foto/42117/1_1000.jpg?t=1702095303031',
      stock: 30,
      descripcion: 'Memoria Notebook 4GB SoDimm DDR4 2666MHz Value RAM'
    },
    {
      id: '2',
      nombre: 'Pendrive 32GB Kingston',
      price: 3490,
      category: 'pendrive',
      img: 'https://www.pcfactory.cl/public/foto/40487/1_1000.jpg?t=1702084419494',
      stock: 14,
      descripcion: 'Pendrive 32GB USB 3.2 DT70 (Tipo-C)'
    },
    {
      id: '3',
      nombre: 'Unidad SSD 960GB Kingston',
      price: 49990,
      category: 'ssd',
      img: 'https://www.pcfactory.cl/public/foto/30756/1_1000.jpg?t=1702064453113',
      stock: 22,
      descripcion: 'Unidad SSD 960GB Sata3 2.5" A400'
    },
    {
        id: '4',
        nombre: 'Pendrive 256GB Kingston',
        price: 49990,
        category: 'pendrive',
        img: 'https://www.pcfactory.cl/public/foto/48561/1_1000.jpg?t=1702148088746',
        stock: 22,
        descripcion: 'Pendrive 256GB USB 3.2 DataTraveler Exodia Onyx'
      }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };
  