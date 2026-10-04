export interface PizzaSize {
  name: string;
  price: number;
  portions: number;
}

export interface Badge {
  text: string;
  type: 'green' | 'red' | 'gold' | 'outline';
  icon?: string;
}

export interface Pizza {
  title: string;
  img: string;
  description: string;
  badges: Badge[];
  sizes: PizzaSize[];
}
