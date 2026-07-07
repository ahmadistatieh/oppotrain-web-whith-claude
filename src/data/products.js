import syltherine from '../assets/syltherine.jpg'
import leviosa from '../assets/leviosa.jpg'
import lolito from '../assets/lolito.jpg'
import respira from '../assets/respira.jpg'
import grifo from '../assets/grifo.jpg'
import muggo from '../assets/muggo.jpg'
import pingky from '../assets/pingky.jpg'
import potty from '../assets/potty.jpg'

export const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    badge: { text: '-30%', type: 'discount' },
    image: syltherine,
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: null,
    badge: null,
    image: leviosa,
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    badge: { text: '-50%', type: 'discount' },
    image: lolito,
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    oldPrice: null,
    badge: { text: 'New', type: 'new' },
    image: respira,
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    oldPrice: null,
    badge: null,
    image: grifo,
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    oldPrice: null,
    badge: { text: 'New', type: 'new' },
    image: muggo,
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    badge: { text: '-50%', type: 'discount' },
    image: pingky,
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    oldPrice: null,
    badge: { text: 'New', type: 'new' },
    image: potty,
  },
]
