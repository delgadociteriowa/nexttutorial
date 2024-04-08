import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    // I have deleted .next folder, run everything again with the following new implementation, but still throws error
    const properties = await Property.find({});

    return Response.json(properties);
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
