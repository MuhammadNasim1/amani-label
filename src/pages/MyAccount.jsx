import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Request failed. Please try again.");
    error.status = response.status;
    throw error;
  }

  return data;
}

export default function MyAccount() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    const controller = new AbortController();

    async function loadAccount() {
      try {
        const data = await request("/api/auth/me", {
          signal: controller.signal,
        });
        setUser(data.user);
      } catch (error) {
        if (error.name !== "AbortError" && error.status !== 401) {
          setError("Unable to load your account. Check your backend connection.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadAccount();
    return () => controller.abort();
  }, []);

  async function handleLogin(event) {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      await request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      });

      const data = await request("/api/auth/me");

      if (!data.user) throw new Error("Unable to load your account.");

      setUser(data.user);
      setForm({ email: "", password: "" });
    } catch (error) {
      setError(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    setBusy(true);
    setError("");

    try {
      await request("/api/auth/logout", { method: "POST" });
      setUser(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setBusy(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-[#d9ccbd] bg-white px-4 py-3";

  return (
    <main className="min-h-screen bg-[#faf7f2] px-6 py-16 text-[#342b24]">
      <div className="mx-auto max-w-lg">
        <p className="text-center text-xs uppercase tracking-[0.3em]">
          Amani Label
        </p>
        <h1 className="mt-4 text-center font-serif text-4xl">
          My Account
        </h1>

        <section className="mt-8 rounded-2xl border border-[#e5dacd] bg-white p-6 md:p-8">
          {error && (
            <p
              role="alert"
              className="mb-5 rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          {loading ? (
            <p role="status">Loading your account...</p>
          ) : user ? (
            <>
              <h2 className="font-serif text-2xl">
                Welcome, {user.name || "Amani customer"}
              </h2>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm text-[#75685b]">Full name</dt>
                  <dd className="mt-1">{user.name || "Not provided"}</dd>
                </div>
                <div>
                  <dt className="text-sm text-[#75685b]">Email address</dt>
                  <dd className="mt-1 break-words">{user.email}</dd>
                </div>
              </dl>

              <Link
                to="/shop"
                className="mt-8 block rounded-lg bg-[#493c30] px-4 py-3 text-center text-white"
              >
                Continue shopping
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                disabled={busy}
                className="mt-3 w-full rounded-lg border border-[#d9ccbd] px-4 py-3 disabled:opacity-50"
              >
                {busy ? "Signing out..." : "Sign out"}
              </button>
            </>
          ) : (
            <>
              <h2 className="font-serif text-2xl">Welcome back</h2>
              <p className="mt-2 text-sm text-[#75685b]">
                Sign in to access your Amani Label account.
              </p>

              <form onSubmit={handleLogin} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="username"
                    required
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={form.password}
                    onChange={(event) =>
                      setForm({ ...form, password: event.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-lg bg-[#493c30] px-4 py-3 text-white hover:bg-[#30271f] disabled:opacity-50"
                >
                  {busy ? "Signing in..." : "Sign in"}
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}