import { connect } from '@/utilities/dbConfig';
import User from '@/models/user';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
  }

  try {
    await connect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'Email already in use' }), { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
