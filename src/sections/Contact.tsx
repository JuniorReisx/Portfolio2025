import { useState } from "react";
import { Button } from "../components/Button";

interface CopyState {
  hasCopied: boolean;
  field: string | null;
}

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>({
    hasCopied: false,
    field: null
  });

  const contactInfo = {
    email: "gilmaikjunior2@gmail.com",
    phone: "+55 (71) 99913-6601"
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopyState({ hasCopied: true, field });

    setTimeout(() => {
      setCopyState({ hasCopied: false, field: null });
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="w-full">
        <p className="grid-headtext mb-8">Get In Touch</p>
        
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="grid-container">
            <div className="flex items-center justify-center p-6">
              <img
                src="assets/email.svg" 
                alt="Email"
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <div className="p-4">
              <p className="grid-subtext text-center font-medium mb-4">Email Me</p>
              <div 
                className="copy-container" 
                onClick={() => handleCopy(contactInfo.email, "email")}
              >
                <img
                  src={(copyState.hasCopied && copyState.field === "email") ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                  className="w-5 h-5"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  {contactInfo.email}
                </p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a href={`mailto:${contactInfo.email}`}>
                  <Button name="Send Email" isBeam containerClass="w-full" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid-container">
            <div className="flex items-center justify-center p-6">
              <img
                src="assets/phone.svg" 
                alt="Phone"
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <div className="p-4">
              <p className="grid-subtext text-center font-medium mb-4">Call Me</p>
              <div 
                className="copy-container" 
                onClick={() => handleCopy(contactInfo.phone, "phone")}
              >
                <img
                  src={(copyState.hasCopied && copyState.field === "phone") ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                  className="w-5 h-5"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  {contactInfo.phone}
                </p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}>
                  <Button name="Call Now" isBeam containerClass="w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid-container mt-8">
          <div className="p-6">
            <p className="grid-headtext text-center mb-6">Find Me On</p>
            <div className="flex justify-center items-center gap-6">
              <a 
                href="https://github.com/JuniorReisx"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="assets/github.svg" 
                  alt="GitHub" 
                  className="w-10 h-10"
                />
              </a>
                            <a 
                href="https://www.linkedin.com/in/gil-maik-junior/"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="../assets/linkedin.svg"
                  alt="LinkedIn" 
                  className="w-10 h-10 bg-blue-600 "
                />
              </a>
                <a 
                href="https://www.instagram.com/juniorreisx/"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="assets/instagram.svg"
                  alt="Instagram" 
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}