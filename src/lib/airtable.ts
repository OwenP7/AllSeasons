import Airtable from "airtable";

function getBase() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!apiKey || !baseId) return null;
  return new Airtable({ apiKey }).base(baseId);
}

export async function addEmailSubscriber(email: string) {
  try {
    const base = getBase();
    if (!base) {
      return {
        success: false as const,
        error: new Error("Newsletter integration not configured."),
      };
    }

    await base("Newsletter").create([
      {
        fields: {
          Email: email,
          Timestamp: new Date().toISOString(),
        },
      },
    ]);
    return { success: true as const };
  } catch (error) {
    return { success: false as const, error };
  }
}

