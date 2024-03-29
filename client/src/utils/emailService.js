import axios from "axios";

const sendRegistrationEmail = async (data) => {
  try {
    const response = await axios.post("/api/email/register", data);

    if (response.status === 200) {
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
        "An error occurred while submitting the form to server. Please try again later.",
    };
  }
};

const sendSubscriptionEmail = async (data) => {
  try {
    const response = await axios.post("/api/email/subscribe", data);

    if (response.status === 200) {
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
        "An error occurred while submitting the form to server. Please try again later.",
    };
  }
};

const sendUnsubscriptionEmail = async (data) => {
  try {
    const response = await axios.post("/api/email/unsubscribe", data);

    if (response.status === 200) {
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
        "An error occurred while submitting the form to server. Please try again later.",
    };
  }
};

export { sendRegistrationEmail, sendSubscriptionEmail, sendUnsubscriptionEmail };
