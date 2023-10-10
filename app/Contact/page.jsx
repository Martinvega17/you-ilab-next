"use client"
import ContactForm from "../../components/contactForm";
import { ToastProvider } from 'react-toast-notifications';

export default function ContactForms() {
  return (
    
      <ToastProvider
      position="top-center"
  reverseOrder={false}>
        <ContactForm />
      </ToastProvider>
    
  );
}
