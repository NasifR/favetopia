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