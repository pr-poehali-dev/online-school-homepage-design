import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-school-purple-50 to-school-purple-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Подготовка к <span className="text-school-purple-600">ЕГЭ</span> и{" "}
            <span className="text-school-purple-600">IT-курсы</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Онлайн-школа для тех, кто хочет поступить в лучшие вузы и освоить
            программирование. Индивидуальный подход, опытные преподаватели,
            результат гарантирован.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-school-purple-600 hover:bg-school-purple-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Бесплатное занятие
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-school-purple-600 text-school-purple-600 hover:bg-school-purple-50 px-8 py-4 text-lg"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Смотреть курсы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-school-purple-100">
              <div className="w-12 h-12 bg-school-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Icon
                  name="TrendingUp"
                  className="text-school-purple-600"
                  size={24}
                />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Средний балл ЕГЭ
              </h3>
              <p className="text-3xl font-bold text-school-purple-600 mb-2">
                89
              </p>
              <p className="text-gray-600 text-sm">наших выпускников</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-school-purple-100">
              <div className="w-12 h-12 bg-school-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Icon
                  name="Users"
                  className="text-school-purple-600"
                  size={24}
                />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Довольных учеников
              </h3>
              <p className="text-3xl font-bold text-school-purple-600 mb-2">
                2000+
              </p>
              <p className="text-gray-600 text-sm">за 3 года работы</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-school-purple-100">
              <div className="w-12 h-12 bg-school-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Icon
                  name="Award"
                  className="text-school-purple-600"
                  size={24}
                />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Поступили в топ вузы
              </h3>
              <p className="text-3xl font-bold text-school-purple-600 mb-2">
                95%
              </p>
              <p className="text-gray-600 text-sm">выпускников</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
