import { useState } from "react";

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "",
        rating: "",
        status: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        rating: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = { title: "", rating: "", status: "" };

        if (!formData.title) newErrors.title = "title is required";
        if (!formData.rating) newErrors.rating = "rating is required";
        if (!formData.status) newErrors.status = "Message is required";
    
        setErrors(newErrors);
    
        if (Object.values(newErrors).every((error) => error === "")) {
          console.log("Form submitted:", formData);
          alert("Form submitted successfully!");
        }
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.title}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.rating}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.rating ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                 status
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.status}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.status ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                  rows={4}
                />
                {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };
    
    export default Form;