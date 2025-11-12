# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite to showcase my projects, skills, and achievements.

## 🚀 Features

- Responsive design that works on all devices
- Clean and modern UI
- Interactive navigation
- Project showcase with live demos and GitHub links
- Skills section with technology proficiency
- Coding profiles and certifications showcase
- Functional contact form with email integration (EmailJS + SendGrid)
- Social media integration

## 🛠️ Built With

- React.js
- Vite
- CSS3 (Custom styling)
- EmailJS (Email service integration)
- SendGrid (SMTP relay)

## 🎯 Sections

- **Home**: Introduction and quick overview
- **About**: Detailed background and education
- **Skills**: Technical skills and Soft Skills
- **Projects**: Showcase of recent projects
- **Coding Profiles**: Links to coding platforms and certifications
- **Contact**: Get in touch form and social links

## 💻 Local Development

1. Clone the repository
```bash
git clone https://github.com/singhalaadi/Personal-Portfolio.git
```

2. Navigate to the project directory
```bash
cd Personal-Portfolio
```

3. Install dependencies
```bash
npm install
```

4. Set up environment variables
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
     - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

5. Start the development server
```bash
npm run dev
```

6. Open your browser and visit `http://localhost:5173`

## 🔐 Environment Variables

To run the contact form, you need to set up the following environment variables:

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

### Setting up EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (SMTP with SendGrid recommended)
3. Create an email template
4. Copy the service ID, template ID, and public key to your `.env` file

## 📝 Project Structure

```
Personal-Portfolio/
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop devices
- Tablets
- Mobile phones

## 🚀 Deployment

The site is deployed using [Netlify](https://app.netlify.com/). You can visit it at [Click Here](https://aaditya-singhal-portfolio.netlify.app/).

### Deployment Steps:

1. Build the project
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform

3. **Important**: Add environment variables in your hosting platform:
   - For Netlify: Site Settings → Environment Variables
   - For Vercel: Project Settings → Environment Variables
   - Add all three EmailJS variables from your `.env` file

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aaditya Singhal**
- GitHub: [@singhalaadi](https://github.com/singhalaadi)
- LinkedIn: [Aaditya Singhal](https://www.linkedin.com/in/aaditya-singhal26/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/singhalaadi/aaditya-singhal-portfolio/issues).
