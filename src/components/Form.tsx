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

