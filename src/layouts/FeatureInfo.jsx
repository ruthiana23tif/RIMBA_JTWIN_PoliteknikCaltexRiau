import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"; 
import { BsShieldCheck } from "react-icons/bs"; 
import { RiWallet3Line } from "react-icons/ri"; 

export default function FeatureInfo() {
  const features = [
    {
      icon: <RiWallet3Line className="text-4xl text-purple-500" />,        
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
    },
    {
      icon: <BsShieldCheck className="text-4xl text-purple-500" />,      
      title: "Customer Support",
      description: "Prompt response to all complaints",
    },
    {
      icon: <HiOutlineChatBubbleLeftRight className="text-4xl text-purple-500" />,    
      title: "Free Shipping",
      description: "Free shipping for orders above N50,000 (T & C apply)",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center"
        >
          <div className="mt-4 mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-gray-500 mb-6">{feature.description}</p>
          </div>
      ))}
    </div>
  );
}
