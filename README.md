# fitfare
Fitfare pre-registration website

Glimpse of the Registration page
![Screenshot_20250128_145055](https://github.com/user-attachments/assets/e4943c30-7506-47a5-87e4-523609a34301)


---

## 🚀 Setup Guide

Follow these steps to set up the project locally.

---

### 📁 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/PranavKuntewar04/FitFare-fullstack.git
cd FitFare-fullstack
```

---

### 🔧 2. Backend Setup

#### Step into the backend folder:

```bash
cd backend
```

#### Install backend dependencies:

```bash
npm install
```

#### Configure environment variables:

Create a `.env` file in the `backend` directory based on the provided example `.env.example`:

```bash
cp .env.example .env
```

Edit the `.env` file and add your credentials:

```env
DATABASE_URL=your_database_connection_url
GOOGLE_MAP_API_KEY=your_google_maps_api_key
```

> 💡 You can get a database URL from providers like Supabase.

#### Start the backend server:

```bash
node index.js
```

The backend will start running on the default port (e.g., `http://localhost:3000` unless specified otherwise).

---

### 💻 3. Frontend Setup

Open a **new terminal window** or tab, then:

#### Navigate to the frontend folder:

```bash
cd frontend
```

#### Install frontend dependencies:

```bash
npm install
```

#### Configure environment variables:

Create a `.env` file in the `frontend` directory based on the provided example `.env.example`:

```bash
cp .env.example .env
```

Add your Google Maps API key:

```env
GOOGLE_MAP_API_KEY=your_google_maps_api_key
```

#### Start the frontend development server:

```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`.

---

### ✅ All Set!

You can now visit the application in your browser and explore the Fitfare pre-registration experience.

---
