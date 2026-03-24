"use client";

import { motion } from "framer-motion";

export default function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
  color = "cyan",
  options,
  rows,
  index = 0,
}) {
  const focusClass =
    {
      cyan: "input-glow-cyan",
      purple: "input-glow-purple",
      magenta: "input-glow-magenta",
      amber: "input-glow-amber",
      emerald: "input-glow-emerald",
      rose: "input-glow-rose",
      red: "input-glow-red",
      violet: "input-glow-violet",
    }[color] || "input-glow-cyan";

  const labelColor =
    {
      cyan: "text-neon-cyan",
      purple: "text-neon-purple",
      magenta: "text-neon-magenta",
      amber: "text-neon-amber",
      emerald: "text-neon-emerald",
      rose: "text-neon-rose",
      red: "text-neon-red",
      violet: "text-neon-violet",
    }[color] || "text-neon-cyan";

  const checkboxAccentClass =
    {
      cyan: "accent-neon-cyan",
      purple: "accent-neon-purple",
      magenta: "accent-neon-magenta",
      amber: "accent-neon-amber",
      emerald: "accent-neon-emerald",
      rose: "accent-neon-rose",
      red: "accent-neon-red",
      violet: "accent-neon-violet",
    }[color] || "accent-neon-cyan";

  const baseInputClass = `w-full bg-navy-900/80 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 transition-all duration-300 ${focusClass} ${
    error ? "input-error" : ""
  }`;

  const renderInput = () => {
    if (type === "select" && options) {
      return (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputClass} appearance-none cursor-pointer`}
        >
          <option value="" className="bg-navy-900">
            {placeholder || "Select..."}
          </option>
          {options.map((opt) => (
            <option
              key={opt.value || opt}
              value={opt.value || opt}
              className="bg-navy-900"
            >
              {opt.label || opt}
            </option>
          ))}
        </select>
      );
    }

    if (type === "textarea") {
      return (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows || 4}
          className={`${baseInputClass} resize-none`}
        />
      );
    }

    if (type === "checkbox") {
      return (
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name={name}
            checked={value}
            onChange={onChange}
            required={required}
            className={`mt-1 h-4 w-4 rounded border-slate-600 bg-navy-900 ${checkboxAccentClass}`}
          />
          <span className="text-sm text-slate-300">{label}</span>
        </label>
      );
    }

    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={baseInputClass}
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="space-y-1.5"
    >
      {type !== "checkbox" && label && (
        <label
          className={`block text-xs font-semibold tracking-wider uppercase ${labelColor}`}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      {renderInput()}
      {error && (
        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </motion.div>
  );
}
