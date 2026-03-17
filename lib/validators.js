export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  return /^[+]?[\d\s()-]{7,15}$/.test(phone);
}

export function validateRequired(fields, data) {
  const errors = {};
  for (const field of fields) {
    if (
      !data[field] ||
      (typeof data[field] === "string" && !data[field].trim())
    ) {
      errors[field] = `${field} is required`;
    }
  }
  return errors;
}

export function validateIdeathon(data) {
  const required = [
    "full_name",
    "email",
    "phone",
    "college",
    "team_name",
    "team_size",
    "idea_title",
    "problem_statement",
    "domain",
  ];
  const errors = validateRequired(required, data);

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (data.team_size && (data.team_size < 1 || data.team_size > 4)) {
    errors.team_size = "Team size must be 1-4";
  }
  return errors;
}

export function validateHackathon(data) {
  const required = [
    "full_name",
    "email",
    "phone",
    "college",
    "team_name",
    "team_size",
    "tshirt_size",
  ];
  const errors = validateRequired(required, data);

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (data.team_size && (data.team_size < 2 || data.team_size > 4)) {
    errors.team_size = "Team size must be 2-4";
  }
  return errors;
}

export function validateEsports(data) {
  const required = [
    "full_name",
    "email",
    "phone",
    "college",
    "bgmi_uid",
    "ign",
    "device_type",
    "participation_type",
  ];
  const errors = validateRequired(required, data);

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (data.participation_type === "Squad") {
    if (!data.team_name || !data.team_name.trim()) {
      errors.team_name = "Team name is required for squad";
    }
    if (!data.squad_igns || !data.squad_igns.trim()) {
      errors.squad_igns = "Squad members' IGNs are required";
    }
  }
  return errors;
}
