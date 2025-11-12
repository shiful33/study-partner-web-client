import React, { useEffect, useState } from "react";

const StatsCount = () => {
  const [stats, setStats] = useState({ users: 0, partners: 0, sessions: 0 });

  useEffect(() => {
    const target = { users: 12500, partners: 8900, sessions: 34200 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      users: target.users / steps,
      partners: target.partners / steps,
      sessions: target.sessions / steps,
    };

    let current = { users: 0, partners: 0, sessions: 0 };
    const timer = setInterval(() => {
      current.users = Math.min(current.users + increment.users, target.users);
      current.partners = Math.min(
        current.partners + increment.partners,
        target.partners
      );
      current.sessions = Math.min(
        current.sessions + increment.sessions,
        target.sessions
      );
      setStats({
        users: Math.floor(current.users),
        partners: Math.floor(current.partners),
        sessions: Math.floor(current.sessions),
      });
      if (current.users >= target.users) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="py-12 bg-[#001F46] text-white">
        <div className="grid max-w-6xl gap-8 px-4 mx-auto text-center md:grid-cols-3">
          <div data-aos="fade-up">
            <h3 className="text-4xl font-bold md:text-5xl">
              {stats.users.toLocaleString()}+
            </h3>
            <p className="mt-2 text-yellow-400">Active Students</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl font-bold md:text-5xl">
              {stats.partners.toLocaleString()}+
            </h3>
            <p className="mt-2 text-yellow-400">Study Partners</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-4xl font-bold md:text-5xl">
              {stats.sessions.toLocaleString()}+
            </h3>
            <p className="mt-2 text-yellow-400">Study Sessions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsCount;
