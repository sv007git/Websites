// WhatsApp Utilities: Click-to-Chat URI builder and message formatters

export function formatWhatsAppPhone(phone: string): string {
  // Strip spaces, dashes, parentheses
  return phone.replace(/[^0-9]/g, '');
}

export function buildWhatsAppLink(phoneNumber: string, messageText: string): string {
  const cleanPhone = formatWhatsAppPhone(phoneNumber);
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function formatInvitationMessage(params: {
  guestName: string;
  hostNames: string;
  eventName: string;
  venueName: string;
  eventDate: string;
  invitationUrl: string;
  invitationCode: string;
}): string {
  return `Namaste ${params.guestName} Ji 🙏,

${params.hostNames} cordially invite you and your family to celebrate:

✨ *${params.eventName}* ✨

📅 *Date:* ${params.eventDate}
📍 *Venue:* ${params.venueName}
🔑 *Invitation Code:* ${params.invitationCode}

Please view your personalized digital invitation and kindly confirm your RSVP, arrival time slot, and food preferences here:
👉 ${params.invitationUrl}

Warm regards,
${params.hostNames}`;
}

export function formatRSVPReminderMessage(params: {
  guestName: string;
  eventName: string;
  deadlineDate: string;
  invitationUrl: string;
}): string {
  return `Namaste ${params.guestName} Ji 🙏,

A gentle reminder to kindly confirm your RSVP for *${params.eventName}* by *${params.deadlineDate}*.

This helps our catering and seating teams ensure a wonderful celebration experience for your family.

Confirm your RSVP and food selections here:
👉 ${params.invitationUrl}

Thank you!`;
}

export function formatQRPassMessage(params: {
  guestName: string;
  eventName: string;
  passCode: string;
  passUrl: string;
}): string {
  return `Namaste ${params.guestName} Ji 🙏,

Your official Entry QR Pass for *${params.eventName}* is ready!

🎟️ *Pass Code:* ${params.passCode}

Please present your digital pass at the entrance gate for quick verification and seating assistance:
👉 ${params.passUrl}

We look forward to welcoming you!`;
}
