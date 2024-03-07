const API_URL = "/api/email/send";
const API_HEADERS = {
  "Content-Type": "application/json",
};

const sendEmail = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: API_HEADERS,
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true, message: "Form submitted successfully" };
    } else {
      const errorMessage = await response.text();
      throw new Error(`Failed to submit form: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message:
        "An error occurred while submitting the form. Please try again later.",
    };
  }
};

export { sendEmail };
