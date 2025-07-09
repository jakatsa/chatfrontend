# **ChatSystem Frontend**

Frontend interface for the real-time chat system built with **React**, supporting live messaging, typing indicators, and online user presence with WebSocket integration.

---

## **Key Features**

- **Real-Time Updates**:  
  Leverages WebSocket to provide instant message delivery.

- **User Interface**:  
  Built using React with a clean and responsive design.

- **Online Status Display**:  
  Shows a list of online users in the conversation.

- **Typing Indicators**:  
  Displays when another user is typing in the conversation.

- **Authentication and Authorization**:  
  Uses JWT for managing user sessions.

- **Error Handling**:  
  Graceful handling of network and server errors.

---

## **Project Structure**

```plaintext
chatappfrontend/
├── components/
│   ├── Conversation.jsx    # Manages real-time chat UI and WebSocket communication
│   ├── ChatList.jsx        # Displays the list of conversations
│   ├── Login.jsx           # Handles user login
│   ├── Register.jsx        # Handles user registration
├── styles/                 # Custom CSS styles for responsiveness and design
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── package.json            # Dependency definitions
```

---

## **Frontend Setup**

1. **Navigate to Project Directory**

   ```bash
   cd chatappfrontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

---

## **Key Components**

### **WebSocket Client**

- **Real-Time Communication**:

  - Connects to the backend WebSocket server.
  - Sends and receives real-time events (messages, typing indicators).

- **Message List**:

  - Displays messages with a clear distinction between sent and received messages.

- **Typing Indicator**:
  - Displays the name of the user typing in the chat.
