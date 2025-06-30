import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const courses = [
  {
    id: 1,
    title: "Подготовка к ЕГЭ по математике",
    description:
      "Профильная математика с нуля до 90+ баллов. Разбор всех типов заданий, интенсивная практика.",
    price: "8 000₽",
    duration: "9 месяцев",
    level: "Популярный",
    icon: "Calculator",
    features: [
      "Индивидуальные занятия",
      "Пробные ЕГЭ каждый месяц",
      "Домашние задания с проверкой",
    ],
  },
  {
    id: 2,
    title: "Основы программирования",
    description:
      "Python с нуля до создания собственных проектов. Веб-разработка, анализ данных, автоматизация.",
    price: "12 000₽",
    duration: "6 месяцев",
    level: "Топ выбор",
    icon: "Code",
    features: [
      "Практические проекты",
      "Менторская поддержка",
      "Портфолио для трудоустройства",
    ],
  },
  {
    id: 3,
    title: "Алгоритмы и структуры данных",
    description:
      "Подготовка к техническим собеседованиям в IT. Олимпиадное программирование.",
    price: "15 000₽",
    duration: "8 месяцев",
    level: "Продвинутый",
    icon: "Cpu",
    features: ["Решение задач LeetCode", "Mock интервью", "Подготовка к FAANG"],
  },
  {
    id: 4,
    title: "Подготовка к ОГЭ",
    description:
      "Математика и информатика для 9 класса. Гарантия поступления в профильный класс.",
    price: "6 000₽",
    duration: "7 месяцев",
    level: "Базовый",
    icon: "GraduationCap",
    features: [
      "Мини-группы до 4 человек",
      "Еженедельные тесты",
      "Работа с родителями",
    ],
  },
];

export default function Courses() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Популярные курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите направление, которое поможет вам достичь ваших целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-school-purple-100 hover:border-school-purple-300"
            >
              {course.level && (
                <Badge
                  className={`absolute top-4 right-4 ${
                    course.level === "Топ выбор"
                      ? "bg-school-purple-600"
                      : course.level === "Популярный"
                        ? "bg-green-500"
                        : "bg-orange-500"
                  } text-white`}
                >
                  {course.level}
                </Badge>
              )}

              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-school-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    name={course.icon as any}
                    className="text-school-purple-600"
                    size={24}
                  />
                </div>
                <CardTitle className="font-heading text-lg leading-tight">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="text-green-500 mr-2 flex-shrink-0"
                        size={16}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-school-purple-600">
                      {course.price}
                    </p>
                    <p className="text-sm text-gray-500">{course.duration}</p>
                  </div>
                </div>

                <Button className="w-full bg-school-purple-600 hover:bg-school-purple-700 text-white">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-school-purple-600 text-school-purple-600 hover:bg-school-purple-50"
          >
            <Icon name="Eye" className="mr-2" size={20} />
            Посмотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
}
