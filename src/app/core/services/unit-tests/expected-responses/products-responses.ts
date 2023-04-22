import { BuyProduct, ProductResponse, ProductsResponse, Response } from '../../../interfaces';

export const getProductsResponse: Response<ProductsResponse> = {
  'data': {
    'products': [{
      'id': '642b340a7ff8ec79b575c643',
      'name': 'iPhone 9',
      'description': 'An apple mobile which is nothing like apple',
      'images': ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
      'price': 549
    }, {
      'id': '642b340a7ff8ec79b575c644',
      'name': 'iPhone X',
      'description': 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      'images': ['https://i.dummyjson.com/data/products/2/1.jpg', 'https://i.dummyjson.com/data/products/2/2.jpg', 'https://i.dummyjson.com/data/products/2/3.jpg', 'https://i.dummyjson.com/data/products/2/thumbnail.jpg'],
      'price': 899
    }, {
      'id': '642b340a7ff8ec79b575c645',
      'name': 'Samsung Universe 9',
      'description': 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
      'images': ['https://i.dummyjson.com/data/products/3/1.jpg'],
      'price': 1249
    }, {
      'id': '642b340a7ff8ec79b575c646',
      'name': 'OPPOF19',
      'description': 'OPPO F19 is officially announced on April 2021.',
      'images': ['https://i.dummyjson.com/data/products/4/1.jpg', 'https://i.dummyjson.com/data/products/4/2.jpg', 'https://i.dummyjson.com/data/products/4/3.jpg', 'https://i.dummyjson.com/data/products/4/4.jpg', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg'],
      'price': 280
    }, {
      'id': '642b340a7ff8ec79b575c647',
      'name': 'Huawei P30',
      'description': 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      'images': ['https://i.dummyjson.com/data/products/5/1.jpg', 'https://i.dummyjson.com/data/products/5/2.jpg', 'https://i.dummyjson.com/data/products/5/3.jpg'],
      'price': 499
    }, {
      'id': '642b340a7ff8ec79b575c648',
      'name': 'MacBook Pro',
      'description': 'MacBook Pro 2021 with mini-LED display may launch between September, November',
      'images': ['https://i.dummyjson.com/data/products/6/1.png', 'https://i.dummyjson.com/data/products/6/2.jpg', 'https://i.dummyjson.com/data/products/6/3.png', 'https://i.dummyjson.com/data/products/6/4.jpg'],
      'price': 1749
    }, {
      'id': '642b340a7ff8ec79b575c649',
      'name': 'Samsung Galaxy Book',
      'description': 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      'images': ['https://i.dummyjson.com/data/products/7/1.jpg', 'https://i.dummyjson.com/data/products/7/2.jpg', 'https://i.dummyjson.com/data/products/7/3.jpg', 'https://i.dummyjson.com/data/products/7/thumbnail.jpg'],
      'price': 1499
    }, {
      'id': '642b340a7ff8ec79b575c64a',
      'name': 'Microsoft Surface Laptop 4',
      'description': 'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
      'images': ['https://i.dummyjson.com/data/products/8/1.jpg', 'https://i.dummyjson.com/data/products/8/2.jpg', 'https://i.dummyjson.com/data/products/8/3.jpg', 'https://i.dummyjson.com/data/products/8/4.jpg', 'https://i.dummyjson.com/data/products/8/thumbnail.jpg'],
      'price': 1499
    }, {
      'id': '642b340a7ff8ec79b575c64b',
      'name': 'Infinix INBOOK',
      'description': 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
      'images': ['https://i.dummyjson.com/data/products/9/1.jpg', 'https://i.dummyjson.com/data/products/9/2.png', 'https://i.dummyjson.com/data/products/9/3.png', 'https://i.dummyjson.com/data/products/9/4.jpg', 'https://i.dummyjson.com/data/products/9/thumbnail.jpg'],
      'price': 1099
    }, {
      'id': '642b340a7ff8ec79b575c64c',
      'name': 'HP Pavilion 15-DK1056WM',
      'description': 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
      'images': ['https://i.dummyjson.com/data/products/10/1.jpg', 'https://i.dummyjson.com/data/products/10/2.jpg', 'https://i.dummyjson.com/data/products/10/3.jpg', 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg'],
      'price': 1099
    }, {
      'id': '642b340a7ff8ec79b575c64d',
      'name': 'perfume Oil',
      'description': 'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
      'images': ['https://i.dummyjson.com/data/products/11/1.jpg', 'https://i.dummyjson.com/data/products/11/2.jpg', 'https://i.dummyjson.com/data/products/11/3.jpg', 'https://i.dummyjson.com/data/products/11/thumbnail.jpg'],
      'price': 13
    }, {
      'id': '642b340a7ff8ec79b575c64e',
      'name': 'Brown Perfume',
      'description': 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
      'images': ['https://i.dummyjson.com/data/products/12/1.jpg', 'https://i.dummyjson.com/data/products/12/2.jpg', 'https://i.dummyjson.com/data/products/12/3.png', 'https://i.dummyjson.com/data/products/12/4.jpg', 'https://i.dummyjson.com/data/products/12/thumbnail.jpg'],
      'price': 40
    }], 'pagination': { 'currentPage': 1, 'itemsPerPage': 12, 'totalItems': 30 }
  }, 'success': true
};

export const getProductResponse: Response<ProductResponse> = {
  'data': {
    'product': {
      'id': '642b340a7ff8ec79b575c645',
      'name': 'Samsung Universe 9',
      'description': 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
      'images': ['https://i.dummyjson.com/data/products/3/1.jpg'],
      'price': 1249
    }
  }, 'success': true
};

export const buyProductResponse: Response<BuyProduct> = {
  'data': {
    'customer': {
      'id': '6443a30502414d8a0bea59f6',
      'fullName': 'Парполіта Вадим Олексійович',
      'phoneNumber': '380689848420',
      'deliveryCompany': 'NOVA_POSHTA',
      'deliveryCityRef': '7833e616-3b51-11de-913b-001d92f78698',
      'deliveryWarehouse': '2'
    },
    'order': {
      'id': '6443a30502414d8a0bea59f8',
      'productId': '642b340a7ff8ec79b575c645',
      'customerId': '6443a30502414d8a0bea59f6'
    }
  }, 'success': true
};
