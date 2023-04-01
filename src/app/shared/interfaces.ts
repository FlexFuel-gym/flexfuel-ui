export interface Achievement {
  image: string;
  title: string;
  description: string;
}

export interface Exercises {
  image: string;
  title: string;
  description: string;
}

export interface Product {
  image: string;
  title: string;
  price: number;
}

export interface RouterData {
  name: string;
  link: string;
}

export interface ButtonData {
  text: string;
  size: 'small' | 'medium' | 'huge',
  type: 'blue',
}
