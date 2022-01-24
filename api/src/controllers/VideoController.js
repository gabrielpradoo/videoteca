const { request: req, response: res } = require("express");
const { v4: uuid } = require("uuid");
const Video = require("../models/Video");

module.exports = {
  async index(req, res) {
    try {
      const videos = await Video.find();
      return res.status(200).json({ videos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async store(req, res) {
    const { title, link } = req.body;

    if (!title || !link) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    const video = new Video({
      _id: uuid(),
      title,
      link,
      liked: false,
    });

    try {
      await video.save();
      return res.status(201).json({ message: "Video added succesfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
