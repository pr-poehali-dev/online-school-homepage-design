import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const teachers = [
  {
    id: 1,
    name: "Анна Петрова",
    subject: "Математика",
    experience: "8 лет",
    education: "МГУ, механико-математический факультет",
    rating: 4.9,
    students: 120,
    achievements: [
      "Средний балл учеников 92",
      "Призёр олимпиады по математике",
      "Автор учебных пособий",
    ],
    image: "/placeholder.svg",
    specializations: ["Профильная математика", "Геометрия", "Алгебра"],
  },
  {
    id: 2,
    name: "Дмитрий Козлов",
    subject: "Программирование",
    experience: "12 лет",
    education: "МФТИ, факультет управления и прикладной математики",
    rating: 5.0,
    students: 95,
    achievements: [
      "Senior Developer в Яндексе",
      "Ментор в IT-компаниях",
      "200+ успешных проектов",
    ],
    image: "/placeholder.svg",
    specializations: ["Python", "JavaScript", "Алгоритмы"],
  },
  {
    id: 3,
    name: "Елена Смирнова",
    subject: "Информатика",
    experience: "6 лет",
    education: "ИТМО, факультет информационных технологий",
    rating: 4.8,
    students: 85,
    achievements: [
      "Чемпион ACM ICPC",
      "Эксперт на Codeforces",
      "Подготовка к олимпиадам",
    ],
    image: "/placeholder.svg",
    specializations: [
      "Олимпиадное программирование",
      "C++",
      "Структуры данных",
    ],
  },
  {
    id: 4,
    name: "Михаил Волков",
    subject: "Физика",
    experience: "10 лет",
    education: "МФТИ, факультет общей и прикладной физики",
    rating: 4.9,
    students: 110,
    achievements: [
      "Кандидат физико-математических наук",
      "Средний балл учеников 88",
      "Научный сотрудник",
    ],
    image: "/placeholder.svg",
    specializations: ["Механика", "Электродинамика", "Квантовая физика"],
  },
  {
    id: 5,
    name: "Ольга Иванова",
    subject: "Химия",
    experience: "7 лет",
    education: "МГУ, химический факультет",
    rating: 4.7,
    students: 75,
    achievements: [
      "Магистр химических наук",
      "Автор 15 научных статей",
      "Эксперт ЕГЭ",
    ],
    image: "/placeholder.svg",
    specializations: [
      "Органическая химия",
      "Неорганическая химия",
      "Задачи повышенной сложности",
    ],
  },
  {
    id: 6,
    name: "Сергей Николаев",
    subject: "Английский язык",
    experience: "9 лет",
    education: "МГИМО, факультет международных отношений",
    rating: 4.8,
    students: 140,
    achievements: [
      "Сертификат CELTA",
      "Переводчик-синхронист",
      "Средний балл учеников 85",
    ],
    image: "/placeholder.svg",
    specializations: ["Грамматика", "Говорение", "Подготовка к ЕГЭ"],
  },
];

export default function Teachers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши преподаватели
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Команда экспертов с многолетним опытом преподавания и реальными
            достижениями. Каждый преподаватель проверен и имеет высокие
            результаты учеников.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <Card
              key={teacher.id}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-school-purple-100 hover:border-school-purple-300 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-school-purple-100"
                  />
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-school-purple-600 text-white px-3 py-1">
                    {teacher.subject}
                  </Badge>
                </div>

                <CardTitle className="font-heading text-xl text-gray-900 mb-1">
                  {teacher.name}
                </CardTitle>

                <CardDescription className="text-sm text-gray-600 mb-3">
                  {teacher.education}
                </CardDescription>

                <div className="flex justify-center items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      className="text-yellow-500 mr-1"
                      size={16}
                    />
                    <span className="font-semibold">{teacher.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Users"
                      className="text-school-purple-600 mr-1"
                      size={16}
                    />
                    <span>{teacher.students} учеников</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Calendar"
                      className="text-gray-500 mr-1"
                      size={16}
                    />
                    <span>{teacher.experience}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">
                      Специализации:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specializations.map((spec, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">
                      Достижения:
                    </h4>
                    <ul className="space-y-1">
                      {teacher.achievements
                        .slice(0, 2)
                        .map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start text-xs text-gray-600"
                          >
                            <Icon
                              name="Check"
                              className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                              size={12}
                            />
                            {achievement}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-school-purple-600 hover:bg-school-purple-700 text-white text-xs"
                      >
                        <Icon name="Calendar" className="mr-1" size={14} />
                        Записаться
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-school-purple-600 text-school-purple-600 hover:bg-school-purple-50 text-xs"
                      >
                        <Icon name="MessageCircle" className="mr-1" size={14} />
                        Написать
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-school-purple-100 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Хотите стать преподавателем?
            </h3>
            <p className="text-gray-600 mb-6">
              Мы всегда ищем талантливых специалистов для нашей команды.
              Присоединяйтесь к нам и помогайте ученикам достигать своих целей.
            </p>
            <Button
              size="lg"
              className="bg-school-purple-600 hover:bg-school-purple-700 text-white"
            >
              <Icon name="UserPlus" className="mr-2" size={20} />
              Подать заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
