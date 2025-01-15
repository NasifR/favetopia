import { useState } from "react";

interface FormProps {
    onClose: () => void;
    onSubmit: (formData: FormData) => void;
}

interface FormData {
    title: string;
    rating: string;
    status: string;
    cover: string;
}

const Form: React.FC<FormProps> = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        rating: "",
        status: "Active",
        cover: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // validating rating field
        const ratingNumber = parseFloat(formData.rating);
        if (formData.rating && (isNaN(ratingNumber) || ratingNumber < 0 || ratingNumber > 10)) {
            alert("Rating must be a number between 0 and 10.");
            return;
        }

        onSubmit(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-xl font-bold mb-4 text-center">Add New Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                    </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                    Rating (0-10)
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        step="0.1"
                        min="0"
                        max="10"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />    
                    </div>

                    
                </div>
    )