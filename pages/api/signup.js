// pages/api/signup.js
import Connection from '../../database/config';
import user from '../../modal/user';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    const { method } = req;

    await Connection();

    if (method === 'POST') {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ success: false, message: 'Email and password are required.' });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await user.create({
                name,
                email,
                password: hashedPassword,
            });

            res.status(201).json({ success: true, data: newUser });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
