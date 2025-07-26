'use client';
import { useState } from "react";
import { useDispatch } from "react-redux";

export function Form() {
    const router = useRouter();
    const [form, setForm] = useState({
        input : ""
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            alert("OK");
        } catch (err) {
            alert('There is a problem');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="input"
                value={form.input}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
