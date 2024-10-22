const Booking = require('../models/Booking');
const Interview = require('../models/Interview');

exports.createBooking = async (req, res) => {
  try {
    const { interviewId, date } = req.body;
    const interview = await Interview.findById(interviewId);
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    const booking = await Booking.create({
      interview: interviewId,
      candidate: req.user.id,
      date,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ candidate: req.user.id })
      .populate('interview', 'title description')
      .populate('candidate', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('interview', 'title description')
      .populate('candidate', 'name email');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.candidate.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    booking.date = req.body.date || booking.date;
    booking.status = req.body.status || booking.status;

    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.candidate.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await booking.remove();
    res.json({ message: 'Booking removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};