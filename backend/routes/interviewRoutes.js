const express = require('express');
const router = express.Router();
const {
  createInterview,
  getInterviews,
  getInterviewById,
  updateInterview,
  deleteInterview,
} = require('../controllers/interviewController');
const { protect } = require('../middleware/auth');

router.route('/').post(protect, createInterview).get(getInterviews);
router
  .route('/:id')
  .get(getInterviewById)
  .put(protect, updateInterview)
  .delete(protect, deleteInterview);

module.exports = router;