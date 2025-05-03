# Neura

[Live Demo 🚀](https://neura-delta.vercel.app/)

**Neura** is a next-generation collaborative document platform — combining real-time editing, AI-assisted content creation, and translation into one seamless experience.

---

## ✨ Features

- 🌎 **Translate** documents into any language via **Cloudflare Workers**.
- 🤖 **Chat to Document** with **OpenAI GPT** for AI-powered assistance.
- 📨 **Invite collaborators** by email to co-edit documents.
- 🔥 **Realtime collaboration** using **Liveblocks** and **Yjs**.
- 🔐 **Authentication** and **user management** via **Clerk**.
- 🌗 **Light and Dark mode** for an adaptable user experience.

---

## ⚙️ How It Works

Neura integrates multiple technologies to create a rich, collaborative environment:

- **Liveblocks** powers real-time document editing with smooth UX, live presence indicators, and collaborative editing cursors.  
  - It uses **Liveblocks Blacknote** for document collaboration and structure.
  - **LiveCursorProvider** is implemented to track in real-time **where other users are editing** and **which part of the document they are navigating**.
  - Each document is assigned a unique UUID for authentication, session management, and real-time updates.

- **Firebase** manages users and document permissions:
  - **Owner**: Full control (edit, rename, invite/remove editors, delete document).
  - **Editor**: Can edit documents and participate in chat.

- **Clerk** handles user authentication seamlessly.

- **Cloudflare Workers** translate document content into different languages dynamically.

- **OpenAI API** enables intelligent document interactions and chat.

---

## 🛠 Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.dev/) (`AddButton`, `Sheet`)
- [Framer Motion](https://www.framer.com/motion/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [tw-animate-css](https://github.com/benface/tw-animate)

### Backend & Realtime

- [Liveblocks](https://liveblocks.io/)
- [Yjs](https://docs.yjs.dev/)
- [Firebase](https://firebase.google.com/)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [OpenAI](https://openai.com/)
- [Hono](https://hono.dev/) (Cloudflare Workers web framework)

### Libraries & SDKs

- `@liveblocks/client`
- `@liveblocks/yjs`
- `@liveblocks/node`
- `react-firebase-hooks`
- `@clerk/clerk-sdk`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash

git clone https://github.com/your-username/neura.git

cd neura


### 2. Install Dependencies

bash

Copy

Edit

npm install

### 3. Set Up Firebase

Navigate to Firebase Console → Project Settings → Service Accounts.

Generate a new private key.

Save it as service_key.json in your project root.

 ### 4. Configure Environment Variables

Create a .env.local file:

env

Copy

Edit

NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api

NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY=your-liveblocks-public-key

OPENAI_API_KEY=your-openai-api-key

NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id

NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

(Adjust based on your Firebase and Clerk setup.)

5\. Deploy Cloudflare Worker

Install Cloudflare CLI c3 if you haven't:

bash

Copy

Edit

npm install -g c3

Deploy your worker:

bash

Copy

Edit

npm run deploy


---


# 📸 Screenshots

Coming Soon!

(You can add animated gifs or screenshots showing collaboration, editing, translation, and authentication here.)

# 📜 License

This project is licensed under the MIT License.

# 🙏 Acknowledgments

Liveblocks --- for amazing realtime collaboration tools.

Clerk --- for modern authentication made simple.

Firebase --- for a reliable and scalable backend.

Cloudflare Workers --- for lightning-fast serverless functions.

OpenAI --- for the incredible AI-powered text generation.







--NextJs
--TailwindCSS
--ShadCN (addbutton, sheet)
--tw-animate-css
--Clerk
--cloudfare c3 (cli , worker)   ........run "npm run deploy" to deploy it
--Firebase
--Firebase-admin
--we go to firebase->service account->generate new private key and add it into service_key.json
--react-firebase-hooks
--LiveBlocks
--framer-motion
--@liveblocks/node
--Yjs
--@liveblocks/client 
--@liveblocks/yjs
--react-markdown
