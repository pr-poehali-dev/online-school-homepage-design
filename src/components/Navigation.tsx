import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", href: "#" },
  { label: "О школе", href: "#about" },
  { label: "Курсы", href: "#courses" },
  { label: "Преподаватели", href: "#teachers" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-school-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-school-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={20} />
            </div>
            <span className="font-heading font-bold text-xl text-gray-900">
              EduSpace
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-school-purple-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-school-purple-600 hover:bg-school-purple-50 hidden sm:inline-flex"
            >
              Войти
            </Button>
            <Button className="bg-school-purple-600 hover:bg-school-purple-700 text-white">
              <Icon name="Play" className="mr-2" size={16} />
              Бесплатное занятие
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
