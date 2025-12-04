# Sentivox Frontend

Frontend React application for Sentivox - AI-Powered Interview Analysis Platform.

## Features

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS with shadcn/ui components
- TanStack Query for server state management
- Wouter for client-side routing
- Role-based dashboards (Admin, Recruiter, Candidate)
- Real-time processing status updates
- Interactive data visualizations
- PDF report generation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
VITE_API_URL=https://your-backend-url.onrender.com
```

**Note:** For production on Vercel, set `VITE_API_URL` in the Vercel dashboard environment variables.

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment on Vercel

1. Connect your GitHub repository to Vercel
2. Set the following environment variable in Vercel:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://your-backend.onrender.com`)
   
   **Note:** Make sure to set this to your actual Render backend URL when deploying.
3. Vercel will automatically detect Vite and build the project
4. The `vercel.json` file is already configured for SPA routing

## Backend Integration

The frontend communicates with the backend API using the `VITE_API_URL` environment variable. Make sure your backend is deployed and the CORS is configured to allow requests from your Vercel domain.

**Backend URL:** The backend should be deployed on Render and the URL should be set in `VITE_API_URL`.

## Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Route pages
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities, API helpers, types
│   └── App.tsx         # Main app component
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
