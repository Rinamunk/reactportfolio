// EmailButton.js

import { Button } from "@mui/material";

export default function EmailButton(){

  const handleButtonClick = () => {
    const email = 'munkrina@gmail.com';
    const subject = 'Emne for email';
    const body = 'Tekst for email';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleButtonClick}>
      Send mig en mail!
    </Button>
  );

}

