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