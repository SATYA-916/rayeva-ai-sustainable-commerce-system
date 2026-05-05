# 🌍 AI Sustainable Commerce System

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

AI-powered modules designed for **sustainable commerce automation**.
This project demonstrates how modern AI systems can automate product categorization, environmental impact reporting, B2B proposal generation, and customer support.

Built as part of the **Rayeva AI Systems Assignment**, the system focuses on **production-ready AI integration, structured outputs, and clean architecture**.

---

# 🎯 Project Objective

Sustainable commerce platforms require intelligent automation to manage large product catalogs, generate environmental reports, and support customers efficiently.

This system introduces **AI-driven modules** to automate these tasks while ensuring **structured outputs, traceability, and scalable architecture**.

The project implements two modules fully and provides architecture design for the remaining modules.

---
## 🏗 System Architecture

```mermaid
flowchart TD

User[User] --> Frontend[React Frontend]

Frontend --> API[Node.js Express API]

API --> DB[(MongoDB Database)]

API --> AI[AI Processing Layer]

AI --> Gemini[Google Gemini API]

Gemini --> API

API --> Frontend
```

# 🧩 Implemented Modules

## 1️⃣ AI Auto-Category & Tag Generator

Automatically categorizes sustainable products using AI.

### Key Features

* AI-powered product categorization
* SEO tag generation
* Sustainability filter detection
* Confidence scoring
* MongoDB storage
* AI telemetry logging

### Tech Stack

* React
* Tailwind CSS
* Node.js
* Express
* MongoDB
* Google Gemini AI

### Module Repository

Located in:

```
module1-auto-category-tag-generator
```

---

## 2️⃣ AI Impact Reporting Generator

Generates environmental impact reports for product purchases.

### Impact Metrics

* Plastic waste saved
* Carbon emissions avoided
* Local sourcing benefits

### Workflow

1. Retrieve product sustainability data
2. Calculate environmental metrics
3. Generate AI-based impact summary
4. Return structured JSON response

### Tech Stack

* Node.js
* Express
* MongoDB
* Gemini AI

### Module Repository

```
module3-impact-report-generator
```

---
# 📸 Demo Screenshots

## Module 1 – AI Auto Category & Tag Generator

### Product Input

User enters product name and description.

![Module 1 Input](screenshots/module1-input.png)

---

### AI Generated Result

The AI returns category, SEO tags, sustainability filters and confidence score.

![Module 1 Result](screenshots/module1-result.png)

---

### History Dashboard

All previously generated AI results are stored in MongoDB and shown in the history page.

![Module 1 History](screenshots/module1-history.png)

---

## Module 3 – AI Impact Reporting Generator

### Impact Report Input

User selects product and quantity.

![Module 3 Input](screenshots/module3-input.png)

---

### Generated Environmental Impact Report

AI calculates plastic saved and carbon emissions avoided and generates a sustainability statement.

![Module 3 Result](screenshots/module3-result.png)

---

# 🏗 System Architecture Overview

```mermaid
flowchart TD

User[User / Business Client]

User --> Frontend[Frontend Application]

Frontend --> API[Backend API Server]

API --> DB[(MongoDB Database)]

API --> AI[AI Processing Layer]

AI --> Gemini[Google Gemini AI]

Gemini --> API

API --> Frontend
```

The architecture ensures **separation between AI processing, business logic, and database operations**, making the system scalable and maintainable.

---

# 📐 Architecture Modules (Design Only)

The following modules are **architecturally designed but not fully implemented**.

---

# 📊 Module 2: AI B2B Proposal Generator

Generates **sustainable product proposals for businesses** based on budget and sustainability goals.

### Inputs

* Business type
* Budget
* Sustainability preferences

Example:

```json
{
  "business_type": "restaurant",
  "budget": 50000,
  "preferences": ["compostable", "plastic-free"]
}
```

### Architecture

```mermaid
flowchart TD

A[Business Client] --> B[Frontend Request]

B --> C[Backend API /generate-proposal]

C --> D[Input Validation]

D --> E[Product Database]

E --> F[Prompt Builder]

F --> G[LLM API - Gemini]

G --> H[Generate Product Proposal]

H --> I[Structured JSON Output]

I --> J[Store Proposal in Database]

J --> K[Return Proposal to Client]
```

### Example Output

```json
{
 "proposal":[
   {
     "product_name":"Compostable Food Containers",
     "quantity":500,
     "cost":15000
   }
 ],
 "total_cost":27000,
 "impact_summary":"Switching to compostable containers reduces plastic waste significantly."
}
```

---

# 💬 Module 4: AI WhatsApp Support Bot

Provides automated customer support through WhatsApp.

### Features

* Order status queries
* Return policy explanations
* Refund escalation
* AI conversation logging

### Architecture

```mermaid
flowchart TD

User[Customer] --> WA[WhatsApp Message]

WA --> API[WhatsApp API Gateway]

API --> Webhook[Backend Webhook Server]

Webhook --> AI[AI Intent Detection]

AI --> Decision{Intent Type}

Decision -->|Order Status| OrdersDB[(Orders Database)]

Decision -->|Return Policy| PolicyDB[(Policy Knowledge Base)]

Decision -->|Refund Issue| Support[Human Support Escalation]

OrdersDB --> Response[Response Generator]

PolicyDB --> Response

Response --> Send[Send WhatsApp Reply]

Send --> User
```

# 💻 Tech Stack

### Frontend

* React
* Tailwind CSS
* Vite
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### AI Integration

* Google Gemini AI (`@google/genai`)

### Validation & Utilities

* Zod
* dotenv

---

# 📁 Repository Structure

```
rayeva-ai-sustainable-commerce-system
│
├── module1-auto-category-tag-generator
│
├── module3-impact-report-generator
│
├── architecture
│   ├── module2-b2b-proposal.md
│   └── module4-whatsapp-support-bot.md
│
└── README.md
```

---

# 🧠 AI Design Principles

The system is built around **structured AI outputs** to ensure reliability in production environments.

Key design principles:

* Strict JSON outputs from AI
* Prompt engineering for deterministic responses
* Logging of AI prompts and responses
* Clear separation of AI logic and business logic

---

# ⚙️ Environment Configuration

Each module requires its own environment configuration.

Example:

```
GEMINI_API_KEY=your_api_key
MONGODB_URI=your_mongodb_connection
PORT=5000
```

---

# 🚀 Running the Modules

Each implemented module runs independently.

Example:

### Start Backend

```
cd backend
npm install
npm run dev
```

### Start Frontend

```
cd frontend
npm install
npm run dev
```

---

# 🎥 Demo Videos

### Module 1 – AI Auto Category & Tag Generator

This demo shows:
- Product input
- AI category generation
- SEO tags and sustainability filters
- History dashboard

Watch the demo:

[Watch Module 1 Demo](https://youtu.be/Cc3gLWlLt3U)

---

### Module 3 – AI Impact Reporting Generator

This demo shows:
- Product selection
- Quantity input
- Environmental impact calculation
- AI generated sustainability report

Watch the demo:

[Watch Module 3 Demo](https://youtu.be/W1VUGBMM_0E)

---

# 📌 Evaluation Criteria Alignment

This project addresses the assignment evaluation metrics:

| Criteria              | Implementation                  |
| --------------------- | ------------------------------- |
| Structured AI Outputs | JSON outputs enforced           |
| Business Logic        | Sustainability calculations     |
| Clean Architecture    | Modular backend design          |
| Practical Usefulness  | Real commerce use case          |
| Creativity            | AI + sustainability integration |

---

# 🔮 Future Improvements

Potential improvements include:

* Real lifecycle carbon footprint models
* Sustainable supplier recommendation AI
* Automated ESG reporting
* Sustainability analytics dashboards
* Full WhatsApp AI deployment

---

# 👨‍💻 Author

Developed as part of the **Rayeva AI Systems Internship Assignment**.

This project demonstrates **full-stack AI engineering, prompt design, sustainable commerce automation, and scalable architecture design**.
