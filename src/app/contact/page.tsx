import ContactCta from "@/features/user/contact/contact-cta"
import ContactForm from "@/features/user/contact/contact-form"
import ContactHero from "@/features/user/contact/hero"

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