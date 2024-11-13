import { mailOptions, transporter } from '@/config/nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        html: `
          <h1>Someone wants to connect</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }

  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;
