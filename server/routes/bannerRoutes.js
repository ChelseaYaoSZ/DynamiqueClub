"use strict";

// External imports
import { Router } from "express";

// Initialize router
const router = Router();

// Endpoints for banner
// Create a new banner
router.post('/', async (req, res) => {
    try {
      const banner = new Banner(req.body);
      await banner.save();
      res.status(201).send(banner);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Get all banners
  router.get('/', async (req, res) => {
    try {
      const banners = await Banner.find({});
      res.status(200).send(banners);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Get a single banner by id
  router.get('/:id', async (req, res) => {
    try {
      const banner = await Banner.findById(req.params.id);
      if (!banner) {
        return res.status(404).send();
      }
      res.status(200).send(banner);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Update a banner by id
  router.put('/:id', async (req, res) => {
    try {
      const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!banner) {
        return res.status(404).send();
      }
      res.status(200).send(banner);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Delete a banner
  router.delete('/:id', async (req, res) => {
    try {
      const banner = await Banner.findByIdAndDelete(req.params.id);
      if (!banner) {
        return res.status(404).send();
      }
      res.status(200).send(banner);
    } catch (error) {
      res.status(500).send(error);
    }
  });


export default router;
