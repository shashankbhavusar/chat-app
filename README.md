# 💬 AI-Powered Real-Time Chat Application

A modern full-stack chat platform built with React, TypeScript, Node.js, MongoDB, and Socket.IO. The application enables real-time messaging, AI-powered conversations, secure authentication, media sharing, and a responsive user experience.

## ✨ Features

### 🔐 Authentication
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected routes
- Cookie-based session management

### 💬 Real-Time Messaging
- Instant messaging using Socket.IO
- Live message delivery
- Real-time user interactions
- Online presence updates

### 🤖 AI Chat Support
- Google AI integration
- AI-powered conversations
- Streaming responses
- Intelligent chat assistance

### 📸 Media Support
- Image upload support
- Cloudinary integration
- Media sharing within chats

### 🎨 Modern UI
- React 19 + TypeScript
- Tailwind CSS v4
- ShadCN UI Components
- Responsive design
- Dark/Light theme support

### 📋 Form Handling & Validation
- React Hook Form
- Zod validation
- Type-safe forms
- Client and server validation

### ⚡ State Management
- Zustand for global state
- Optimized rendering
- Efficient state updates

---

## 🏗️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|----------|
| React 19 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS v4 | Styling |
| Zustand | State Management |
| React Router v7 | Routing |
| Socket.IO Client | Real-time Communication |
| React Hook Form | Form Management |
| Zod | Validation |
| Axios | API Requests |
| Radix UI / ShadCN | UI Components |

### Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| Express 5 | API Server |
| TypeScript | Type Safety |
| MongoDB | Database |
| Mongoose | ODM |
| Socket.IO | Real-time Communication |
| Passport JWT | Authentication |
| JWT | Authorization |
| bcrypt | Password Hashing |
| Cloudinary | Media Storage |
| Google AI SDK | AI Integration |
| Zod | Validation |

---

## 📂 Project Structure

```text
chat-app/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/shashankbhavusar/chat-app.git

cd chat-app
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

GOOGLE_API_KEY=your_google_ai_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start development server:

```bash
npm run dev
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000
```

Run development server:

```bash
npm run dev
```

---

## 🔌 Environment Variables

### Backend

| Variable | Description |
|-----------|------------|
| PORT | Backend Port |
| MONGO_URI | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key |
| CLIENT_URL | Frontend URL |
| GOOGLE_API_KEY | Google AI API Key |
| CLOUDINARY_CLOUD_NAME | Cloudinary Cloud Name |
| CLOUDINARY_API_KEY | Cloudinary API Key |
| CLOUDINARY_API_SECRET | Cloudinary API Secret |

### Frontend

| Variable | Description |
|-----------|------------|
| VITE_API_URL | Backend API URL |

---

## 📡 Core Functionalities

- User Registration
- User Login
- JWT Authentication
- Real-Time Messaging
- AI Chat Assistant
- Media Uploads
- Chat History
- Protected Routes
- Form Validation
- Theme Support

---

## 🧪 Development

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm run dev
```

### Production Build

Frontend:

```bash
npm run build
```

Backend:

```bash
npm run start
```

---

## 🌐 Deployment

### Frontend
- Vercel
- Netlify

### Backend
- Render
- Railway
- AWS EC2

### Database
- MongoDB Atlas

### Media Storage
- Cloudinary

---

## 🔮 Future Enhancements

- Group Chats
- Message Reactions
- Voice Messages
- Video Calling
- Push Notifications
- Read Receipts
- Message Search
- User Presence Indicators
- AI Chat Memory

---

## 🤝 Contributing

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit changes

```bash
git commit -m "Add amazing feature"
```

4. Push branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 🏛️ System Architecture

```text
┌─────────────────────────────────────────────┐
│                 Frontend                    │
│                                             │
│  React 19 + TypeScript + Vite              │
│  Zustand + React Router + Tailwind CSS     │
│                                             │
└───────────────────┬─────────────────────────┘
                    │
                    │ HTTP/HTTPS (REST APIs)
                    │
                    ▼
┌─────────────────────────────────────────────┐
│                 Backend                     │
│                                             │
│         Node.js + Express + TypeScript      │
│                                             │
│  ┌──────────────┐    ┌──────────────────┐   │
│  │ Auth Module  │    │ Chat Module      │   │
│  │ JWT          │    │ Messages         │   │
│  │ Passport     │    │ Conversations    │   │
│  └──────────────┘    └──────────────────┘   │
│                                             │
│  ┌──────────────┐    ┌──────────────────┐   │
│  │ AI Module    │    │ Media Module     │   │
│  │ Google AI    │    │ Cloudinary       │   │
│  └──────────────┘    └──────────────────┘   │
│                                             │
└───────┬──────────────┬───────────────┬──────┘
        │              │               │
        │              │               │
        ▼              ▼               ▼

┌─────────────┐ ┌──────────────┐ ┌──────────────┐
│  MongoDB    │ │  Cloudinary  │ │ Google AI    │
│             │ │              │ │ API          │
│ Users       │ │ Images       │ │ AI Chat      │
│ Messages    │ │ Media Files  │ │ Responses    │
│ Chats       │ │              │ │              │
└─────────────┘ └──────────────┘ └──────────────┘


Real-Time Communication

┌─────────────┐       Socket.IO       ┌─────────────┐
│   Client A  │ ◄──────────────────► │   Backend   │
└─────────────┘                       └─────────────┘
                                              ▲
                                              │
                                              │ Socket.IO
                                              ▼
                                     ┌─────────────┐
                                     │   Client B  │
                                     └─────────────┘
```

---

## 🔄 Application Flow

### User Authentication

```text
User Login/Register
        │
        ▼
Frontend Form
        │
        ▼
Express API
        │
        ▼
Validate Request (Zod)
        │
        ▼
MongoDB User Lookup
        │
        ▼
Generate JWT Token
        │
        ▼
Return Authenticated Session
```

### Real-Time Messaging

```text
User Sends Message
        │
        ▼
Socket.IO Event
        │
        ▼
Backend Server
        │
        ├── Store Message in MongoDB
        │
        └── Broadcast to Recipient
                    │
                    ▼
              Recipient Receives
              Message Instantly
```

### AI Chat Flow

```text
User Prompt
      │
      ▼
Frontend
      │
      ▼
Express API
      │
      ▼
Google AI SDK
      │
      ▼
AI Response Generated
      │
      ▼
Store Conversation
      │
      ▼
Return Response to User
```

### Media Upload Flow

```text
User Uploads Image
        │
        ▼
Frontend
        │
        ▼
Backend API
        │
        ▼
Cloudinary Upload
        │
        ▼
Image URL Generated
        │
        ▼
Store URL in MongoDB
        │
        ▼
Share in Chat
```

---

## 🎯 Architecture Highlights

- Scalable client-server architecture
- Real-time bidirectional communication using Socket.IO
- JWT-based stateless authentication
- Cloud-based media storage with Cloudinary
- AI-powered conversations using Google AI
- Type-safe development with TypeScript
- Centralized state management using Zustand
- Schema validation using Zod
- Responsive and modern UI with Tailwind CSS and ShadCN
- MongoDB for flexible and scalable data storage


graph TD

A[React Frontend] -->|REST API| B[Express Backend]

A -->|Socket.IO| B

B --> C[(MongoDB)]
B --> D[Cloudinary]
B --> E[Google AI]

C --> F[Users]
C --> G[Chats]
C --> H[Messages]

D --> I[Images]
D --> J[Media Files]

E --> K[AI Responses]

## 📄 License

Licensed under the MIT License.

---

## 👨‍💻 Author

### Shashank H T

GitHub:
https://github.com/shashankbhavusar

