
export const properties = [
    {
        id: 1,
        title: "The Azure Penthouse",
        location: "Palm Jumeirah, Dubai",
        price: "$12,500,000",
        priceVal: 12500000,
        type: "Penthouse",
        beds: 4,
        baths: 5,
        sqft: 6500,
        image: "https://picsum.photos/seed/property1/800/600",
        featured: true,
        tag: "Signature",
        description: "Experience the pinnacle of luxury living in this triplex penthouse offering panoramic views of the Arabian Gulf. Features a private infinity pool, dedicated elevator, and interiors by world-renowned designers.",
        features: ["Private Infinity Pool", "Smart Home Automation", "Private Elevator", "Concierge Service", "Sea View"],
        agent: "alexandra"
    },
    {
        id: 2,
        title: "Villa Serenity",
        location: "Beverly Hills, CA",
        price: "$8,900,000",
        priceVal: 8900000,
        type: "Villa",
        beds: 6,
        baths: 7,
        sqft: 8200,
        image: "https://picsum.photos/seed/property2/800/600",
        featured: true,
        tag: "New Listing",
        description: "A masterclass in modern architecture, this estate blends indoor and outdoor living seamlessly. Surrounded by lush gardens, it offers total privacy and resort-style amenities.",
        features: ["Home Theater", "Wine Cellar", "Tennis Court", "Guesthouse", "Smart Security"],
        agent: "michael"
    },
    {
        id: 3,
        title: "Eaton Square Residence",
        location: "Belgravia, London",
        price: "£15,000,000",
        priceVal: 18500000,
        type: "Apartment",
        beds: 3,
        baths: 3,
        sqft: 2800,
        image: "https://picsum.photos/seed/property3/800/600",
        featured: true,
        tag: "Historic",
        description: "An impeccably restored Grade II listed apartment in one of London's most prestigious squares. High ceilings, original stucco detailing, and access to private gardens.",
        features: ["Private Garden Key", "24hr Porter", "High Ceilings", "Period Features", "Chef's Kitchen"],
        agent: "sarah"
    },
    {
        id: 4,
        title: "Oceanfront Glass House",
        location: "Malibu, CA",
        price: "$22,000,000",
        priceVal: 22000000,
        type: "Villa",
        beds: 5,
        baths: 6,
        sqft: 5500,
        image: "https://picsum.photos/seed/property4/800/600",
        featured: false,
        tag: "Ocean View",
        description: "A cantilevered masterpiece suspended above the Pacific Ocean. Floor-to-ceiling glass walls disappear to create a true open-air living experience.",
        features: ["Direct Beach Access", "Infinity Edge Pool", "Sustainable Design", "Zen Garden", "Art Gallery Walls"],
        agent: "michael"
    },
    {
        id: 5,
        title: "Skyline Loft",
        location: "Tribeca, New York",
        price: "$9,750,000",
        priceVal: 9750000,
        type: "Apartment",
        beds: 3,
        baths: 4,
        sqft: 3400,
        image: "https://picsum.photos/seed/property5/800/600",
        featured: false,
        tag: "Loft",
        description: "Authentic industrial loft with cast-iron columns and exposed brick, reimagined for ultra-modern luxury. Features a private rooftop terrace with Empire State Building views.",
        features: ["Keyed Elevator", "Rooftop Terrace", "Exposed Brick", "Chef's Kitchen", "Steam Room"],
        agent: "alexandra"
    },
    {
        id: 6,
        title: "Alpine Chalet Estate",
        location: "Gstaad, Switzerland",
        price: "CHF 18,500,000",
        priceVal: 20000000,
        type: "Villa",
        beds: 7,
        baths: 8,
        sqft: 9000,
        image: "https://picsum.photos/seed/property6/800/600",
        featured: true,
        tag: "Winter Retreat",
        description: "The ultimate ski-in/ski-out chalet. Traditional craftsmanship meets contemporary luxury, featuring a private spa, indoor pool, and expansive entertainment areas.",
        features: ["Ski-in/Ski-out", "Indoor Pool", "Private Spa", "Cinema Room", "Wine Cave"],
        agent: "sarah"
    }
];

export const agents = [
    {
        id: "alexandra",
        name: "Alexandra Vautier",
        role: "Senior Partner",
        experience: "15 Years",
        image: "https://picsum.photos/seed/agent1/400/400",
        specialty: "Penthouse & Luxury Urban",
        bio: "Specializing in ultra-luxury properties across New York and Dubai, Alexandra has closed over $500M in sales.",
        languages: ["English", "French", "Arabic"]
    },
    {
        id: "michael",
        name: "Michael Chen",
        role: "Estate Director",
        experience: "12 Years",
        image: "https://picsum.photos/seed/agent2/400/400",
        specialty: "Coastal & Modern Architecture",
        bio: "With a background in architecture, Michael helps clients find homes that are true works of art.",
        languages: ["English", "Mandarin", "Spanish"]
    },
    {
        id: "sarah",
        name: "Sarah Kensington",
        role: "Private Office Lead",
        experience: "20 Years",
        image: "https://picsum.photos/seed/agent3/400/400",
        specialty: "Historic & European Estates",
        bio: "Sarah manages our most exclusive off-market listings and serves a private network of UHNW individuals.",
        languages: ["English", "German", "Italian"]
    }
];

export const neighborhoods = [
    { id: 1, name: "Dubai Marina", image: "https://picsum.photos/seed/neighborhood1/600/400", count: 42 },
    { id: 2, name: "South Mumbai", image: "https://picsum.photos/seed/neighborhood2/600/400", count: 18 },
    { id: 3, name: "Beverly Hills", image: "https://picsum.photos/seed/neighborhood3/600/400", count: 25 },
    { id: 4, name: "Mayfair, Lon", image: "https://picsum.photos/seed/neighborhood4/600/400", count: 14 }
];

export const testimonials = [
    {
        id: 1,
        name: "James & Elena R.",
        text: "Aurélian Estates found us a home we didn't dream existed. Their private viewing service is unmatched.",
        purchase: "Villa in Tuscany"
    },
    {
        id: 2,
        name: "Thomas W.",
        text: "Professional, discreet, and incredibly knowledgeable. The entire acquisition process was seamless.",
        purchase: "Penthouse in NYC"
    },
    {
        id: 3,
        name: "Amara K.",
        text: "The team understood exactly what I was looking for. No time wasted on properties that didn't fit.",
        purchase: "Estate in Dubai"
    }
];
