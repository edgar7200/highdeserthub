import { useState, useEffect } from "react";

const GOOGLE_FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
`;

const CATEGORIES = [
  { id: "contractors", label: "Contractors", icon: "🔨", color: "#C4603A" },
  { id: "restaurants", label: "Restaurants", icon: "🍽️", color: "#D4824A" },
  { id: "auto", label: "Auto Services", icon: "🚗", color: "#8B5E3C" },
  { id: "health", label: "Health & Wellness", icon: "💊", color: "#6B8F71" },
  { id: "legal", label: "Legal & Financial", icon: "⚖️", color: "#1B3A5C" },
  { id: "beauty", label: "Beauty & Salons", icon: "✂️", color: "#B85C8A" },
  { id: "realestate", label: "Real Estate", icon: "🏠", color: "#4A7A8F" },
  { id: "retail", label: "Retail & Shopping", icon: "🛍️", color: "#7A6B3C" },
  { id: "community", label: "Churches & Community", icon: "🤝", color: "#5C6B4A" },
  { id: "careers", label: "Jobs & Careers", icon: "💼", color: "#3C5C7A" },
  { id: "homeservices", label: "Home Services", icon: "🏡", color: "#7A4A6B" },
  { id: "landscaping", label: "Landscaping", icon: "🌿", color: "#4A6B3C" },
];

const BUSINESSES = [
  {
    id: 1,
    name: "G&S Rolloff Rentals",
    baseThumbsUp: 1,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(951) 505-1546",
    contact: "Alfonzo",
    address: "",
    email: "",
    website: "",
    license: "",
    services: ["Rolloff Rentals", "Tractor Rental", "Dumpster Rental", "Wood Removal", "Garage Cleanouts", "Junk Removal", "Demolition", "Construction Debris Removal", "Dirt & Rock Removal", "Carpet Disposal"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Rolloff rentals and tractor services for the High Desert. Specializing in hauling, junk removal, demolition, and dumpster rental. Call Alfonzo for a quote.",
    initials: "GS",
    color: "#8B3A1A",
    cardFront: "/cards/gs-rolloff-front.png",
    cardBack: "/cards/gs-rolloff-back.png",
  },
  {
    id: 2,
    name: "Agape Pest Control",
    baseThumbsUp: 1,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(442) 353-7522",
    contact: "Jorge Deras",
    address: "",
    email: "info@agapepest.com",
    website: "agapepest.com",
    license: "OPR1460B",
    services: ["Pest Control", "Residential Treatment", "Commercial Treatment", "Inspections"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional pest control serving the High Desert. Licensed service technician. Residential and commercial treatments available.",
    initials: "AP",
    color: "#1B3A5C",
    cardFront: "/cards/agape-front.png",
    cardBack: "/cards/agape-back.png",
  },
  {
    id: 3,
    name: "High Desert General Construction",
    baseThumbsUp: 3,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(714) 398-1899",
    contact: "Enrique Velasco",
    address: "",
    email: "hdconstruction714@gmail.com",
    website: "",
    license: "1077588",
    services: ["Additions", "New Construction", "Remodels", "Kitchen & Bathrooms", "Demolition & Clean Ups", "Patios & Masonry", "General Repairs"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Full-service general contractor serving the High Desert. Residential and commercial. Interior and exterior. Licensed and insured.",
    initials: "HC",
    color: "#C4603A",
    cardFront: "/cards/hdgc-front.png",
    cardBack: "/cards/hdgc-back.png",
  },
  {
    id: 4,
    name: "Alvarez Appliances",
    carousel: true,
    baseThumbsUp: 2,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "homeservices",
    city: "Victorville",
    phone: "(909) 376-3777",
    contact: "Salvador Alvarez",
    address: "14560 Palmdale Rd, Victorville, CA 92345, Space 16",
    email: "",
    website: "",
    license: "",
    services: ["Appliance Repair", "Appliance Sales", "Washer Repair", "Dryer Repair", "Refrigerator Repair"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Appliance repair and sales in Victorville. Hablamos Español. Serving the High Desert with honest, affordable appliance services.",
    initials: "AA",
    color: "#4A7A8F",
    cardFront: "/cards/alvarez-front.png",
    cardBack: "/cards/alvarez-back.png",
  },
  {
    id: 5,
    name: "Fence-MD",
    baseThumbsUp: 1,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(442) 336-2363",
    contact: "Mike Delgado",
    address: "",
    email: "fencemd82@gmail.com",
    website: "FenceMD.org",
    license: "1142830",
    services: ["Fence Installation", "Fence Repair", "Wood Fencing", "Chain Link", "Vinyl Fencing", "Custom Gates"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional fence installation and repair for the High Desert. Licensed contractor. Residential and commercial. Free estimates.",
    initials: "FM",
    color: "#0D1B2A",
    cardFront: "/cards/fencemd-front.png",
    cardBack: "/cards/fencemd-back.png",
  },
  {
    id: 6,
    name: "Field Fix",
    baseThumbsUp: 0,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(909) 329-3034",
    contact: "Jesse Lozano",
    address: "",
    email: "",
    website: "",
    instagram: "@_FIELDFIX_",
    license: "",
    services: ["Fire Prevention", "Weed Abatement", "Grading", "Road Repair", "Land Clearing"],
    hours: "Call or Text for hours",
    featured: false,
    tier: "free",
    description: "Specializing in fire prevention, weed abatement, grading, and road repair throughout the High Desert. Free estimates available.",
    initials: "FF",
    color: "#C4603A",
    cardFront: "/cards/fieldfix-front.png",
    cardBack: "/cards/fieldfix-back.png",
  },
  {
    id: 7,
    name: "DBS Disposal",
    baseThumbsUp: 2,
    verified: false,
    dateAdded: "March 2026",
    lastVerified: "March 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(323) 763-3155",
    contact: "",
    address: "",
    email: "dumpboyzzjr@gmail.com",
    website: "",
    license: "",
    services: ["Demo", "Clean Outs", "Dumpster Rental", "Material Move", "Junk Removal"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Demolition, clean outs, dumpster rentals, and material moving services for the High Desert. Fast and reliable.",
    initials: "DB",
    color: "#3C3C3C",
    cardFront: "/cards/dbs-front.png",
    cardBack: "/cards/dbs-back.png",
  },
  {
    id: 8,
    name: "SoCal Pest Pros",
    baseThumbsUp: 3,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(833) 955-3503",
    contact: "Frederick G. Tellez",
    address: "",
    email: "",
    website: "SoCalPestPros.com",
    license: "OPR 13823",
    services: ["Pest Control", "Residential Treatment", "Commercial Treatment", "Inspections", "Extermination"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Licensed pest control serving residential and commercial clients throughout Southern California. Tell us what's buggin' you!",
    initials: "SP",
    color: "#1B3A5C",
    cardFront: "/cards/socalpest-front.png",
    cardBack: "/cards/socalpest-back.jpg",
  },
  {
    id: 9,
    name: "Kiki Landscaping",
    baseThumbsUp: 2,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "landscaping",
    city: "Victor Valley",
    phone: "(714) 501-6247",
    contact: "Luis Aguilar",
    address: "",
    email: "",
    website: "",
    license: "",
    services: ["Clean-Ups", "Lawn Work", "Tree Trimming", "Maintenance", "Fertilizing", "Planting", "Sprinkler Systems", "Gardening"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Full-service landscaping for the High Desert. Clean-ups, lawn care, tree trimming, sprinkler systems, and more. Free estimates.",
    initials: "KL",
    color: "#4A6B3C",
    cardFront: "/cards/kiki-front.png",
    cardBack: "/cards/kiki-back.jpg",
  },
  {
    id: 10,
    name: "Miss Cleandipity",
    carousel: true,
    baseThumbsUp: 4,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 215-5941",
    contact: "",
    address: "",
    email: "redes.misscleandipity@gmail.com",
    website: "",
    license: "",
    services: ["Professional Cleaning", "Organizing", "Deep Cleaning", "Regular Cleaning"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional cleaning, organizing, deep cleaning, and regular cleaning services for the High Desert. The Smells Good Spirit.",
    initials: "MC",
    color: "#6B8F71",
    cardFront: "/cards/misscleandipity-front.png",
    cardBack: "/cards/misscleandipity-back.jpg",
  },
  {
    id: 11,
    name: "Empire RE Properties",
    baseThumbsUp: 2,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "realestate",
    city: "Victor Valley",
    phone: "(909) 495-5397",
    contact: "Jesse Ramirez",
    address: "9431 Haven Ave, Ste. 124, Rancho Cucamonga, CA 91730",
    email: "jramirezrealty4@gmail.com",
    website: "",
    instagram: "@jesseramirez_empire_properties",
    license: "",
    services: ["Home Buying", "Home Selling", "Residential Real Estate", "Commercial Real Estate"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Licensed Realtor serving the High Desert and Inland Empire. Helping buyers and sellers navigate the real estate market with confidence.",
    initials: "EP",
    color: "#0D1B2A",
    cardFront: "/cards/empire-re-front.png",
    cardBack: "/cards/empire-re-back.png",
  },
  {
    id: 12,
    name: "Virginia's Drinking Water",
    baseThumbsUp: 3,
    verified: true,
    dateAdded: "March 2026",
    lastVerified: "April 2026",
    category: "health",
    city: "Victorville",
    phone: "(760) 955-1560",
    textNumber: "(714) 928-1342",
    contact: "",
    address: "14592 Palmdale Road, Suite D7, Victorville, CA 92392",
    email: "",
    website: "",
    license: "",
    services: ["R.O. Water", "Alkaline Water", "24/7 Vending Machine"],
    hours: "Open 24/7",
    featured: false,
    tier: "free",
    description: "Purified R.O. and alkaline drinking water for the High Desert community. Vending machine available 24/7. Call or text for info.",
    initials: "VD",
    color: "#4A7A8F",
    cardFront: "/cards/virginias-water-front.jpg",
    cardBack: null,
  },
  {
    id: 13,
    name: "Carlos Barber",
    expiresOn: "July 2026",
    category: "beauty",
    city: "Victor Valley",
    phone: "(760) 221-3339",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@cmjr.5",
    license: "",
    services: ["Haircuts", "Free Haircuts — Donations Appreciated"],
    hours: "Call to book",
    featured: false,
    tier: "free",
    description: "Local barber serving the High Desert. Free haircuts — donations appreciated. Scan QR code to book your appointment.",
    initials: "CB",
    color: "#1B3A5C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/carlosbarber_front.png",
    cardBack: null,
  },
  {
    id: 14,
    name: "Clean Bee & Co",
    expiresOn: "July 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(442) 229-5522",
    contact: "",
    address: "",
    email: "CleanBeeofCa@Gmail.com",
    website: "",
    instagram: "@CleanBeeofCa",
    license: "",
    services: ["Standard Cleaning", "Deep Cleaning", "Move-In/Out Cleaning", "Eco-Friendly Cleaning"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional cleaning services for the High Desert. Eco-friendly, reliable, and detail oriented. Free quote available.",
    initials: "CB",
    color: "#6B8F71",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 1,
    carousel: false,
    cardFront: "/cards/cleanbeeco_front.png",
    cardBack: null,
  },
  {
    id: 15,
    name: "De La Torre Handyman",
    expiresOn: "July 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 601-0484",
    contact: "Alberto",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Painting", "Tree Trimming", "Palm Tree Trimming", "Garage Clean-Out", "Remodeling", "Plumbing", "Fences", "Lawn Maintenance", "Backyard Clean-Ups"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Full-service handyman for the High Desert. Bilingual — Español and English. Free estimates available. Call Alberto today.",
    initials: "DT",
    color: "#4A7A8F",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/delatorrehandyman_front.png",
    cardBack: "/cards/delatorrehandyman_back.png",
  },
  {
    id: 16,
    name: "Dog Waste Removal",
    expiresOn: "July 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(909) 821-8427",
    contact: "Jack and Catherine McConnell",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Pet Waste Removal", "Dog Walking", "Dog Playing"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Local small business serving the High Desert community. Pet waste removal for $20 per visit. Dog walking and playing for $15 per hour.",
    initials: "DW",
    color: "#7A6B3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 1,
    carousel: false,
    cardFront: "/cards/dogwasteremoval1_front.png",
    cardBack: null,
  },
  {
    id: 17,
    name: "Eliss Mariscos",
    expiresOn: "July 2026",
    category: "restaurants",
    city: "Victor Valley",
    phone: "",
    contact: "Elizabeth Gracian",
    address: "",
    email: "",
    website: "",
    instagram: "@ELISSMARISCOS",
    license: "",
    services: ["Shrimp Ceviche", "Mango Aguachile", "Catering Trays", "Jaz Tea"],
    hours: "Message on Instagram for availability",
    featured: false,
    tier: "free",
    description: "Fresh homemade mariscos in the High Desert. Shrimp ceviche, mango aguachile, and more. Message on Instagram for daily availability and orders.",
    initials: "EM",
    color: "#D4824A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 4,
    carousel: false,
    cardFront: "/cards/elissmariscos_front.png",
    cardBack: null,
  },
  {
    id: 18,
    name: "FreshStead Cleaning Service",
    expiresOn: "July 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 985-9716",
    contact: "Stephanie",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Residential Cleaning", "Commercial Cleaning", "Move-In/Move-Out", "Deep Clean", "Regular Maintenance"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional cleaning service for the High Desert. Contact Stephanie for a free quote. Residential, commercial, and move-in/out cleaning available.",
    initials: "FS",
    color: "#4A7A8F",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/freshsteadcleaning_front.png",
    cardBack: null,
  },
  {
    id: 19,
    name: "HD Pest Control",
    expiresOn: "July 2026",
    category: "contractors",
    city: "Phelan",
    phone: "(909) 538-9788",
    contact: "Guillermo Padilla",
    address: "PO Box 293875, Phelan, CA 92329",
    email: "Padilla909@gmail.com",
    website: "",
    instagram: "",
    license: "OPR# 14733 & PR# 9692",
    services: ["General Pest Control", "Roach Clean Out", "Actsol Treatment", "Bed Bugs", "Bees and Ants", "Rodent Control", "Aerial Roof Inspections"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Licensed, bonded, and insured pest control serving the High Desert and Inland Empire. Residential and commercial. Specializing in roach clean out and bed bugs.",
    initials: "HD",
    color: "#8B3A1A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/hdpestcontrol1_front.png",
    cardBack: null,
  },
  {
    id: 20,
    name: "HQE High Quality Epoxy Floors",
    expiresOn: "July 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(714) 737-6394",
    contact: "Anthony F. & Jose D.",
    address: "",
    email: "HQE.FLOORING@YAHOO.COM",
    website: "",
    instagram: "",
    license: "",
    services: ["Metallic Finishes", "Marble Finishes", "Garage Floors", "Patio Floors", "Interior Floors", "Epoxy Flooring", "Flakes Available"],
    hours: "Call or Text for a Free Estimate",
    featured: false,
    tier: "free",
    description: "Premium epoxy flooring for garages, patios, and interior floors. Metallic and marble finishes available. Serving SoCal — quality you can trust.",
    initials: "HQ",
    color: "#E8A030",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/hqeflooring_front.png",
    cardBack: null,
  },
  {
    id: 21,
    name: "M.A.G.Z. Welding Mobile Services",
    expiresOn: "July 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(951) 306-4323",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@magz.welding",
    license: "",
    services: ["Welding Repairs", "Reinforcement", "Fence Repair", "Trailer Welding", "Dump Trailer Welding", "Heavy Equipment Welding"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Mobile welding services for the High Desert. Specializing in welding repairs, reinforcement, fence repair, trailers, and heavy equipment.",
    initials: "MW",
    color: "#3C3C3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 1,
    carousel: false,
    cardFront: "/cards/magzwelding_front.png",
    cardBack: "/cards/magzwelding_back.png",
  },
  {
    id: 22,
    name: "Ortiz Welding",
    expiresOn: "July 2026",
    category: "contractors",
    city: "Victor Valley",
    phone: "(714) 409-7276",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Mild Steel Welding", "Stainless Steel", "Aluminum", "Fabrication", "Modifications", "Reinforcements", "Repairs", "Gates", "Custom Doors"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional welding services for the High Desert. Mild steel, stainless, and aluminum. Fabrication, modifications, reinforcements, repairs, and custom gates. Bilingual — Español available.",
    initials: "OW",
    color: "#1B3A5C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/ortizwelding_front.png",
    cardBack: "/cards/ortizwelding_back.png",
  },
  {
    id: 23,
    name: "Sherwood Handyman Services",
    expiresOn: "July 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 596-9227",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Light Plumbing", "Painting", "Carpentry", "Drywall Repair", "Ceramic Tile", "Light Fixtures", "Fence Repair", "Electrical Outlet Replacement", "Linoleum Floors", "Bathroom Remodeling"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Reliable handyman services throughout the High Desert. From plumbing to bathroom remodeling — no job too small. Call for a free estimate.",
    initials: "SH",
    color: "#1B3A5C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/sherwoodhandyman_front.png",
    cardBack: null,
  },
  {
    id: 24,
    name: "SoCalHi Driving Lessons",
    expiresOn: "July 2026",
    category: "auto",
    city: "Victor Valley",
    phone: "(760) 780-3454",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Behind-the-Wheel Training", "Driver's Education Certification", "Vehicle Rental for DMV Testing", "Teen Driver Training"],
    hours: "Call or Text for hours",
    featured: false,
    tier: "free",
    description: "State certified driving instruction serving the High Desert. Behind-the-wheel training, driver's ed certification, and DMV vehicle rental. Bilingual — servicio disponible en Español.",
    initials: "SD",
    color: "#0D1B2A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/socalhidrivinglessons_front.png",
    cardBack: null,
  },
  {
    id: 25,
    name: "Steam Carpet Cleaning",
    expiresOn: "July 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 596-7419",
    textNumber: "(323) 667-5365",
    contact: "",
    address: "",
    email: "",
    website: "onewaycarpetcleaning.com",
    instagram: "",
    license: "",
    services: ["Carpet Cleaning", "Tile & Grout Cleaning", "Laminate Floor Cleaning", "Janitorial Service", "Move-In/Move-Out Cleaning"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional steam carpet cleaning for apartments, houses, and commercial properties throughout the High Desert. Tile, grout, and laminate floor cleaning also available.",
    initials: "SC",
    color: "#4A7A8F",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 1,
    carousel: false,
    cardFront: "/cards/steamcarpetcleaning1_front.png",
    cardBack: "/cards/steamcarpetcleaning1_back.png",
  },
  {
    id: 26,
    name: "The Party Pooper Scoopers LLC",
    expiresOn: "July 2026",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(909) 656-7790",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@thepartypooperscoopers.llc",
    license: "",
    services: ["Pet Waste Removal", "Weekly Service", "Free Quote Available"],
    hours: "Call or Text for hours",
    featured: false,
    tier: "free",
    description: "Professional pet waste removal starting at $23.75 per week. Serving the High Desert community. Call or text for a free quote today.",
    initials: "PP",
    color: "#6B8F71",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/thepartypooperscoopers_front.png",
    cardBack: null,
  },

];

const CITIES = ["All Cities", "Victorville", "Hesperia", "Apple Valley", "Adelanto", "Victor Valley"];

const css = `
${GOOGLE_FONTS}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'DM Sans', sans-serif; background: #F7F0E6; color: #1A1208; min-height: 100vh; }
:root {
  --sand: #F7F0E6; --terra: #C4603A; --rust: #8B3A1A; --gold: #E8A030;
  --ink: #1A1208; --navy: #0D1B2A; --cream: #FDF8F2; --muted: #9A8E82;
}
.app { min-height: 100vh; }
.nav { background: var(--navy); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top: 0; z-index: 100; border-bottom: 3px solid var(--terra); }
.nav-logo { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }
.nav-logo span { color: var(--gold); }
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a { color: rgba(247,240,230,0.7); text-decoration: none; font-size: 0.875rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; transition: color 0.2s; }
.nav-links a:hover { color: var(--gold); }
.nav-cta { background: var(--terra); color: white !important; padding: 0.5rem 1.25rem; border-radius: 4px; font-weight: 600 !important; }
.nav-cta:hover { background: var(--rust) !important; }
.hero { background: var(--navy); padding: 5rem 2rem 2rem; position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(196,96,58,0.15) 0%, transparent 70%); pointer-events: none; }
.hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(196,96,58,0.2); border: 1px solid rgba(196,96,58,0.4); color: var(--gold); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: 2rem; margin-bottom: 1.5rem; }
.hero-title { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800; color: var(--sand); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 1rem; }
.hero-title em { font-style: normal; font-family: 'Syne', sans-serif; color: var(--terra); }
.hero-sub { color: rgba(247,240,230,0.6); font-size: 1.1rem; max-width: 500px; line-height: 1.7; margin-bottom: 2.5rem; font-weight: 300; }
.search-bar { display: flex; flex-wrap: wrap; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.3); max-width: 680px; }
.search-bar input { flex: 1; border: none; padding: 1.1rem 1.5rem; font-size: 1rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: transparent; outline: none; min-width: 0; }
.search-bar input::placeholder { color: var(--muted); }
.search-divider { width: 1px; background: #E8DDD0; margin: 0.75rem 0; }
.search-bar select { border: none; padding: 1rem 1.25rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: transparent; outline: none; cursor: pointer; min-width: 140px; }
.search-btn { background: var(--terra); color: white; border: none; padding: 1rem 2rem; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background 0.2s; flex: 1; min-width: 100%; }
.search-btn:hover { background: var(--rust); }
.hero-stats { display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap; }
.stat { display: flex; flex-direction: column; gap: 0.2rem; }
.stat-num { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--gold); }
.stat-label { font-size: 0.8rem; color: rgba(247,240,230,0.5); text-transform: uppercase; letter-spacing: 0.08em; }
.stat-pill { background: rgba(196,96,58,0.15); border: 1px solid rgba(196,96,58,0.3); color: var(--sand); font-family: 'Syne', sans-serif; font-size: 0.78rem; font-weight: 700; padding: 0.5rem 0.85rem; border-radius: 2rem; letter-spacing: 0.01em; white-space: nowrap; }
.section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; clear: both; }
.section-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 2rem; }
.section-title { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--ink); letter-spacing: -0.02em; }
.section-link { color: var(--terra); font-size: 0.875rem; font-weight: 600; cursor: pointer; }
.categories-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
@media (max-width: 900px) { .categories-grid { grid-template-columns: repeat(3, 1fr); } .nav-links { display: none; } }
@media (max-width: 600px) { .categories-grid { grid-template-columns: repeat(2, 1fr); } }
.cat-card { background: var(--cream); border: 1.5px solid #E8DDD0; border-radius: 10px; padding: 0.9rem 0.75rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; cursor: pointer; transition: all 0.2s; text-align: center; }
.cat-card:hover { border-color: var(--terra); box-shadow: 0 4px 20px rgba(196,96,58,0.12); transform: translateY(-2px); }
.cat-card.active { background: var(--navy); border-color: var(--navy); }
.cat-icon { font-size: 1.25rem; line-height: 1; }
.cat-label { font-size: 0.72rem; font-weight: 600; color: var(--ink); }
.cat-card.active .cat-label { color: var(--sand); }
.divider { border: none; border-top: 1.5px solid #E8DDD0; margin: 0 2rem; }
.listings-section { padding: 3rem 2rem 5rem; max-width: 1100px; margin: 0 auto; }
.listings-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem; }
.listings-count { font-size: 0.875rem; color: var(--muted); font-weight: 500; }
.listings-count strong { color: var(--ink); font-weight: 700; }
.filter-pills { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.pill { background: var(--cream); border: 1.5px solid #E8DDD0; color: var(--ink); padding: 0.4rem 1rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.15s; font-family: 'DM Sans', sans-serif; }
.pill:hover { border-color: var(--terra); color: var(--terra); }
.pill.active { background: var(--terra); border-color: var(--terra); color: white; }
.listings-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
@media (max-width: 900px) { .listings-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .listings-grid { grid-template-columns: 1fr; } }
.biz-card { background: var(--cream); border: 1.5px solid #E8DDD0; border-radius: 12px; overflow: hidden; cursor: pointer; transition: all 0.2s; position: relative; }
.biz-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); border-color: transparent; }
.biz-card.featured-card { border-color: var(--gold); }
.expiring-badge { position: absolute; top: 0.75rem; left: 0.75rem; background: #E8A030; color: #0D1B2A; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 2rem; z-index: 2; }
.expired-badge { position: absolute; top: 0.75rem; left: 0.75rem; background: #C0392B; color: white; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 2rem; z-index: 2; }
.expired-card { opacity: 0.7; }
.spotlight-card-badge { position: absolute; top: 0.75rem; right: 0.75rem; background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 2rem; display: flex; align-items: center; gap: 0.3rem; z-index: 2; }
.spotlight-card-border { border-color: var(--gold) !important; box-shadow: 0 0 0 1px var(--gold), 0 4px 20px rgba(232,160,48,0.2); }
.featured-badge { position: absolute; top: 0.75rem; right: 0.75rem; background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.25rem 0.6rem; border-radius: 2rem; }
.biz-card-header { padding: 1.25rem 1.25rem 0.75rem; display: flex; gap: 0.85rem; align-items: flex-start; }
.biz-avatar { width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 800; color: white; flex-shrink: 0; }
.biz-info { flex: 1; min-width: 0; }
.biz-name { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--ink); line-height: 1.2; margin-bottom: 0.25rem; }
.biz-location { font-size: 0.75rem; color: var(--muted); }
.biz-desc { padding: 0 1.25rem 0.85rem; font-size: 0.82rem; color: #5C5248; line-height: 1.6; }
.biz-services { padding: 0 1.25rem 0.85rem; display: flex; flex-wrap: wrap; gap: 0.35rem; }
.service-tag { background: #EDE5D8; color: #6B5A48; font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.55rem; border-radius: 3px; }
.biz-footer { border-top: 1px solid #EDE5D8; padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }
.biz-phone { font-size: 0.82rem; font-weight: 600; color: var(--terra); text-decoration: none; }
.biz-phone:hover { text-decoration: underline; }
.biz-hours { font-size: 0.73rem; color: var(--muted); }
.modal-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.modal { background: var(--cream); border-radius: 16px; max-width: 560px; width: 100%; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.3); max-height: 90vh; overflow-y: auto; }
.modal-header { padding: 2rem; display: flex; gap: 1rem; align-items: center; border-bottom: 1.5px solid #E8DDD0; }
.modal-avatar { width: 64px; height: 64px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: white; flex-shrink: 0; }
.modal-name { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.2rem; }
.modal-city { font-size: 0.85rem; color: var(--muted); }
.modal-body { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
.modal-row { display: flex; gap: 0.75rem; font-size: 0.88rem; align-items: flex-start; }
.modal-row-label { font-weight: 600; color: var(--ink); min-width: 80px; flex-shrink: 0; }
.modal-row-val { color: #5C5248; line-height: 1.5; }
.modal-row-val.link { color: var(--terra); }
.modal-services-wrap { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.modal-footer { padding: 1.25rem 2rem; border-top: 1.5px solid #E8DDD0; display: flex; gap: 0.75rem; flex-wrap: wrap; }
.btn-primary { flex: 1; background: var(--terra); color: white; border: none; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background 0.2s; min-width: 110px; }
.btn-primary:hover { background: var(--rust); }
.btn-secondary { flex: 1; background: transparent; color: var(--ink); border: 1.5px solid #E8DDD0; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; min-width: 110px; }
.btn-secondary:hover { border-color: var(--ink); }
.btn-card { flex: 1; background: var(--navy); color: var(--sand); border: none; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background 0.2s; min-width: 110px; }
.btn-card:hover { background: #1a3050; }
.card-viewer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.88); z-index: 300; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(8px); }
.card-viewer-inner { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; max-width: 720px; width: 100%; }
.card-viewer-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: white; }
.card-viewer-images { display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center; width: 100%; }
.card-img-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.card-img-label { font-size: 0.75rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
.card-img { width: 100%; max-width: 300px; border-radius: 10px; box-shadow: 0 8px 32px rgba(0,0,0,0.5); object-fit: cover; }
.card-img-placeholder { width: 300px; height: 170px; background: rgba(255,255,255,0.06); border: 2px dashed rgba(255,255,255,0.2); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: rgba(255,255,255,0.4); font-size: 0.82rem; text-align: center; }
.card-img-placeholder span:first-child { font-size: 2rem; }
.card-viewer-close { background: rgba(255,255,255,0.1); color: white; border: 1.5px solid rgba(255,255,255,0.2); padding: 0.75rem 2rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; }
.card-viewer-close:hover { background: rgba(255,255,255,0.2); }

.carousel-section { background: var(--navy); padding: 1.5rem 2rem 3rem; position: relative; overflow: hidden; display: block; width: 100%; clear: both; box-sizing: border-box; }
.carousel-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 100% at 50% 50%, rgba(196,96,58,0.1) 0%, transparent 70%); pointer-events: none; }
.carousel-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
.carousel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; }
.carousel-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }
.carousel-title span { color: var(--gold); }
.carousel-dots { display: flex; gap: 0.5rem; align-items: center; }
.carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(247,240,230,0.2); border: none; cursor: pointer; transition: all 0.2s; padding: 0; }
.carousel-dot.active { background: var(--gold); width: 24px; border-radius: 4px; }
.carousel-track { display: flex; gap: 1.25rem; transition: none; flex-wrap: wrap; }
.carousel-card { background: rgba(255,255,255,0.05); border: 1.5px solid rgba(247,240,230,0.1); border-radius: 14px; padding: 1.75rem; flex: 1; min-width: 280px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
.carousel-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(196,96,58,0.08) 0%, transparent 60%); pointer-events: none; }
.carousel-card:hover { border-color: rgba(232,160,48,0.4); background: rgba(255,255,255,0.08); transform: translateY(-3px); }
.carousel-card-top { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; position: relative; z-index: 1; }
.carousel-avatar { width: 56px; height: 56px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: white; flex-shrink: 0; }
.carousel-biz-name { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 800; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }
.carousel-biz-meta { font-size: 0.78rem; color: rgba(247,240,230,0.5); margin-bottom: 0.25rem; }
.carousel-spotlight-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(232,160,48,0.2); border: 1px solid rgba(232,160,48,0.4); color: var(--gold); font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2rem; letter-spacing: 0.06em; text-transform: uppercase; }
.carousel-desc { font-size: 0.85rem; color: rgba(247,240,230,0.65); line-height: 1.6; margin-bottom: 1.25rem; position: relative; z-index: 1; }
.carousel-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
.carousel-phone { font-size: 0.875rem; font-weight: 600; color: var(--gold); text-decoration: none; }
.carousel-phone:hover { text-decoration: underline; }
.carousel-view-btn { background: rgba(196,96,58,0.3); color: var(--sand); border: 1px solid rgba(196,96,58,0.4); padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.78rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; }
.carousel-view-btn:hover { background: var(--terra); border-color: var(--terra); }
.carousel-nav { display: flex; gap: 0.5rem; }
.carousel-nav-btn { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(247,240,230,0.15); color: var(--sand); font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.carousel-nav-btn:hover { background: rgba(255,255,255,0.15); border-color: rgba(247,240,230,0.3); }
.carousel-single { max-width: 500px; }


.carousel-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
.carousel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; }
.carousel-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }
.carousel-title span { color: var(--gold); }
.carousel-dots { display: flex; gap: 0.5rem; align-items: center; }
.carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(247,240,230,0.2); border: none; cursor: pointer; transition: all 0.2s; padding: 0; }
.carousel-dot.active { background: var(--gold); width: 24px; border-radius: 4px; }
.carousel-track { display: flex; gap: 1.25rem; transition: none; flex-wrap: wrap; }
.carousel-card { background: rgba(255,255,255,0.05); border: 1.5px solid rgba(247,240,230,0.1); border-radius: 14px; padding: 1.75rem; flex: 1; min-width: 280px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
.carousel-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(196,96,58,0.08) 0%, transparent 60%); pointer-events: none; }
.carousel-card:hover { border-color: rgba(232,160,48,0.4); background: rgba(255,255,255,0.08); transform: translateY(-3px); }
.carousel-card-top { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; position: relative; z-index: 1; }
.carousel-avatar { width: 56px; height: 56px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: white; flex-shrink: 0; }
.carousel-biz-name { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 800; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }
.carousel-biz-meta { font-size: 0.78rem; color: rgba(247,240,230,0.5); margin-bottom: 0.25rem; }
.carousel-spotlight-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(232,160,48,0.2); border: 1px solid rgba(232,160,48,0.4); color: var(--gold); font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2rem; letter-spacing: 0.06em; text-transform: uppercase; }
.carousel-desc { font-size: 0.85rem; color: rgba(247,240,230,0.65); line-height: 1.6; margin-bottom: 1.25rem; position: relative; z-index: 1; }
.carousel-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
.carousel-phone { font-size: 0.875rem; font-weight: 600; color: var(--gold); text-decoration: none; }
.carousel-phone:hover { text-decoration: underline; }
.carousel-view-btn { background: rgba(196,96,58,0.3); color: var(--sand); border: 1px solid rgba(196,96,58,0.4); padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.78rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; }
.carousel-view-btn:hover { background: var(--terra); border-color: var(--terra); }
.carousel-nav { display: flex; gap: 0.5rem; }
.carousel-nav-btn { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(247,240,230,0.15); color: var(--sand); font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.carousel-nav-btn:hover { background: rgba(255,255,255,0.15); border-color: rgba(247,240,230,0.3); }
.carousel-single { max-width: 500px; }

.verified-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(107,143,113,0.15); border: 1px solid rgba(107,143,113,0.4); color: #4A7A52; font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2rem; letter-spacing: 0.04em; text-transform: uppercase; }
.unverified-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(154,142,130,0.1); border: 1px solid rgba(154,142,130,0.3); color: var(--muted); font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2rem; letter-spacing: 0.04em; text-transform: uppercase; }
.biz-meta { padding: 0 1.25rem 0.75rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
.biz-date { font-size: 0.72rem; color: var(--muted); }
.thumbs-btn { display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: 1.5px solid #E8DDD0; color: var(--muted); font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.65rem; border-radius: 2rem; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
.thumbs-btn:hover { border-color: var(--sage); color: var(--sage); }
.thumbs-btn.thumbed { background: rgba(107,143,113,0.1); border-color: var(--sage); color: var(--sage); }
.modal-badges { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem; }
.modal-date-row { padding: 0 2rem 0.5rem; font-size: 0.78rem; color: var(--muted); display: flex; gap: 1.5rem; }
.report-btn { background: transparent; border: none; color: var(--muted); font-size: 0.78rem; font-family: 'DM Sans', sans-serif; cursor: pointer; text-decoration: underline; padding: 0; transition: color 0.2s; }
.report-btn:hover { color: var(--terra); }
.report-modal { background: var(--cream); border-radius: 16px; max-width: 440px; width: 100%; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }
.report-header { padding: 1.5rem 2rem 1rem; border-bottom: 1.5px solid #E8DDD0; }
.report-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--ink); margin-bottom: 0.25rem; }
.report-sub { font-size: 0.82rem; color: var(--muted); }
.report-body { padding: 1.25rem 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.report-option { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border: 1.5px solid #E8DDD0; border-radius: 8px; cursor: pointer; transition: all 0.15s; font-size: 0.875rem; color: var(--ink); }
.report-option:hover { border-color: var(--terra); background: rgba(196,96,58,0.04); }
.report-option.selected { border-color: var(--terra); background: rgba(196,96,58,0.08); font-weight: 600; }
.report-option input { accent-color: var(--terra); }
.report-footer { padding: 1rem 2rem 1.5rem; display: flex; gap: 0.75rem; }
.report-success { padding: 2.5rem 2rem; text-align: center; }
.report-success-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.report-success-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.report-success-sub { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }

.form-modal-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px); }
.form-modal { background: var(--cream); border-radius: 16px; max-width: 600px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }
.form-modal-header { padding: 1.75rem 2rem 1.25rem; border-bottom: 1.5px solid #E8DDD0; }
.form-modal-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.25rem; }
.form-modal-sub { font-size: 0.875rem; color: var(--muted); }
.form-body { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
.form-field { display: flex; flex-direction: column; gap: 0.4rem; }
.form-label { font-size: 0.8rem; font-weight: 600; color: var(--ink); letter-spacing: 0.02em; text-transform: uppercase; }
.form-label span { color: var(--terra); }
.form-input { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; transition: border-color 0.2s; width: 100%; }
.form-input:focus { border-color: var(--terra); }
.form-select { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; width: 100%; cursor: pointer; }
.form-textarea { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; resize: vertical; min-height: 80px; width: 100%; }
.form-footer { padding: 1.25rem 2rem; border-top: 1.5px solid #E8DDD0; display: flex; gap: 0.75rem; }
.form-note { padding: 0 2rem 1.25rem; font-size: 0.78rem; color: var(--muted); line-height: 1.6; }
.success-box { padding: 3rem 2rem; text-align: center; }
.success-icon { font-size: 3rem; margin-bottom: 1rem; }
.success-title { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--ink); margin-bottom: 0.75rem; }
.success-sub { color: var(--muted); font-size: 0.95rem; line-height: 1.7; max-width: 380px; margin: 0 auto 1.5rem; }

.pricing-modal { background: var(--cream); border-radius: 16px; max-width: 820px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }
.pricing-header { background: var(--navy); padding: 2.5rem 2rem 2rem; text-align: center; position: relative; }
.pricing-header::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 100% at 50% 100%, rgba(196,96,58,0.2) 0%, transparent 70%); pointer-events: none; border-radius: 16px 16px 0 0; }
.pricing-header-title { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; position: relative; z-index: 1; }
.pricing-header-sub { color: rgba(247,240,230,0.6); font-size: 0.95rem; position: relative; z-index: 1; }
.pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
@media (max-width: 680px) { .pricing-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 400px) { .pricing-grid { grid-template-columns: 1fr; } }
.pricing-tier { padding: 1.75rem 1.25rem; border-right: 1.5px solid #E8DDD0; border-bottom: 1.5px solid #E8DDD0; display: flex; flex-direction: column; }
.pricing-tier:last-child { border-right: none; }
.pricing-tier.popular { background: var(--navy); position: relative; }
.pricing-popular-badge { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.75rem; border-radius: 0 0 6px 6px; }
.biz-owner-strip { background: var(--terra); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
.biz-owner-strip-text { color: white; font-size: 0.875rem; font-weight: 500; }
.biz-owner-strip-text strong { font-weight: 700; }
.biz-owner-strip-btn { background: white; color: var(--terra); border: none; padding: 0.45rem 1.25rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 700; font-family: "DM Sans", sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
.biz-owner-strip-btn:hover { background: var(--sand); }
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: var(--cream); border-radius: 16px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: #EDE5D8; border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--terra); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { font-size: 0.75rem; color: var(--muted); font-style: italic; margin-bottom: 1rem; line-height: 1.4; }
.pricing-tier.popular .biz-owner-strip { background: var(--terra); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
.biz-owner-strip-text { color: white; font-size: 0.875rem; font-weight: 500; }
.biz-owner-strip-text strong { font-weight: 700; }
.biz-owner-strip-btn { background: white; color: var(--terra); border: none; padding: 0.45rem 1.25rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 700; font-family: "DM Sans", sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
.biz-owner-strip-btn:hover { background: var(--sand); }
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: var(--cream); border-radius: 16px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: #EDE5D8; border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--terra); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { color: rgba(247,240,230,0.5); }
.pricing-tier-name { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 800; color: #1A1208; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem; }
.pricing-tier.popular .biz-owner-strip { background: var(--terra); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
.biz-owner-strip-text { color: white; font-size: 0.875rem; font-weight: 500; }
.biz-owner-strip-text strong { font-weight: 700; }
.biz-owner-strip-btn { background: white; color: var(--terra); border: none; padding: 0.45rem 1.25rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 700; font-family: "DM Sans", sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
.biz-owner-strip-btn:hover { background: var(--sand); }
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: var(--cream); border-radius: 16px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: #EDE5D8; border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--terra); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { font-size: 0.75rem; color: var(--muted); font-style: italic; margin-bottom: 1rem; line-height: 1.4; }
.pricing-tier.popular .biz-owner-strip { background: var(--terra); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
.biz-owner-strip-text { color: white; font-size: 0.875rem; font-weight: 500; }
.biz-owner-strip-text strong { font-weight: 700; }
.biz-owner-strip-btn { background: white; color: var(--terra); border: none; padding: 0.45rem 1.25rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 700; font-family: "DM Sans", sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
.biz-owner-strip-btn:hover { background: var(--sand); }
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: var(--cream); border-radius: 16px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: #EDE5D8; border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--terra); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { color: rgba(247,240,230,0.5); }
.pricing-tier.popular .pricing-tier-name { color: #FFFFFF; }
.pricing-price { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--ink); line-height: 1; margin-bottom: 0.25rem; }
.pricing-tier.popular .pricing-price { color: var(--sand); }
.pricing-period { font-size: 0.78rem; color: var(--muted); margin-bottom: 1.25rem; }
.pricing-tier.popular .pricing-period { color: rgba(247,240,230,0.4); }
.pricing-features { display: flex; flex-direction: column; gap: 0.6rem; flex: 1; margin-bottom: 1.5rem; }
.pricing-feature { font-size: 0.8rem; color: #5C5248; display: flex; gap: 0.5rem; align-items: flex-start; line-height: 1.4; }
.pricing-tier.popular .pricing-feature { color: rgba(247,240,230,0.7); }
.pricing-check { color: var(--sage); font-weight: 700; flex-shrink: 0; }
.pricing-tier.popular .pricing-check { color: var(--gold); }
.pricing-btn { background: #EDE5D8; color: var(--ink); border: none; padding: 0.75rem; border-radius: 8px; font-size: 0.85rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; text-align: center; transition: all 0.2s; margin-top: auto; }
.pricing-btn:hover { background: #E0D5C4; }
.pricing-btn.main { background: var(--terra); color: white; }
.pricing-btn.main:hover { background: var(--rust); }
.pricing-footer { padding: 1.25rem 2rem; border-top: 1.5px solid #E8DDD0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.pricing-footer-note { font-size: 0.8rem; color: var(--muted); }
.admin-gate { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--navy); }
.admin-gate-box { background: var(--cream); border-radius: 16px; padding: 3rem; max-width: 400px; width: 100%; text-align: center; box-shadow: 0 24px 80px rgba(0,0,0,0.4); }
.admin-gate-title { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.admin-gate-sub { color: var(--muted); font-size: 0.875rem; margin-bottom: 2rem; }
.admin-gate input { width: 100%; border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.85rem 1rem; font-size: 1rem; font-family: 'DM Sans', sans-serif; outline: none; margin-bottom: 1rem; text-align: center; letter-spacing: 0.1em; }
.admin-gate input:focus { border-color: var(--terra); }
.admin-gate .btn-primary { width: 100%; }
.admin-error { color: var(--terra); font-size: 0.82rem; margin-top: 0.5rem; }
.admin-page { min-height: 100vh; background: #F0EBE1; }
.admin-nav { background: var(--navy); padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid var(--terra); }
.admin-nav-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); }
.admin-nav-title span { color: var(--gold); }
.admin-badge { background: var(--terra); color: white; font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 2rem; letter-spacing: 0.08em; text-transform: uppercase; }
.admin-body { max-width: 1100px; margin: 0 auto; padding: 2.5rem 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
@media (max-width: 700px) { .admin-body { grid-template-columns: 1fr; } }
.admin-card { background: var(--cream); border-radius: 12px; padding: 1.75rem; border: 1.5px solid #E8DDD0; }
.admin-card-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 800; color: var(--ink); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem; }
.admin-row { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid #EDE5D8; font-size: 0.875rem; }
.admin-row:last-child { border-bottom: none; }
.admin-row-label { color: #5C5248; font-weight: 500; }
.admin-row-count { background: var(--terra); color: white; font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.65rem; border-radius: 2rem; min-width: 32px; text-align: center; }
.admin-empty { color: var(--muted); font-size: 0.85rem; text-align: center; padding: 1.5rem 0; }
.admin-stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
.admin-stat-box { background: var(--navy); border-radius: 10px; padding: 1.25rem; text-align: center; }
.admin-stat-num { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--gold); }
.admin-stat-label { font-size: 0.75rem; color: rgba(247,240,230,0.5); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.25rem; }
.admin-log { max-height: 220px; overflow-y: auto; }
.admin-log-row { display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid #EDE5D8; font-size: 0.8rem; }
.admin-log-term { color: var(--ink); font-weight: 500; }
.admin-log-time { color: var(--muted); }
.card-promo-banner { background: var(--gold); color: var(--navy); padding: 0.85rem 1.75rem; border-radius: 8px; font-size: 0.88rem; font-weight: 600; text-align: center; line-height: 1.6; letter-spacing: 0.01em; }
.cta-banner { background: var(--navy); padding: 4rem 2rem; text-align: center; position: relative; overflow: hidden; }
.cta-banner::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 100% at 50% 50%, rgba(196,96,58,0.12) 0%, transparent 70%); pointer-events: none; }
.cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
.cta-title { font-family: 'Syne', sans-serif; font-size: 2.2rem; font-weight: 800; color: var(--sand); margin-bottom: 0.75rem; letter-spacing: -0.02em; }
.cta-sub { color: rgba(247,240,230,0.6); font-size: 1rem; margin-bottom: 2rem; font-weight: 300; }
.cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.cta-btn-main { background: var(--terra); color: white; border: none; padding: 0.9rem 2rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; }
.cta-btn-main:hover { background: var(--rust); }
.cta-btn-ghost { background: transparent; color: var(--sand); border: 1.5px solid rgba(247,240,230,0.3); padding: 0.9rem 2rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; }
.cta-btn-ghost:hover { border-color: var(--sand); }
.footer { background: #0A1520; padding: 2rem; text-align: center; }
.footer-logo { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }
.footer-logo span { color: var(--gold); }
.footer-sub { font-size: 0.8rem; color: rgba(247,240,230,0.35); margin-bottom: 0.5rem; }
.footer-disclaimer { font-size: 0.72rem; color: rgba(247,240,230,0.2); max-width: 500px; margin: 0 auto; line-height: 1.6; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.hero-inner > * { animation: fadeUp 0.6s ease both; }
.hero-inner > *:nth-child(1) { animation-delay: 0.05s; }
.hero-inner > *:nth-child(2) { animation-delay: 0.15s; }
.hero-inner > *:nth-child(3) { animation-delay: 0.25s; }
.hero-inner > *:nth-child(4) { animation-delay: 0.35s; }
.hero-inner > *:nth-child(5) { animation-delay: 0.45s; }
`;

export default function HighDesertHub() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeCity, setActiveCity] = useState("All Cities");
  const [searchQuery, setSearchQuery] = useState("");
  const [socialOnly, setSocialOnly] = useState(false);

  const getExpirationStatus = (biz) => {
    if (biz.tier !== 'free') return 'active';
    if (!biz.expiresOn) return 'active';
    const months = {'January':0,'February':1,'March':2,'April':3,'May':4,'June':5,'July':6,'August':7,'September':8,'October':9,'November':10,'December':11};
    const parts = biz.expiresOn.split(' ');
    const expDate = new Date(parseInt(parts[1]), months[parts[0]], 1);
    const now = new Date();
    const daysUntil = Math.floor((expDate - now) / (1000 * 60 * 60 * 24));
    if (daysUntil < 0) return 'expired';
    if (daysUntil <= 30) return 'expiring';
    return 'active';
  };
  const [emailOnly, setEmailOnly] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedBiz, setSelectedBiz] = useState(null);
  const [cardViewer, setCardViewer] = useState(null);
  const [showListForm, setShowListForm] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [contactTier, setContactTier] = useState('');

  const handlePricingContact = (tier) => {
    setContactTier(tier);
    setShowContactPopup(true);
  };

  const [emailCopied, setEmailCopied] = useState(false);

  const scrollToCTA = () => {
    document.querySelector('.cta-banner').scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = () => {
    const email = 'admin@highdeserthub.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 3000);
      });
    } else {
      const el = document.createElement('textarea');
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    }
  };
  const [thumbsUp, setThumbsUp] = useState({});
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselItems = BUSINESSES.filter(b => b.carousel);

  useEffect(() => {
    if (carouselItems.length <= 1) return;
    const timer = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);
  const [thumbed, setThumbed] = useState({});
  const [showReport, setShowReport] = useState(false);
  const [reportBiz, setReportBiz] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportLoading, setReportLoading] = useState(false);

  const handleThumbsUp = (biz, e) => {
    e.stopPropagation();
    if (thumbed[biz.id]) return;
    setThumbsUp(prev => ({ ...prev, [biz.id]: (prev[biz.id] || 0) + 1 }));
    setThumbed(prev => ({ ...prev, [biz.id]: true }));
  };

  const handleReport = (biz) => {
    setReportBiz(biz);
    setReportReason('');
    setReportSubmitted(false);
    setShowReport(true);
  };

  const submitReport = () => {
    if (!reportReason) return;
    setReportLoading(true);
    const templateParams = {
      business_name: reportBiz ? reportBiz.name : 'Unknown',
      report_reason: reportReason || 'No reason provided',
      business_phone: reportBiz ? reportBiz.phone : 'Not listed',
      business_city: reportBiz ? reportBiz.city : 'Not listed',
    };
    window.emailjs.send('service_19u4v9n', 'template_bkmqip8', templateParams)
      .then(() => { setReportLoading(false); setReportSubmitted(true); })
      .catch(() => { setReportLoading(false); setReportSubmitted(true); });
  };
  const [formData, setFormData] = useState({ name:'', phone:'', email:'', address:'', city:'', category:'', services:'', hours:'', website:'', description:'' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleFormChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleFormSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.category) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    setFormLoading(true);
    setFormError(false);
    const templateParams = {
      business_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      category: CATEGORIES.find(c => c.id === formData.category)?.label || formData.category,
      website: formData.website || 'Not provided',
      address: formData.address || 'Not provided',
      services: formData.services || 'Not provided',
      hours: formData.hours || 'Not provided',
      description: formData.description || 'Not provided',
    };
    window.emailjs.send('service_19u4v9n', 'template_x2d6dlk', templateParams)
      .then(() => { setFormLoading(false); setFormSubmitted(true); })
      .catch((err) => { console.error('EmailJS error:', err); setFormLoading(false); setFormError(true); });
  };

  // ── ADMIN ANALYTICS ──────────────────────────────────────────
  const [adminMode, setAdminMode] = useState(false);
  const [adminInput, setAdminInput] = useState('');
  const [adminError, setAdminError] = useState(false);
  const [searchLog, setSearchLog] = useState([]);
  const [viewLog, setViewLog] = useState({});
  const [categoryLog, setCategoryLog] = useState({});
  const [callLog, setCallLog] = useState({});
  const ADMIN_PASSWORD = 'Ketchup117!?';

  const checkAdmin = () => {
    if (adminInput === ADMIN_PASSWORD) {
      setAdminMode(true);
      setAdminError(false);
    } else {
      setAdminError(true);
    }
  };

  const isAdminPage = window.location.search.includes('admin');

  const logSearch = (q) => {
    if (q.trim()) setSearchLog(prev => [...prev, { term: q.trim().toLowerCase(), time: new Date().toLocaleTimeString() }]);
  };

  const logView = (biz) => {
    setViewLog(prev => ({ ...prev, [biz.name]: (prev[biz.name] || 0) + 1 }));
  };

  const logCategory = (cat) => {
    if (cat) setCategoryLog(prev => ({ ...prev, [cat]: (prev[cat] || 0) + 1 }));
  };

  const logCall = (biz) => {
    setCallLog(prev => ({ ...prev, [biz.name]: (prev[biz.name] || 0) + 1 }));
  };

  const topSearches = [...new Set(searchLog.map(s => s.term))]
    .map(term => ({ term, count: searchLog.filter(s => s.term === term).length }))
    .sort((a, b) => b.count - a.count).slice(0, 10);

  const topViews = Object.entries(viewLog)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count).slice(0, 10);

  const topNeighborhood = Object.entries(categoryLog)
    .map(([cat, count]) => ({ cat, count }))
    .sort((a, b) => b.count - a.count);

  const topCalls = Object.entries(callLog)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count).slice(0, 10);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const filtered = BUSINESSES.filter((b) => {
    const catMatch = !activeCategory || b.category === activeCategory;
    const cityMatch = activeCity === "All Cities" || b.city === activeCity;
    const query = searchQuery.toLowerCase();
    const synonyms = {
      'weed': ['weed abatement', 'landscaping', 'lawn'],
      'weed remover': ['weed abatement', 'landscaping'],
      'weed removal': ['weed abatement', 'landscaping'],
      'trash': ['junk removal', 'clean outs', 'disposal', 'dumpster'],
      'garbage': ['junk removal', 'disposal', 'dumpster'],
      'junk': ['junk removal', 'clean outs', 'disposal'],
      'hauling': ['junk removal', 'dumpster', 'disposal', 'rolloff'],
      'dump': ['dumpster', 'disposal', 'rolloff'],
      'bugs': ['pest control', 'extermination'],
      'roaches': ['pest control', 'extermination'],
      'ants': ['pest control', 'extermination'],
      'termites': ['pest control', 'extermination'],
      'insects': ['pest control', 'extermination'],
      'exterminator': ['pest control', 'extermination'],
      'plumber': ['plumbing'],
      'roofer': ['roofing'],
      'electrician': ['electrical'],
      'handyman': ['general repairs', 'remodels'],
      'house cleaning': ['cleaning', 'deep cleaning'],
      'maid': ['cleaning', 'organizing'],
      'lawn': ['landscaping', 'lawn work', 'gardening'],
      'tree': ['tree trimming', 'landscaping'],
      'sprinkler': ['sprinkler systems', 'landscaping'],
      'garden': ['gardening', 'landscaping', 'planting'],
      'fence': ['fence installation', 'fence repair'],
      'fencing': ['fence installation', 'fence repair'],
      'gate': ['custom gates', 'fence'],
      'construction': ['remodels', 'additions', 'new construction'],
      'remodel': ['remodels', 'kitchen', 'bathroom'],
      'renovation': ['remodels', 'additions'],
      'appliance': ['appliance repair', 'appliance sales'],
      'washer': ['washer repair', 'appliance repair'],
      'dryer': ['dryer repair', 'appliance repair'],
      'fridge': ['refrigerator repair', 'appliance repair'],
      'refrigerator': ['refrigerator repair', 'appliance repair'],
      'house': ['real estate', 'home buying', 'home selling'],
      'home': ['real estate', 'home buying', 'home selling'],
      'realtor': ['real estate', 'home buying'],
      'water': ['r.o. water', 'alkaline water', 'drinking water'],
      'drinking water': ['r.o. water', 'alkaline water'],
      'purified': ['r.o. water', 'alkaline water'],
      'fire': ['fire prevention', 'weed abatement'],
      'tractor': ['tractor rental', 'rolloff'],
      'dumpster': ['dumpster rental', 'rolloff'],
    };
    const expandedTerms = synonyms[query] || [query];
    const hasSocial = !!(b.instagram || b.facebook);
    const socialMatch = !socialOnly || hasSocial;
    const searchMatch =
      expandedTerms.some(term =>
        b.name.toLowerCase().includes(term) ||
        b.services.some((s) => s.toLowerCase().includes(term)) ||
        b.description.toLowerCase().includes(term) ||
        b.city.toLowerCase().includes(query) ||
        (b.contact && b.contact.toLowerCase().includes(query))
      );
    const emailMatch = !emailOnly || !!b.email;
    return catMatch && cityMatch && searchMatch && socialMatch && emailMatch;
  });

  const sorted = [
    ...filtered.filter((b) => b.carousel),
    ...filtered.filter((b) => !b.carousel && b.tier === "featured"),
    ...filtered.filter((b) => !b.carousel && b.tier !== "featured"),
  ];

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-logo">High<span>Desert</span>Hub</div>
        <ul className="nav-links">
          <li><a href="#">Browse</a></li>
          <li><a href="#">Cities Served</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); setShowListForm(true); setFormSubmitted(false); }}>List Your Business</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">📍 Victorville · Hesperia · Apple Valley · Adelanto</div>
          <h1 className="hero-title">Your High Desert<br />Business Directory</h1>
          <p className="hero-sub">Helping local businesses get found. Connect with local services across Victorville, Hesperia, Apple Valley, and Adelanto.</p>
          <div className="hero-stats">
            <div className="stat-pill">Find Local. Fast.</div>
            <div className="stat-pill">Helping Local Businesses Get Found.</div>
            <div className="stat-pill">Where Communities and Businesses Connect.</div>
          </div>
        </div>
      </section>

      {/* FEATURED CAROUSEL */}
      {carouselItems.length > 0 && (
        <section className="carousel-section">
          <div className="carousel-inner">
            <div className="carousel-header">
              <div className="carousel-title">⭐ <span>Spotlight</span> Businesses</div>
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                {carouselItems.length > 1 && (
                  <div className="carousel-dots">
                    {carouselItems.map((_, i) => (
                      <button key={i} className={`carousel-dot ${i === carouselIndex ? 'active' : ''}`} onClick={() => setCarouselIndex(i)} />
                    ))}
                  </div>
                )}
                {carouselItems.length > 1 && (
                  <div className="carousel-nav">
                    <button className="carousel-nav-btn" onClick={() => setCarouselIndex(prev => (prev - 1 + carouselItems.length) % carouselItems.length)}>‹</button>
                    <button className="carousel-nav-btn" onClick={() => setCarouselIndex(prev => (prev + 1) % carouselItems.length)}>›</button>
                  </div>
                )}
              </div>
            </div>
            <div className="carousel-track">
              {carouselItems.map((biz, i) => (
                <div key={biz.id} className="carousel-card"
                  style={{ opacity: carouselItems.length === 1 ? 1 : (i === carouselIndex ? 1 : 0.4), transform: carouselItems.length === 1 ? 'none' : (i === carouselIndex ? 'scale(1.02)' : 'scale(0.98)'), transition: 'all 0.4s ease' }}
                  onClick={() => { setSelectedBiz(biz); logView(biz); }}>
                  <div className="carousel-card-top">
                    <div className="carousel-avatar" style={{background: biz.color}}>{biz.initials}</div>
                    <div>
                      <div className="carousel-biz-name">{biz.name}</div>
                      <div className="carousel-biz-meta">📍 {biz.city} · {CATEGORIES.find(c => c.id === biz.category)?.label}</div>
                      <div className="carousel-spotlight-badge">✦ Spotlight</div>
                    </div>
                  </div>
                  <div className="carousel-desc">{biz.description}</div>
                  <div className="carousel-footer">
                    <a className="carousel-phone" href={`tel:${biz.phone}`} onClick={e => e.stopPropagation()}>{biz.phone}</a>
                    <button className="carousel-view-btn">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-header">

          <h2 className="section-title">Browse by Category</h2>
          <span className="section-link" onClick={() => setActiveCategory(null)}>View all →</span>
        </div>
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`cat-card ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => { const next = activeCategory === cat.id ? null : cat.id; setActiveCategory(next); logCategory(next); }}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-label">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="biz-owner-strip">
        <span className="biz-owner-strip-text">🏢 <strong>Own a local business?</strong> Get listed free or upgrade for maximum visibility.</span>
        <button className="biz-owner-strip-btn" onClick={scrollToCTA}>See Listing Options →</button>
      </div>

      <hr className="divider" />
      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'1.5rem 2rem 0'}}>
        <div className="search-bar" style={{maxWidth:'100%'}}>
          <input
            placeholder="Search businesses, services..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && setSearchQuery(searchInput)}
          />
          <div className="search-divider" />
          <select value={activeCity} onChange={(e) => setActiveCity(e.target.value)}>
            {CITIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <button className="search-btn" onClick={() => { setSearchQuery(searchInput); logSearch(searchInput); }}>Search</button>
        </div>
      </div>

      <section className="listings-section">
        <div className="listings-toolbar">
          <p className="listings-count">
            Showing <strong>{sorted.length}</strong>{" "}
            {activeCategory ? CATEGORIES.find((c) => c.id === activeCategory)?.label : "businesses"}
            {activeCity !== "All Cities" ? ` in ${activeCity}` : ""}
          </p>
          <div className="filter-pills">
            {CITIES.slice(1).map((city) => (
              <button
                key={city}
                className={`pill ${activeCity === city ? "active" : ""}`}
                onClick={() => setActiveCity(activeCity === city ? "All Cities" : city)}
              >
                {city}
              </button>
            ))}
            <button
              className={`pill ${socialOnly ? "active" : ""}`}
              onClick={() => setSocialOnly(!socialOnly)}
            >
              📱 Has Social Media
            </button>
            <button
              className={`pill ${emailOnly ? "active" : ""}`}
              onClick={() => setEmailOnly(!emailOnly)}
            >
              📧 Has Email
            </button>
          </div>
        </div>

        {sorted.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "var(--muted)" }}>
            <p style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🏜️</p>
            <p style={{ fontWeight: 600 }}>No businesses found</p>
            <p style={{ fontSize: "0.875rem" }}>Try adjusting your filters or search</p>
          </div>
        ) : (
          <div className="listings-grid">
            {sorted.map((biz) => (
              <div
                key={biz.id}
                className={`biz-card ${biz.tier === "featured" ? "featured-card" : ""}`}
                onClick={() => { setSelectedBiz(biz); logView(biz); }}
              >
                {biz.carousel && (
                  <div className="spotlight-card-badge">⭐ Spotlight</div>
                )}
                {getExpirationStatus(biz) === 'expiring' && (
                  <div className="expiring-badge">⏰ Renewal Due</div>
                )}
                {getExpirationStatus(biz) === 'expired' && (
                  <div className="expired-badge">⚠️ Unconfirmed</div>
                )}
                {biz.tier === "featured" && !biz.carousel && <div className="featured-badge">⭐ Featured</div>}
                <div className="biz-card-header">
                  <div className="biz-avatar" style={{ background: biz.color }}>{biz.initials}</div>
                  <div className="biz-info">
                    <div className="biz-name">{biz.name}</div>
                    <div className="biz-location">📍 {biz.city} · {CATEGORIES.find(c => c.id === biz.category)?.label}</div>
                  </div>
                </div>
                <div className="biz-desc">{biz.description}</div>
                <div className="biz-services">
                  {biz.services.slice(0, 3).map((s) => (
                    <span key={s} className="service-tag">{s}</span>
                  ))}
                  {biz.services.length > 3 && <span className="service-tag">+{biz.services.length - 3}</span>}
                </div>
                <div className="biz-meta">
                  {biz.verified
                    ? <span className="verified-badge">✓ Verified</span>
                    : <span className="unverified-badge">Unverified</span>
                  }
                  <button className={`thumbs-btn ${thumbed[biz.id] ? 'thumbed' : ''}`} onClick={(e) => handleThumbsUp(biz, e)}>
                    👍 {(biz.baseThumbsUp || 0) + (thumbsUp[biz.id] || 0)} recommend
                  </button>
                </div>
                <div className="biz-footer">
                  <a className="biz-phone" href={`tel:${biz.phone}`} onClick={(e) => { e.stopPropagation(); logCall(biz); }}>{biz.phone}</a>
                  <span className="biz-date">Updated {biz.lastVerified}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="cta-banner">
        <div className="cta-inner">
          <h2 className="cta-title">Own a Local Business?</h2>
          <p className="cta-sub">Get listed on the High Desert's #1 local directory. Free to start — be seen by thousands of residents.</p>
          <div className="cta-btns">
            <button className="cta-btn-main" onClick={() => { setShowListForm(true); setFormSubmitted(false); }}>List My Business — Free</button>
            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)}>View Pricing Plans</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">High<span>Desert</span>Hub</div>
        <p className="footer-sub">Serving Victorville · Hesperia · Apple Valley · Adelanto</p>
        <p className="footer-disclaimer">Listings on HighDesertHub.com are provided for informational purposes only. We do not verify, endorse, or guarantee any business listed. Please conduct your own due diligence.</p>
      </footer>

      {/* BUSINESS MODAL */}
      {selectedBiz && (
        <div className="modal-overlay" onClick={() => setSelectedBiz(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-avatar" style={{ background: selectedBiz.color }}>{selectedBiz.initials}</div>
              <div>
                <div className="modal-name">{selectedBiz.name}</div>
                <div className="modal-city">📍 {selectedBiz.city} · {CATEGORIES.find(c => c.id === selectedBiz.category)?.label}</div>
              </div>
            </div>
            <div className="modal-body">
              {selectedBiz.contact && <div className="modal-row"><span className="modal-row-label">Contact</span><span className="modal-row-val">{selectedBiz.contact}</span></div>}
              <div className="modal-row"><span className="modal-row-label">Phone</span><span className="modal-row-val link">{selectedBiz.phone}</span></div>
              {selectedBiz.textNumber && <div className="modal-row"><span className="modal-row-label">Text Only</span><span className="modal-row-val link">{selectedBiz.textNumber}</span></div>}
              {selectedBiz.email && <div className="modal-row"><span className="modal-row-label">Email</span><span className="modal-row-val link">{selectedBiz.email}</span></div>}
              {selectedBiz.website && <div className="modal-row"><span className="modal-row-label">Website</span><span className="modal-row-val link">{selectedBiz.website}</span></div>}
              {selectedBiz.instagram && <div className="modal-row"><span className="modal-row-label">Instagram</span><span className="modal-row-val link">{selectedBiz.instagram}</span></div>}
              {selectedBiz.address && <div className="modal-row"><span className="modal-row-label">Address</span><span className="modal-row-val">{selectedBiz.address}</span></div>}
              {selectedBiz.license && <div className="modal-row"><span className="modal-row-label">License #</span><span className="modal-row-val">{selectedBiz.license}</span></div>}
              <div className="modal-row"><span className="modal-row-label">Hours</span><span className="modal-row-val">{selectedBiz.hours}</span></div>
              <div className="modal-row">
                <span className="modal-row-label">Services</span>
                <div className="modal-services-wrap">{selectedBiz.services.map((s) => <span key={s} className="service-tag">{s}</span>)}</div>
              </div>
              <div className="modal-row"><span className="modal-row-label">About</span><span className="modal-row-val">{selectedBiz.description}</span></div>
              <div className="modal-date-row">
                <span>📅 Listed: {selectedBiz.dateAdded}</span>
                <span>✓ Verified: {selectedBiz.lastVerified}</span>
                {selectedBiz.expiresOn && selectedBiz.tier === 'free' && (
                  <span style={{
                    color: getExpirationStatus(selectedBiz) === 'expired' ? '#C0392B' :
                           getExpirationStatus(selectedBiz) === 'expiring' ? '#E8A030' : 'var(--muted)'
                  }}>
                    🔄 Renews: {selectedBiz.expiresOn}
                  </span>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <a className="btn-primary" href={`tel:${selectedBiz.phone}`} style={{textDecoration:"none",textAlign:"center"}}>📞 Call Now</a>
              <button className="btn-card" onClick={() => setCardViewer(selectedBiz)}>🪪 View Card</button>
              <button className="btn-secondary" onClick={() => setSelectedBiz(null)}>Close</button>
            </div>
            <div style={{padding:'0.75rem 2rem', borderTop:'1px solid #EDE5D8', textAlign:'right'}}>
              <button className="report-btn" onClick={() => { handleReport(selectedBiz); }}>⚑ Report this listing</button>
            </div>
          </div>
        </div>
      )}

      {/* ADMIN PAGE */}
      {isAdminPage && !adminMode && (
        <div className="admin-gate" style={{position:'fixed',inset:0,zIndex:500}}>
          <div className="admin-gate-box">
            <div className="admin-gate-title">🔒 Admin Access</div>
            <p className="admin-gate-sub">High Desert Hub — Analytics Dashboard</p>
            <input
              type="password"
              placeholder="Enter password"
              value={adminInput}
              onChange={(e) => setAdminInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkAdmin()}
            />
            <button className="btn-primary" onClick={checkAdmin}>Login</button>
            {adminError && <p className="admin-error">Incorrect password. Try again.</p>}
          </div>
        </div>
      )}

      {isAdminPage && adminMode && (
        <div className="admin-page" style={{position:'fixed',inset:0,zIndex:500,overflowY:'auto'}}>
          <div className="admin-nav">
            <div className="admin-nav-title">High<span>Desert</span>Hub</div>
            <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
              <span className="admin-badge">Admin Analytics</span>
              <button onClick={() => { setAdminMode(false); window.history.pushState({}, '', '/'); }}
                style={{background:'transparent',border:'1px solid rgba(247,240,230,0.3)',color:'var(--sand)',padding:'0.35rem 0.85rem',borderRadius:'4px',cursor:'pointer',fontSize:'0.8rem',fontFamily:"'DM Sans',sans-serif"}}>
                Exit
              </button>
            </div>
          </div>
          <div className="admin-body">
            {/* OVERVIEW STATS */}
            <div className="admin-card" style={{gridColumn:'1/-1'}}>
              <div className="admin-card-title">📊 Overview</div>
              <div className="admin-stat-grid">
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{searchLog.length}</div>
                  <div className="admin-stat-label">Total Searches</div>
                </div>
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{Object.values(viewLog).reduce((a,b)=>a+b,0)}</div>
                  <div className="admin-stat-label">Listing Views</div>
                </div>
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{Object.values(callLog).reduce((a,b)=>a+b,0)}</div>
                  <div className="admin-stat-label">Calls Clicked</div>
                </div>
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{BUSINESSES.length}</div>
                  <div className="admin-stat-label">Total Listings</div>
                </div>
              </div>
            </div>

            {/* TOP SEARCHES */}
            <div className="admin-card">
              <div className="admin-card-title">🔍 Top Searches</div>
              {topSearches.length === 0
                ? <p className="admin-empty">No searches yet</p>
                : topSearches.map((s,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">"{s.term}"</span>
                    <span className="admin-row-count">{s.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* TOP VIEWED LISTINGS */}
            <div className="admin-card">
              <div className="admin-card-title">👁️ Most Viewed Listings</div>
              {topViews.length === 0
                ? <p className="admin-empty">No views tracked yet</p>
                : topViews.map((v,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">{v.name}</span>
                    <span className="admin-row-count">{v.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* TOP CATEGORIES */}
            <div className="admin-card">
              <div className="admin-card-title">📂 Top Neighborhood</div>
              {topNeighborhood.length === 0
                ? <p className="admin-empty">No category clicks yet</p>
                : topNeighborhood.map((c,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">{CATEGORIES.find(cat=>cat.id===c.cat)?.label || c.cat}</span>
                    <span className="admin-row-count">{c.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* TOP CALLS */}
            <div className="admin-card">
              <div className="admin-card-title">📞 Most Called Businesses</div>
              {topCalls.length === 0
                ? <p className="admin-empty">No calls tracked yet</p>
                : topCalls.map((c,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">{c.name}</span>
                    <span className="admin-row-count">{c.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* LIVE SEARCH LOG */}
            <div className="admin-card" style={{gridColumn:'1/-1'}}>
              <div className="admin-card-title">📝 Live Search Log</div>
              {searchLog.length === 0
                ? <p className="admin-empty">Searches will appear here in real time</p>
                : <div className="admin-log">
                    {[...searchLog].reverse().map((s,i) => (
                      <div key={i} className="admin-log-row">
                        <span className="admin-log-term">"{s.term}"</span>
                        <span className="admin-log-time">{s.time}</span>
                      </div>
                    ))}
                  </div>
              }
            </div>
          </div>
        </div>
      )}

      {/* LIST MY BUSINESS MODAL */}
      {showListForm && (
        <div className="form-modal-overlay" onClick={() => setShowListForm(false)}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            {!formSubmitted ? (
              <>
                <div className="form-modal-header">
                  <div className="form-modal-title">List Your Business — Free</div>
                  <div className="form-modal-sub">Fill out the form below and we will add your listing within 24 hours.</div>
                </div>
                <div className="form-body">
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Business Name <span>*</span></label>
                      <input className="form-input" name="name" placeholder="Your business name" value={formData.name} onChange={handleFormChange} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Phone Number <span>*</span></label>
                      <input className="form-input" name="phone" placeholder="(760) 555-0000" value={formData.phone} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Email Address <span>*</span></label>
                      <input className="form-input" name="email" type="email" placeholder="you@email.com" value={formData.email} onChange={handleFormChange} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">City <span>*</span></label>
                      <select className="form-select" name="city" value={formData.city} onChange={handleFormChange}>
                        <option value="">Select city...</option>
                        <option>Victorville</option>
                        <option>Hesperia</option>
                        <option>Apple Valley</option>
                        <option>Adelanto</option>
                        <option>Other High Desert</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Category <span>*</span></label>
                      <select className="form-select" name="category" value={formData.category} onChange={handleFormChange}>
                        <option value="">Select category...</option>
                        {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Website</label>
                      <input className="form-input" name="website" placeholder="www.yourbusiness.com" value={formData.website} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Address</label>
                    <input className="form-input" name="address" placeholder="Street address, city, CA zip" value={formData.address} onChange={handleFormChange} />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Services Offered</label>
                    <input className="form-input" name="services" placeholder="e.g. Roof Repair, Installation, Gutters" value={formData.services} onChange={handleFormChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Business Hours</label>
                      <input className="form-input" name="hours" placeholder="e.g. Mon-Fri 8am-5pm" value={formData.hours} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Short Description</label>
                    <textarea className="form-textarea" name="description" placeholder="Tell residents what makes your business special..." value={formData.description} onChange={handleFormChange} />
                  </div>
                </div>
                <p className="form-note">
                  ✅ Free listings are reviewed and added within 24 hours. Want to appear at the top of your category? Ask about our Featured listing options after submitting.
                </p>
                <div className="form-footer">
                  <button className="btn-primary" onClick={handleFormSubmit} disabled={formLoading}>
                    {formLoading ? 'Sending...' : 'Submit My Business'}
                  </button>
                  {formError && <p style={{color:'var(--terra)',fontSize:'0.82rem',marginTop:'0.5rem'}}>Something went wrong. Please email hello@highdeserthub.com</p>}
                  <button className="btn-secondary" onClick={() => setShowListForm(false)}>Cancel</button>
                </div>
              </>
            ) : (
              <div className="success-box">
                <div className="success-icon">🎉</div>
                <div className="success-title">You're on the list!</div>
                <p className="success-sub">
                  Thanks for submitting <strong>{formData.name}</strong>. We will review your info and have your listing live within 24 hours. We will reach out to {formData.email} to confirm.
                </p>
                <p style={{fontSize:'0.85rem', color:'var(--terra)', background:'rgba(196,96,58,0.08)', border:'1px solid rgba(196,96,58,0.2)', borderRadius:'8px', padding:'0.85rem 1rem', marginTop:'0.5rem', lineHeight:'1.6'}}>
                  📸 Want to include your business card? Email front and back photos to <strong>listings@highdeserthub.com</strong> with your business name in the subject line.
                </p>
                <button className="btn-primary" onClick={() => setShowListForm(false)}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRICING PLANS MODAL */}
      {showPricing && (
        <div className="form-modal-overlay" onClick={() => setShowPricing(false)}>
          <div className="pricing-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pricing-header">
              <div className="pricing-header-title">Simple, Honest Pricing</div>
              <div className="pricing-header-sub">Start free. Upgrade when you're ready to grow.</div>
            </div>
            <div className="pricing-grid">
              <div className="pricing-tier">
                <div className="pricing-tier-name">Free</div>
                <div className="pricing-price">$0</div>
                <div className="pricing-period">forever</div>
                <div className="pricing-sub-tag">Perfect for getting your business online in minutes.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business name and phone listed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> City, category, and business card photo</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Basic search visibility</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> 3-month renewal required</div>
                </div>
                <button className="pricing-btn" onClick={() => { setShowPricing(false); setShowListForm(true); setFormSubmitted(false); }}>Get Listed Free</button>
              </div>
              <div className="pricing-tier">
                <div className="pricing-tier-name">Standard</div>
                <div className="pricing-price">$25</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-sub-tag">Turn views into real customer inquiries.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free — no renewal ever</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Website and social media links</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Email contact button and full hours</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority over free listings</div>
                </div>
                <a className="pricing-btn" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Standard — $25/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Get Started</a>
              </div>
              <div className="pricing-tier popular">
                <div className="pricing-popular-badge">Most Popular</div>
                <div className="pricing-tier-name">Featured</div>
                <div className="pricing-price" style={{color:'var(--gold)'}}>$60</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-sub-tag">Be the first business customers see in your category.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Standard</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Top of category placement</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Spotlight badge and highlighted listing</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel feature</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority in search results</div>
                </div>
                <a className="pricing-btn main" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Featured — $60/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Get Featured</a>
              </div>
              <div className="pricing-tier">
                <div className="pricing-tier-name">Premium</div>
                <div className="pricing-price">$120</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-sub-tag">Own your category. Be the only name they remember.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Featured</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel spot</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Category banner ad</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly Social Blast — dedicated Instagram and Facebook post written and published for you</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly performance report</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Dedicated support</div>
                </div>
                <a className="pricing-btn" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Premium — $120/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Go Premium</a>
              </div>
            </div>
            <div className="pricing-footer">
              <span className="pricing-footer-note">📞 Questions? Email us at hello@highdeserthub.com</span>
              <button className="btn-secondary" onClick={() => setShowPricing(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT POPUP */}
      {showContactPopup && (
        <div className="contact-popup-overlay" onClick={() => setShowContactPopup(false)}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <p className="contact-popup-sub">
              You selected <strong>{contactTier}</strong>. Reach out and we'll get you set up right away.
            </p>
            <div className="contact-popup-email">admin@highdeserthub.com</div>
            <div className="contact-popup-btns">
              
                className="btn-primary"
                href={`mailto:admin@highdeserthub.com?subject=Interested in ${contactTier}&body=Hi, I am interested in upgrading my listing on HighDesertHub.com. Please contact me with next steps.`}
                style={{textDecoration:"none",textAlign:"center",display:"block"}}
              >
                📧 Open Email App
              </a>
              <button className="btn-secondary" onClick={copyEmail}>
                {emailCopied ? '✅ Copied!' : '📋 Copy Email Address'}
              </button>
              <button className="btn-secondary" onClick={() => setShowContactPopup(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REPORT MODAL */}
      {showReport && (
        <div className="form-modal-overlay" onClick={() => setShowReport(false)}>
          <div className="report-modal" onClick={(e) => e.stopPropagation()}>
            {!reportSubmitted ? (
              <>
                <div className="report-header">
                  <div className="report-title">⚑ Report a Listing Issue</div>
                  <div className="report-sub">{reportBiz?.name} — Help us keep the directory accurate</div>
                </div>
                <div className="report-body">
                  {[
                    'Business is permanently closed',
                    'Phone number is incorrect or disconnected',
                    'Wrong address listed',
                    'Business does not exist',
                    'Duplicate listing',
                    'Other issue',
                  ].map((reason) => (
                    <div
                      key={reason}
                      className={`report-option ${reportReason === reason ? 'selected' : ''}`}
                      onClick={() => setReportReason(reason)}
                    >
                      <input type="radio" readOnly checked={reportReason === reason} />
                      {reason}
                    </div>
                  ))}
                </div>
                <div className="report-footer">
                  <button className="btn-primary" onClick={submitReport} disabled={!reportReason || reportLoading}>
                    {reportLoading ? 'Sending...' : 'Submit Report'}
                  </button>
                  <button className="btn-secondary" onClick={() => setShowReport(false)}>Cancel</button>
                </div>
              </>
            ) : (
              <div className="report-success">
                <div className="report-success-icon">✅</div>
                <div className="report-success-title">Report Received</div>
                <p className="report-success-sub">
                  Thank you for helping keep HighDesertHub accurate. We will review this listing within 24 hours and take appropriate action.
                </p>
                <button className="btn-primary" style={{marginTop:'1rem'}} onClick={() => setShowReport(false)}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CARD PHOTO VIEWER */}
      {cardViewer && (
        <div className="card-viewer-overlay" onClick={() => setCardViewer(null)}>
          <div className="card-viewer-inner" onClick={(e) => e.stopPropagation()}>
            <div className="card-viewer-title">🪪 {cardViewer.name} — Business Card</div>
            <div className="card-promo-banner">🏷️ Mention <strong>HighDesertHub</strong> and ask if you qualify for a <strong>5% discount!</strong></div>
            <div className="card-viewer-images">
              <div className="card-img-wrap">
                <span className="card-img-label">Front</span>
                {cardViewer.cardFront
                  ? <img src={cardViewer.cardFront} alt="front" className="card-img" />
                  : <div className="card-img-placeholder"><span>📇</span><span>Coming soon</span></div>
                }
              </div>
              {cardViewer.cardBack && (
                <div className="card-img-wrap">
                  <span className="card-img-label">Back</span>
                  <img src={cardViewer.cardBack} alt="back" className="card-img" />
                </div>
              )}
              {cardViewer.cardBack === null && (
                <div className="card-img-wrap">
                  <span className="card-img-label">Back</span>
                  <div className="card-img-placeholder"><span>📇</span><span>No back available</span></div>
                </div>
              )}
            </div>
            <button className="card-viewer-close" onClick={() => setCardViewer(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
