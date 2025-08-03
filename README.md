# OCR Invoice App

A modern web application for extracting invoice data using OCR technology. Built with Next.js, Tailwind CSS, and ShadCN UI components.

## Features

- 📄 **File Upload**: Drag & drop support for PDF and image files
- 🔍 **OCR Processing**: Extract invoice data using Mindee Invoice OCR API
- 📊 **Dashboard**: Overview of invoices and processing statistics
- 📋 **Invoice List**: View and manage all processed invoices
- 👤 **User Profile**: Account settings and preferences
- 🎨 **Modern UI**: Beautiful interface built with ShadCN and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **File Upload**: React Dropzone
- **OCR Service**: Mindee Invoice API
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Mindee API key (for OCR functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ocr-invoice-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MINDEE_API_KEY=your_mindee_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── ocr/
│   │       └── route.ts          # OCR API endpoint
│   ├── invoice/
│   │   ├── create/
│   │   │   └── page.tsx          # Invoice creation page
│   │   └── list/
│   │       └── page.tsx          # Invoice list page
│   ├── profile/
│   │   └── page.tsx              # User profile page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Dashboard page
├── components/
│   ├── ui/                       # ShadCN UI components
│   ├── header.tsx                # Navigation header
│   └── navigation.tsx            # Navigation component
└── lib/
    └── utils.ts                  # Utility functions
```

## API Integration

### Mindee Invoice OCR API

The app integrates with Mindee's Invoice OCR API to extract structured data from invoice documents.

**Setup:**
1. Sign up for a Mindee account at [mindee.com](https://mindee.com)
2. Get your API key from the dashboard
3. Add the API key to your `.env.local` file

**Supported File Types:**
- PDF files
- Image files (PNG, JPG, JPEG, GIF, BMP)
- Maximum file size: 10MB

**Extracted Data:**
- Invoice number
- Invoice date
- Vendor/supplier information
- Total amount
- Line items (description, quantity, price, total)

## Pages

### Dashboard (`/`)
- Overview statistics
- Quick action buttons
- Recent activity feed

### Create Invoice (`/invoices/create`)
- File upload with drag & drop
- Image preview for uploaded files
- OCR processing with extracted data display
- Form to edit extracted data

### Invoice List (`/invoices/list`)
- Table view of all invoices
- Search and filter functionality
- Status indicators
- Action buttons (view, edit, download, delete)

### Profile (`/profile`)
- Personal information management
- Account settings
- API key configuration
- Notification preferences

## Development

### Adding New Components

The project uses ShadCN UI. To add new components:

```bash
npx shadcn@latest add <component-name>
```

### Styling

The project uses Tailwind CSS with custom design tokens. The theme is configured in `tailwind.config.ts`.

### API Routes

All API routes are located in `src/app/api/` following Next.js 13+ App Router conventions.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables

Make sure to set these environment variables in production:

```env
MINDEE_API_KEY=your_production_mindee_api_key
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue on GitHub or contact the development team.
