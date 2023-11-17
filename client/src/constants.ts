export const API_URL =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : "http://127.0.0.1:3000/api/v1/projects";