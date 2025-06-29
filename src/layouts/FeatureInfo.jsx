import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"; 
import { BsShieldCheck } from "react-icons/bs"; 
import { RiWallet3Line } from "react-icons/ri"; 
import { motion } from "framer-motion";

export default function FeatureInfo() {
  const features = [
    {
      icon: <RiWallet3Line className="text-4xl text-pink-500" />,        
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
    },
    {
      icon: <BsShieldCheck className="text-4xl text-pink-500" />,      
      title: "Customer Support",
      description: "Prompt response to all complaints",
    },
    {
      icon: <HiOutlineChatBubbleLeftRight className="text-4xl text-pink-500" />,    
      title: "Free Shipping",
      description: "Free shipping for orders above N50,000 (T & C apply)",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg shadow-pink-100 p-6 text-center hover:shadow-pink-200 transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
