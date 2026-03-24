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
    "member_1",
    "member_2",
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
  if (data.team_size && (data.team_size < 1 || data.team_size > 3)) {
    errors.team_size = "Team size must be 1-3";
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
    "member_1",
    "member_2",
    "member_3",
    "problem_statement",
  ];
  const errors = validateRequired(required, data);

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (data.team_size && data.team_size !== 6) {
    errors.team_size = "Team size must be 6";
  }
  if (data.girl_member_confirm !== true) {
    errors.girl_member_confirm = "Minimum 1 girl member is mandatory per team";
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
    "team_name",
  ];
  const errors = validateRequired(required, data);

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }
  return errors;
}

export function validateBlogWriting(data) {
  const required = [
    "full_name",
    "college",
    "branch_year",
    "phone",
    "email",
    "domain",
    "blog_title",
  ];
  const errors = validateRequired(required, data);

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }
  return errors;
}
