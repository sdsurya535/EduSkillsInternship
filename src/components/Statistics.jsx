import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./style/iconBgGlow.css";

function Statistics() {
  const stats = [
    {
      id: "number1",
      number: 6,
      description: "COHORT COMPLETED",
      icon: "fa-solid:podcast",
    },
    {
      id: "number2",
      number: 300,
      description: "PLACEMENTS",
      icon: "fa:briefcase",
    },
    {
      id: "number3",
      number: 100000,
      description: "INTERNS",
      icon: "fa-solid:graduation-cap",
    },
    {
      id: "number4",
      number: 15,
      description: "CORPORATES",
      icon: "fa6-regular:handshake",
    },
  ];

  const [displayNumbers, setDisplayNumbers] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
  });

  useEffect(() => {
    const timers = stats.map((stat, idx) => {
      const increment = stat.number / 100;
      return setInterval(() => {
        setDisplayNumbers((prevNumbers) => {
          const newNumber = prevNumbers[stat.id] + increment;
          if (newNumber < stat.number) {
            return { ...prevNumbers, [stat.id]: newNumber };
          } else {
            clearInterval(timers[idx]);
            return { ...prevNumbers, [stat.id]: stat.number };
          }
        });
      }, 20);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="py-10  bg-gray-50" id="progress-bars02-8c">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center flex-wrap">
          {stats.map((item) => (
            <div key={item.id} className="w-full sm:w-1/4 p-4 text-center">
              <div className="p-5 border rounded-full inline-block text-3xl mb-4 bg-white-500 text-white-500 glow">
                <Icon icon={item.icon} />
              </div>
              <p className="text-4xl font-bold">
                {Math.round(displayNumbers[item.id])}
              </p>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
