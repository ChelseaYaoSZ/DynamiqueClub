// External imports
import retry from "retry";
import sgMail from "@sendgrid/mail";

const sendSubscribeEmail = (email, data, apiKey) => {
  // Configure email options
  const message = generateSubscribeMessage(email, data);
  console.log("Message generated:", message);

  // Initialize retry operation
  const operation = getRetryOperation();
  console.log("Retry operation initialized:", operation);

  return new Promise((resolve, reject) => {
    operation.attempt(async (currentAttempt) => {
      try {
        sgMail.setApiKey(apiKey);
        const info = await sgMail.send(message);
        console.log("Email sent successfully");
        resolve(info);
      } catch (error) {
        console.error(
          `Error sending email (attempt ${currentAttempt}):`,
          error
        );
        if (operation.retry(error)) {
          console.log(`Retrying email (attempt ${currentAttempt + 1})...`);
          return;
        }
        reject(operation.mainError());
      }
    });
  });
};

const sendUnsubscribeEmail = (email, data, apiKey) => {
  // Configure email options
  const message = generateUnsubscribeMessage(email, data);
  console.log("Message generated:", message);

  // Initialize retry operation
  const operation = getRetryOperation();
  console.log("Retry operation initialized:", operation);

  return new Promise((resolve, reject) => {
    operation.attempt(async (currentAttempt) => {
      try {
        sgMail.setApiKey(apiKey);
        const info = await sgMail.send(message);
        console.log("Email sent successfully");
        resolve(info);
      } catch (error) {
        console.error(
          `Error sending email (attempt ${currentAttempt}):`,
          error
        );
        if (operation.retry(error)) {
          console.log(`Retrying email (attempt ${currentAttempt + 1})...`);
          return;
        }
        reject(operation.mainError());
      }
    });
  });
};

const generateUnsubscribeMessage = (email, data) => {
  try {
    if (!data) {
      throw new Error("Invalid input data");
    }

    const message = `${data.email} is unsubscribed to the newsletter.`;

    return {
      to: email,
      from: email,
      subject: message,
      text: message,
      html: `<p>${message}</p>`,
    };
  } catch (error) {
    console.error("Error setting up mail options:", error);
    return null; // Return null or handle the error as appropriate
  }
};

const generateSubscribeMessage = (email, data) => {
  try {
    if (!data) {
      throw new Error("Invalid input data");
    }

    const message = `${data.email} is subscribed to the newsletter.`;

    return {
      to: email,
      from: email,
      subject: message,
      text: message,
      html: `<p>${message}</p>`,
    };
  } catch (error) {
    console.error("Error setting up mail options:", error);
    return null; // Return null or handle the error as appropriate
  }
};

const getRetryOperation = (
  retries = 0,
  factor = 2,
  minTimeout = 1000,
  maxTimeout = 60000,
  randomize = true
) => {
  return retry.operation({
    retries: retries,
    factor: factor,
    minTimeout: minTimeout,
    maxTimeout: maxTimeout,
    randomize: randomize,
  });
};

export { sendSubscribeEmail, sendUnsubscribeEmail };
