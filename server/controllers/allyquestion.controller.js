const AllyQuestion = require('../models/allyquestion.model');
const User = require('../models/user.model');

// Create a new Ally Question
exports.createAllyQuestion = async (req, res) => {
    try {
        const { question } = req.body;
        const newAllyQuestion = await AllyQuestion.create({ question, user: req.user._id });
        res.status(201).json({ message: 'Ally Question created successfully', allyQuestion: newAllyQuestion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a specific Ally Question by ID
exports.getAllyQuestionById = async (req, res) => {
    try {
        const allyQuestion = await AllyQuestion.findById(req.params.id).populate('answers.user', 'username');
        if (!allyQuestion) {
            return res.status(404).json({ message: 'Ally Question not found' });
        }
        res.status(200).json(allyQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all Ally Questions
exports.getAllAllyQuestions = async (req, res) => {
    try {
        const allyQuestions = await AllyQuestion.find().populate('user', 'username').populate('answers.user', 'username');
        res.status(200).json(allyQuestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an Ally Question or Answer
exports.updateAllyQuestion = async (req, res) => {
    try {
        const { id } = req.params; 
        const { question, answer, answerId } = req.body; 

        const allyQuestion = await AllyQuestion.findById(id).populate('answers.user');

        if (!allyQuestion) {
            return res.status(404).json({ message: 'Ally Question not found' });
        }

        // Update Question
        if (question && allyQuestion.user.toString() === req.user._id.toString()) {
            allyQuestion.question = question;
        }

        // Update Answer
        if (answer && answerId) {
            const existingAnswer = allyQuestion.answers.id(answerId);
            if (existingAnswer && existingAnswer.user.toString() === req.user._id.toString()) {
                existingAnswer.answer = answer;
            } else {
                return res.status(403).json({ message: 'User not authorized to update this answer or answer not found' });
            }
        }

        await allyQuestion.save();
        res.status(200).json({ message: 'Ally Question updated', allyQuestion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an Ally Question or an individual Answer
exports.deleteAllyQuestion = async (req, res) => {
    try {
        const { id } = req.params; // ID of the AllyQuestion
        const { answerId } = req.body; // ID of the Answer to be deleted (if provided)

        const allyQuestion = await AllyQuestion.findById(id);

        if (!allyQuestion) {
            return res.status(404).json({ message: 'Ally Question not found' });
        }

        // Delete an individual Answer
        if (answerId) {
            const answerToDelete = allyQuestion.answers.id(answerId);
            if (!answerToDelete) {
                return res.status(404).json({ message: 'Answer not found' });
            }

            if (answerToDelete.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ message: 'User not authorized to delete this answer' });
            }

            answerToDelete.remove();
            await allyQuestion.save();
            return res.status(200).json({ message: 'Answer deleted successfully' });
        }

        // Delete the entire Question (and all associated Answers)
        if (allyQuestion.user.toString() === req.user._id.toString()) {
            await AllyQuestion.findByIdAndRemove(id);
            return res.status(200).json({ message: 'Ally Question and all associated answers deleted' });
        } else {
            return res.status(403).json({ message: 'User not authorized to delete this question' });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Ally Questions by a specific user
exports.getAllyQuestionsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const allyQuestions = await AllyQuestion.find({ user: userId }).populate('user', 'username');
        res.status(200).json(allyQuestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = exports;
