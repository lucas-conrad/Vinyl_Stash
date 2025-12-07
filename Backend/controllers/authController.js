const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        req.session.userId = newUser._id;
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {   
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        req.session.userId = user._id;

        console.log("Session after login:", req.session);
        return res.json({ success: true});
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error during logout:', err);
            return res.status(500).json({ error: 'Logout Failed' });
        }

        res.clearCookie('connect.sid', {
            path: '/login',
        });

        return res.json({ message: 'Logged out successfully' });
    });
};