import Shoes from "../assets/images/shoes.jpg";
import Sandels from "../assets/images/sandals.jpg";
import Shirt from "../assets/images/shirt.jpg";
import Phone from "../assets/images/phone.jpg";
import Facewash from "../assets/images/facewash.jpg";

export default function InitialProducts() {
    return [
        {
            key: 1,
            name:'Shoes',
            price:1000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shoes,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 50,
            manufacturer: 'TATA'
        },
        {
            key: 2,
            name:'Shirt',
            price:300,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shirt,
            category: 'APPAREL',
            modifiedDate: new Date().toLocaleString(),
            quantity: 100,
            manufacturer: 'TATA'
        },
        {
            key: 3,
            name:'Phone',
            price:70000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Phone,
            category: 'ELECTRONICS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 500,
            manufacturer: 'TATA'
        },
        {
            key: 4,
            name:'Face Wash',
            price:400,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Facewash,
            category: 'PERSONAL CARE',
            modifiedDate: new Date().toLocaleString(),
            quantity: 200,
            manufacturer: 'TATA'
        },
        {
            key: 5,
            name:'Sandels',
            price:700,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Sandels,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 70,
            manufacturer: 'TATA'
        }
    ];
}