type SheetsWebhookResponse = {
  ok?: boolean;
  duplicate?: boolean;
  message?: string;
};

export type AddEmailResult =
  | { success: true }
  | { success: false; duplicate: true }
  | { success: false; duplicate: false };

export async function addEmailSubscriber(email: string): Promise<AddEmailResult> {
  const webhookUrl = process.env.NEWSLETTER_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return { success: false, duplicate: false };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "homepage" }),
      cache: "no-store",
    });

    const data = (await response.json().catch(() => ({}))) as SheetsWebhookResponse;

    if (!response.ok || data.ok === false) {
      if (data.duplicate) {
        return { success: false, duplicate: true };
      }

      const message = data.message?.toLowerCase() ?? "";
      if (message.includes("already")) {
        return { success: false, duplicate: true };
      }

      return { success: false, duplicate: false };
    }

    if (data.duplicate) {
      return { success: false, duplicate: true };
    }

    return { success: true };
  } catch {
    return { success: false, duplicate: false };
  }
}
