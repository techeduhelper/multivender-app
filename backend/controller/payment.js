import express from "express";
const router = express.Router();
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeApiKey = process.env.STRIPE_API_KEY;

const stripeInstance = stripe(stripeSecretKey);

router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const myPayment = await stripeInstance.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
          company: "Opstra",
        },
      });

      res.status(200).json({
        success: true,
        client_secret: myPayment.client_secret,
      });
    } catch (error) {
      return next(error);
    }
  })
);

router.get(
  "/stripeapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApiKey });
  })
);

export default router;
