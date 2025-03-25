import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Risk Manager, Global Bank",
    content: "This tool has revolutionized our credit assessment process. The AI-driven insights have significantly improved our decision-making accuracy.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, FinTech Solutions",
    content: "The integration was seamless, and the results were immediate. Our loan approval process is now faster and more reliable than ever.",
    rating: 5
  },
  { 
    name: "Emma Williams",
    role: "Head of Credit, Regional Bank",
    content: "The regulatory compliance features give us peace of mind, while the risk scoring model helps us make better lending decisions.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;