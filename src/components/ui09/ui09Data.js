
// Helper for consistent Unsplash URLs
const getUnsplashUrl = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;

export const destinations = [
    {
        id: 1,
        name: "Bali",
        image: getUnsplashUrl("1573763163467-3290e2b9c781"), // Bali Gate
        vibe: "Tropical Paradise",
        price: "45,000"
    },
    {
        id: 2,
        name: "Paris",
        image: getUnsplashUrl("1502602898657-3e91760cbb34"), // Eiffel Tower
        vibe: "City of Light",
        price: "85,000"
    },
    {
        id: 3,
        name: "Kyoto",
        image: getUnsplashUrl("1493976040374-85c8e12f0c0e"), // Japan Street/Torii
        vibe: "Ancient Traditions",
        price: "92,000"
    },
    {
        id: 4,
        name: "Santorini",
        image: getUnsplashUrl("1570077188670-e3a8d69ac5f5"), // Santorini Blue Dome
        vibe: "Aegean Gem",
        price: "110,000"
    },
    {
        id: 5,
        name: "Dubai",
        image: getUnsplashUrl("1512453979798-5ea936a7fe48"), // Burj Khalifa
        vibe: "Modern Marvel",
        price: "55,000"
    },
    {
        id: 6,
        name: "Swiss Alps",
        image: getUnsplashUrl("1531366936337-7c912a4589a7"), // Switzerland Mountains
        vibe: "Mountain Magic",
        price: "125,000"
    }
];

export const tours = [
    {
        id: 101,
        title: "Bali Island Hopping Adventure",
        location: "Indonesia",
        type: "adventure",
        duration: "7 Days",
        price: 45000,
        rating: 4.8,
        image: getUnsplashUrl("1537996194471-e657df975ab4"), // Bali Rice Terrace
        desc: "Experience the ultimate island lifestyle jumping between Bali, Nusa Penida, and Gili T.",
        itinerary: [
            { day: 1, title: "Arrival in Ubud", desc: "Transfer to hotel, welcome dinner." },
            { day: 2, title: "Tegalalang & Monkey Forest", desc: "Visit iconic rice terraces and sacred forests." },
            { day: 3, title: "Nusa Penida Day Trip", desc: "Speedboat to Kelingking beach." }
        ],
        inclusions: ["Airport Transfers", "All Breakfasts", "Ferry Tickets"],
        exclusions: ["International Flights", "Personal Expenses"]
    },
    {
        id: 102,
        title: "Romantic Parisian Getaway",
        location: "France",
        type: "honeymoon",
        duration: "5 Days",
        price: 95000,
        rating: 4.9,
        image: getUnsplashUrl("1565099824634-1fd3703dc15e"), // Romantic Paris Street
        desc: "A specially curated romantic itinerary featuring sunset cruises and private wine tastings.",
        itinerary: [
            { day: 1, title: "Seine Dinner Cruise", desc: "Welcome to Paris with a view." },
            { day: 2, title: "Louvre & Private Photo Shoot", desc: "Skip-the-line access to art." }
        ],
        inclusions: ["5-Star Hotel", "Champagne Welcome", "Museum Passes"],
        exclusions: ["Visa Fees", "Lunch & Dinner"]
    },
    {
        id: 103,
        title: "Swiss Family Winter Fun",
        location: "Switzerland",
        type: "family",
        duration: "8 Days",
        price: 150000,
        rating: 5.0,
        image: getUnsplashUrl("1622319340638-348545806655"), // Swiss Train/Winter
        desc: "Snow, skiing, and chocolate trains. The perfect winter holiday for the whole family.",
        itinerary: [
            { day: 1, title: "Zurich Arrival", desc: "Train to Interlaken." },
            { day: 2, title: "Jungfraujoch", desc: "Top of Europe excursion." }
        ],
        inclusions: ["Swiss Travel Pass", "Ski Equipment Rental", "Breakfast"],
        exclusions: ["Ski Lessons", "Flights"]
    },
    {
        id: 104,
        title: "Kerala Backwaters & Hills",
        location: "India",
        type: "family",
        duration: "6 Days",
        price: 28000,
        rating: 4.7,
        image: getUnsplashUrl("1593693396865-6084d9490e8b"), // Kerala Houseboat
        desc: "Houseboat stays in Alleppey coupled with the tea gardens of Munnar.",
        itinerary: [
            { day: 1, title: "Cochin to Munnar", desc: "Scenic drive through tea plantations." },
            { day: 2, title: "Munnar Sightseeing", desc: "Mattupetty Dam and Eravikulam Park." }
        ],
        inclusions: ["Houseboat Stay", "Private Car", "All Meals on Houseboat"],
        exclusions: ["Entry Fees", "Airfare"]
    },
    {
        id: 105,
        title: "Thailand & Phuket Party",
        location: "Thailand",
        type: "adventure",
        duration: "6 Days",
        price: 52000,
        rating: 4.6,
        image: getUnsplashUrl("1552465011-b4e21bf6e79a"), // Thailand Boat
        desc: "From Bangkok temples to Phuket beaches. A mix of culture and nightlife.",
        itinerary: [
            { day: 1, title: "Bangkok City Tour", desc: "Grand Palace and Wat Arun." },
            { day: 2, title: "Floating Market", desc: "Damnoen Saduak excursion." }
        ],
        inclusions: ["Domestic Flights", "4-Star Hotels", "Speedboat Tour"],
        exclusions: ["Visa on Arrival", "Drinks"]
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Elena G.",
        location: "New York",
        text: "The Bali trip was absolutely life-changing. Everything from the transfers to the villa selection was top-notch.",
        rating: 5
    },
    {
        id: 2,
        name: "Rajiv M.",
        location: "Mumbai",
        text: "Booked the Switzerland package for my parents 25th anniversary. They haven't stopped talking about it!",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah L.",
        location: "London",
        text: "Efficient, friendly, and great value for money. VoyageVista made our honeymoon stress-free.",
        rating: 4
    }
];

export const galleryImages = [
    { id: 1, src: getUnsplashUrl("1476514525535-07fb3b4ae5f1"), alt: "Swiss Lake", size: "large", caption: "Alpine Serenity" },
    { id: 2, src: getUnsplashUrl("1507525428034-b723cf961d3e"), alt: "Beach Sunset", size: "small", caption: "Golden Hour" },
    { id: 3, src: getUnsplashUrl("1528127269322-539801943592"), alt: "Desert Camel", size: "small", caption: "Sahara Tales" },
    { id: 4, src: getUnsplashUrl("1504109580679-026d95856414"), alt: "Santorini View", size: "small", caption: "Greek Blues" },
    { id: 5, src: getUnsplashUrl("1527631746610-dca17104281e"), alt: "Japan Street", size: "large", caption: "Tokyo Nights" },
    { id: 6, src: getUnsplashUrl("1530789296388-b35f2024751f"), alt: "Bali Waterfall", size: "small", caption: "Jungle Trek" },
    { id: 7, src: getUnsplashUrl("1533105079780-92b9be482077"), alt: "Greek Food", size: "small", caption: "Culinary Delight" },
    { id: 8, src: getUnsplashUrl("1480796927426-f609979314bd"), alt: "New York Street", size: "small", caption: "Urban Jungle" },
    { id: 9, src: getUnsplashUrl("1501785888041-af3ef285b470"), alt: "Mountain Lake", size: "small", caption: "Reflections" },
];

export const teamMembers = [
    { name: "Alex Johnson", role: "Founder & CEO", image: getUnsplashUrl("1472099645785-5658abf4ff4e") },
    { name: "Sarah Williams", role: "Head of Operations", image: getUnsplashUrl("1494790108377-be9c29b29330") },
    { name: "Michael Chen", role: "Lead Travel Expert", image: getUnsplashUrl("1500648767791-00dcc994a43e") }
];
