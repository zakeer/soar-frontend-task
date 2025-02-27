# Soar Task Financial Dashboard

## Project Overview

The task is to build a financial dashboard application with multiple views for the user. The application should have responsive design and functionality as shown in the provided [Figma Link](https://www.figma.com/design/Lf57jfEvFsQjNZdQi07qyv/Soar-Front-End-Dev-Task?node-id=0-1&t=Peh4DOcavX88B4up-1). The main purpose of this application is to display an overview of financial activities, card details, transactions, statistics, and user settings.

[Task PDF](./Front-End_Developer_Assessment_Task_Requirements_Document.pdf)


## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v18.0.0 or later)
- pnpm (v9.0.0 or later)

## Getting Started

### Installing pnpm

If you don't have pnpm installed, you can install it using one of the following methods:

#### Using npm

```bash
npm install -g pnpm
```

### Cloning the Repository

To clone the repository, run the following command in your terminal:

```bash
git clone https://github.com/zakeer/soar-frontend-task.git
cd soar-frontend-task
```

Install dependencies

```bash
pnpm install
```

Start Local Development

```bash
pnpm run dev
```

## Features

- Interactive dashboard with financial overview
- Transaction history and management
- Expense statistics and visualizations
- Responsive design for various screen sizes
- User profile management with avatar upload
- Real-time data updates using React Query

### Detailed Features

#### Dashboard

- Overview of financial status
- Quick access to recent transactions
- Visual representations of expenses and income

#### Transactions

- List of recent transactions

#### Expense Tracking

- Pie chart visualization of expenses by category
- Weekly activity bar chart
- Balance history line graph

#### Quick Transfer

- Easily transfer money to frequent contacts

#### Settings Page

- Edit user profile information
- Avatar upload and management
  - Interactive image cropping
  - Zoom and pan options for precise avatar selection
  - Preview of the cropped avatar before saving

## Technologies Used

- React 19
- Vite
- TypeScript
- React Router for navigation
- Tailwind CSS along with Shadcn UI for styling
- Recharts for data visualization
- React Query for data fetching and caching
- MSW (Mock Service Worker) for API mocking
- React Hook Form for form management
- Zod for form validation
- React Easy Crop for image cropping
