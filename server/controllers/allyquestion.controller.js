const AllyQuestion = require('../models/allyquestion.model');
const User = require('../models/user.model'); // Ensure this path is correct

const AllyQuestionController = {
    createAllyQuestion: async (req, res) => {
        try {
            const { question } = req.body;
            const newAllyQuestion = await AllyQuestion.create({ question, user: req.user._id });
            res.status(201).json({ message: 'Ally Question created successfully', allyQuestion: newAllyQuestion });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllyQuestionById: async (req, res) => {
        try {
            const allyQuestion = await AllyQuestion.findById(req.params.id).populate('answers.user', 'username');
            if (!allyQuestion) {
                return res.status(404).json({ message: 'Ally Question not found' });
            }
            res.status(200).json(allyQuestion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllAllyQuestions: async (req, res) => {
        try {
            const allyQuestions = await AllyQuestion.find().populate('user', 'username').populate('answers.user', 'username');
            res.status(200).json(allyQuestions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateAllyQuestion: async (req, res) => {
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
    },

    deleteAllyQuestion: async (req, res) => {
        try {
            const { id } = req.params;
            const { answerId } = req.body;

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

            // Delete the entire Question
            if (allyQuestion.user.toString() === req.user._id.toString()) {
                await AllyQuestion.findByIdAndRemove(id);
                return res.status(200).json({ message: 'Ally Question and all associated answers deleted' });
            } else {
                return res.status(403).json({ message: 'User not authorized to delete this question' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllyQuestionsByUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const allyQuestions = await AllyQuestion.find({ user: userId }).populate('user', 'username');
            res.status(200).json(allyQuestions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = AllyQuestionController;

