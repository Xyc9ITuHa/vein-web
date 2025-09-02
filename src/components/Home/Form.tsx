import { useState } from 'react';

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    interface FormData {
        name: string;
        contact: string;
        eventDate: string;
        serviceType: string;
        budget: string;
        additionalComments: string;
        clientType: string;
    }

    interface Fields extends FormData {
        _captcha: string;
        _next: string;
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsSubmitting(true);


        const form: HTMLFormElement = document.createElement('form');
        form.action = 'https://formsubmit.co/zoom.2000v@gmail.com';
        form.method = 'POST';
        form.style.display = 'none';

        const fields: Fields = {
            name: formData.name,
            contact: formData.contact,
            eventDate: formData.eventDate,
            serviceType: formData.serviceType,
            budget: formData.budget,
            additionalComments: formData.additionalComments,
            clientType: formData.clientType,
            _captcha: 'false',
            _next: `${window.location.origin}/thank-you.html`
        };

        Object.keys(fields).forEach(key => {
            const input: HTMLInputElement = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = fields[key as keyof Fields];
            form.appendChild(input);
        });

        // Append form to body, submit, then remove
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        // Show success message after a delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <div className="max-w-md mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-center">
                    <div className="text-green-600 text-2xl mb-2">✓</div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Thank you!</h3>
                    <p className="text-green-700">We will contact you soon.</p>
                    <button
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                                name: '',
                                contact: '',
                                eventDate: '',
                                serviceType: '',
                                budget: '',
                                additionalComments: '',
                                clientType: ''
                            });
                        }}
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
                    disabled={!formData.name || !formData.contact || !formData.serviceType || !formData.clientType || isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </div>

            {/* Setup Instructions */}
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-gray-700">
                <h4 className="font-semibold mb-2 text-red-800">🔧 FormSubmit Setup Required:</h4>
                <div className="space-y-1">
                    <p>1. Replace <code className="bg-red-100 px-1 rounded">your@email.com</code> with your real email</p>
                    <p>2. Make sure your site is served over HTTPS (Netlify does this automatically)</p>
                    <p>3. Submit the form once to receive confirmation email</p>
                    <p>4. Click the confirmation link in the email</p>
                    <p>5. Create a <code className="bg-red-100 px-1 rounded">thank-you.html</code> page (optional)</p>
                </div>
            </div>

            {/* Alternative HTML Form for Reference */}
            <details className="mt-4">
                <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                    📋 Alternative: Pure HTML Form Code
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono overflow-x-auto">
                    <pre>{`<form action="https://formsubmit.co/your@email.com" method="POST">
  <input type="text" name="name" placeholder="Name" required>
  <input type="text" name="contact" placeholder="Phone/Email" required>
  <input type="date" name="eventDate">
  <select name="serviceType" required>
    <option value="">Select Service</option>
    <option value="Event">Event</option>
    <option value="Interior">Interior</option>
    <option value="Floristics">Floristics</option>
    <option value="Showcase">Showcase</option>
  </select>
  <select name="budget">
    <option value="">Select Budget</option>
    <option value="Under $1,000">Under $1,000</option>
    <!-- ... more options ... -->
  </select>
  <textarea name="additionalComments" placeholder="Comments"></textarea>
  <input type="radio" name="clientType" value="Private Client" required>Private Client
  <input type="radio" name="clientType" value="Interior Designer">Interior Designer
  <input type="radio" name="clientType" value="Hotel/Restaurant">Hotel/Restaurant
  <input type="radio" name="clientType" value="Other">Other
  <input type="hidden" name="_captcha" value="false">
  <button type="submit">Send</button>
</form>`}</pre>
                </div>
            </details>
        </div>
    );
}