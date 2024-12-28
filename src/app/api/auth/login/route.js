import { connect } from '@/utilities/dbConfig';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const ADMIN_EMAILS = ['admin@example.com', 'superadmin@example.com']; // Admin emails

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: 'Email and password are required' }),
      { status: 400 }
    );
  }

  try {
    await connect();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 400 }
      );
    }

    // Determine if user is admin based on email
    const isAdmin = ADMIN_EMAILS.includes(user.email);

    // Generate JWT with user type
    const token = jwt.sign(
      { userId: user._id, isAdmin }, // Include isAdmin in token
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const response = new Response(
      JSON.stringify({ message: 'Login successful', token, isAdmin }),
      { status: 200 }
    );

    response.headers.set(
      'Set-Cookie',
      `token=${token}; Path=/;`
    );

    return response;
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}
