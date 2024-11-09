import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import venueRoutes from './routes/venueRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import serviceProviderRoutes from './routes/serviceProviderRoutes.js';
import businessRoutes from './routes/businessRoutes.js';
import cartRoutes from './routes/cart.js';
import checkoutRoutes from './routes/checkout.js';
import { authenticateToken } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(bodyParser.json()); // For parsing application/json

// Public routes (no middleware)
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', venueRoutes);
app.use('/api', serviceRoutes); // Use the services route
app.use('/api', cartRoutes); // Use the cart routes under /api/cart
app.use('/api', checkoutRoutes);  // Mount checkout routes

// Protected routes
app.use('/api', authenticateToken, bookingRoutes);  // Protected with JWT authentication
app.use('/api', authenticateToken, adminRoutes);


// Additional routes
app.use('/api/service-provider', serviceProviderRoutes);
app.use('/api/business', businessRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
