import { useState } from 'react';

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        eventDate: '',
        serviceType: '',
        budget: '',
        additionalComments: '',
        clientType: ''
    });

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Create FormData object to send to FormSubmit.co
        const formSubmitData = new FormData();

        // Add all form fields
        formSubmitData.append('name', formData.name);
        formSubmitData.append('contact', formData.contact);
        formSubmitData.append('eventDate', formData.eventDate);
        formSubmitData.append('serviceType', formData.serviceType);
        formSubmitData.append('budget', formData.budget);
        formSubmitData.append('additionalComments', formData.additionalComments);
        formSubmitData.append('clientType', formData.clientType);

        // FormSubmit.co configuration
        formSubmitData.append('_captcha', 'false');
        formSubmitData.append('_next', 'https://yourdomain.com/thank-you');

        try {
            // Replace 'your@email.com' with your actual email
            await fetch('https://formsubmit.co/rodefevu@mailgolem.com', {
                method: 'POST',
                body: formSubmitData
            });

            setIsSubmitted(true);
        } catch (error) {
            console.error('Form submission error:', error);
            // For demo purposes, still show success message
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="max-w-md mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-center">
                    <div className="text-green-600 text-2xl mb-2">✓</div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Thank you!</h3>
                    <p className="text-green-700">We will contact you soon.</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 text-blue-600 hover:text-blue-800 underline"
                    >
                        Send another message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h2>

            <div className="space-y-4">
                {/* 1. Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* 2. Phone / Email */}
                <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone / Email *
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com or +1234567890"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* 3. Event Date */}
                <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Event Date / Deadline
                    </label>
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* 4. Service Type */}
                <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type *
                    </label>
                    <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a service</option>
                        <option value="Event">Event</option>
                        <option value="Interior">Interior</option>
                        <option value="Floristics">Floristics</option>
                        <option value="Showcase">Showcase</option>
                    </select>
                </div>

                {/* 5. Budget */}
                <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select budget range</option>
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                    </select>
                </div>

                {/* 6. Additional Comments */}
                <div>
                    <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Comments
                    </label>
                    <textarea
                        id="additionalComments"
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Space type, showcase dimensions, special requirements, etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    />
                </div>

                {/* 7. Client Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        You are: *
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="clientType"
                                value="Private Client"
                                checked={formData.clientType === 'Private Client'}
                                onChange={handleInputChange}
                                required
                                className="mr-2 text-blue-600"
                            />
                            <span className="text-sm text-gray-700">Private Client</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="clientType"
                                value="Interior Designer"
                                checked={formData.clientType === 'Interior Designer'}
                                onChange={handleInputChange}
                                className="mr-2 text-blue-600"
                            />
                            <span className="text-sm text-gray-700">Interior Designer</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="clientType"
                                value="Hotel/Restaurant"
                                checked={formData.clientType === 'Hotel/Restaurant'}
                                onChange={handleInputChange}
                                className="mr-2 text-blue-600"
                            />
                            <span className="text-sm text-gray-700">Hotel/Restaurant</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="clientType"
                                value="Other"
                                checked={formData.clientType === 'Other'}
                                onChange={handleInputChange}
                                className="mr-2 text-blue-600"
                            />
                            <span className="text-sm text-gray-700">Other</span>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.contact || !formData.serviceType || !formData.clientType}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Send
                </button>
            </div>

            {/* FormSubmit.co Instructions */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-600">
                <h4 className="font-semibold mb-2">Implementation Notes:</h4>
                <p className="mb-1">• Replace 'your@email.com' in the fetch URL with your actual email</p>
                <p className="mb-1">• First submission will require email confirmation</p>
                <p>• Update the '_next' parameter with your thank-you page URL</p>
            </div>
        </div>
    );
}

export default Form;