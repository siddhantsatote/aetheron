"use client";

import { useState } from "react";

export default function useRegistration(eventType) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const submit = async (formData) => {
    setLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      const res = await fetch(`/api/register/${eventType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        throw new Error(data.message || "Registration failed");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSuccess(false);
    setError(null);
    setFieldErrors({});
  };

  return { submit, loading, success, error, fieldErrors, reset };
}
