import { type NextRequest, NextResponse } from "next/server"
import * as nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, enquiryType, service, message } = body

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const emailContent = `
      New Contact Form Submission from VITAHOME CARE Website
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Enquiry Type: ${enquiryType}
      Service of Interest: ${service || "Not specified"}
      
      Message:
      ${message || "No message provided"}
      
      ---
      This email was sent from the VITAHOME CARE website contact form.
    `

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@vitahome-care.com",
      to: "info@vitahome-care.com",
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00B2BD;">New Contact Form Submission</h2>
          <p>You have received a new contact form submission from the VITAHOME CARE website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Enquiry Type:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${enquiryType}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service of Interest:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${service || "Not specified"}</td>
            </tr>
          </table>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #00B2BD;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00B2BD;">
              ${message ? message.replace(/\n/g, "<br>") : "No message provided"}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the VITAHOME CARE website contact form.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
