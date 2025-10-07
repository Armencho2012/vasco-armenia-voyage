import { NavLink } from "react-router-dom";
import { Anchor, Home, BookOpen, Ship, Award, Image, HelpCircle, Presentation } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { path: "/", icon: Home, label: "Գլխավոր" },
    { path: "/biography", icon: BookOpen, label: "Կենսագրություն" },
    { path: "/voyages", icon: Ship, label: "Ճամփորդություններ" },
    { path: "/legacy", icon: Award, label: "Ժառանգություն" },
    { path: "/gallery", icon: Image, label: "Նկարներ" },
    { path: "/quiz", icon: HelpCircle, label: "Վիկտորինա" },
    { path: "/presentation", icon: Presentation, label: "Ներկայացում" },
  ];

  return (
    <nav className="bg-card shadow-md sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Anchor className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Վասկո դա Գամա</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg smooth-transition ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <select
              className="bg-secondary text-foreground rounded-lg px-3 py-2 text-sm border border-border"
              onChange={(e) => window.location.href = e.target.value}
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
