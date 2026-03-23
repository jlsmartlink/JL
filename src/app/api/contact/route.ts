import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 配置邮箱发送服务
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'jlsmartlink@gmail.com',
    pass: process.env.EMAIL_APP_PASSWORD, // 后续配置邮箱应用密码
  },
});

// 配置WhatsApp通知（使用Twilio API，后续配置）
const sendWhatsAppNotification = async (formData: any) => {
  // 这里后续集成Twilio或其他WhatsApp API
  console.log('Sending WhatsApp notification...', formData);
  return true;
};

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, phone, company, message } = formData;

    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 发送邮件通知
    const mailOptions = {
      from: 'jlsmartlink@gmail.com',
      to: 'jlsmartlink@gmail.com',
      subject: `New Inquiry from ${name} - JL Smart Link Website`,
      html: `
        <h2>New Customer Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f5f5f5;">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Field</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Information</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Name</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Phone</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Company</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${company || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Message</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">
          <em>This inquiry was submitted from the JL Smart Link official website contact form.
        </p>
      `,
    };

    // 发送自动回复给客户
    const autoReplyOptions = {
      from: 'jlsmartlink@gmail.com',
      to: email,
      subject: 'Thank you for contacting JL Smart Link Industrial',
      html: `
        <h2>Dear ${name},</h2>
        <p>Thank you for your inquiry! We have received your message and our team will get back to you within 24 hours.</p>
        <p>If you have any urgent questions, please feel free to contact us via WhatsApp at +86 153 0504 6101.</p>
        <p>Best regards,<br>JL Smart Link Industrial Team</p>
      `,
    };

    // 并行发送邮件
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
      sendWhatsAppNotification(formData)
    ]);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
