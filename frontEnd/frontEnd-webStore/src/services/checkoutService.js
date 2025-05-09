import { authHeaders } from "../auth/authHeaders";

export async function checkoutCart(cartId, userId) {
  try {
    const response = await fetch(`http://localhost:3000/api/checkout/${cartId}`, {
      method: "PATCH",
      headers: authHeaders(),
      body: JSON.stringify({ user_id: userId }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Checkout failed");
    }

    return data;
  } catch (error) {
    console.error("Checkout error:", error);
    throw error;
  }
}
