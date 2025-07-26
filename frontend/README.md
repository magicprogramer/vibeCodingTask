
# Full Stack Project (NestJS + Next.js)

## Clone the Project

```bash
git https://github.com/magicprogramer/vibeCodingTask.git
cd vibeCodingTask
```

## Project Structure

```
proj/
  ├── backend/     # NestJS API
  └── frontend/    # Next.js client
```

## Backend Setup (NestJS)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. Fill in the `.env` file with:
   - `PORT` (e.g., 3001)
   - `MONGO_URI` (your MongoDB connection string)

5. Start the development server:
   ```bash
   npm run start:dev
   ```

## Frontend Setup (Next.js)

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Notes
- Make sure the backend is running before accessing the frontend.
- Don't forget to copy .env.example to a .env file
