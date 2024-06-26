import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { sendSubscriptionEmail } from "../../utils/emailService";

const Subscribe = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Integration with backend or alert for demonstration
    try {
      const response = await sendSubscriptionEmail({
        email: email,
      });

      if (response.success) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      alert(t('common.allert.error'));
    }
    // Reset email input after submission
    setEmail("");
  };

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center lg:space-x-4 lg:mt-8">
      <span className="text-xl text-darkBlue font-semibold">
        {t('common.newsletter.newsletter')}
      </span>
      <form className="flex" onSubmit={handleSubmit} id="subscribe-form">
        <input
          type="email"
          placeholder={t('common.newsletter.email')}
          className="p-2  lg:w-60 rounded-l focus:outline-none focus:border-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      
      <button
        type="submit"
        form="subscribe-form"
        className="bg-white font-semibold text-customRed px-4 rounded-r -ml-1 hover:font-bold hover:text-red-800"
      >
        {t('common.newsletter.subscribe')}
      </button>
      </form>
    </div>
  );
};

export default Subscribe;
