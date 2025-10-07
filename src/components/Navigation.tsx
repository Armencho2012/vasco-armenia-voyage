import { useState } from "react";
import { Anchor, Home, BookOpen, Ship, Award, Image, HelpCircle, Presentation } from "lucide-react";
import HomePage from "../pages/Home";
import Biography from "../pages/Biography";
import Voyages from "../pages/Voyages";
import Legacy from "../pages/Legacy";
import Gallery from "../pages/Gallery";
import Quiz from "../pages/Quiz";
import PresentationPage from "../pages/Presentation";

const Navigation = () => {
  const [activePage, setActivePage] = useState("home");

  const navItems = [
    { key: "home", icon: Home, label: "Գլխավոր", component: <HomePage /> },
    { key: "biography", icon: BookOpen, label: "Կենսագրություն", component: <Biography /> },
    { key: "voyages", icon: Ship, label: "Ճամփորդություններ", component: <Voyages /> },
    { key: "legacy", icon: Award, label: "Ժառանգություն", component: <Legacy /> },
    { key: "gallery", icon: Image, label: "Նկարներ", component: <Gallery /> },
    { key: "quiz", icon: HelpCircle, label: "Վիկտորինա", component: <Quiz /> },
    { key: "presentation", icon: Presentation, label: "Ներկայացում", component: <PresentationPage /> },
  ];

  const renderPage = () => navItems.find(item => item.key === activePage)?.component;

  return (
    <div>
      <nav className="bg-card shadow-md sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Anchor className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Վասկո դա Գամա</span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = activePage === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActivePage(item.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg smooth-transition ${
                      isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <select
                className="bg-secondary text-foreground rounded-lg px-3 py-2 text-sm border border-border"
                value={activePage}
                onChange={(e) => setActivePage(e.target.value)}
              >
                {navItems.map(item => (
                  <option key={item.key} value={item.key}>{item.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      <div>{renderPage()}</div>
    </div>
  );
};

export default Navigation;
