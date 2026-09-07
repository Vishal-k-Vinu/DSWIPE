export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  name: string;
  id: string;
  items: FaqItem[];
}

export const faqData: FaqCategory[] = [
  {
    name: "About NFC Cards",
    id: "about",
    items: [
      {
        question: "What is an NFC digital business card?",
        answer: "An NFC (Near Field Communication) digital business card is a premium physical card embedded with a tiny smart chip. When someone taps their smartphone against it, your complete digital profile — contact details, social links, portfolio, website — opens instantly in their browser. No app download required. Think of it as your professional identity, compressed into a single tap."
      },
      {
        question: "How is DSwipe different from a regular business card?",
        answer: "Paper cards get lost, go outdated, and end up in landfills. A DSwipe card is a one-time purchase that lasts years. You can update your information anytime without reprinting. It's waterproof, eco-friendly, and makes a memorable first impression. Plus, you'll never run out of cards at a networking event again."
      },
      {
        question: "What information can I share on my DSwipe card?",
        answer: "Everything that matters professionally: your name, job title, company, phone numbers, email, website URL, LinkedIn, Instagram, Twitter/X, Facebook, YouTube, portfolio links, Google Maps location, WhatsApp link, and even a short bio. You can customize which fields to show or hide at any time from your dashboard."
      }
    ]
  },
  {
    name: "How It Works",
    id: "how-it-works",
    items: [
      {
        question: "How does DSwipe work?",
        answer: "It's beautifully simple: 1) You order your DSwipe card and set up your digital profile through our dashboard. 2) When you meet someone, hold your card near their phone. 3) Their phone instantly opens your profile page — no app needed on their end. They can save your contact, visit your links, or connect on social media right there. The whole exchange takes under 3 seconds."
      },
      {
        question: "Do I need to install an app to use DSwipe?",
        answer: "No app is needed — for you or the person you're sharing with. Your DSwipe profile is a web-based page that opens in any mobile browser. You manage your profile through our simple web dashboard. The recipient just taps and views — zero friction, zero downloads."
      },
      {
        question: "Does it work without internet?",
        answer: "The NFC tap itself works without internet — the chip communicates directly with the phone. However, to view the full digital profile page, the recipient's phone needs an active internet connection (Wi-Fi or mobile data). The profile loads instantly since it's a lightweight web page."
      }
    ]
  },
  {
    name: "Compatibility",
    id: "compatibility",
    items: [
      {
        question: "Is my phone compatible with DSwipe?",
        answer: "Almost certainly. All iPhones from iPhone 7 onwards support NFC natively. Most Android phones manufactured after 2018 have NFC built in. For the rare phone without NFC, we also provide a QR code on the back of every DSwipe card as a fallback — so you're always covered."
      },
      {
        question: "Does it work with both iPhone and Android?",
        answer: "Yes, DSwipe works seamlessly across both platforms. On iPhones (7 and later), the NFC reader activates automatically when the card is held near the top of the phone. On Android devices, NFC is usually near the center of the back panel. No special settings needed — just tap and go."
      }
    ]
  },
  {
    name: "Managing Your Card",
    id: "managing",
    items: [
      {
        question: "Can I update my information after purchase?",
        answer: "Absolutely — that's one of DSwipe's biggest advantages. Changed your phone number? Got a new job title? Added a new social profile? Just log into your DSwipe dashboard and update your details. The changes reflect instantly. Your physical card stays the same; your digital profile evolves with you."
      },
      {
        question: "Can I have multiple profiles on one card?",
        answer: "Currently, each DSwipe card is linked to one digital profile. However, you can include both personal and professional information on that single profile, controlling which fields are visible. If you need completely separate profiles (e.g., for different businesses), we recommend getting a card for each."
      },
      {
        question: "How durable is the DSwipe card?",
        answer: "DSwipe cards are built to last. They're made from premium PVC with a matte or gloss finish, are fully waterproof, scratch-resistant, and designed to withstand daily carry in your wallet or cardholder. The embedded NFC chip has no battery and doesn't wear out — it's powered by the receiving phone's NFC field. Expect years of reliable use."
      },
      {
        question: "Is my data secure?",
        answer: "Your data security is our priority. Your DSwipe profile only shares what you choose to make visible — you have full control. The NFC chip contains only a secure URL link to your profile; no personal data is stored on the card itself. Our platform uses HTTPS encryption, and you can deactivate your card remotely at any time from your dashboard."
      }
    ]
  },
  {
    name: "Availability & Pricing",
    id: "availability",
    items: [
      {
        question: "Is DSwipe available in my city?",
        answer: "DSwipe ships across India, with a strong presence across Kerala — Kochi, Thiruvananthapuram, Kozhikode (Calicut), Thrissur, Kollam, Alappuzha, Kottayam, Palakkad, Malappuram, and Kannur. We offer free delivery within Kerala and affordable shipping pan-India. Order online and receive your card within 3–5 business days."
      },
      {
        question: "How much does a DSwipe card cost?",
        answer: "DSwipe cards are competitively priced starting from ₹499 for a standard card with full NFC + QR functionality and lifetime profile access. Premium designs, custom branding for businesses, and bulk orders for teams are available at special rates. Check our pricing page or message us on WhatsApp for a quick quote."
      }
    ]
  }
];
