"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

function formatDate(value) {
  if (!value) return "-";
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

function renderValue(key, value) {
  if (value === null || value === undefined || value === "") return "-";

  if (key === "team_members") {
    try {
      const parsed = JSON.parse(value);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return value;
    }
  }

  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({ total: 0, categories: [] });
  const [activeCategory, setActiveCategory] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/dashboard", { cache: "no-store" });
      const result = await response.json();

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (!response.ok) {
        setError(result.message || "Failed to load admin data");
        return;
      }

      setData(result);
    } catch (err) {
      setError("Something went wrong while loading dashboard.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!data.categories?.length) return;

    const hasActive = data.categories.some(
      (category) => category.label === activeCategory,
    );

    if (!hasActive) {
      setActiveCategory(data.categories[0].label);
    }
  }, [data.categories, activeCategory]);

  const categoryCounts = useMemo(
    () => (data.categories || []).map((category) => ({
      label: category.label,
      count: category.count,
    })),
    [data],
  );

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const selectedCategory =
    (data.categories || []).find((category) => category.label === activeCategory) ||
    null;

  return (
    <div className="relative min-h-screen grid-pattern">
      <ParticleBackground />

      <section className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-cyan">
                ADMIN DASHBOARD
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Registration count and category-wise details.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-slate-400 hover:text-neon-cyan text-sm transition-colors"
              >
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="text-slate-400 hover:text-neon-magenta text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          </motion.div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glassmorphism glow-border-cyan rounded-2xl p-5"
          >
            <p className="font-orbitron text-sm text-slate-400">TOTAL REGISTRATIONS</p>
            <p className="font-orbitron text-3xl text-neon-cyan mt-1">{data.total || 0}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryCounts.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="glassmorphism rounded-xl p-4 border border-slate-700"
              >
                <p className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</p>
                <p className="font-orbitron text-xl text-slate-100 mt-2">{item.count}</p>
              </motion.div>
            ))}
          </div>

          {loading ? (
            <div className="text-slate-400 text-sm">Loading dashboard data...</div>
          ) : (
            <div className="space-y-6">
              <div className="glassmorphism rounded-2xl p-4 border border-slate-700">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">
                  Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {(data.categories || []).map((category) => (
                    <button
                      key={category.label}
                      onClick={() => setActiveCategory(category.label)}
                      className={`px-3 py-2 rounded-lg text-xs sm:text-sm transition-all border ${
                        activeCategory === category.label
                          ? "border-cyan-400/60 text-neon-cyan bg-cyan-500/10"
                          : "border-slate-700 text-slate-400 hover:text-neon-cyan"
                      }`}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {selectedCategory && (
                <motion.div
                  key={selectedCategory.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glassmorphism rounded-2xl p-5 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-orbitron text-lg text-neon-cyan">{selectedCategory.label}</h2>
                    <span className="text-slate-400 text-sm">{selectedCategory.count} entries</span>
                  </div>

                  {selectedCategory.rows.length === 0 ? (
                    <p className="text-slate-500 text-sm">No registrations yet.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-400 border-b border-slate-700">
                            <th className="py-2 pr-4">Created</th>
                            <th className="py-2 pr-4">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCategory.rows.map((row) => (
                            <tr key={row.id} className="border-b border-slate-800 align-top">
                              <td className="py-3 pr-4 whitespace-nowrap text-slate-400">
                                {formatDate(row.created_at)}
                              </td>
                              <td className="py-3 pr-4">
                                <div className="space-y-1">
                                  {Object.entries(row)
                                    .filter(([key]) => key !== "id" && key !== "created_at")
                                    .map(([key, value]) => (
                                      <div key={key} className="text-slate-300">
                                        <span className="text-slate-500">{key.replaceAll("_", " ")}: </span>
                                        {key === "team_members" ? (
                                          <pre className="mt-1 bg-navy-900/60 border border-slate-800 rounded p-2 text-xs whitespace-pre-wrap text-slate-300">
                                            {renderValue(key, value)}
                                          </pre>
                                        ) : (
                                          <span>{renderValue(key, value)}</span>
                                        )}
                                      </div>
                                    ))}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
