import { useState, useEffect } from "react";

const GOOGLE_FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
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
    tier: "premium",
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
    tier: "premium",
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
    services: ["Haircuts", "Free Haircuts - Donations Appreciated"],
    hours: "Call to book",
    featured: false,
    tier: "free",
    description: "Local barber serving the High Desert. Free haircuts - donations appreciated. Scan QR code to book your appointment.",
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
    description: "Full-service handyman for the High Desert. Bilingual - Español and English. Free estimates available. Call Alberto today.",
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
    description: "Premium epoxy flooring for garages, patios, and interior floors. Metallic and marble finishes available. Serving SoCal - quality you can trust.",
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
    description: "Professional welding services for the High Desert. Mild steel, stainless, and aluminum. Fabrication, modifications, reinforcements, repairs, and custom gates. Bilingual - Español available.",
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
    description: "Reliable handyman services throughout the High Desert. From plumbing to bathroom remodeling - no job too small. Call for a free estimate.",
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
    description: "State certified driving instruction serving the High Desert. Behind-the-wheel training, driver's ed certification, and DMV vehicle rental. Bilingual - servicio disponible en Español.",
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

  {
    id: 27,
    name: "Druckenmiller Roofing Co., Inc.",
    category: "contractors",
    city: "Victorville",
    phone: "(760) 241-7866",
    contact: "",
    address: "13782 Bear Valley Road, Suite D3-109, Victorville, CA 92392",
    email: "druckroofing@aol.com",
    website: "",
    instagram: "",
    license: "",
    services: ["Roofing Repairs", "Re-Roof (Shingles)", "Re-Roof (Rolled Roofing)", "Re-Felt (Tile)"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Family-owned and operated roofing company serving the High Desert since 1991. Specializing in repairs, re-roofing, and re-felt tile. References available.",
    initials: "DR",
    color: "#C4603A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/druckenmiller_front.png",
    cardBack: null,
  },
  {
    id: 29,
    name: "Blank Slate Cleaning Co",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(323) 207-5311",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Residential Cleaning", "Office Cleaning", "Organizing"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional cleaning and organizing services for the High Desert. Residential, offices, and organizing. Call for a free quote.",
    initials: "BS",
    color: "#4A7A8F",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 1,
    carousel: false,
    cardFront: "/cards/blankslateclean_front.png",
    cardBack: null,
  },
  {
    id: 30,
    name: "C.A.R.S. Body Shop",
    category: "auto",
    city: "Hesperia",
    phone: "(760) 948-5151",
    contact: "",
    address: "9625 Tamarisk Ave, Hesperia, CA 92345",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Collision Repair", "Auto Body", "Paint Work", "Insurance Claims", "Free Rental", "Free Towing", "Lifetime Paint Warranty"],
    hours: "Mon-Fri 8:00 AM - 5:00 PM",
    featured: false,
    tier: "free",
    description: "Collision Auto Repair Specialists serving Hesperia. Insurance claim experts with lifetime paint warranty. Free towing and rental. Discounts for military, police, firefighters, and educators.",
    initials: "CA",
    color: "#8B3A1A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/carsautorepair_front.png",
    cardBack: "/cards/carsautorepair_back.png",
  },
  {
    id: 31,
    name: "Catalan's Landscaping",
    category: "landscaping",
    city: "Victor Valley",
    phone: "(714) 270-5579",
    contact: "",
    address: "",
    email: "bcatalan133@gmail.com",
    website: "",
    instagram: "",
    license: "",
    services: ["Maintenance", "Clean Ups", "Irrigation Systems", "Gardening", "Planting", "Removing", "Sprinklers", "Tree Trimming", "New Sod"],
    hours: "Call or Text for hours",
    featured: false,
    tier: "free",
    description: "Full-service landscaping for the High Desert. Residential and commercial. Free estimates available. Call or text for a quote.",
    initials: "CL",
    color: "#4A6B3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/catalanslandscaping_front.png",
    cardBack: null,
  },
  {
    id: 32,
    name: "Cleaning Services Claudia",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(951) 460-9021",
    contact: "Claudia",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["House Cleaning", "Office Cleaning", "Deep Cleaning", "Move-In/Move-Out Cleaning"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional cleaning services for the High Desert. Houses, offices, deep cleaning, and move-in/move-out. Reasonable prices, professional and prompt.",
    initials: "CC",
    color: "#B85C8A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 1,
    carousel: false,
    cardFront: "/cards/cleaningservicesclaudia_front.png",
    cardBack: null,
  },
  {
    id: 33,
    name: "Misión Cristiana El Calvario",
    category: "community",
    city: "Hesperia",
    phone: "(760) 662-0961",
    contact: "",
    address: "9980 Hesperia Rd, Hesperia, CA 92345",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Sunday Service 5PM", "Tuesday Service 7PM", "Friday Service 7PM", "Family Services"],
    hours: "Tue & Fri 7PM - Sun 5PM",
    featured: false,
    tier: "free",
    description: "A Christian family church serving the High Desert community in Hesperia. Services in Spanish. All are welcome.",
    initials: "EC",
    color: "#5C6B4A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/cristianaelcalvario_front.png",
    cardBack: null,
  },
  {
    id: 34,
    name: "Dollens Auto Repair LLC",
    category: "auto",
    city: "Victor Valley",
    phone: "(323) 986-0105",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "LIC #300249",
    services: ["Mobile Mechanic", "Auto Repairs", "Engine Repairs", "Diagnostics"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Licensed mobile mechanic serving the High Desert since 2021. We come to you - repairs done right. Call for an appointment.",
    initials: "DA",
    color: "#3C3C3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/dollensautorepair_front.png",
    cardBack: null,
  },
  {
    id: 35,
    name: "Five Pillars Cleaning & Facility Services",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(442) 218-9763",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Residential Cleaning", "Deep Vacuum Service", "Junk Hauling", "Yard Cleanup", "Full Property Cleanup"],
    hours: "Call or Text for a Quote",
    featured: false,
    tier: "free",
    description: "Licensed and insured full property cleanup for the High Desert. One service for complete cleanup - residential cleaning, junk hauling, and yard cleanup.",
    initials: "FP",
    color: "#7A4A6B",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/fivepillarscleaning_front.png",
    cardBack: null,
  },
  {
    id: 36,
    name: "JC's Landscaping LLC",
    category: "landscaping",
    city: "Victor Valley",
    phone: "(840) 877-6522",
    contact: "Joey",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Weekly Maintenance", "Yard Clean-Ups", "Trash Hauling", "Tree Trimming", "Tree Removal", "Stump Grinding", "Vinyl & Wood Fencing", "Roofing", "Sod", "Sprinklers", "Tractor Work", "Rock Design", "Retaining Walls", "Artificial Turf", "Cement Slabs", "Patios", "Pavers", "Fire Prevention Clean Ups", "Snow Removal"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Full-service landscaping and property services for the High Desert. Making visions come to life. Senior citizen discounts available. Free estimates - call Joey.",
    initials: "JC",
    color: "#4A6B3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/jcslandscaping_front.png",
    cardBack: null,
  },
  {
    id: 37,
    name: "Lexair HVAC",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 910-3732",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "LIC# 1127561",
    services: ["Air Conditioning", "Heating", "Swamp Coolers", "Mini Splits", "Central Heating & Cooling", "Air Duct Repair & Replace", "Maintenance & Tune-Ups", "24/7 Emergency Services", "Custom Home Installations", "Free Visual Inspections"],
    hours: "24/7 Emergency Available",
    featured: false,
    tier: "free",
    description: "Family owned and operated HVAC company with 20 years of experience serving the High Desert. Air conditioning, heating, swamp coolers, and emergency services available 24/7.",
    initials: "LA",
    color: "#1B3A5C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 4,
    carousel: false,
    cardFront: "/cards/lexair_front.png",
    cardBack: "/cards/lexair_back.png",
  },
  {
    id: 38,
    name: "Raíz Limpia Lice Removal",
    category: "health",
    city: "Victor Valley",
    phone: "(951) 733-4564",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@raizlimpia_liceremoval",
    license: "",
    services: ["Lice Removal", "Non-Toxic Treatment", "Free Head Checks", "Same Day Appointments", "After Hours Availability", "Mobile Service"],
    hours: "Same Day & After Hours Available",
    featured: false,
    tier: "free",
    description: "Mobile and non-toxic lice removal serving the Inland Empire and High Desert. Flat rate $150 full treatment. Free head checks for up to 3 family members. Same day appointments available.",
    initials: "RL",
    color: "#6B8F71",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/liceremovalraiz_front.png",
    cardBack: "/cards/liceremovalraiz_back.png",
  },
  {
    id: 39,
    name: "Reliable Junk Removal",
    category: "contractors",
    city: "Victor Valley",
    phone: "(760) 607-6938",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Dumpster Rental", "Tractor Work", "Junk Hauling", "Rock Delivery"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Reliable junk removal and hauling services for the High Desert. Dumpster rental, tractor work, junk hauling, and rock delivery available.",
    initials: "RJ",
    color: "#C4603A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 1,
    carousel: false,
    cardFront: "/cards/reliablejunkremoval_front.png",
    cardBack: null,
  },
  {
    id: 40,
    name: "Riki Tiki's Indoor Playground",
    category: "community",
    city: "Apple Valley",
    phone: "(442) 292-2198",
    contact: "",
    address: "20783 Bear Valley Road, Suite A, Apple Valley, CA 92308",
    email: "",
    website: "rikitikisindoorplayground.com",
    instagram: "",
    license: "",
    services: ["Indoor Playground", "Birthday Parties", "Family Events", "Open Play"],
    hours: "Daily 10:00 AM - 7:00 PM",
    featured: false,
    tier: "free",
    description: "Apple Valley's indoor playground for children and families. Open daily for play, birthday parties, and special events. Creating treasured memories for the High Desert community.",
    initials: "RT",
    color: "#D4824A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 4,
    carousel: false,
    cardFront: "/cards/rikitiki_front.png",
    cardBack: "/cards/rikitiki_back.png",
  },

  {
    id: 41,
    name: "M.D. Landscaping",
    category: "landscaping",
    city: "Victor Valley",
    phone: "(714) 360-8806",
    contact: "Chris / Will",
    address: "",
    email: "cwmdlandscaping@gmail.com",
    website: "",
    instagram: "@M.D._LAND_SCAPING",
    license: "",
    services: ["Weed Abatement", "Weed Prevention", "Rock Laying", "Trash Removal", "Tractor Work"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Landscaping services for the High Desert. Weed abatement, rock laying, trash removal, and tractor work. Serving the High Desert area.",
    initials: "MD",
    color: "#4A6B3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/mdlandscaping_front.png",
    cardBack: null,
  },
  {
    id: 42,
    name: "Midway City Remodeling",
    category: "contractors",
    city: "Victor Valley",
    phone: "(657) 705-5055",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Flooring", "Tile", "Drywall", "Texture", "Electrical", "Cabinets", "Paint"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Full-service remodeling for the High Desert. Flooring, tile, drywall, electrical, cabinets, and paint. Free estimates available.",
    initials: "MC",
    color: "#3C3C3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/midwaycityremodeling_front.png",
    cardBack: null,
  },
  {
    id: 43,
    name: "Pericos Party Rentals",
    category: "community",
    city: "Hesperia",
    phone: "(760) 949-2803",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Jumpers", "Boxing Rings", "Bouncers", "Water Slides", "Obstacle Courses", "Inflatable Pool", "Tables", "Chairs", "Party Heaters"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Family owned party rental business serving the High Desert since 2000. One of the biggest and most reliable inflatable rental companies in the area.",
    initials: "PP",
    color: "#D4824A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/periscosparty_front.png",
    cardBack: null,
  },
  {
    id: 44,
    name: "Preferred Garage Doors",
    category: "contractors",
    city: "Victor Valley",
    phone: "(951) 535-1258",
    contact: "Adrian Gonzalez",
    address: "",
    email: "preferredfs.adrian@gmail.com",
    website: "",
    instagram: "",
    license: "",
    services: ["Garage Door Repair", "Spring Replacement", "Doors Off Track", "New Garage Doors", "Garage Door Installation"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Garage door specialist serving the High Desert since 2015. Specializing in spring changes and doors off track. Call Adrian for a free estimate.",
    initials: "PG",
    color: "#8B1A1A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/prefferredgarage_front.png",
    cardBack: null,
  },
  {
    id: 45,
    name: "Rulis' Rentals",
    category: "community",
    city: "Victor Valley",
    phone: "(442) 469-9559",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@rulisrentals",
    license: "",
    services: ["Jumper/Slide Combo", "Double Water Slide", "Bounce Houses", "Party Rentals", "Weekday Specials"],
    hours: "Call or Text for hours",
    featured: false,
    tier: "free",
    description: "Party and inflatable rentals for the High Desert. Jumper/slide combos, water slides, and more. Weekday specials available.",
    initials: "RR",
    color: "#4A7A8F",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/rulisrentals_front.png",
    cardBack: null,
  },
  {
    id: 46,
    name: "Toro Remodeling LLC",
    category: "contractors",
    city: "Victor Valley",
    phone: "(909) 997-3748",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@tororemodeling llc",
    license: "Licensed, Bonded & Insured",
    services: ["Kitchen Remodels", "Bathroom Remodels", "Room Additions", "Full Home Renovations", "Outdoor Living Spaces"],
    hours: "Call for a Free Estimate",
    featured: false,
    tier: "free",
    description: "Licensed, bonded, and insured remodeling contractor for the High Desert. Kitchen, bathroom, room additions, and outdoor living spaces. Up to $500 off - call for a free estimate.",
    initials: "TR",
    color: "#C4603A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/tororemodeling_front.png",
    cardBack: null,
  },
  {
    id: 47,
    name: "Velasco's Appliance Repair",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 669-7254",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Appliance Repair", "Refrigerator Repair", "Washer Repair", "Dryer Repair", "Stove Repair", "Warranty Work"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional appliance repair serving the High Desert. All major brands including Whirlpool, Samsung, LG, GE, Bosch, and more. Works with warranty companies. Hablamos Español.",
    initials: "VA",
    color: "#E8A030",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/velascosappliance_front.png",
    cardBack: null,
  },
  {
    id: 48,
    name: "Appliances 4 Less",
    category: "homeservices",
    city: "Victor Valley",
    phone: "(760) 927-8380",
    contact: "Carlos",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Appliance Sales", "Appliance Repair", "Refrigerators", "Stoves", "Washers", "Dryers"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Appliance sales and repairs for the High Desert. Refrigerators, stoves, washers, and dryers. Call Carlos for pricing.",
    initials: "AL",
    color: "#1B3A5C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/appliance4less_front.png",
    cardBack: null,
  },
  {
    id: 49,
    name: "Black Horse Painting",
    category: "contractors",
    city: "Victor Valley",
    phone: "(951) 518-8404",
    contact: "",
    address: "",
    email: "",
    website: "blackhorsepainting.com",
    instagram: "@blackhorsepainting.com",
    license: "",
    services: ["Exterior Painting", "Interior Painting", "Cabinet Painting", "Drywall Repair"],
    hours: "Call for a Free Estimate",
    featured: false,
    tier: "free",
    description: "Professional painting services for the High Desert. Exterior, interior, cabinets, and drywall repair. Free estimates available.",
    initials: "BH",
    color: "#1B1B1B",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/blackhorsepainting_front.png",
    cardBack: null,
  },
  {
    id: 50,
    name: "Bounce Automotive Maintenance",
    category: "auto",
    city: "Victor Valley",
    phone: "(760) 490-5451",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@klvnbvng",
    license: "",
    services: ["Oil Changes", "Brake Changes", "Spark Plugs", "Serpentine Belt", "Steering and Suspension", "Diagnostics", "Mobile Services"],
    hours: "Call or Text for Appointment",
    featured: false,
    tier: "free",
    description: "Mobile automotive maintenance for the High Desert. Oil changes, brakes, spark plugs, diagnostics, and more. Mobile services available.",
    initials: "BA",
    color: "#3C3C3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/bouceautomeaint_front.png",
    cardBack: "/cards/bouceautomeaint_back.png",
  },
  {
    id: 51,
    name: "Carter's Garage Door",
    category: "contractors",
    city: "Victor Valley",
    phone: "(760) 514-5660",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Broken Springs", "Opener Repairs", "Door Repairs", "New Doors", "New Openers", "Garage Door Installation"],
    hours: "Call for a Free Estimate",
    featured: false,
    tier: "free",
    description: "Family owned garage door repair and installation for the High Desert. American workmanship - jobs done right. Free estimates available.",
    initials: "CG",
    color: "#1B3A5C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 3,
    carousel: false,
    cardFront: "/cards/cartersgarage_front.png",
    cardBack: null,
  },
  {
    id: 52,
    name: "Desert Heat Yard Clean-Up",
    category: "landscaping",
    city: "Victor Valley",
    phone: "(760) 998-7315",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Tree Removal", "Tree Trimming", "Bush Removal", "Bush Trimming", "Rockscape", "Landscaping", "Junk Haul Away", "Weed Abatement", "Firewood"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Full yard cleanup and landscaping services proudly serving the entire High Desert. Tree removal, rockscape, weed abatement, and more.",
    initials: "DH",
    color: "#6B8F3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/desertheatyard_front.png",
    cardBack: null,
  },
  {
    id: 53,
    name: "HD Stars and Stripes",
    category: "landscaping",
    city: "Hesperia",
    phone: "(760) 782-2455",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "",
    license: "",
    services: ["Weed Abatement", "Brush & Land Clearing", "Gravel Install", "Junk & Debris Removal", "Yard Touch Up", "Monthly Subscriptions", "Weed Spraying", "Tree Trimming"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Yard and land services based in Hesperia. Weed abatement, brush clearing, gravel install, and monthly maintenance subscriptions available.",
    initials: "HS",
    color: "#4A6B3C",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/hdstarsandstripes_front.png",
    cardBack: null,
  },
  {
    id: 54,
    name: "Mr. G's Headlight Restoration",
    category: "auto",
    city: "Victor Valley",
    phone: "(909) 571-8065",
    contact: "",
    address: "",
    email: "",
    website: "",
    instagram: "@mr.gs_headlight_restoration511",
    license: "",
    services: ["Headlight Restoration", "Foggy Headlight Repair", "Oxidized Headlight Repair"],
    hours: "Call for hours",
    featured: false,
    tier: "free",
    description: "Professional headlight restoration for the High Desert. Foggy, yellow, and oxidized headlights restored. Bilingual - servicio disponible en Español.",
    initials: "MG",
    color: "#8B1A1A",
    verified: true,
    dateAdded: "April 2026",
    lastVerified: "April 2026",
    expiresOn: "July 2026",
    baseThumbsUp: 2,
    carousel: false,
    cardFront: "/cards/headlighrestoration_front.png",
    cardBack: null,
  },

];

const CITIES = ["All Cities", "Victorville", "Hesperia", "Apple Valley", "Adelanto", "Victor Valley"];

const css = `
${GOOGLE_FONTS}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Outfit', sans-serif; background: #080808; color: #F5F0E8; min-height: 100vh; }
:root {
  --sand: #F5F0E8; --terra: #C9A84C; --rust: #A07830; --gold: #C9A84C;
  --ink: #F5F0E8; --navy: #101010; --cream: #141414; --muted: #888880;
  --card-bg: #141414; --border: rgba(201,168,76,0.15); --border-hover: rgba(201,168,76,0.5);
}
.app { min-height: 100vh; }
.nav { background: #101010; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(201,168,76,0.2); }
.nav-logo { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }
.nav-logo span { color: var(--gold); }
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a { color: rgba(247,240,230,0.7); text-decoration: none; font-size: 0.875rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; transition: color 0.2s; }
.nav-links a:hover { color: var(--gold); }
.nav-cta { background: var(--terra); color: white !important; padding: 0.5rem 1.25rem; border-radius: 2px; font-weight: 600 !important; }
.nav-btn-gold { background: rgba(201,168,76,0.1) !important; color: var(--gold) !important; padding: 0.4rem 1rem !important; border-radius: 1px !important; font-weight: 600 !important; border: 1px solid rgba(201,168,76,0.25) !important; font-size: 0.75rem !important; letter-spacing: 0.08em !important; }
.nav-btn-gold:hover { background: rgba(201,168,76,0.18) !important; color: var(--gold) !important; border-color: rgba(201,168,76,0.5) !important; }
.nav-btn-terra { background: transparent !important; color: rgba(245,240,232,0.5) !important; padding: 0.4rem 1rem !important; border-radius: 1px !important; font-weight: 500 !important; border: 1px solid rgba(245,240,232,0.1) !important; font-size: 0.75rem !important; letter-spacing: 0.08em !important; }
.nav-btn-terra:hover { border-color: rgba(245,240,232,0.25) !important; color: var(--sand) !important; }
.nav-cta:hover { background: var(--rust) !important; }
.hero { background: #101010; padding: 5rem 2rem 2rem; position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 70%); pointer-events: none; }
.hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3); color: var(--gold); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: 2px; margin-bottom: 1.5rem; }
.hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800; color: var(--sand); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 1rem; }
.hero-title em { font-style: normal; font-family: 'Playfair Display', serif; color: var(--gold); }
.hero-sub { color: rgba(247,240,230,0.6); font-size: 1.1rem; max-width: 500px; line-height: 1.7; margin-bottom: 2.5rem; font-weight: 300; }
.search-bar { display: flex; flex-wrap: wrap; background: #1A1A1A; border-radius: 2px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.3); max-width: 680px; }
.search-bar input { flex: 1; border: none; padding: 1.1rem 1.5rem; font-size: 1rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: transparent; outline: none; min-width: 0; }
.search-bar input::placeholder { color: rgba(245,240,232,0.35); }
.search-divider { width: 1px; background: rgba(201,168,76,0.15); margin: 0.75rem 0; }
.search-bar select { border: none; padding: 1rem 1.25rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: transparent; outline: none; cursor: pointer; min-width: 140px; }
.search-btn { background: var(--terra); color: white; border: none; padding: 1rem 2rem; font-size: 0.95rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: background 0.2s; flex: 1; min-width: 100%; }
.search-btn:hover { background: var(--rust); }
.hero-stats { display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap; }
.stat { display: flex; flex-direction: column; gap: 0.2rem; }
.stat-num { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 800; color: var(--gold); }
.stat-label { font-size: 0.8rem; color: rgba(247,240,230,0.5); text-transform: uppercase; letter-spacing: 0.08em; }
.stat-pill { background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2); color: var(--sand); font-family: 'Playfair Display', serif; font-size: 0.78rem; font-weight: 700; padding: 0.5rem 0.85rem; border-radius: 2px; letter-spacing: 0.01em; white-space: nowrap; }
.section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; clear: both; background: transparent; }
.section-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 2rem; }
.section-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }
.section-link { color: var(--gold); font-size: 0.875rem; font-weight: 600; cursor: pointer; }
.categories-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
@media (max-width: 900px) { .categories-grid { grid-template-columns: repeat(3, 1fr); } .nav-links { display: none; } }
@media (max-width: 600px) { .categories-grid { grid-template-columns: repeat(2, 1fr); } }
.cat-card { background: #141414; border: 1px solid rgba(201,168,76,0.12); border-radius: 2px; padding: 0.5rem 0.75rem; display: flex; flex-direction: row; align-items: center; gap: 0.4rem; cursor: pointer; transition: all 0.2s; text-align: left; }
.cat-card:hover { border-color: var(--gold); box-shadow: 0 4px 20px rgba(201,168,76,0.08); transform: translateY(-2px); }
.cat-card.active { background: #101010; border-color: var(--navy); }
.cat-icon { font-size: 1.15rem; line-height: 1; flex-shrink: 0; }
.cat-label { font-size: 0.83rem; font-weight: 600; color: var(--sand); line-height: 1.2; }
.cat-card.active .cat-label { color: var(--sand); }
.divider { border: none; border-top: 1px solid rgba(201,168,76,0.08); margin: 0 2rem; }
.listings-section { padding: 3rem 2rem 5rem; max-width: 1100px; margin: 0 auto; background: transparent; }
.listings-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem; }
.listings-count { font-size: 0.8rem; color: rgba(245,240,232,0.35); font-weight: 400; letter-spacing: 0.04em; }
.listings-count strong { color: var(--sand); font-weight: 700; }
.filter-pills { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.pill { background: #141414; border: 1px solid rgba(201,168,76,0.12); color: var(--sand); padding: 0.4rem 1rem; border-radius: 2px; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.15s; font-family: 'Outfit', sans-serif; }
.pill:hover { border-color: var(--gold); color: var(--gold); }
.pill.active { background: var(--terra); border-color: var(--gold); color: white; }
.listings-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
@media (max-width: 900px) { .listings-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .listings-grid { grid-template-columns: 1fr; } }
.biz-card { background: #141414; border: 1px solid rgba(201,168,76,0.12); border-radius: 2px; overflow: hidden; cursor: pointer; transition: all 0.2s; position: relative; }
.biz-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); border-color: transparent; }
.biz-card.featured-card { border-color: var(--gold); }
.expiring-badge { position: absolute; top: 0.75rem; left: 0.75rem; background: #E8A030; color: #080808; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 2px; z-index: 2; }
.expired-badge { position: absolute; top: 0.75rem; left: 0.75rem; background: #C0392B; color: white; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 2px; z-index: 2; }
.expired-card { opacity: 0.7; }
.spotlight-card-badge { position: absolute; top: 0.75rem; right: 0.75rem; background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 2px; display: flex; align-items: center; gap: 0.3rem; z-index: 2; }
.spotlight-card-border { border-color: var(--gold) !important; box-shadow: 0 0 0 1px var(--gold), 0 4px 20px rgba(232,160,48,0.2); }
.featured-badge { position: absolute; top: 0.75rem; right: 0.75rem; background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.25rem 0.6rem; border-radius: 2px; }
.biz-card-header { padding: 1.25rem 1.25rem 0.75rem; display: flex; gap: 0.85rem; align-items: flex-start; }
.biz-avatar { width: 48px; height: 48px; border-radius: 2px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 800; color: white; flex-shrink: 0; }
.biz-info { flex: 1; min-width: 0; }
.biz-name { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 700; color: var(--sand); line-height: 1.2; margin-bottom: 0.25rem; }
.biz-location { font-size: 0.75rem; color: rgba(245,240,232,0.35); }
.biz-desc { padding: 0 1.25rem 0.85rem; font-size: 0.82rem; color: rgba(245,240,232,0.5); line-height: 1.6; }
.biz-services { padding: 0 1.25rem 0.85rem; display: flex; flex-wrap: wrap; gap: 0.35rem; }
.service-tag { background: rgba(201,168,76,0.08); color: rgba(201,168,76,0.7); font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.55rem; border-radius: 3px; }
.biz-footer { border-top: 1px solid rgba(201,168,76,0.08); padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }
.biz-phone { font-size: 0.82rem; font-weight: 600; color: var(--gold); text-decoration: none; }
.biz-phone:hover { text-decoration: underline; }
.biz-hours { font-size: 0.73rem; color: rgba(245,240,232,0.35); }
.modal-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.modal { background: #141414; border-radius: 2px; max-width: 560px; width: 100%; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.3); max-height: 90vh; overflow-y: auto; }
.modal-header { padding: 2rem; display: flex; gap: 1rem; align-items: center; border-bottom: 1px solid rgba(201,168,76,0.1); }
.modal-avatar { width: 64px; height: 64px; border-radius: 2px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 800; color: white; flex-shrink: 0; }
.modal-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 800; color: var(--sand); margin-bottom: 0.2rem; }
.modal-city { font-size: 0.85rem; color: rgba(245,240,232,0.35); }
.modal-body { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
.modal-row { display: flex; gap: 0.75rem; font-size: 0.88rem; align-items: flex-start; }
.modal-row-label { font-weight: 600; color: var(--sand); min-width: 80px; flex-shrink: 0; }
.modal-row-val { color: rgba(245,240,232,0.5); line-height: 1.5; }
.modal-row-val.link { color: var(--gold); }
.modal-services-wrap { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.modal-footer { padding: 1.25rem 2rem; border-top: 1px solid rgba(201,168,76,0.1); display: flex; gap: 0.75rem; flex-wrap: wrap; }
.btn-primary { flex: 1; background: var(--terra); color: white; border: none; padding: 0.85rem; border-radius: 2px; font-size: 0.9rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: background 0.2s; min-width: 110px; }
.btn-primary:hover { background: var(--rust); }
.btn-secondary { flex: 1; background: transparent; color: var(--sand); border: 1px solid rgba(201,168,76,0.12); padding: 0.85rem; border-radius: 2px; font-size: 0.9rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; min-width: 110px; }
.btn-secondary:hover { border-color: var(--sand); }
.btn-card { flex: 1; background: #101010; color: var(--sand); border: none; padding: 0.85rem; border-radius: 2px; font-size: 0.9rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: background 0.2s; min-width: 110px; }
.btn-card:hover { background: #1a3050; }
.card-viewer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.88); z-index: 300; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(8px); }
.card-viewer-inner { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; max-width: 720px; width: 100%; }
.card-viewer-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: white; }
.card-viewer-images { display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center; width: 100%; }
.card-img-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.card-img-label { font-size: 0.75rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
.card-img { width: 100%; max-width: 300px; border-radius: 2px; box-shadow: 0 8px 32px rgba(0,0,0,0.5); object-fit: cover; }
.card-img-placeholder { width: 300px; height: 170px; background: rgba(255,255,255,0.03); border: 2px dashed rgba(255,255,255,0.2); border-radius: 2px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: rgba(255,255,255,0.4); font-size: 0.82rem; text-align: center; }
.card-img-placeholder span:first-child { font-size: 2rem; }
.card-viewer-close { background: rgba(255,255,255,0.05); color: white; border: 1.5px solid rgba(255,255,255,0.2); padding: 0.75rem 2rem; border-radius: 2px; font-size: 0.9rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; }
.card-viewer-close:hover { background: rgba(255,255,255,0.08); }

.carousel-section { background: #101010; padding: 1.5rem 2rem 3rem; position: relative; overflow: hidden; display: block; width: 100%; clear: both; box-sizing: border-box; }
.carousel-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%); pointer-events: none; }
.carousel-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
.carousel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; }
.carousel-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); letter-spacing: 0; }
.carousel-title span { color: var(--gold); }
.carousel-dots { display: flex; gap: 0.5rem; align-items: center; }
.carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(247,240,230,0.2); border: none; cursor: pointer; transition: all 0.2s; padding: 0; }
.carousel-dot.active { background: var(--gold); width: 24px; border-radius: 2px; }
.carousel-track-outer { overflow: hidden; width: 100%; }
.carousel-track { display: flex; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); will-change: transform; }
.carousel-card { background: #1a2e42; border: 1.5px solid rgba(247,240,230,0.15); border-radius: 14px; padding: 1.75rem; flex: 0 0 100%; width: 100%; cursor: pointer; transition: border-color 0.3s; position: relative; overflow: hidden; box-sizing: border-box; }
.carousel-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(196,96,58,0.06) 0%, transparent 60%); pointer-events: none; }
.carousel-card:hover { border-color: rgba(232,160,48,0.4); }
.carousel-card-top { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; position: relative; z-index: 1; }
.carousel-avatar { width: 56px; height: 56px; border-radius: 2px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 800; color: white; flex-shrink: 0; }
.carousel-biz-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 600; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }
.carousel-biz-meta { font-size: 0.78rem; color: rgba(247,240,230,0.5); margin-bottom: 0.25rem; }
.carousel-spotlight-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(232,160,48,0.2); border: 1px solid rgba(232,160,48,0.4); color: var(--gold); font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2px; letter-spacing: 0.06em; text-transform: uppercase; }
.carousel-desc { font-size: 0.85rem; color: rgba(247,240,230,0.65); line-height: 1.6; margin-bottom: 1.25rem; position: relative; z-index: 1; }
.carousel-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
.carousel-phone { font-size: 0.875rem; font-weight: 600; color: var(--gold); text-decoration: none; }
.carousel-phone:hover { text-decoration: underline; }
.carousel-view-btn { background: rgba(201,168,76,0.2); color: var(--sand); border: 1px solid rgba(201,168,76,0.3); padding: 0.4rem 1rem; border-radius: 2px; font-size: 0.78rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: all 0.2s; }
.carousel-view-btn:hover { background: var(--terra); border-color: var(--gold); }
.carousel-nav { display: flex; gap: 0.5rem; }
.carousel-nav-btn { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(247,240,230,0.15); color: var(--sand); font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.carousel-nav-btn:hover { background: rgba(255,255,255,0.15); border-color: rgba(247,240,230,0.3); }
.carousel-single { max-width: 500px; }


.carousel-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
.carousel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; }
.carousel-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); letter-spacing: 0; }
.carousel-title span { color: var(--gold); }
.carousel-dots { display: flex; gap: 0.5rem; align-items: center; }
.carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(247,240,230,0.2); border: none; cursor: pointer; transition: all 0.2s; padding: 0; }
.carousel-dot.active { background: var(--gold); width: 24px; border-radius: 2px; }
.carousel-card-top { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; position: relative; z-index: 1; }
.carousel-avatar { width: 56px; height: 56px; border-radius: 2px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 800; color: white; flex-shrink: 0; }
.carousel-biz-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 600; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }
.carousel-biz-meta { font-size: 0.78rem; color: rgba(247,240,230,0.5); margin-bottom: 0.25rem; }
.carousel-spotlight-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(232,160,48,0.2); border: 1px solid rgba(232,160,48,0.4); color: var(--gold); font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2px; letter-spacing: 0.06em; text-transform: uppercase; }
.carousel-desc { font-size: 0.85rem; color: rgba(247,240,230,0.65); line-height: 1.6; margin-bottom: 1.25rem; position: relative; z-index: 1; }
.carousel-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
.carousel-phone { font-size: 0.875rem; font-weight: 600; color: var(--gold); text-decoration: none; }
.carousel-phone:hover { text-decoration: underline; }
.carousel-view-btn { background: rgba(201,168,76,0.2); color: var(--sand); border: 1px solid rgba(201,168,76,0.3); padding: 0.4rem 1rem; border-radius: 2px; font-size: 0.78rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: all 0.2s; }
.carousel-view-btn:hover { background: var(--terra); border-color: var(--gold); }
.carousel-nav { display: flex; gap: 0.5rem; }
.carousel-nav-btn { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(247,240,230,0.15); color: var(--sand); font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.carousel-nav-btn:hover { background: rgba(255,255,255,0.15); border-color: rgba(247,240,230,0.3); }
.carousel-single { max-width: 500px; }

.verified-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(107,143,113,0.15); border: 1px solid rgba(107,143,113,0.4); color: #4A7A52; font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2px; letter-spacing: 0.04em; text-transform: uppercase; }
.unverified-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(154,142,130,0.1); border: 1px solid rgba(154,142,130,0.3); color: rgba(245,240,232,0.35); font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2px; letter-spacing: 0.04em; text-transform: uppercase; }
.biz-meta { padding: 0 1.25rem 0.75rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
.biz-date { font-size: 0.72rem; color: rgba(245,240,232,0.35); }
.thumbs-btn { display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: 1px solid rgba(201,168,76,0.12); color: rgba(245,240,232,0.35); font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.65rem; border-radius: 2px; cursor: pointer; transition: all 0.2s; font-family: 'Outfit', sans-serif; }
.thumbs-btn:hover { border-color: var(--sage); color: var(--sage); }
.thumbs-btn.thumbed { background: rgba(107,143,113,0.1); border-color: var(--sage); color: var(--sage); }
.modal-badges { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem; }
.modal-date-row { padding: 0 2rem 0.5rem; font-size: 0.78rem; color: rgba(245,240,232,0.35); display: flex; gap: 1.5rem; }
.report-btn { background: transparent; border: none; color: rgba(245,240,232,0.35); font-size: 0.78rem; font-family: 'Outfit', sans-serif; cursor: pointer; text-decoration: underline; padding: 0; transition: color 0.2s; }
.report-btn:hover { color: var(--gold); }
.report-modal { background: #141414; border-radius: 2px; max-width: 440px; width: 100%; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }
.report-header { padding: 1.5rem 2rem 1rem; border-bottom: 1px solid rgba(201,168,76,0.1); }
.report-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 800; color: var(--sand); margin-bottom: 0.25rem; }
.report-sub { font-size: 0.82rem; color: rgba(245,240,232,0.35); }
.report-body { padding: 1.25rem 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.report-option { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border: 1px solid rgba(201,168,76,0.12); border-radius: 2px; cursor: pointer; transition: all 0.15s; font-size: 0.875rem; color: var(--sand); }
.report-option:hover { border-color: var(--gold); background: rgba(196,96,58,0.04); }
.report-option.selected { border-color: var(--gold); background: rgba(201,168,76,0.06); font-weight: 600; }
.report-option input { accent-color: var(--gold); }
.report-footer { padding: 1rem 2rem 1.5rem; display: flex; gap: 0.75rem; }
.report-success { padding: 2.5rem 2rem; text-align: center; }
.report-success-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.report-success-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }
.report-success-sub { font-size: 0.875rem; color: rgba(245,240,232,0.35); line-height: 1.6; }

.form-modal-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px); }
.form-modal { background: #141414; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; max-width: 600px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.8); }
.form-modal-header { padding: 1.75rem 2rem 1.25rem; border-bottom: 1px solid rgba(201,168,76,0.1); }
.form-modal-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); margin-bottom: 0.25rem; }
.form-modal-sub { font-size: 0.875rem; color: rgba(245,240,232,0.35); }
.form-body { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
.form-field { display: flex; flex-direction: column; gap: 0.4rem; }
.form-label { font-size: 0.8rem; font-weight: 600; color: var(--sand); letter-spacing: 0.02em; text-transform: uppercase; }
.form-label span { color: var(--gold); }
.form-input { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; transition: border-color 0.2s; width: 100%; }
.form-input:focus { border-color: rgba(201,168,76,0.5); }
.form-select { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; width: 100%; cursor: pointer; }
.form-textarea { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; resize: vertical; min-height: 80px; width: 100%; }
.form-footer { padding: 1.25rem 2rem; border-top: 1px solid rgba(201,168,76,0.12); display: flex; gap: 0.75rem; }
.form-note { padding: 0 2rem 1.25rem; font-size: 0.78rem; color: rgba(245,240,232,0.4); line-height: 1.6; }
.success-box { padding: 3rem 2rem; text-align: center; }
.success-icon { font-size: 3rem; margin-bottom: 1rem; }
.success-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 800; color: var(--sand); margin-bottom: 0.75rem; }
.success-sub { color: rgba(245,240,232,0.35); font-size: 0.95rem; line-height: 1.7; max-width: 380px; margin: 0 auto 1.5rem; }

.pricing-modal { background: #141414; border-radius: 2px; max-width: 820px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }
.pricing-header { background: #101010; padding: 2.5rem 2rem 2rem; text-align: center; position: relative; }
.pricing-header::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 100% at 50% 100%, rgba(201,168,76,0.1) 0%, transparent 70%); pointer-events: none; border-radius: 2px 16px 0 0; }
.pricing-header-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; position: relative; z-index: 1; }
.pricing-header-sub { color: rgba(247,240,230,0.6); font-size: 0.95rem; position: relative; z-index: 1; }
.pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
@media (max-width: 680px) { .pricing-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 400px) { .pricing-grid { grid-template-columns: 1fr; } }
.pricing-tier { padding: 1rem 1.25rem; border-right: 1.5px solid rgba(201,168,76,0.15); border-bottom: 1px solid rgba(201,168,76,0.1); display: flex; flex-direction: column; }
.pricing-tier:last-child { border-right: none; }
.pricing-tier.popular { background: #101010; position: relative; }
.pricing-popular-badge { position: absolute; top: -28px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.75rem; border-radius: 2px 6px 0 0; white-space: nowrap; }
.announcement-banner { background: rgba(201,168,76,0.06); border-bottom: 1px solid rgba(201,168,76,0.2); padding: 0.6rem 2rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-align: center; }
.announcement-banner-text { color: rgba(245,240,232,0.9); font-size: 0.8rem; font-weight: 500; line-height: 1.5; }
.announcement-banner-text strong { color: var(--gold); font-weight: 700; }
.announcement-banner-dismiss { background: transparent; border: none; color: rgba(247,240,230,0.4); cursor: pointer; font-size: 1rem; padding: 0 0.25rem; line-height: 1; flex-shrink: 0; }
.announcement-banner-dismiss:hover { color: var(--sand); }
.biz-owner-strip { background: rgba(201,168,76,0.06); border-top: 1px solid rgba(201,168,76,0.12); border-bottom: 1px solid rgba(201,168,76,0.12); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
.biz-owner-strip-text { color: white; font-size: 0.875rem; font-weight: 500; }
.biz-owner-strip-text strong { font-weight: 700; }
.biz-owner-strip-btn { background: transparent; color: var(--gold); border: 1px solid rgba(201,168,76,0.3); padding: 0.45rem 1.25rem; border-radius: 1px; font-size: 0.75rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; letter-spacing: 0.06em; }
.biz-owner-strip-btn:hover { background: #080808; }
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: #141414; border-radius: 2px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: rgba(245,240,232,0.35); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: rgba(201,168,76,0.08); border-radius: 2px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--gold); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { font-size: 0.75rem; color: rgba(245,240,232,0.35); font-style: italic; margin-bottom: 1rem; line-height: 1.4; }
.pricing-tier.popular 
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: #141414; border-radius: 2px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: rgba(245,240,232,0.35); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: rgba(201,168,76,0.08); border-radius: 2px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--gold); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { color: rgba(247,240,230,0.5); }
.pricing-tier-name { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 800; color: #F5F0E8; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem; }
.pricing-tier.popular 
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: #141414; border-radius: 2px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: rgba(245,240,232,0.35); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: rgba(201,168,76,0.08); border-radius: 2px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--gold); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { font-size: 0.75rem; color: rgba(245,240,232,0.35); font-style: italic; margin-bottom: 1rem; line-height: 1.4; }
.pricing-tier.popular 
.contact-popup-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 400; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(4px); }
.contact-popup { background: #141414; border-radius: 2px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }
.contact-popup-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }
.contact-popup-sub { font-size: 0.875rem; color: rgba(245,240,232,0.35); margin-bottom: 1.5rem; line-height: 1.6; }
.contact-popup-email { background: rgba(201,168,76,0.08); border-radius: 2px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--gold); margin-bottom: 1.25rem; letter-spacing: 0.01em; }
.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.pricing-sub-tag { color: rgba(247,240,230,0.5); }
.pricing-tier.popular .pricing-tier-name { color: #FFFFFF; }
.pricing-price { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 800; color: var(--sand); line-height: 1; margin-bottom: 0.25rem; }
.pricing-tier.popular .pricing-price { color: var(--sand); }
.pricing-period { font-size: 0.78rem; color: rgba(245,240,232,0.35); margin-bottom: 0.5rem; }
.pricing-tier.popular .pricing-period { color: rgba(247,240,230,0.4); }
.pricing-features { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem; }
.pricing-feature { font-size: 0.8rem; color: rgba(245,240,232,0.5); display: flex; gap: 0.5rem; align-items: flex-start; line-height: 1.4; }
.pricing-tier.popular .pricing-feature { color: rgba(247,240,230,0.7); }
.pricing-check { color: var(--sage); font-weight: 700; flex-shrink: 0; }
.pricing-tier.popular .pricing-check { color: var(--gold); }
.pricing-btn { background: rgba(201,168,76,0.08); color: var(--sand); border: none; padding: 0.75rem; border-radius: 2px; font-size: 0.85rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; text-align: center; transition: all 0.2s; margin-top: auto; }
.pricing-btn:hover { background: #E0D5C4; }
.pricing-btn.main { background: var(--terra); color: white; }
.pricing-btn.main:hover { background: var(--rust); }
.pricing-footer { padding: 1.25rem 2rem; border-top: 1px solid rgba(201,168,76,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.pricing-footer-note { font-size: 0.8rem; color: rgba(245,240,232,0.35); }
.living-page { position: fixed; inset: 0; background: #080808; z-index: 500; overflow-y: auto; }
.living-nav { background: #101010; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(201,168,76,0.2); position: sticky; top: 0; z-index: 10; }
.living-nav-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); }
.living-nav-title span { color: var(--gold); }
.living-hero { background: #101010; padding: 3rem 2rem; position: relative; overflow: hidden; }
.living-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 70%); pointer-events: none; }
.living-hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
.living-hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3); color: var(--gold); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: 2px; margin-bottom: 1rem; }
.living-hero-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: var(--sand); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 0.75rem; }
.living-hero-title em { font-style: normal; color: var(--gold); }
.living-hero-sub { color: rgba(247,240,230,0.6); font-size: 1rem; max-width: 500px; line-height: 1.7; font-weight: 300; }
.living-body { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem; display: flex; flex-direction: column; gap: 3rem; }
.living-section { background: #141414; border: 1px solid rgba(201,168,76,0.12); border-radius: 2px; overflow: hidden; }
.living-section-header { padding: 1.5rem 2rem; border-bottom: 1px solid rgba(201,168,76,0.1); display: flex; align-items: center; gap: 1rem; }
.living-section-icon { font-size: 1.75rem; }
.living-section-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: var(--sand); }
.living-section-sub { font-size: 0.82rem; color: rgba(245,240,232,0.35); margin-top: 0.15rem; }
.living-section-sponsor { margin-left: auto; font-size: 0.72rem; color: rgba(245,240,232,0.35); font-style: italic; }
.living-items { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1.25rem; }
.living-item { display: flex; gap: 1rem; align-items: flex-start; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(201,168,76,0.08); }
.living-item:last-child { border-bottom: none; padding-bottom: 0; }
.living-item-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 0.1rem; }
.living-item-content { flex: 1; }
.living-item-title { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 600; color: var(--sand); margin-bottom: 0.35rem; }
.living-item-desc { font-size: 0.85rem; color: rgba(245,240,232,0.45); line-height: 1.6; }
.living-item-link { display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem; color: var(--gold); font-size: 0.8rem; font-weight: 600; text-decoration: none; }
.living-item-link:hover { text-decoration: underline; }
.living-resources-grid { padding: 1.5rem 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
@media (max-width: 600px) { .living-resources-grid { grid-template-columns: 1fr; } }
.living-resource-card { background: #1A1A1A; border: 1px solid rgba(201,168,76,0.1); border-radius: 2px; padding: 1rem 1.25rem; }
.living-resource-card-title { font-family: 'Playfair Display', serif; font-size: 0.85rem; font-weight: 700; color: var(--sand); margin-bottom: 0.5rem; }
.living-resource-row { display: flex; justify-content: space-between; font-size: 0.78rem; padding: 0.25rem 0; border-bottom: 1px solid rgba(201,168,76,0.08); color: rgba(245,240,232,0.5); }
.living-resource-row:last-child { border-bottom: none; }
.living-resource-phone { color: var(--gold); font-weight: 600; }
.living-tip-form { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
.living-tip-success { padding: 2rem; text-align: center; }
.living-tip-success-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.living-tip-success-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 800; color: var(--sand); }
.admin-gate { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #101010; }
.admin-gate-box { background: #141414; border-radius: 2px; padding: 3rem; max-width: 400px; width: 100%; text-align: center; box-shadow: 0 24px 80px rgba(0,0,0,0.4); }
.admin-gate-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }
.admin-gate-sub { color: rgba(245,240,232,0.35); font-size: 0.875rem; margin-bottom: 2rem; }
.admin-gate input { width: 100%; border: 1px solid rgba(201,168,76,0.12); border-radius: 2px; padding: 0.85rem 1rem; font-size: 1rem; font-family: 'Outfit', sans-serif; outline: none; margin-bottom: 1rem; text-align: center; letter-spacing: 0.1em; }
.admin-gate input:focus { border-color: var(--gold); }
.admin-gate .btn-primary { width: 100%; }
.admin-error { color: var(--gold); font-size: 0.82rem; margin-top: 0.5rem; }
.admin-page { min-height: 100vh; background: #0A0A0A; }
.admin-nav { background: #101010; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(201,168,76,0.2); }
.admin-nav-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); }
.admin-nav-title span { color: var(--gold); }
.admin-badge { background: var(--terra); color: white; font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 2px; letter-spacing: 0.08em; text-transform: uppercase; }
.admin-body { max-width: 1100px; margin: 0 auto; padding: 2.5rem 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
@media (max-width: 700px) { .admin-body { grid-template-columns: 1fr; } }
.admin-card { background: #141414; border-radius: 2px; padding: 1.75rem; border: 1px solid rgba(201,168,76,0.12); }
.admin-card-title { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 800; color: var(--sand); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem; }
.admin-row { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid rgba(201,168,76,0.08); font-size: 0.875rem; }
.admin-row:last-child { border-bottom: none; }
.admin-row-label { color: rgba(245,240,232,0.5); font-weight: 500; }
.admin-row-count { background: var(--terra); color: white; font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.65rem; border-radius: 2px; min-width: 32px; text-align: center; }
.admin-empty { color: rgba(245,240,232,0.35); font-size: 0.85rem; text-align: center; padding: 1.5rem 0; }
.admin-stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
.admin-stat-box { background: #101010; border-radius: 2px; padding: 1.25rem; text-align: center; }
.admin-stat-num { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 800; color: var(--gold); }
.admin-stat-label { font-size: 0.75rem; color: rgba(247,240,230,0.5); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.25rem; }
.admin-log { max-height: 220px; overflow-y: auto; }
.admin-log-row { display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid rgba(201,168,76,0.08); font-size: 0.8rem; }
.admin-log-term { color: var(--sand); font-weight: 500; }
.admin-log-time { color: rgba(245,240,232,0.35); }
.card-promo-banner { background: var(--gold); color: var(--navy); padding: 0.85rem 1.75rem; border-radius: 2px; font-size: 0.88rem; font-weight: 600; text-align: center; line-height: 1.6; letter-spacing: 0.01em; }
.cta-banner { background: #0C0C0C; padding: 5rem 2rem; text-align: center; position: relative; overflow: hidden; border-top: 1px solid rgba(201,168,76,0.08); }
.cta-banner::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 100% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%); pointer-events: none; }
.cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
.cta-title { font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 700; color: var(--sand); margin-bottom: 0.75rem; letter-spacing: -0.01em; }
.cta-sub { color: rgba(247,240,230,0.6); font-size: 1rem; margin-bottom: 2rem; font-weight: 300; }
.cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.cta-btn-main { background: var(--gold); color: #080808; border: none; padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.8rem; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; letter-spacing: 0.1em; text-transform: uppercase; }
.cta-btn-main:hover { background: var(--rust); }
.cta-btn-ghost { background: transparent; color: rgba(245,240,232,0.6); border: 1px solid rgba(201,168,76,0.2); padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.8rem; font-weight: 500; font-family: 'Outfit', sans-serif; cursor: pointer; letter-spacing: 0.06em; }
.cta-btn-ghost:hover { border-color: rgba(201,168,76,0.5); color: var(--gold); }
.footer { background: #050505; padding: 2rem; text-align: center; border-top: 1px solid rgba(201,168,76,0.08); }
.footer-logo { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--sand); margin-bottom: 0.5rem; letter-spacing: 0.02em; }
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
.contact-popup input, .contact-popup select, .contact-popup textarea { background: #1A1A1A !important; color: var(--sand) !important; border: 1px solid rgba(201,168,76,0.2) !important; border-radius: 2px !important; }
.contact-popup input::placeholder, .contact-popup textarea::placeholder { color: rgba(245,240,232,0.25) !important; }
.contact-popup .form-input, .contact-popup .form-select, .contact-popup .form-textarea { background: #1A1A1A !important; color: #F5F0E8 !important; border: 1px solid rgba(201,168,76,0.2) !important; border-radius: 2px !important; -webkit-appearance: none; }
.contact-popup .form-input::placeholder, .contact-popup .form-textarea::placeholder { color: rgba(245,240,232,0.3) !important; }
.contact-popup select option { background: #1A1A1A; color: #F5F0E8; }
/* ===================== SERVICE LANDING (hd-) ===================== */
.hd-page { font-family: 'Poppins', system-ui, sans-serif; color: #16273a; background: #edb036; }
.hd-page * { box-sizing: border-box; }
.hd-wrap { max-width: 1080px; margin: 0 auto; }
.hd-btn { display:inline-flex; align-items:center; gap:8px; background:#16273a; color:#f5ead4; padding:13px 22px; font-weight:700; font-size:0.82rem; text-transform:uppercase; letter-spacing:0.04em; border:none; border-radius:5px; cursor:pointer; font-family:inherit; text-decoration:none; transition:background .18s; }
.hd-btn:hover { background:#b8472a; }
.hd-btn-out { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#16273a; padding:13px 22px; font-weight:700; font-size:0.82rem; text-transform:uppercase; letter-spacing:0.04em; border:2.5px solid #16273a; border-radius:5px; cursor:pointer; font-family:inherit; text-decoration:none; transition:all .18s; }
.hd-btn-out:hover { background:#16273a; color:#f5ead4; }
.hd-hero { padding: 60px 24px 70px; text-align:center; }
.hd-pill { display:inline-block; background:#16273a; color:#edb036; font-size:0.7rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:7px 16px; border-radius:30px; margin-bottom:26px; }
.hd-h1 { font-weight:900; font-size:clamp(2.5rem,7vw,4.4rem); line-height:0.95; letter-spacing:0.005em; text-transform:uppercase; margin:0 auto 22px; max-width:15ch; }
.hd-h1 .hd-pop { color:#b8472a; }
.hd-sub { font-size:1.05rem; font-weight:500; color:#2c3a4d; max-width:520px; margin:0 auto 32px; line-height:1.5; }
.hd-cta-row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
.hd-stats { background:#16273a; display:grid; grid-template-columns:repeat(4,1fr); }
.hd-stat { padding:26px 14px; text-align:center; border-right:1px solid rgba(245,234,212,0.12); }
.hd-stat:last-child { border-right:none; }
.hd-stat-n { font-weight:900; font-size:2.2rem; color:#edb036; line-height:1; }
.hd-stat-l { font-size:0.7rem; font-weight:600; color:#c4b9a4; letter-spacing:0.08em; text-transform:uppercase; margin-top:8px; }
.hd-sec { padding:64px 24px; }
.hd-sec-gold { background:#edb036; }
.hd-sec-cream { background:#f5ead4; }
.hd-head { text-align:center; margin-bottom:44px; }
.hd-kick { font-size:0.72rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#b8472a; margin-bottom:14px; }
.hd-h2 { font-weight:900; font-size:clamp(1.9rem,4.5vw,2.6rem); letter-spacing:0.01em; text-transform:uppercase; line-height:1; margin:0 0 12px; }
.hd-lede { font-size:0.98rem; font-weight:500; max-width:460px; margin:0 auto; color:#4a5564; }
.hd-lede-gold { color:#5a4a28; }
.hd-proof { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
.hd-biz { background:#fff; border:2.5px solid #16273a; border-radius:10px; padding:20px 18px; }
.hd-biz-top { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
.hd-biz-av { width:40px; height:40px; border-radius:50%; background:#edb036; border:2px solid #16273a; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.95rem; color:#16273a; flex-shrink:0; }
.hd-biz-name { font-weight:700; font-size:0.9rem; line-height:1.1; color:#16273a; }
.hd-biz-handle { font-size:0.72rem; color:#b8472a; font-weight:600; word-break:break-all; }
.hd-biz-meta { font-size:0.75rem; color:#5a6472; font-weight:500; padding-top:12px; border-top:1.5px solid #e5d9bf; display:flex; justify-content:space-between; align-items:center; gap:6px; }
.hd-tag { font-size:0.58rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; padding:3px 8px; border-radius:4px; white-space:nowrap; }
.hd-tag-client { background:#16273a; color:#edb036; }
.hd-tag-feat { background:#f3d9a0; color:#8a5512; }
.hd-services { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; align-items:start; }
.hd-card { background:#fff; border:2.5px solid #16273a; border-radius:12px; padding:28px 24px; position:relative; }
.hd-card-feat { background:#16273a; }
.hd-card-feat .hd-card-title { color:#edb036; }
.hd-card-feat .hd-card-desc { color:#c4b9a4; }
.hd-card-feat .hd-li { color:#e5dcc9; border-color:rgba(245,234,212,0.15); }
.hd-card-feat .hd-li::before { color:#edb036; }
.hd-card-feat .hd-price { color:#f5ead4; }
.hd-card-feat .hd-price-sub { color:#c4b9a4; }
.hd-badge { position:absolute; top:-13px; left:24px; background:#b8472a; color:#fff; font-size:0.62rem; font-weight:700; padding:5px 13px; border-radius:4px; letter-spacing:0.05em; text-transform:uppercase; }
.hd-card-ico { width:46px; height:46px; border-radius:10px; background:#f3d9a0; display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-bottom:16px; }
.hd-card-feat .hd-card-ico { background:rgba(237,176,54,0.18); }
.hd-card-title { font-weight:800; font-size:1.25rem; text-transform:uppercase; letter-spacing:0.01em; margin:0 0 6px; color:#16273a; }
.hd-card-desc { font-size:0.85rem; font-weight:500; color:#5a6472; margin:0 0 18px; min-height:40px; line-height:1.45; }
.hd-price { font-weight:900; font-size:2.4rem; line-height:1; color:#16273a; }
.hd-price-sub { font-size:0.76rem; font-weight:500; color:#8a5512; margin-top:4px; }
.hd-list { list-style:none; padding:0; margin:18px 0 22px; }
.hd-li { font-size:0.82rem; font-weight:500; color:#3a4554; padding:8px 0; border-top:1.5px solid #e5d9bf; display:flex; align-items:flex-start; gap:9px; }
.hd-li::before { content:'✓'; color:#b8472a; font-weight:800; flex-shrink:0; }
.hd-card .hd-btn, .hd-card .hd-btn-out { width:100%; justify-content:center; }
.hd-card-feat .hd-btn { background:#edb036; color:#16273a; }
.hd-card-feat .hd-btn:hover { background:#fff; }
.hd-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-bottom:40px; }
.hd-step { text-align:center; }
.hd-chip { width:78px; height:78px; margin:0 auto 18px; background:#f5ead4; border:3px solid #16273a; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:2rem; position:relative; background-image:radial-gradient(circle, rgba(22,39,58,0.14) 1.2px, transparent 1.2px); background-size:7px 7px; }
.hd-chip.r1 { transform:rotate(-4deg); } .hd-chip.r2 { transform:rotate(3deg); } .hd-chip.r3 { transform:rotate(-2deg); } .hd-chip.r4 { transform:rotate(4deg); }
.hd-chip::after { content:''; position:absolute; top:-9px; left:50%; transform:translateX(-50%) rotate(-6deg); width:34px; height:15px; background:rgba(184,71,42,0.35); border-radius:2px; }
.hd-step-n { font-weight:900; font-size:0.72rem; color:#b8472a; letter-spacing:0.08em; margin-bottom:6px; }
.hd-step-t { font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.01em; margin-bottom:8px; color:#16273a; }
.hd-step-d { font-size:0.8rem; font-weight:500; color:#2c3a4d; line-height:1.45; max-width:160px; margin:0 auto; }
.hd-center { text-align:center; }
.hd-final { background:#b8472a; padding:70px 24px; text-align:center; }
.hd-final .hd-h2 { color:#f5ead4; }
.hd-final p { font-size:1rem; font-weight:500; color:#f3d9c0; max-width:440px; margin:0 auto 28px; }
.hd-btn-cream { display:inline-flex; align-items:center; gap:8px; background:#f5ead4; color:#b8472a; padding:14px 24px; font-weight:700; font-size:0.82rem; text-transform:uppercase; letter-spacing:0.04em; border:none; border-radius:5px; cursor:pointer; font-family:inherit; text-decoration:none; }
.hd-btn-cream:hover { background:#fff; }
.hd-btn-cream-out { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#f5ead4; padding:14px 24px; font-weight:700; font-size:0.82rem; text-transform:uppercase; letter-spacing:0.04em; border:2.5px solid #f5ead4; border-radius:5px; cursor:pointer; font-family:inherit; text-decoration:none; }
.hd-btn-cream-out:hover { background:#f5ead4; color:#b8472a; }
.hd-foot { background:#101d2c; color:#c4b9a4; padding:44px 24px 28px; }
.hd-foot-inner { max-width:1080px; margin:0 auto; display:flex; justify-content:space-between; flex-wrap:wrap; gap:24px; }
.hd-foot-logo { font-weight:800; font-size:1.2rem; text-transform:uppercase; color:#f5ead4; letter-spacing:-0.01em; }
.hd-foot-logo span { color:#edb036; }
.hd-foot-cols { display:flex; gap:48px; }
.hd-foot-col h4 { font-weight:800; font-size:0.72rem; color:#edb036; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 12px; }
.hd-foot-col a { display:block; font-size:0.8rem; font-weight:500; color:#c4b9a4; text-decoration:none; padding:3px 0; cursor:pointer; }
.hd-foot-col a:hover { color:#f5ead4; }
.hd-copy { max-width:1080px; margin:16px auto 0; padding-top:22px; border-top:1px solid rgba(245,234,212,0.1); font-size:0.72rem; font-weight:500; color:#7d8794; }
.hd-nav-link { color: var(--sand); text-decoration:none; font-weight:600; cursor:pointer; }
.hd-nav-link:hover { color: var(--gold); }
.hd-nav-cta { background: var(--gold); color:#101010; padding:0.4rem 0.95rem; border-radius:4px; font-weight:700; text-decoration:none; font-size:0.82rem; white-space:nowrap; }
.hd-nav-cta:hover { background:#fff; }
@media (max-width: 860px) {
  .hd-services, .hd-proof, .hd-steps { grid-template-columns:1fr 1fr; }
  .hd-stats { grid-template-columns:1fr 1fr; }
  .hd-stat:nth-child(2) { border-right:none; }
  .hd-stat { border-bottom:1px solid rgba(245,234,212,0.12); }
}
@media (max-width: 560px) {
  .hd-services, .hd-proof, .hd-steps { grid-template-columns:1fr; }
  .hd-foot-inner { flex-direction:column; }
}
.hd-more { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.hd-more .hd-card { display:flex; flex-direction:column; }
.hd-more .hd-card .hd-card-desc { min-height:auto; }
.hd-more .hd-card .hd-btn-out { margin-top:auto; }
@media (max-width: 560px) { .hd-more { grid-template-columns:1fr; } }
.hd-social { display:flex; gap:10px; margin-top:4px; }
.hd-foot-col .hd-social a { display:flex; align-items:center; justify-content:center; width:36px; height:36px; padding:0; border-radius:8px; background:rgba(245,234,212,0.08); color:#c4b9a4; }
.hd-foot-col .hd-social a:hover { background:#edb036; color:#101d2c; }
.hd-social a svg { width:18px; height:18px; display:block; }
.hd-or { text-align:center; font-size:0.74rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#8a5512; margin:30px 0 16px; }
.hd-month { background:#16273a; border-radius:14px; padding:26px 30px; display:flex; gap:26px; align-items:center; justify-content:space-between; flex-wrap:wrap; }
.hd-month-l { flex:1; min-width:240px; }
.hd-month-label { font-size:0.7rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#edb036; margin-bottom:6px; }
.hd-month-name { font-weight:900; font-size:1.5rem; text-transform:uppercase; color:#f5ead4; letter-spacing:0.01em; margin-bottom:12px; }
.hd-month-feat { list-style:none; padding:0; margin:0; }
.hd-month-feat li { font-size:0.84rem; font-weight:500; color:#e5dcc9; padding:4px 0; display:flex; gap:9px; align-items:flex-start; }
.hd-month-feat li::before { content:'✓'; color:#edb036; font-weight:800; flex-shrink:0; }
.hd-month-r { text-align:center; display:flex; flex-direction:column; align-items:center; min-width:170px; }
.hd-month-price { font-weight:900; font-size:2.8rem; color:#edb036; line-height:1; }
.hd-month-price span { font-size:1rem; font-weight:600; color:#c4b9a4; }
.hd-month-note { font-size:0.72rem; font-weight:500; color:#c4b9a4; margin:8px 0 16px; max-width:180px; }
.hd-month-r .hd-btn { background:#edb036; color:#16273a; }
.hd-month-r .hd-btn:hover { background:#fff; }
@media (max-width: 560px) { .hd-month { flex-direction:column; align-items:stretch; text-align:center; } .hd-month-feat li { justify-content:center; } .hd-month-r { width:100%; } }
.hd-month-email { display:inline-block; margin-top:10px; font-size:0.72rem; font-weight:600; color:#c4b9a4; text-decoration:none; }
.hd-month-email:hover { color:#edb036; text-decoration:underline; }
/* END OF CSS */
`;


const SHEETS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTz1vfiK4PWmVtuT-m6SYqs7pwJu-Ksel6ZqpAbj5rJlNXuFhvXUYP5oneFAWvIIs7lAsT30iKMTnUd/pub?gid=0&single=true&output=csv";

const parseCSV = (text) => {
  const lines = text.trim().split("\n");
  const parseRow = (line) => {
    const result = [];
    let cur = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { inQuotes = !inQuotes; }
      else if (ch === "," && !inQuotes) { result.push(cur.trim()); cur = ""; }
      else { cur += ch; }
    }
    result.push(cur.trim());
    return result;
  };
  const headers = parseRow(lines[0]);
  return lines.slice(1).map(line => {
    const vals = parseRow(line);
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = (vals[i] || "").trim(); });
    return {
      id: parseInt(obj.id) || 0,
      name: obj.name || "",
      category: obj.category || "",
      city: obj.city || "",
      phone: obj.phone || "",
      email: obj.email || "",
      website: obj.website || "",
      address: obj.address || "",
      services: obj.services ? obj.services.split(",").map(s => s.trim()) : [],
      hours: obj.hours || "",
      description: obj.description || "",
      verified: obj.verified === "TRUE",
      tier: obj.tier || "free",
      dateAdded: obj.dateAdded || "",
      lastVerified: obj.lastVerified || "",
      expiresOn: obj.expiresOn || "",
      baseThumbsUp: parseInt(obj.baseThumbsUp) || 0,
      instagram: obj.instagram || "",
      facebook: obj.facebook || "",
      otherSocial: obj.otherSocial || "",
      license: obj.license || "",
      contact: obj.contact || "",
      cardFront: obj.cardFront ? "/cards/" + obj.cardFront : null,
      cardBack: obj.cardBack ? "/cards/" + obj.cardBack : null,
      carousel: obj.carousel === "TRUE",
      featured: obj.tier === "featured" || obj.tier === "premium",
      initials: obj.name ? obj.name.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase() : "??" ,
      color: ["#C4603A","#1B3A5C","#4A7A52","#8B3A1A","#4A6B3C","#6B4A7A","#3C6B7A","#7A4A3C"][obj.id % 8] || "#C4603A",
    };
  });
};

export default function HighDesertHub() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeCity, setActiveCity] = useState("All Cities");
  const [searchQuery, setSearchQuery] = useState("");
  const [sheetsData, setSheetsData] = useState(null);

  useEffect(() => {
    fetch(SHEETS_URL)
      .then(r => r.text())
      .then(text => {
        const parsed = parseCSV(text);
        if (parsed && parsed.length > 0) setSheetsData(parsed);
      })
      .catch(() => {});
  }, []);

  const ACTIVE_BUSINESSES = sheetsData || BUSINESSES;
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
  // ============ URL ROUTING (added for SEO) ============
  // Read the URL path on first load and whenever it changes (back/forward buttons)
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const match = path.match(/^\/biz\/([a-z0-9-]+)\/?$/);
      if (match) {
        const slug = match[1];
        // businesses comes from the Google Sheet fetch already in this component
        const biz = ACTIVE_BUSINESSES.find(b => b.slug === slug);
        if (biz) {
          setSelectedBiz(biz);
          document.title = `${biz.name} | High Desert Hub`;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute('content', biz.description || `${biz.name} in the High Desert. View contact info and services on High Desert Hub.`);
          }
        }
      } else {
        // No /biz/ in URL, make sure no panel is open
        setSelectedBiz(null);
        document.title = "High Desert Hub | Local Business Directory";
      }
    };
    handleUrlChange(); // Run once on load
    window.addEventListener('popstate', handleUrlChange); // Run on back/forward
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [ACTIVE_BUSINESSES]); // Re-run when businesses load from sheet
  // ============ END URL ROUTING ============
  const [cardViewer, setCardViewer] = useState(null);
  const [showListForm, setShowListForm] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showLiving, setShowLiving] = useState(false);
  const [contactTier, setContactTier] = useState('');

  const handlePricingContact = (tier) => {
    setContactTier(tier);
    setShowContactPopup(true);
  };

  const [emailCopied, setEmailCopied] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [page, setPage] = useState('home');

  const scrollToCTA = () => {
    document.querySelector('.cta-banner').scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = () => {
    const email = 'highdeserthub@gmail.com';
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

  const carouselItems = ACTIVE_BUSINESSES.filter(b => b.carousel);


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
  const [formData, setFormData] = useState({ name:'', phone:'', email:'', address:'', city:'', category:'', services:'', hours:'', website:'', description:'', socialPlatform:'', socialHandle:'', socialPlatform2:'', socialHandle2:'' });
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
      social: formData.socialPlatform && formData.socialHandle ? `${formData.socialPlatform}: ${formData.socialHandle}` : 'Not provided',
      social2: formData.socialPlatform2 && formData.socialHandle2 ? `${formData.socialPlatform2}: ${formData.socialHandle2}` : 'Not provided',
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
  const [graphicsForm, setGraphicsForm] = useState({ bizName:'', contact:'', bizType:'', need:'', description:'', timeline:'', budget:'', social:'' });
  const [graphicsSubmitted, setGraphicsSubmitted] = useState(false);
  const [graphicsLoading, setGraphicsLoading] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [adminInput, setAdminInput] = useState('');
  const handleGraphicsSubmit = () => {
    if (!graphicsForm.bizName || !graphicsForm.contact) return;
    setGraphicsLoading(true);
    window.emailjs.send('service_19u4v9n', 'template_x2d6dlk', {
      business_name: 'GRAPHICS REQUEST - ' + graphicsForm.bizName,
      phone: graphicsForm.contact,
      services: graphicsForm.need || 'Not specified',
      email: graphicsForm.bizType || 'N/A',
      city: graphicsForm.timeline || 'N/A',
      category: graphicsForm.budget || 'N/A',
      website: graphicsForm.social || 'N/A',
      address: graphicsForm.description || 'N/A',
      hours: 'N/A',
      description: 'N/A',
      social: 'N/A',
      social2: 'N/A',
    }).then(() => {
      setGraphicsSubmitted(true);
      setGraphicsLoading(false);
    }).catch(() => {
      setGraphicsLoading(false);
    });
  };
  const [adminError, setAdminError] = useState(false);
  const [searchLog, setSearchLog] = useState([]);
  const [viewLog, setViewLog] = useState({});
  const [categoryLog, setCategoryLog] = useState({});
  const [callLog, setCallLog] = useState({});
  const ADMIN_PASSWORD = 'Test1';

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

  const filtered = ACTIVE_BUSINESSES.filter((b) => {
    const catMatch = !activeCategory || b.category === activeCategory;
    const cityMatch = activeCity === "All Cities" || b.city === activeCity;
    const query = searchInput.toLowerCase();
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
    const hasSocial = !!(b.instagram || b.facebook || b.otherSocial);
    const socialMatch = !socialOnly || hasSocial;
    const wb = (text, term) => {
      if (!text || !term) return false;
      const t = text.toLowerCase();
      const q = term.toLowerCase();
      let i = t.indexOf(q);
      while (i !== -1) {
        const pre = i === 0 || !/[a-z0-9]/i.test(t[i-1]);
        const post = i+q.length >= t.length || !/[a-z0-9]/i.test(t[i+q.length]);
        if (pre && post) return true;
        i = t.indexOf(q, i+1);
      }
      return false;
    };
    const hits = (term) => {
      const exp = synonyms[term] || [term];
      return exp.some(e =>
        wb(b.name, e) ||
        b.services.some(s => wb(s, e)) ||
        wb(b.category, e) ||
        wb(b.city, e) ||
        (b.contact && wb(b.contact, e))
      );
    };
    let searchMatch = true;
    if (query) {
      if (/\s+and\s+/i.test(query)) {
        searchMatch = query.split(/\s+and\s+/i).every(p => hits(p.trim()));
      } else if (/\s+or\s+/i.test(query)) {
        searchMatch = query.split(/\s+or\s+/i).some(p => hits(p.trim()));
      } else {
        searchMatch = hits(query);
      }
    }
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
        <div className="nav-logo" style={{cursor:"pointer"}} onClick={() => { setActiveCategory(null); setActiveCity("All Cities"); setSearchInput(""); setShowLiving(false); setPage('home'); window.scrollTo({top:0,behavior:"smooth"}); }}>High<span>Desert</span>Hub</div>
        <ul className="nav-links">
          <li><a href="#" className="hd-nav-link" onClick={(e) => { e.preventDefault(); setShowLiving(false); setPage('home'); window.scrollTo({top:0,behavior:"smooth"}); }}>Services</a></li>
          <li><a href="#" className="hd-nav-link" onClick={(e) => { e.preventDefault(); setShowLiving(false); setPage('directory'); window.scrollTo({top:0,behavior:"smooth"}); }}>Directory</a></li>
          <li><a href="#" className="nav-btn-gold" onClick={(e) => { e.preventDefault(); setShowLiving(true); }}>High Desert Living</a></li>
          <li><a href="#" className="nav-btn-terra">Jobs</a></li>
          <li><a className="hd-nav-cta" href="mailto:highdeserthub@gmail.com?subject=I%20want%20to%20get%20featured%20on%20High%20Desert%20Hub&body=Hi!%20I%20run%20a%20local%20business%20and%20I'd%20like%20to%20get%20featured.%0D%0A%0D%0ABusiness%20name:%0D%0AInstagram:%0D%0AWhat%20I%20sell:%0D%0ACity:">Get featured</a></li>
        </ul>
      </nav>

      {showBanner && (
        <div className="announcement-banner">
          <span className="announcement-banner-text">
            <strong>Notice:</strong> We are actively expanding our platform. Some features are being upgraded - thank you for your patience as we improve your experience.
          </span>
          <button className="announcement-banner-dismiss" onClick={() => setShowBanner(false)}>✕</button>
        </div>
      )}

      {page === 'home' && (
        <div className="hd-page">

          <section className="hd-hero">
            <span className="hd-pill">Victorville · Hesperia · Apple Valley · Adelanto</span>
            <h1 className="hd-h1">Grow your business in the <span className="hd-pop">High Desert</span></h1>
            <p className="hd-sub">Done-for-you promo videos and cross-platform pushes that get local businesses seen. No contracts, no lock-ins.</p>
            <div className="hd-cta-row">
              <button className="hd-btn" onClick={() => { const el = document.getElementById('hd-services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>See pricing →</button>
              <button className="hd-btn-out" onClick={() => { setShowLiving(false); setPage('directory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Browse directory</button>
            </div>
          </section>

          <div className="hd-stats">
            <div className="hd-stat"><div className="hd-stat-n">98</div><div className="hd-stat-l">Local businesses</div></div>
            <div className="hd-stat"><div className="hd-stat-n">232</div><div className="hd-stat-l">IG community</div></div>
            <div className="hd-stat"><div className="hd-stat-n">12</div><div className="hd-stat-l">Categories</div></div>
            <div className="hd-stat"><div className="hd-stat-n">4</div><div className="hd-stat-l">Cities served</div></div>
          </div>

          <section className="hd-sec hd-sec-gold">
            <div className="hd-head">
              <div className="hd-kick">Real local businesses</div>
              <h2 className="hd-h2">Who we're putting on the map</h2>
              <p className="hd-lede hd-lede-gold">Businesses we've featured and pushed across our channels.</p>
            </div>
            <div className="hd-wrap hd-proof">
              <div className="hd-biz"><div className="hd-biz-top"><div className="hd-biz-av">AG</div><div><div className="hd-biz-name">Antojos GDL</div><div className="hd-biz-handle">@antojosgdl_</div></div></div><div className="hd-biz-meta">Victorville <span className="hd-tag hd-tag-client">Bundle client</span></div></div>
              <div className="hd-biz"><div className="hd-biz-top"><div className="hd-biz-av">SH</div><div><div className="hd-biz-name">Sweet Home</div><div className="hd-biz-handle">@sweet_home_sourdough</div></div></div><div className="hd-biz-meta">Hesperia <span className="hd-tag hd-tag-feat">Featured</span></div></div>
              <div className="hd-biz"><div className="hd-biz-top"><div className="hd-biz-av">JM</div><div><div className="hd-biz-name">Jardin de Matcha</div><div className="hd-biz-handle">@jardin_de_matcha</div></div></div><div className="hd-biz-meta">Apple Valley <span className="hd-tag hd-tag-feat">Featured</span></div></div>
              <div className="hd-biz"><div className="hd-biz-top"><div className="hd-biz-av">TI</div><div><div className="hd-biz-name">Treats by Isha</div><div className="hd-biz-handle">@treatsby.isha</div></div></div><div className="hd-biz-meta">Hesperia <span className="hd-tag hd-tag-feat">Featured</span></div></div>
            </div>
          </section>

          <section className="hd-sec hd-sec-cream" id="hd-services">
            <div className="hd-head">
              <div className="hd-kick">Grow your business</div>
              <h2 className="hd-h2">Pick your push</h2>
              <p className="hd-lede">Grab a one-time push to get seen, or go monthly for ongoing growth.</p>
            </div>
            <div className="hd-wrap hd-services">
              <div className="hd-card">
                <div className="hd-card-ico">🎬</div>
                <h3 className="hd-card-title">Promo video</h3>
                <p className="hd-card-desc">A short-form video built for your business and your audience.</p>
                <div className="hd-price">$150</div>
                <div className="hd-price-sub">One-time · yours to keep</div>
                <ul className="hd-list">
                  <li className="hd-li">Scripted to your brand</li>
                  <li className="hd-li">Reels-ready format</li>
                  <li className="hd-li">Reusable anywhere</li>
                </ul>
                <a className="hd-btn-out" href="mailto:highdeserthub@gmail.com?subject=I%20want%20a%20promo%20video%20(%24150)&body=Hi!%20I'd%20like%20a%20promo%20video%20for%20my%20business.%0D%0A%0D%0ABusiness%20name:%0D%0AInstagram:%0D%0AWhat%20I%20sell:">Get a promo video</a>
              </div>
              <div className="hd-card hd-card-feat">
                <div className="hd-badge">Most popular</div>
                <div className="hd-card-ico">🚀</div>
                <h3 className="hd-card-title">The bundle</h3>
                <p className="hd-card-desc">Promo video plus a full cross-platform push. The complete launch.</p>
                <div className="hd-price">$200</div>
                <div className="hd-price-sub">Save $25 vs. à la carte</div>
                <ul className="hd-list">
                  <li className="hd-li">Everything in the video</li>
                  <li className="hd-li">Everything in the push</li>
                  <li className="hd-li">Priority directory spot</li>
                </ul>
                <a className="hd-btn" href="mailto:highdeserthub@gmail.com?subject=I%20want%20the%20bundle%20(%24200)&body=Hi!%20I'd%20like%20the%20bundle%20(promo%20video%20%2B%20cross-platform%20push).%0D%0A%0D%0ABusiness%20name:%0D%0AInstagram:%0D%0AWhat%20I%20sell:">Get the bundle</a>
              </div>
              <div className="hd-card">
                <div className="hd-card-ico">📣</div>
                <h3 className="hd-card-title">Cross-platform</h3>
                <p className="hd-card-desc">Your content posted across Instagram, TikTok, Facebook, and the Hub.</p>
                <div className="hd-price">$75</div>
                <div className="hd-price-sub">One-time launch</div>
                <ul className="hd-list">
                  <li className="hd-li">Posts + stories on each platform</li>
                  <li className="hd-li">Listed in the directory</li>
                  <li className="hd-li">Tagged &amp; credited</li>
                </ul>
                <a className="hd-btn-out" href="mailto:highdeserthub@gmail.com?subject=I%20want%20a%20cross-platform%20push%20(%2475)&body=Hi!%20I'd%20like%20a%20cross-platform%20push.%0D%0A%0D%0ABusiness%20name:%0D%0AInstagram:%0D%0AWhat%20I%20sell:">Get a push</a>
              </div>
            </div>
            <div className="hd-or">or go monthly</div>
            <div className="hd-wrap hd-month">
              <div className="hd-month-l">
                <div className="hd-month-label">Ready for ongoing growth?</div>
                <div className="hd-month-name">Monthly growth plan</div>
                <ul className="hd-month-feat">
                  <li>4 short-form videos every month</li>
                  <li>Posted across Instagram, TikTok &amp; Facebook</li>
                  <li>Sales-focused stories + featured directory spot</li>
                </ul>
              </div>
              <div className="hd-month-r">
                <div className="hd-month-price">$400<span>/mo</span></div>
                <div className="hd-month-note">About $100 a video, and we run it all month.</div>
                <a className="hd-btn" href="https://calendar.app.google/PNVthCk3N2pXe9sq7" target="_blank" rel="noopener noreferrer">Book a call</a>
                <a className="hd-month-email" href="mailto:highdeserthub@gmail.com?subject=I'm%20interested%20in%20the%20monthly%20growth%20plan%20(%24400%2Fmo)&body=Hi!%20I'd%20like%20to%20talk%20about%20the%20monthly%20growth%20plan.%0D%0A%0D%0ABusiness%20name:%0D%0AInstagram:%0D%0AWhat%20I%20sell:">or email us instead</a>
              </div>
            </div>
          </section>

          <section className="hd-sec hd-sec-gold">
            <div className="hd-head">
              <div className="hd-kick">How it works</div>
              <h2 className="hd-h2">From DM to done</h2>
            </div>
            <div className="hd-wrap hd-steps">
              <div className="hd-step"><div className="hd-chip r1">💬</div><div className="hd-step-n">STEP 01</div><div className="hd-step-t">Reach out</div><div className="hd-step-d">Email or DM us what you sell and who you want to reach.</div></div>
              <div className="hd-step"><div className="hd-chip r2">💡</div><div className="hd-step-n">STEP 02</div><div className="hd-step-t">We plan &amp; script</div><div className="hd-step-d">We research your niche and script it for you.</div></div>
              <div className="hd-step"><div className="hd-chip r3">📸</div><div className="hd-step-n">STEP 03</div><div className="hd-step-t">Film &amp; edit</div><div className="hd-step-d">You film the quick parts, we cut it together.</div></div>
              <div className="hd-step"><div className="hd-chip r4">🚀</div><div className="hd-step-n">STEP 04</div><div className="hd-step-t">Push it live</div><div className="hd-step-d">We launch it across every channel and the Hub.</div></div>
            </div>
            <div className="hd-center"><a className="hd-btn" href="mailto:highdeserthub@gmail.com?subject=I%20want%20to%20get%20featured%20on%20High%20Desert%20Hub&body=Hi!%20I%20run%20a%20local%20business%20and%20I'd%20like%20to%20get%20featured.%0D%0A%0D%0ABusiness%20name:%0D%0AInstagram:%0D%0AWhat%20I%20sell:%0D%0ACity:">Book your push →</a></div>
          </section>

          <section className="hd-sec hd-sec-cream">
            <div className="hd-head">
              <div className="hd-kick">More than social</div>
              <h2 className="hd-h2">More ways we help local businesses</h2>
              <p className="hd-lede">Got the audience but no website, or buried in busywork? We can fix that too.</p>
            </div>
            <div className="hd-wrap hd-more">
              <div className="hd-card">
                <div className="hd-card-ico">🌐</div>
                <h3 className="hd-card-title">Build your website</h3>
                <p className="hd-card-desc">No website, or one stuck in 2010? We build a clean, fast site so the people who find you online actually trust you and reach out.</p>
                <a className="hd-btn-out" href="mailto:highdeserthub@gmail.com?subject=I'm%20interested%20in%20a%20website&body=Hi!%20I'd%20like%20to%20talk%20about%20a%20website%20for%20my%20business.%0D%0A%0D%0ABusiness%20name:%0D%0ADo%20you%20have%20a%20site%20now?:%0D%0AWhat%20I%20sell:">Ask about a website</a>
              </div>
              <div className="hd-card">
                <div className="hd-card-ico">⚙️</div>
                <h3 className="hd-card-title">Automate the busywork</h3>
                <p className="hd-card-desc">Drowning in DMs, bookings, and follow-ups? We set up simple systems that handle the repetitive stuff, so you get hours back every week.</p>
                <a className="hd-btn-out" href="mailto:highdeserthub@gmail.com?subject=I'm%20interested%20in%20automation&body=Hi!%20I'd%20like%20to%20talk%20about%20automating%20some%20of%20my%20busywork.%0D%0A%0D%0ABusiness%20name:%0D%0AWhat%20takes%20up%20most%20of%20your%20time?:%0D%0AWhat%20I%20sell:">Ask about automation</a>
              </div>
            </div>
          </section>

          <section className="hd-final">
            <h2 className="hd-h2">Ready to get seen?</h2>
            <p>Email highdeserthub@gmail.com or DM @highdeserthub - we usually reply the same day.</p>
            <div className="hd-cta-row">
              <a className="hd-btn-cream" href="https://www.instagram.com/highdeserthub/" target="_blank" rel="noopener noreferrer">Message us on Instagram</a>
              <a className="hd-btn-cream-out" href="mailto:highdeserthub@gmail.com?subject=Question%20for%20High%20Desert%20Hub">Email us</a>
            </div>
          </section>

          <footer className="hd-foot">
            <div className="hd-foot-inner">
              <div>
                <div className="hd-foot-logo">High<span>Desert</span>Hub</div>
                <p style={{fontSize:'0.78rem',fontWeight:500,margin:'10px 0 0',maxWidth:'240px',color:'#7d8794'}}>Built in the Victor Valley, for the High Desert.</p>
              </div>
              <div className="hd-foot-cols">
                <div className="hd-foot-col"><h4>Explore</h4>
                  <a onClick={() => { const el = document.getElementById('hd-services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
                  <a onClick={() => { setShowLiving(false); setPage('directory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Directory</a>
                  <a onClick={() => setShowLiving(true)}>High Desert Living</a>
                </div>
                <div className="hd-foot-col"><h4>Connect</h4>
                  <div className="hd-social">
                    <a href="https://www.instagram.com/highdeserthub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.5a1 1 0 100 2 1 1 0 000-2z"/></svg></a>
                    <a href="https://www.tiktok.com/@highdeserthub" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 01-1.01-2.82h-3.21v12.86a2.59 2.59 0 01-2.59 2.46 2.59 2.59 0 01-2.59-2.59 2.59 2.59 0 012.59-2.59c.27 0 .53.04.78.12v-3.28a5.86 5.86 0 00-.78-.05A5.87 5.87 0 004 15.71a5.87 5.87 0 005.87 5.87 5.87 5.87 0 005.87-5.87V9.4a7.35 7.35 0 004.29 1.37V7.56a4.28 4.28 0 01-3.3-1.74z"/></svg></a>
                    <a href="https://www.facebook.com/profile.php?id=61574362952285" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
                    <a href="mailto:highdeserthub@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 12V8.24l-8 6.99-8-6.99V18h16z"/></svg></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hd-copy">© 2026 High Desert Hub · Made in the High Desert.</div>
          </footer>

        </div>
      )}

      {page === 'directory' && (<>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">📍 Victorville · Hesperia · Apple Valley · Adelanto</div>
          <h1 className="hero-title">Your High Desert<br />Business Directory</h1>
          <p className="hero-sub">Helping local businesses get found. Connect with local services across Victorville, Hesperia, Apple Valley, and Adelanto.</p>
          <div style={{display:"flex",gap:"0.75rem",margin:"1.5rem 0",flexWrap:"wrap"}}>
            <button className="cta-btn-main" onClick={() => { setShowListForm(true); setFormSubmitted(false); }}>List My Business - Free</button>
            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)} style={{borderColor:"var(--gold)",color:"var(--gold)"}}>Get More Visibility →</button>
          </div>
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
            <div className="carousel-track-outer">
              <div className="carousel-track" style={{transform:`translateX(-${carouselIndex * 100}%)`}}>
                {carouselItems.map((biz) => (
                  <div key={biz.id} className="carousel-card" onClick={() => { setSelectedBiz(biz); logView(biz); }}>
                    <div className="carousel-card-top">
                      <div className="carousel-avatar" style={{background: biz.color}}>{biz.initials}</div>
                      <div style={{flex:1}}>
                        <div className="carousel-biz-name">{biz.name}</div>
                        <div className="carousel-biz-meta">📍 {biz.city} · {CATEGORIES.find(c => c.id === biz.category)?.label}</div>
                        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap",marginTop:"0.25rem"}}>
                          <div className="carousel-spotlight-badge">✦ Spotlight</div>
                          <button className="carousel-view-btn" onClick={e => { e.stopPropagation(); setSelectedBiz(biz); }}>View Details →</button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-desc">{biz.description}</div>
                    <div className="carousel-footer">
                      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"}}>
                        <a className="carousel-phone" href={`tel:${biz.phone}`} onClick={e => e.stopPropagation()}>{biz.phone}</a>
                        {biz.verified
                          ? <span className="verified-badge">✓ Verified</span>
                          : <span className="unverified-badge">Unverified</span>
                        }
                        {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={`https://instagram.com/${biz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.2rem 0.4rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          </a>
                        )}
                        {biz.facebook && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={biz.facebook.startsWith('http') ? biz.facebook : `https://facebook.com/${biz.facebook.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#1877F2",padding:"0.2rem 0.4rem",background:"rgba(24,119,242,0.1)",border:"1px solid rgba(24,119,242,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                onClick={() => { setSelectedBiz(biz); logView(biz); if(window.gtag) window.gtag('event', 'listing_view', { business_name: biz.name, business_city: biz.city, business_category: biz.category, business_tier: biz.tier }); }}
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
                  <div style={{display:"inline-flex",alignItems:"center",gap:"0.4rem"}}>
                    {biz.verified
                      ? <span className="verified-badge">✓ Verified</span>
                      : <span className="unverified-badge">Unverified</span>
                    }
                    {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
                      <a href={`https://instagram.com/${biz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.2rem 0.4rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </a>
                    )}
                    {biz.facebook && ['standard','featured','premium'].includes(biz.tier) && (
                      <a href={biz.facebook.startsWith('http') ? biz.facebook : `https://facebook.com/${biz.facebook.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#1877F2",padding:"0.2rem 0.4rem",background:"rgba(24,119,242,0.1)",border:"1px solid rgba(24,119,242,0.3)",borderRadius:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </a>
                    )}
                  </div>
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
          <p className="cta-sub">Get listed on the High Desert's #1 local directory. Free to start - be seen by thousands of residents.</p>
          <div className="cta-btns">
            <button className="cta-btn-main" onClick={() => { setShowListForm(true); setFormSubmitted(false); }}>List My Business - Free</button>
            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)} style={{borderColor:"var(--gold)",color:"var(--gold)"}}>Get More Visibility →</button>
            <button className="cta-btn-ghost" onClick={() => { handlePricingContact("Social Media Graphics"); }}>🎨 Get Social Media Graphics</button>
            <button className="cta-btn-ghost" onClick={() => setShowLiving(true)}>🏡 High Desert Living</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">High<span>Desert</span>Hub</div>
        <p className="footer-sub">Serving Victorville · Hesperia · Apple Valley · Adelanto</p>
        <p className="footer-disclaimer">Listings on HighDesertHub.com are provided for informational purposes only. We do not verify, endorse, or guarantee any business listed. Please conduct your own due diligence.</p>
      </footer>
      </>)}

      {/* BUSINESS MODAL */}
      {selectedBiz && (
        <div className="modal-overlay" onClick={() => setSelectedBiz(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{position:'relative'}}>
              <div className="modal-avatar" style={{ background: selectedBiz.color }}>{selectedBiz.initials}</div>
              <div>
                <div className="modal-name">{selectedBiz.name}</div>
                <div className="modal-city">📍 {selectedBiz.city} · {CATEGORIES.find(c => c.id === selectedBiz.category)?.label}</div>
              </div>
              {selectedBiz.carousel && (
                <div className="spotlight-card-badge" style={{position:'absolute',top:'1rem',right:'1rem'}}>⭐ Spotlight</div>
              )}
            </div>
            <div className="modal-body">
              {selectedBiz.contact && <div className="modal-row"><span className="modal-row-label">Contact</span><span className="modal-row-val">{selectedBiz.contact}</span></div>}
              <div className="modal-row"><span className="modal-row-label">Phone</span><span className="modal-row-val link">{selectedBiz.phone}</span></div>
              {selectedBiz.textNumber && <div className="modal-row"><span className="modal-row-label">Text Only</span><span className="modal-row-val link">{selectedBiz.textNumber}</span></div>}
              {selectedBiz.email && (
  <div className="modal-row">
    <span className="modal-row-label">Email</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <span
          className="modal-row-val link"
          style={{cursor:"pointer",textDecoration:"underline",userSelect:"all"}}
          onClick={() => {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(selectedBiz.email).then(() => alert("Email copied: " + selectedBiz.email));
            } else {
              const el = document.createElement("textarea");
              el.value = selectedBiz.email;
              document.body.appendChild(el);
              el.select();
              document.execCommand("copy");
              document.body.removeChild(el);
              alert("Email copied: " + selectedBiz.email);
            }
          }}
          title="Click to copy email"
        >
          📋 {selectedBiz.email}
        </span>
      : <span className="modal-row-val">{selectedBiz.email}</span>
    }
  </div>
)}
              {selectedBiz.website && (
  <div className="modal-row">
    <span className="modal-row-label">Website</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <a href={selectedBiz.website.startsWith('http') ? selectedBiz.website : `https://${selectedBiz.website}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link">{selectedBiz.website}</a>
      : <span className="modal-row-val">{selectedBiz.website}</span>
    }
  </div>
)}
              {selectedBiz.instagram && (
  <div className="modal-row">
    <span className="modal-row-label">Instagram</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <a href={`https://instagram.com/${selectedBiz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          {selectedBiz.instagram}
        </a>
      : <span className="modal-row-val">{selectedBiz.instagram}</span>
    }
  </div>
)}
              {selectedBiz.facebook && ['standard','featured','premium'].includes(selectedBiz.tier) && (
  <div className="modal-row">
    <span className="modal-row-label">Facebook</span>
    <a href={selectedBiz.facebook.startsWith('http') ? selectedBiz.facebook : `https://facebook.com/${selectedBiz.facebook.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#1877F2"}}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      {selectedBiz.facebook}
    </a>
  </div>
)}
              {selectedBiz.otherSocial && ['standard','featured','premium'].includes(selectedBiz.tier) && (() => {
  const raw = selectedBiz.otherSocial;
  const lower = raw.toLowerCase();
  let platform = "Other Social";
  let href = raw.startsWith('http') ? raw : `https://${raw}`;
  let icon = null;
  if (lower.includes('tiktok')) {
    platform = "TikTok";
    href = raw.startsWith('http') ? raw : `https://tiktok.com/@${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#010101"}}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z"/></svg>;
  } else if (lower.includes('youtube')) {
    platform = "YouTube";
    href = raw.startsWith('http') ? raw : `https://youtube.com/@${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#FF0000"}}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>;
  } else if (lower.includes('twitter') || lower.includes('x.com')) {
    platform = "X (Twitter)";
    href = raw.startsWith('http') ? raw : `https://x.com/${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#000000"}}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
  } else if (lower.includes('linkedin')) {
    platform = "LinkedIn";
    href = raw.startsWith('http') ? raw : `https://linkedin.com/in/${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#0A66C2"}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
  }
  return (
    <div className="modal-row">
      <span className="modal-row-label">{platform}</span>
      <a href={href} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
        {icon}
        {raw}
      </a>
    </div>
  );
})()}
              {selectedBiz.address && (
  <div className="modal-row">
    <span className="modal-row-label">Address</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <a href={`https://maps.google.com/?q=${encodeURIComponent(selectedBiz.address)}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{textDecoration:"underline",cursor:"pointer"}}>
          📍 {selectedBiz.address}
        </a>
      : <span className="modal-row-val">{selectedBiz.address}</span>
    }
  </div>
)}
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
              <button className="btn-card" onClick={() => { setCardViewer(selectedBiz); if(window.gtag) window.gtag('event', 'card_view', { business_name: selectedBiz.name, business_city: selectedBiz.city, business_category: selectedBiz.category, business_tier: selectedBiz.tier }); }}>🪪 View Card</button>
              <button className="btn-secondary" onClick={() => setSelectedBiz(null)}>Close</button>
            </div>
            <div style={{padding:'0.75rem 2rem', borderTop:'1px solid rgba(201,168,76,0.08)', textAlign:'right'}}>
              <button className="report-btn" onClick={() => { handleReport(selectedBiz); }}>⚑ Report this listing</button>
            </div>
          </div>
        </div>
      )}

      {/* HIGH DESERT LIVING PAGE */}
      {showLiving && (
        <div className="living-page">
          <div className="living-nav">
            <div className="living-nav-title">High<span>Desert</span>Hub</div>
            <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
              <span style={{background:'var(--terra)',color:'white',fontSize:'0.7rem',fontWeight:700,padding:'0.25rem 0.75rem',borderRadius:'2rem',letterSpacing:'0.08em',textTransform:'uppercase'}}>High Desert Living</span>
              <button onClick={() => setShowLiving(false)} style={{background:'transparent',border:'1px solid rgba(247,240,230,0.3)',color:'var(--sand)',padding:'0.35rem 0.85rem',borderRadius:'4px',cursor:'pointer',fontSize:'0.8rem',fontFamily:"'DM Sans',sans-serif"}}>← Back</button>
            </div>
          </div>

          <div className="living-hero">
            <div className="living-hero-inner">
              <div className="living-hero-eyebrow">🏡 High Desert Living</div>
              <h1 className="living-hero-title">Live Smart in the <em>High Desert</em></h1>
              <p className="living-hero-sub">Consumer safety tips, local resources, and everything you need to thrive in Victorville, Hesperia, Apple Valley, and Adelanto.</p>
            </div>
          </div>

          <div className="living-body">

            {/* CONSUMER SAFETY */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">🔍</div>
                <div>
                  <div className="living-section-title">Consumer Safety</div>
                  <div className="living-section-sub">Protect yourself before you hire</div>
                </div>
              </div>
              <div className="living-items">
                <div className="living-item">
                  <div className="living-item-icon">📋</div>
                  <div className="living-item-content">
                    <div className="living-item-title">How to Verify a Contractor License in California</div>
                    <div className="living-item-desc">Before hiring any contractor, always check their license on the California State License Board website. Enter their license number and confirm it is active, bonded, and insured. Unlicensed contractors have no accountability if something goes wrong.</div>
                    <a href="https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx" target="_blank" rel="noopener noreferrer" className="living-item-link">→ Check a License on CSLB.ca.gov</a>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🚩</div>
                  <div className="living-item-content">
                    <div className="living-item-title">5 Red Flags When Hiring a Local Service</div>
                    <div className="living-item-desc">Watch out for: no written estimate, cash only payment, no license number provided, high-pressure tactics to decide immediately, and no verifiable local address. Any one of these should make you pause before signing anything.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🏠</div>
                  <div className="living-item-content">
                    <div className="living-item-title">How to Avoid Home Improvement Scams</div>
                    <div className="living-item-desc">Common scams in the High Desert include door-to-door roofing offers after storms, driveway sealing scams, and tree trimming overcharges. Always get at least two written estimates and never pay more than 10% upfront.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">📝</div>
                  <div className="living-item-content">
                    <div className="living-item-title">How to File a Complaint</div>
                    <div className="living-item-desc">If you have a bad experience with a local business, you can file complaints with the Better Business Bureau, the California State License Board, or the California Attorney General's office. Documentation and photos are key.</div>
                    <a href="https://www.bbb.org/file-a-complaint" target="_blank" rel="noopener noreferrer" className="living-item-link">→ File a BBB Complaint</a>
                  </div>
                </div>
              </div>
            </div>

            {/* BARGAIN HUNTING */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">💰</div>
                <div>
                  <div className="living-section-title">Bargain Hunting</div>
                  <div className="living-section-sub">Stretch your dollar in the High Desert</div>
                </div>
              </div>
              <div className="living-items">
                <div className="living-item">
                  <div className="living-item-icon">🛍️</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Best Swap Meets and Flea Markets</div>
                    <div className="living-item-desc">The Apple Valley Swap Meet and Victorville Swap Meet are weekend staples for deals on tools, clothing, electronics, and more. Bring cash, arrive early, and don't be afraid to negotiate.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🛋️</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Where to Find Free and Discounted Appliances</div>
                    <div className="living-item-desc">Check Facebook Marketplace for local appliance deals, visit the Habitat for Humanity ReStore in the High Desert for discounted furniture and appliances, and watch Craigslist for free items posted by neighbors.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🥫</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Free Community Resources</div>
                    <div className="living-item-desc">San Bernardino County offers food assistance, utility bill help, and rental support programs. Contact 211 (dial 2-1-1) for a free referral to local services near you - available 24 hours a day.</div>
                    <a href="https://www.211sb.org" target="_blank" rel="noopener noreferrer" className="living-item-link">→ Visit 211sb.org</a>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">💊</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Save on Prescriptions</div>
                    <div className="living-item-desc">GoodRx and Mark Cuban's Cost Plus Drugs offer significant savings on prescriptions for uninsured or underinsured residents. Many medications available for under $5.</div>
                    <a href="https://www.goodrx.com" target="_blank" rel="noopener noreferrer" className="living-item-link">→ Check GoodRx Prices</a>
                  </div>
                </div>
              </div>
            </div>

            {/* LOCAL RESOURCES */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">🏘️</div>
                <div>
                  <div className="living-section-title">Local Resources</div>
                  <div className="living-section-sub">Everything you need in one place</div>
                </div>
              </div>
              <div className="living-resources-grid">
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🏛️ City Contacts</div>
                  <div className="living-resource-row"><span>Victorville City Hall</span><a href="tel:7609555000" className="living-resource-phone">(760) 955-5000</a></div>
                  <div className="living-resource-row"><span>Hesperia City Hall</span><a href="tel:7609471000" className="living-resource-phone">(760) 947-1000</a></div>
                  <div className="living-resource-row"><span>Apple Valley Town Hall</span><a href="tel:7602407000" className="living-resource-phone">(760) 240-7000</a></div>
                  <div className="living-resource-row"><span>Adelanto City Hall</span><a href="tel:7602462300" className="living-resource-phone">(760) 246-2300</a></div>
                </div>
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🚨 Emergency & Safety</div>
                  <div className="living-resource-row"><span>Emergency</span><a href="tel:911" className="living-resource-phone">911</a></div>
                  <div className="living-resource-row"><span>SB County Sheriff</span><a href="tel:7603512550" className="living-resource-phone">(760) 351-2550</a></div>
                  <div className="living-resource-row"><span>Victor Valley Hospital</span><a href="tel:7602456821" className="living-resource-phone">(760) 245-8211</a></div>
                  <div className="living-resource-row"><span>Poison Control</span><a href="tel:18002221222" className="living-resource-phone">(800) 222-1222</a></div>
                </div>
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🏫 School Districts</div>
                  <div className="living-resource-row"><span>VVUHSD</span><a href="tel:7602452476" className="living-resource-phone">(760) 245-2476</a></div>
                  <div className="living-resource-row"><span>Hesperia Unified</span><a href="tel:7602447927" className="living-resource-phone">(760) 244-4411</a></div>
                  <div className="living-resource-row"><span>Apple Valley Unified</span><a href="tel:7602471357" className="living-resource-phone">(760) 247-8001</a></div>
                  <div className="living-resource-row"><span>Adelanto Elementary</span><a href="tel:7602464411" className="living-resource-phone">(760) 246-8691</a></div>
                </div>
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🏢 Government Services</div>
                  <div className="living-resource-row"><span>Victorville DMV</span><a href="tel:8003687828" className="living-resource-phone">(800) 368-7828</a></div>
                  <div className="living-resource-row"><span>SB County Services</span><a href="tel:8888276228" className="living-resource-phone">(888) 743-1478</a></div>
                  <div className="living-resource-row"><span>211 Community Help</span><a href="tel:211" className="living-resource-phone">2-1-1</a></div>
                  <div className="living-resource-row"><span>Social Security</span><a href="tel:8007721213" className="living-resource-phone">(800) 772-1213</a></div>
                </div>
              </div>
            </div>

            {/* SUBMIT A TIP */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">📝</div>
                <div>
                  <div className="living-section-title">Submit a Tip or Resource</div>
                  <div className="living-section-sub">Know something the High Desert should know? Share it here.</div>
                </div>
              </div>
              <div className="living-tip-form">
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                  <div className="form-field">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" placeholder="Optional" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option value="">Select...</option>
                      <option>Consumer Safety</option>
                      <option>Bargain Hunting</option>
                      <option>Local Resource</option>
                      <option>Community Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Your Tip or Resource <span style={{color:'var(--terra)'}}>*</span></label>
                  <textarea className="form-textarea" placeholder="Share something useful for the High Desert community..." rows={4} />
                </div>
                <div className="form-field">
                  <label className="form-label">Source Link (optional)</label>
                  <input className="form-input" placeholder="https://..." />
                </div>
                <button className="btn-primary" style={{maxWidth:'200px'}}>Submit Tip</button>
                <p style={{fontSize:'0.78rem',color:'var(--muted)'}}>Tips are reviewed before publishing. We appreciate your contribution to the community!</p>
              </div>
            </div>

          </div>

          <footer className="footer">
            <div className="footer-logo">High<span>Desert</span>Hub</div>
            <p className="footer-sub">Serving Victorville · Hesperia · Apple Valley · Adelanto</p>
            <p className="footer-disclaimer">Information provided is for general guidance only. Always verify details with official sources before making decisions.</p>
          </footer>
        </div>
      )}

      {/* ADMIN PAGE */}
      {isAdminPage && !adminMode && (
        <div className="admin-gate" style={{position:'fixed',inset:0,zIndex:500}}>
          <div className="admin-gate-box">
            <div className="admin-gate-title">🔒 Admin Access</div>
            <p className="admin-gate-sub">High Desert Hub - Analytics Dashboard</p>
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
                  <div className="admin-stat-num">{ACTIVE_BUSINESSES.length}</div>
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
                  <div className="form-modal-title">List Your Business - Free</div>
                  <div className="form-modal-sub">Fill out the form below and we will add your listing within 24 hours.</div>
                </div>
                <div className="form-body">
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Business Name <span>*</span></label>
                      <input className="form-input" name="name" placeholder="Your business name" value={formData.name} onChange={handleFormChange} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Business Phone <span>*</span></label>
                      <input className="form-input" name="phone" placeholder="(760) 555-0000" value={formData.phone} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Business Email <span>*</span></label>
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
                    <label className="form-label">Social Media</label>
                    <div style={{display:"flex",gap:"0.5rem"}}>
                      <select className="form-select" name="socialPlatform" value={formData.socialPlatform} onChange={handleFormChange} style={{maxWidth:"160px",flexShrink:0}}>
                        <option value="">Platform</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="TikTok">TikTok</option>
                        <option value="YouTube">YouTube</option>
                        <option value="X">X (Twitter)</option>
                      </select>
                      <input className="form-input" name="socialHandle" placeholder="@yourhandle" value={formData.socialHandle} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Social Media</label>
                    <div style={{display:"flex",gap:"0.5rem"}}>
                      <select className="form-select" name="socialPlatform2" value={formData.socialPlatform2} onChange={handleFormChange} style={{maxWidth:"160px",flexShrink:0}}>
                        <option value="">Platform</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="TikTok">TikTok</option>
                        <option value="YouTube">YouTube</option>
                        <option value="X">X (Twitter)</option>
                      </select>
                      <input className="form-input" name="socialHandle2" placeholder="@yourhandle" value={formData.socialHandle2} onChange={handleFormChange} />
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
                  {formError && <p style={{color:'var(--terra)',fontSize:'0.82rem',marginTop:'0.5rem'}}>Something went wrong. Please email highdeserthub@gmail.com</p>}
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
                <p style={{fontSize:'0.85rem', color:'var(--terra)', background:'rgba(201,168,76,0.06)', border:'1px solid rgba(201,168,76,0.1)', borderRadius:'8px', padding:'0.85rem 1rem', marginTop:'0.5rem', lineHeight:'1.6'}}>
                  📸 Want to include your business card? Email front and back photos to <strong>highdeserthub@gmail.com</strong> with your business name in the subject line.
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
              <div className="pricing-header-sub">No contracts. Cancel anytime.</div>
              <div className="pricing-header-sub">Start free. Upgrade when you're ready to grow.</div>
              <div style={{marginTop:"0.5rem",fontSize:"0.78rem",color:"rgba(247,240,230,0.4)"}}>Join 119+ local businesses already listed.</div>
            </div>
            <div className="pricing-grid">
              <div className="pricing-tier">
                <div className="pricing-tier-name">Free</div>
                <div className="pricing-price">$0</div>
                <div className="pricing-period">forever</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business name and phone listed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> City, category, and business card photo</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Basic search visibility</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> 3-month renewal required</div>
                </div>
                <button className="pricing-btn main" onClick={() => { setShowPricing(false); setShowListForm(true); setFormSubmitted(false); }}>Get Listed Free</button>
              </div>
              <div className="pricing-tier">
                <div className="pricing-tier-name">Standard</div>
                <div className="pricing-price">$25</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free - no renewal ever</div>
                  <div className="pricing-feature" style={{flexDirection:"column",alignItems:"flex-start",gap:"0.5rem"}}>
                    <span><span className="pricing-check">✓</span> Clickable website, Instagram &amp; Facebook</span>
                    <div style={{display:"flex",gap:"0.4rem",marginLeft:"1.2rem"}}>
                      <span style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.25rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </span>
                      <span style={{display:"inline-flex",alignItems:"center",color:"#1877F2",padding:"0.25rem",background:"rgba(24,119,242,0.1)",border:"1px solid rgba(24,119,242,0.3)",borderRadius:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> One-tap email copy for customers</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority over free listings</div>
                </div>
                <a className="pricing-btn" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Standard - $25/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Get Started</a>
              </div>
              <div className="pricing-tier popular">
                <div className="pricing-tier-name">Featured</div>
                <div className="pricing-price" style={{color:'var(--gold)'}}>$60</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Standard</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business logo & icon displayed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Top of category placement</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Spotlight badge and highlighted listing</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel with social media icons</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority in search results</div>
                </div>
                <div style={{fontSize:"0.75rem",fontStyle:"italic",color:"var(--gold)",marginBottom:"0.5rem",lineHeight:"1.4"}}>Be the first business customers see in your category.</div>
                <div style={{marginBottom:"0.75rem"}}><span style={{background:"var(--gold)",color:"var(--navy)",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"0.25rem 0.75rem",borderRadius:"2rem"}}>⭐ Most Popular</span></div>
                <a className="pricing-btn main" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Featured - $60/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Get Featured</a>
              </div>
              <div className="pricing-tier">
                <div className="pricing-tier-name">Premium</div>
                <div className="pricing-price">$120</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Featured</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel spot</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Category banner ad</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly Social Blast - dedicated Instagram and Facebook post written and published for you</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly performance report</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Dedicated support</div>
                </div>
                <a className="pricing-btn" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Premium - $120/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Go Premium</a>
              </div>
            </div>
            <div className="pricing-footer">
              <span className="pricing-footer-note">📞 Questions? Email us at highdeserthub@gmail.com</span>
              <button className="btn-secondary" onClick={() => setShowPricing(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT POPUP */}
      {showContactPopup && (
        <div className="contact-popup-overlay" onClick={() => setShowContactPopup(false)}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()} style={{position:"relative"}}>
            <button onClick={() => setShowContactPopup(false)} style={{position:"sticky",top:0,float:"right",background:"rgba(0,0,0,0.08)",border:"none",borderRadius:"50%",width:"28px",height:"28px",fontSize:"1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:10}}>✕</button>
            {contactTier === "Social Media Graphics" ? (
              <div style={{width:"100%"}}>
                <div style={{fontSize:"1.1rem",fontWeight:700,color:"var(--gold)",marginBottom:"6px",textAlign:"center"}}>Social Media Graphics for Your Business</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",marginBottom:"12px"}}>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Services menu graphics</span>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Promo and deal posts</span>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Brand-matched design</span>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Ready to post on Instagram and Facebook</span>
                </div>
                {!graphicsSubmitted ? (
                  <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    <div style={{fontSize:"1rem",fontWeight:700,color:"var(--text)",marginBottom:"2px"}}>Get clean, professional graphics for your business</div>
                    <div style={{color:"var(--text-secondary)",fontSize:"0.85rem",marginBottom:"6px"}}>Designed to help you attract more customers and stand out locally.</div>
                    <input className="form-input" style={{background:"#1A1A1A",color:"var(--sand)",border:"1px solid rgba(201,168,76,0.2)"}} placeholder="Business Name *" value={graphicsForm.bizName} onChange={e => setGraphicsForm(p => ({...p, bizName: e.target.value}))} />
                    <input className="form-input" style={{background:"#1A1A1A",color:"var(--sand)",border:"1px solid rgba(201,168,76,0.2)"}} placeholder="Email or Phone *" value={graphicsForm.contact} onChange={e => setGraphicsForm(p => ({...p, contact: e.target.value}))} />
                    <select className="form-select" style={{background:"#1A1A1A",color:"var(--sand)",border:"1px solid rgba(201,168,76,0.2)"}} value={graphicsForm.bizType} onChange={e => setGraphicsForm(p => ({...p, bizType: e.target.value}))}>
                      <option value="">Business Type *</option>
                      <option value="Food and Restaurant">Food and Restaurant</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Beauty and Wellness">Beauty and Wellness</option>
                      <option value="Home Services">Home Services</option>
                      <option value="Other">Other</option>
                    </select>
                    <select className="form-select" value={graphicsForm.need} onChange={e => setGraphicsForm(p => ({...p, need: e.target.value}))}>
                      <option value="">What do you need? *</option>
                      <option value="Services Menu Graphic">Services Menu Graphic</option>
                      <option value="Promo or Deal Post">Promo or Deal Post</option>
                      <option value="Both">Both</option>
                    </select>
                    <textarea className="form-textarea" placeholder="Tell me what you're looking for - describe your business, style, colors, and what you want the graphic to promote" value={graphicsForm.description} onChange={e => setGraphicsForm(p => ({...p, description: e.target.value}))} rows={3} />
                    <select className="form-select" value={graphicsForm.timeline} onChange={e => setGraphicsForm(p => ({...p, timeline: e.target.value}))}>
                      <option value="">When do you need this? *</option>
                      <option value="ASAP (1-3 days)">ASAP (1-3 days)</option>
                      <option value="This week">This week</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                    <select className="form-select" value={graphicsForm.budget} onChange={e => setGraphicsForm(p => ({...p, budget: e.target.value}))}>
                      <option value="">Budget range (optional)</option>
                      <option value="Under $50">Under $50</option>
                      <option value="$50-$100">$50-$100</option>
                      <option value="$100+">$100+</option>
                    </select>
                    <input className="form-input" placeholder="Instagram or Facebook handle (optional)" value={graphicsForm.social} onChange={e => setGraphicsForm(p => ({...p, social: e.target.value}))} />
                    <button className="btn-primary" onClick={handleGraphicsSubmit} disabled={graphicsLoading}>
                      {graphicsLoading ? "Sending..." : "🎨 Request My Graphics"}
                    </button>
                    <a href="https://www.instagram.com/highdeserthub" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}} className="btn-secondary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                      View Samples and Designs
                    </a>
                  </div>
                ) : (
                  <div style={{textAlign:"center",padding:"16px",color:"var(--gold)",fontWeight:700}}>✅ Request received! We will reach out to you shortly.</div>
                )}
              </div>
            ) : (
              <>
            <div className="contact-popup-btns">
              <a
                className="btn-primary"
                href={`mailto:highdeserthub@gmail.com?subject=Interested in ${contactTier}&body=Hi, I am interested in upgrading my listing on HighDesertHub.com. Please contact me with next steps.`}
                style={{textDecoration:"none",textAlign:"center",display:"block"}}
              >
                📧 Open Email App
              </a>
              <button className="btn-secondary" onClick={copyEmail}>
                {emailCopied ? '✅ Copied!' : '📋 Copy Email Address'}
              </button>
              <button className="btn-secondary" onClick={() => setShowContactPopup(false)}>Close</button>
            </div>
              </>
            )}
          </div>
        </div>
      )}
      {showReport && (
        <div className="form-modal-overlay" onClick={() => setShowReport(false)}>
          <div className="report-modal" onClick={(e) => e.stopPropagation()}>
            {!reportSubmitted ? (
              <>
                <div className="report-header">
                  <div className="report-title">⚑ Report a Listing Issue</div>
                  <div className="report-sub">{reportBiz?.name} - Help us keep the directory accurate</div>
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
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
              <div className="card-viewer-title">🪪 {cardViewer.name} - Business Card</div>
              <button onClick={() => setCardViewer(null)} style={{position:"fixed", top:"1rem", right:"1rem", zIndex:999, background:"rgba(0,0,0,0.75)", border:"1.5px solid white", color:"white", borderRadius:"8px", padding:"0.5rem 1.25rem", fontSize:"1rem", fontWeight:"600", cursor:"pointer"}}>✕ Close</button>
            </div>
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
