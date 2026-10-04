import { ref, computed } from 'vue'
import type { Pizza } from '~/types/pizza'

export function useMenu() {
  const availableSizes = ['TODO', 'FAMILIAR', 'MEDIANA', 'PEQUEÑA', 'INDIVIDUAL', 'INFANTIL']
  const selectedSize = ref('TODO')

  const allPizzas: Pizza[] = [
    {
      title: 'Hawaiana',
      img: '/images/pizzas/hawaiana.png',
      description: 'Jamón, piña y queso fundido',
      badges: [{ text: 'CLÁSICA', type: 'green' }, { text: 'FRESCO', type: 'outline', icon: 'mdi:leaf' }],
      sizes: [
        { name: 'FAMILIAR', price: 13.00, portions: 12 },
        { name: 'MEDIANA', price: 9.00, portions: 10 },
        { name: 'PEQUEÑA', price: 7.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 4.50, portions: 6 },
        { name: 'INFANTIL', price: 2.75, portions: 4 }
      ]
    },
    {
      title: 'Pepperoni',
      img: '/images/pizzas/peperoni.png',
      description: 'Pepperoni dorado y doble queso',
      badges: [{ text: 'FAVORITA', type: 'red' }, { text: 'MÁS VENDIDA', type: 'gold', icon: 'mdi:star' }],
      sizes: [
        { name: 'FAMILIAR', price: 14.00, portions: 12 },
        { name: 'MEDIANA', price: 10.00, portions: 10 },
        { name: 'PEQUEÑA', price: 8.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
      ]
    },
    {
      title: 'Ranchito',
      img: '/images/pizzas/ranchito.png',
      description: 'Jamón, salchicha, pepperoni, carne y tocino',
      badges: [{ text: 'DE LA CASA', type: 'gold' }],
      sizes: [
        { name: 'FAMILIAR', price: 20.00, portions: 12 },
        { name: 'MEDIANA', price: 16.00, portions: 10 },
        { name: 'PEQUEÑA', price: 12.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.50, portions: 6 }
      ]
    },
    {
      title: 'Tricolor',
      img: '/images/pizzas/tricolor.png',
      description: 'Jamón, piña, pepperoni y queso',
      badges: [{ text: 'NUEVA', type: 'green' }, { text: 'FRESCO', type: 'outline', icon: 'mdi:leaf' }],
      sizes: [
        { name: 'FAMILIAR', price: 14.00, portions: 12 },
        { name: 'MEDIANA', price: 11.00, portions: 10 },
        { name: 'PEQUEÑA', price: 8.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
      ]
    },
    {
      title: 'Tradicional',
      img: '/images/pizzas/tradicional.png',
      description: 'Jamón y Queso',
      badges: [{ text: 'TRADICIONAL', type: 'outline' }],
      sizes: [
        { name: 'FAMILIAR', price: 10.50, portions: 12 },
        { name: 'MEDIANA', price: 7.50, portions: 10 },
        { name: 'PEQUEÑA', price: 5.50, portions: 8 },
        { name: 'INDIVIDUAL', price: 3.00, portions: 6 },
        { name: 'INFANTIL', price: 2.50, portions: 4}
      ]
    },
    {
      title: 'Fungui',
      img: '/images/pizzas/fungui.png',
      description: 'Jamón, Cebolla y Champiñones',
      badges: [],
      sizes: [
        { name: 'FAMILIAR', price: 15.00, portions: 12 },
        { name: 'MEDIANA', price: 11.75, portions: 10 },
        { name: 'PEQUEÑA', price: 8.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
      ]
    },
    {
      title: 'Deli Trópical',
      img: '/images/pizzas/delitropical.png',
      description: 'Pollo, Jamón y Piña',
      badges: [{ text: 'TROPICAL', type: 'gold' }],
      sizes: [
        { name: 'FAMILIAR', price: 15.00, portions: 12 },
        { name: 'MEDIANA', price: 12.00, portions: 10 },
        { name: 'PEQUEÑA', price: 8.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.50, portions: 6 }
      ]
    },
    {
      title: 'Mixta',
      img: '/images/pizzas/mixta.png',
      description: 'Jamón, Salchicha, Pimiento, Carne molida, Champiñones, Salami y Cebolla',
      badges: [],
      sizes: [
        { name: 'FAMILIAR', price: 18.50, portions: 12 },
        { name: 'MEDIANA', price: 15.00, portions: 10 },
        { name: 'PEQUEÑA', price: 10.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.50, portions: 6 }
      ]
    },
    {
      title: 'Tocichoclo',
      img: '/images/pizzas/tocichoclo.png',
      description: 'Tocino, Salami, Choclo y Queso',
      badges: [],
      sizes: [
        { name: 'FAMILIAR', price: 15.00, portions: 12 },
        { name: 'MEDIANA', price: 12.00, portions: 10 },
        { name: 'PEQUEÑA', price: 9.00, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
      ]
    },
    {
      title: 'Chicken',
      img: '/images/pizzas/chicken.png',
      description: 'Pollo, Pimiento y Champiñones',
      badges: [],
      sizes: [
        { name: 'FAMILIAR', price: 16.00, portions: 12 },
        { name: 'MEDIANA', price: 13.50, portions: 10 },
        { name: 'PEQUEÑA', price: 9.50, portions: 8 },
        { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
      ]
    }
  ]

  const filteredPizzas = computed(() => {
    if (selectedSize.value === 'TODO') return allPizzas
    
    return allPizzas.filter(pizza => 
      pizza.sizes.some(size => size.name === selectedSize.value)
    )
  })

  return {
    availableSizes,
    selectedSize,
    filteredPizzas
  }
}
