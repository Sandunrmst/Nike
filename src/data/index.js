import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '2k+', label: 'Brands' },
    { value: '600+', label: 'Shops' },
    { value: '5m+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-46",
        price: "$200.20",
        rating: "4.7"
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-25",
        price: "$210.20",
        rating: "5.0"
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-50",
        price: "$220.20",
        rating: "4.0"
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-65",
        price: "$230.20",
        rating: "4.2"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Enjoy peace of mind with our secure transaction methods."
    },
    {
        imgURL: support,
        label: "Delighted to assist you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {   
        id:2,
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.7,
        feedback: "A great person to work with and gave exactly as what I envisioned, even better actually. Will definitely work with him again in the future."
    },
    
    {   id:1,
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.2,
        feedback: "It was really great working with this seller. The designer is extremely professional, efficient and meticulous with his work. Highly recommended."
    },

    {   
        id:3,
        imgURL: customer3,
        customerName: 'James Scott',
        rating: 4.3,
        feedback: "He was super responsive and available. The work was carried out very quickly with all the feedback requested. Highly recommend experience to replicate."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force", link: "/" },
            { name: "Air Max", link: "/" },
            { name: "Air Jordan", link: "/" },
            { name: "Air Force", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "info@nike.com", link: "mailto:info@nike.com" },
            { name: "+1 (415) 481 000", link: "tel:+1 (415) 481 000" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];