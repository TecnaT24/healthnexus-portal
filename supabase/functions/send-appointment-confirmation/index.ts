import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  department: string;
  date: string;
  time: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received appointment confirmation request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, department, date, time, message }: AppointmentRequest = await req.json();

    console.log("Processing appointment for:", { name, email, department, date, time });

    // Format the date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send confirmation email to patient
    const patientEmailResponse = await resend.emails.send({
      from: "MediCare Hospital <onboarding@resend.dev>",
      to: [email],
      subject: "Appointment Request Received - MediCare Hospital",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">MediCare Hospital</h1>
          </div>
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #0f172a;">Thank you for your appointment request, ${name}!</h2>
            <p style="color: #475569; line-height: 1.6;">
              We have received your appointment request and will contact you shortly to confirm the details.
            </p>
            <div style="background: white; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 4px solid #0891b2;">
              <h3 style="color: #0f172a; margin-top: 0;">Appointment Details</h3>
              <p style="color: #475569; margin: 5px 0;"><strong>Department:</strong> ${department}</p>
              <p style="color: #475569; margin: 5px 0;"><strong>Preferred Date:</strong> ${formattedDate}</p>
              <p style="color: #475569; margin: 5px 0;"><strong>Preferred Time:</strong> ${time}</p>
              <p style="color: #475569; margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
              ${message ? `<p style="color: #475569; margin: 5px 0;"><strong>Message:</strong> ${message}</p>` : ''}
            </div>
            <p style="color: #475569; line-height: 1.6;">
              Our team will confirm your appointment within 24 hours. If you have any urgent concerns, 
              please call us at <strong>+1 (555) 123-4567</strong>.
            </p>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
              This is an automated email. Please do not reply directly to this message.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Patient email sent successfully:", patientEmailResponse);

    return new Response(JSON.stringify({ success: true, message: "Confirmation email sent" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-appointment-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
