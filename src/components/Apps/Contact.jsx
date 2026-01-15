import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        // Construct mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:Akshay246908@gmail.com?subject=${subject}&body=${body}`;

        // Show success state
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setSent(false), 3000);
        }, 1000);
    };

    return (
        <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-[#2d2d2d] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">Get in Touch</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Have a project in mind or just want to say hi? Send me a message or email me at <a href="mailto:Akshay246908@gmail.com" className="text-blue-500 hover:underline">Akshay246908@gmail.com</a></p>

                {sent ? (
                    <div className="h-60 flex flex-col items-center justify-center text-green-500">
                        <div className="text-5xl mb-2">✓</div>
                        <p className="font-semibold">Message Sent!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input
                                required
                                type="text"
                                className="w-full px-3 py-2 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                value={formState.name}
                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input
                                required
                                type="email"
                                className="w-full px-3 py-2 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                value={formState.email}
                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-3 py-2 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white resize-none"
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <button
                            disabled={sending}
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {sending ? 'Sending...' : <><Send size={16} /> Send Message</>}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
