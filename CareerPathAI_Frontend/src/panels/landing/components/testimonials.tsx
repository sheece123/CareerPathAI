import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "CareerPathAI gave me the clarity I was missing. The personalized roadmap was a game-changer and helped me land a promotion in six months.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    text: "As a recent graduate, I was overwhelmed. This platform broke down my options into actionable steps. I felt so much more confident in my job search.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-28 px-6 md:px-12">
      {/* Background Wrapper */}
      <div className="bg-gray-100 rounded-2xl py-16 px-6 md:px-12 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Loved by Professionals Worldwide
        </h2>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-6 shadow-sm text-left"
            >
              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.text}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;