import SunriseElite from "../assets/sunrise elite/Sunrice Elite furant view.jpg";
import SunriseElite1 from "../assets/sunrise elite/Sunrice Elite 2 BHK.png";
import SunriseElite2 from "../assets/sunrise elite/Sunrice Elite 3 BHK OND OPTION.png";




import PatelPalms from "../assets/patel palms/patel palm row house.jpg";
import PMBuilder from "../assets/pm builder/pm apartment 01.jpg";

const projects = [
//   {
//     id: "1",
//     slug: "Sunrise Elite",
//     title: "Sunrise Elite",
//     image: SunriseElite,
//     location: "Whitefield, Bangalore",
//     description: "A luxurious modern villa design with pool and landscape.",
//     details:
//       "This modern villa includes smart home features, eco-friendly materials, and a seamless indoor-outdoor flow."
//   },
//   {
//     id: "2",
//     slug: "Patel Palms",
//     title: "Patel Palms",
//     image: PatelPalms,
//     location: "Bannerghatta Road, Bangalore",
//     description: "An innovative workspace designed for productivity.",
//     details:
//       "Located in a busy metro area, this office space offers open floor plans, breakout zones, and biophilic design."
//   },
//   {
//     id: "3",
//     slug: "PM Builder",
//     title: "PM Builder",
//     image: PMBuilder,
//     location: "Sarjapur, Bangalore",
//     description: "An innovative workspace designed for productivity.",
//     details:
//       "Located in a busy metro area, this office space offers open floor plans, breakout zones, and biophilic design."
//   },




  {
    slug: "Sunrise Elite",
    name: "Sunrise Elite",
    location: "Kohinoor Colony, Aurangabad",
    image: SunriseElite,
    description: "Experience unparalleled luxury at Ocean View Residences, a stunning collection of modern homes designed with breathtaking panoramic ocean views. Each residence offers a unique blend of sophisticated design and natural beauty.",
    details: [
      {
        icon: "💡", // Unicode for lightbulb (Smart Home)
        title: "Smart Home Integration",
        description: "Fully integrated smart home systems for lighting, climate, and security, controllable from anywhere.",
      },
      {
        icon: "🌳", // Unicode for tree (Eco Materials)
        title: "Eco-Friendly Materials",
        description: "Constructed with sustainable and locally sourced eco-friendly materials to minimize environmental impact.",
      },
      {
        icon: "🏊", // Unicode for person swimming (Infinity Pool)
        title: "Private Infinity Pools",
        description: "Each residence features a private infinity pool overlooking the Pacific Ocean, perfect for relaxation.",
      },
      {
        icon: "🛡️", // Unicode for shield (24/7 Security)
        title: "24/7 Security & Concierge",
        description: "Enjoy peace of mind with round-the-clock security and a dedicated concierge service.",
      },
    ],
    longDescription: "Nestled on the bluffs of Malibu, Ocean View Residences offer an exclusive lifestyle defined by elegance and tranquility. From the moment you arrive, you're greeted by contemporary architecture that seamlessly blends with the natural coastal landscape. Floor-to-ceiling windows flood the interiors with natural light and offer expansive views of the ocean. Gourmet kitchens, spa-like bathrooms, and spacious living areas are meticulously designed to provide the ultimate in comfort and style. Residents also have access to private beach paths and exclusive community amenities.",
    gallery: [
      SunriseElite1,
      SunriseElite2,
      "https://images.unsplash.com/photo-1593696140822-fa2ef709d739?fit=crop&w=1920&q=80",
      SunriseElite1,
    ]
  },
  {
    slug: "Patel Palms",
    name: "Patel Palms",
    location: "Downtown, New York",
    image: PatelPalms,
    description: "Modern urban living at its finest. City Center Lofts offer stylish, spacious apartments in the heart of downtown with breathtaking city views.",
    details: [
      {
        icon: "🏙️",
        title: "Panoramic City Views",
        description: "Unobstructed views of the city skyline from every unit.",
      },
      {
        icon: "🚇",
        title: "Direct Subway Access",
        description: "Conveniently located with direct access to major subway lines.",
      },
      {
        icon: "🏋️",
        title: "Rooftop Gym & Lounge",
        description: "State-of-the-art fitness center and an exclusive residents' lounge on the rooftop.",
      },
    ],
    longDescription: "Located in the vibrant core of downtown, City Center Lofts redefine urban luxury. These meticulously designed lofts boast open-concept layouts, high ceilings, and industrial-chic finishes. Large windows not only invite ample natural light but also frame the dynamic cityscape. Residents can enjoy a myriad of amenities, including a 24-hour doorman, a private cinema, and a co-working space, making it the ideal residence for the modern city dweller.",
    gallery: [
      "https://images.unsplash.com/photo-1499955085147-384166265691?fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bbb7f579b29?fit=crop&w=1920&q=80",
    ]
  },
  // Add more projects here
];

export default projects;
