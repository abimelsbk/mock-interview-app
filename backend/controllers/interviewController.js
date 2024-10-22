const Interview = require('../models/Interview');

exports.createInterview = async (req, res) => {
  try {
    const { title, description, duration, price } = req.body;
    const interview = await Interview.create({
      interviewer: req.user.id,
      title,
      description,
      duration,
      price,
    });
    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find().populate('interviewer', 'name email');
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id).populate('interviewer', 'name email');
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }
    res.json(interview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    if (interview.interviewer.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const { title, description, duration, price } = req.body;
    interview.title = title || interview.title;
    interview.description = description || interview.description;
    interview.duration = duration || interview.duration;
    interview.price = price || interview.price;

    const updatedInterview = await interview.save();
    res.json(updatedInterview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteInterview = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    if (interview.interviewer.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await interview.remove();
    res.json({ message: 'Interview removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};