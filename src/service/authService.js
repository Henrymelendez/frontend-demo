import { getHeaders } from "../utility/headerHelper";
const API_BASE_URL = "http://localhost:8080/api/auth";

export async function register(signUpData) {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(signUpData)
      });
      return await response.json();
    } catch (error) {
      console.error('Error during registration:', error);
      return {};
    }
  }
  

export async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return await response.json();
  } catch (error) {
    console.error('Error during login:', error);
    return {};
  }
}
