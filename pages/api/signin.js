// pages/api/signin.js
import Connection from '../../database/config';
import user from '../../modal/user';
import bcrypt from 'bcryptjs';


export default async function handler(req, res) {
    const { method } = req;

    await Connection();

    if (method === 'POST') {
        try {
            const { email, password } = req.body;
            const theUser = await user.findOne({ email });

            if (!theUser) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, theUser.password);

            if (!isMatch) {
                return res.status(400).json({ success: false, message: 'Invalid credentials' });
            }

            res.status(200).json({ success: true, message: 'Login successful', data: theUser });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
