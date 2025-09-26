import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

type Props = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;        // например "bg-red-100"
  iconHoverBg: string;   // например "group-hover:bg-red-200"
  ariaLabel: string;
};

export default function ServiceCard({
  id, title, desc, icon, iconBg, iconHoverBg, ariaLabel,
}: Props) {
  const navigate = useNavigate();
  const go = () => navigate(`/service/${id}`);

  return (
    <Card className="group border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
      <button
        type="button"
        onClick={go}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
        }}
        aria-label={ariaLabel}
        className="block w-full text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg cursor-pointer select-none [&_*]:cursor-pointer"
      >
        <div className="flex items-start space-x-4">
          <div className={["w-12 h-12 rounded-lg flex items-center justify-center transition-colors", iconBg, iconHoverBg].join(" ")}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
              Детальніше
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12.293 4.293a1 1 0 011.414 0L18 8.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/>
              </svg>
            </span>
          </div>
        </div>
      </button>
    </Card>
  );
}
