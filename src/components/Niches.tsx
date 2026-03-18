import { Hammer, Sparkles } from "lucide-react";

export function Niches() {
  return (
    <section className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Готовые бизнес-модели для рынка Европы
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Мы готовимся к масштабной экспансии в Словакию, Чехию и другие страны. На эфире
            разберем 2 направления, в которых сейчас минимальная конкуренция:
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Hammer className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Ремонт и сервис окон</h3>
            <p className="text-gray-600 leading-relaxed">
              Утилитарная ниша. Экстренная помощь, которая нужна в каждом доме. Высокий средний чек,
              понятный маркетинг и стабильный круглогодичный спрос.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Полировка стекла</h3>
            <p className="text-gray-600 leading-relaxed">
              Премиальная услуга. Реставрация и удаление царапин. Уникальная технология с высокой
              маржинальностью и практически полным отсутствием конкурентов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
