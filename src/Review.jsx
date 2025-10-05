// ✅ React + TailwindCSS: Auto Sliding Reviews Component with 10 Reviews
import { useEffect, useState } from "react";
import Footer from "./Footer";

const reviews = [
  {
    name: "Amit Sharma",
    comment: "I gained 4kg in just one month! Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Pooja Verma",
    comment: "No side effects at all, feels very natural!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rahul Singh",
    comment: "Energy levels and appetite improved greatly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Neha Dubey",
    comment: "Tastes good and really works.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    name: "Suresh Yadav",
    comment: "Best Ayurvedic product I’ve tried.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Kavita Rao",
    comment: "Natural, safe, and effective.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/30.jpg"
  },
  {
    name: "Mohit Jain",
    comment: "Improved my digestion and weight.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/27.jpg"
  },
  {
    name: "Riya Mehra",
    comment: "Saw visible changes in 3 weeks!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    name: "Ankit Patel",
    comment: "Great for muscle gain and stamina.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    name: "Simran Kaur",
    comment: "Love how it’s 100% Ayurvedic.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/25.jpg"
  }
];

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-screen">
    <section className="py-10 h-full">
      <div className="max-w-4xl text-[#03441f] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="transition-all duration-700 ease-in-out bg-white shadow-xl p-6 rounded-xl">
          <img
            src={reviews[index].image}
            alt={reviews[index].name}
            className="w-16 h-16 mx-auto rounded-full mb-4"
          />
          <p className="text-lg italic mb-2">“{reviews[index].comment}”</p>
          <h4 className="font-semibold text-green-700">{reviews[index].name}</h4>
          <div className="text-yellow-400 text-xl">
            {"★".repeat(reviews[index].rating)}
            {"☆".repeat(5 - reviews[index].rating)}
          </div>
        </div>
      </div>
      
    </section>
    
    </div>
  );
}
