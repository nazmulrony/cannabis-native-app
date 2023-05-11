import grower from "./assets/icons/Grower.svg";
import processor from "./assets/icons/Processors.svg";
import budtender from "./assets/icons/Budtender.svg";
import transporters from "./assets/icons/Transporters.svg";
import labs from "./assets/icons/Labs.svg";
import wasteDisposal from "./assets/icons/WasteDisposal.svg";
import productVendors from "./assets/icons/ProductVendors.svg";
import serviceProviders from "./assets/icons/ServiceProviders.svg";
import consumers from "./assets/icons/Consumers.svg";

export const licensedUsers = [
    {
        userType: "Grower",
        description: "I am a grower to join cannabis connecter",
        Icon: grower,
    },
    {
        userType: "Processor",
        description: "I am a processor to join cannabis connecter",
        Icon: processor,
    },
    {
        userType: "Budtender",
        description: "I am a budtender to join cannabis connecter",
        Icon: budtender,
    },
    {
        userType: "Transporters",
        description: "I am a transporter to join cannabis connecter",
        Icon: transporters,
    },
    {
        userType: "Labs",
        description: "I am a lab assistant to join cannabis connecter",
        Icon: labs,
    },
    {
        userType: "Waste Disposal",
        description: "I am a processor to join cannabis connecter",
        Icon: wasteDisposal,
    },
];

export const unlicensedUsers = [
    {
        userType: "Product Vendors",
        description: "I am a grower to join cannabis connecter",
        Icon: productVendors,
    },
    {
        userType: "Service Providers",
        description: "I am a processor to join cannabis connecter",
        Icon: serviceProviders,
    },
    {
        userType: "Consumers",
        description: "I am a processor to join cannabis connecter",
        Icon: consumers,
    },
];

export const productsData = [
    {
        category_id: 1,
        category_name: "Vape Pen",
        category_image: require("./assets/categories/cat1.png"),
        sub_categories: [
            {
                sub_cat_id: 1,
                sub_cat_name: "Dummy 1",
                items: [
                    {
                        image: require("./assets/items/vape.png"),
                        type: "CARTRIDGE",
                        quantity: 5,
                        title: "Bloom Classic Vape | Pineapple Express",
                        brand: "BLOOM BRAND",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                    {
                        image: require("./assets/items/kaviarFlower.png"),
                        type: "Flower",
                        quantity: 24,
                        title: "KAVIAR MOONROCKS",
                        brand: "Kaviar",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                ],
            },
            {
                sub_cat_id: 2,
                sub_cat_name: "Dummy 2",
                items: [
                    {
                        image: require("./assets/items/pre-roll.png"),
                        type: "Infused Pre Rol",
                        quantity: 1,
                        title: "Original Galaxy Preroll-OK",
                        brand: "Galaxy",
                        ratings: "4.6 (81)",
                        price: 20.0,
                        quantityEach: "Each",
                    },
                    {
                        image: require("./assets/items/moon-rock.png"),
                        type: "Flower",
                        quantity: 24,
                        title: "KAVIAR MOONROCKS",
                        brand: "Kaviar",
                        ratings: "4.6 (81)",
                        price: 25.0,
                        thc: "22.35% THC",
                    },
                ],
            },
            {
                sub_cat_id: 3,
                sub_cat_name: "Dummy 3",
                items: [
                    {
                        image: require("./assets/items/vape.png"),
                        type: "CARTRIDGE",
                        quantity: 5,
                        title: "Bloom Classic Vape | Pineapple Express",
                        brand: "BLOOM BRAND",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                    {
                        image: require("./assets/items/kaviarFlower.png"),
                        type: "Flower",
                        quantity: 24,
                        title: "KAVIAR MOONROCKS",
                        brand: "Kaviar",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                ],
            },
        ],
    },
    {
        category_id: 2,
        category_name: "Flower",
        category_image: require("./assets/categories/cat1.png"),
        sub_categories: [
            {
                sub_cat_id: 1,
                sub_cat_name: "Dummy 1",
                items: [
                    {
                        image: require("./assets/items/vape.png"),
                        type: "CARTRIDGE",
                        quantity: 5,
                        title: "Bloom Classic Vape | Pineapple Express",
                        brand: "BLOOM BRAND",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                    {
                        image: require("./assets/items/kaviarFlower.png"),
                        type: "Flower",
                        quantity: 24,
                        title: "KAVIAR MOONROCKS",
                        brand: "Kaviar",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                ],
            },
            {
                sub_cat_id: 2,
                sub_cat_name: "Dummy 2",
                items: [
                    {
                        image: require("./assets/items/pre-roll.png"),
                        type: "Infused Pre Rol",
                        quantity: 1,
                        title: "Original Galaxy Preroll-OK",
                        brand: "Galaxy",
                        ratings: "4.6 (81)",
                        price: 20.0,
                        quantityEach: "Each",
                    },
                    {
                        image: require("./assets/items/moon-rock.png"),
                        type: "Flower",
                        quantity: 24,
                        title: "KAVIAR MOONROCKS",
                        brand: "Kaviar",
                        ratings: "4.6 (81)",
                        price: 25.0,
                        thc: "22.35% THC",
                    },
                ],
            },
            {
                sub_cat_id: 3,
                sub_cat_name: "Dummy 3",
                items: [
                    {
                        image: require("./assets/items/vape.png"),
                        type: "CARTRIDGE",
                        quantity: 5,
                        title: "Bloom Classic Vape | Pineapple Express",
                        brand: "BLOOM BRAND",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                    {
                        image: require("./assets/items/kaviarFlower.png"),
                        type: "Flower",
                        quantity: 24,
                        title: "KAVIAR MOONROCKS",
                        brand: "Kaviar",
                        ratings: "4.6 (81)",
                        price: 25.0,
                    },
                ],
            },
        ],
    },
];

export const filterOptionNames = [
    "Sort",
    "Categories",
    "Order online",
    "Distance",
    "Weight",
    "Price range",
    " ",
];

export const categoryNames = [
    "All",
    "Flower",
    "Vape Pen",
    "CBD",
    "Topicals",
    "Concentrates",
    "Pre Roll",
];
