import ContactCta from "@/features/contact/contact-cta"
import ContactForm from "@/features/contact/contact-form"
import ContactHero from "@/features/contact/hero"

const ContactPage = () => {
  return (
    <div className="space-y-20">
        <ContactHero />
        <ContactCta />
        <ContactForm />
    </div>
  )
}

export default ContactPage