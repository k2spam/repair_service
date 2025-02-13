<script setup lang="ts">
import RSInfo from '@/components/RSInfo.vue';
import RSItemsList from '@/components/RSItemsList.vue';
import RSAck from '@/components/RSAck.vue';
import RSCertificates from '@/components/RSCertificates.vue';
import RSEmployeeList from '@/components/RSEmployeeList.vue';
import RSReviews from '@/components/RSReviews.vue';
import RSSupport from '@/components/RSSupport.vue';
</script>

<template>
    <RSInfo 
        title="Выезд мастера в день обращения" 
        subtitle="Бесплатная диагностика. Свой склад комплектующих. Гарантия на работы 1 год." 
        bg="/src/assets/images/services-bg.jpg"
    />
    <RSItemsList 
        title="Ремонт всех моделей бытовой техники Bosch" 
        :items="[
            {
                title: 'Стиральные машины', 
                items: [
                    {
                        title: 'С фронтальной загрузкой',
                        image: '/src/assets/services/front.png',
                        description: 'Комфорт эксплуатации и стильный дизайн'
                    },
                    {
                        title: 'С вертикальной загрузкой',
                        image: '/src/assets/services/vertical.png',
                        description: 'Компактные и технологичные'
                    },
                    {
                        title: 'Компактные',
                        image: '/src/assets/services/narrow.png',
                        description: 'Экономия пространства и времени'
                    },
                    {
                        title: 'Встраиваемые',
                        image: '/src/assets/services/embed.png',
                        description: 'Эргономика и стиль'
                    },
                    {
                        title: 'Bosch WFF',
                        image: '/src/assets/services/default.png',
                        description: 'Легендарная серия автоматических стиралок'
                    },
                    {
                        title: 'Bosch Maxx',
                        image: '/src/assets/services/maxx.jpg',
                        description: 'Добротные машинки класса комфорт'
                    },
                ]
            },
            {
                title: 'Посудомоечные машины', 
                items: [
                    {
                        title: 'Стандартные',
                        image: '/src/assets/services/standard.png',
                        description: 'Вместительная и современная техника'
                    },
                    {
                        title: 'Компактные',
                        image: '/src/assets/services/narrow1.png',
                        description: 'Экономия пространства и времени'
                    },
                    {
                        title: 'Настольные',
                        image: '/src/assets/services/table.png',
                        description: 'Компактные размеры и комфорт эксплуатации'
                    },
                    {
                        title: 'Встраиваемые',
                        image: '/src/assets/services/built-in.png',
                        description: 'Новейшие технологии и эксклюзивный дизайн'
                    },
                ]
            },
            {
                title: 'Сушильные машины', 
                items: [
                    {
                        title: 'Стандартные сушильные машины',
                        image: '/src/assets/services/standart.png',
                        description: 'Простота управления и бережный уход'
                    },
                ]
            },
            {
                title: 'Холодильники', 
                items: [
                    {
                        title: 'Многокамерные холодильники',
                        image: '/src/assets/services/multi-chamber.png',
                        description: 'Свободная организация внутреннего пространства'
                    },
                    {
                        title: 'Холодильники Side by Side',
                        image: '/src/assets/services/side-by-side.png',
                        description: 'Техническое совершенство и выдающийся дизайн'
                    },
                    {
                        title: 'Холодильники с нижней морозильной камерой',
                        image: '/src/assets/services/bottom-freezer.png',
                        description: 'Экономия пространства и высокая мощность'
                    },
                    {
                        title: 'Холодильники с верхней морозильной камерой',
                        image: '/src/assets/services/top-freezer.png',
                        description: 'Экономия времени и комфорт эксплуатации'
                    },
                ]
            },
            {
                title: 'Духовые шкафы', 
                items: [
                    {
                        title: 'Встраиваемый духовой шкаф',
                        image: '/src/assets/services/built-in1.png',
                        description: 'Равномерное приготовление и эргономика'
                    },
                    {
                        title: 'Компактный духовой шкаф',
                        image: '/src/assets/services/compact.png',
                        description: 'Экономия пространства и расширенный функционал'
                    },
                    {
                        title: 'Комбинированный духовой шкаф с СВЧ',
                        image: '/src/assets/services/combo.png',
                        description: 'Широкий функционал и безопасность'
                    },
                ]
            },
        ]"
    />
    <RSAck />
    <RSCertificates 
        title="Сертифицированные инженеры Bosch" 
        :imgs="[
            '/src/assets/certs/c1.jpg',
            '/src/assets/certs/c2.jpg',
            '/src/assets/certs/c3.jpg'
        ]"
    />
    <RSEmployeeList :items="[
        {name: 'Фролов Антон', expirience: '10 лет', image: '/src/assets/employee/a.jpg'},
        {name: 'Григорьев Дмитрий', expirience: '13 лет', image: '/src/assets/employee/b.jpg'},
        {name: 'Щукин Анатолий', expirience: '8 лет', image: '/src/assets/employee/c.jpg'},
        {name: 'Морозов Борис', expirience: '14 лет', image: '/src/assets/employee/d.jpg'},
    ]"/>
    <RSReviews 
        title="Наши работы и отзывы клиентов" 
        :items="[
            {name: 'Анатолий', text: 'Ремонт сушильной машины замена крыльчатки. Мастер приехал через час, провел диагностику,сразу выявил проблему, уехал на склад и вернулся с нужной запчастью. Все сделал день в день. Огромное спасибо мастеру Сергею.', image: '/src/assets/exp/1.jpg'},
            {name: 'Галина Семеновна', text: 'Замена рециркуляционного насоса. Выражаю огромную благодарность специалистам сервиса Bosch. Мастер аккуратно разобрал фасад кухни, быстро привез запчасть, хотя моей машине уже 10 лет. Замену насоса мастер сделал на дому, и собрал кухню как было. Очень понравился такой сервис, сэкономили деньги и время, не надо было привлекать сборщика кухни.', image: '/src/assets/exp/4.jpg'},
            {name: 'Ольга', text: 'Мастер приехал к назначенному времени, по результатам диагностики сообщил стоимость ремонта и запчастей. На следующий день мастер поменял запчасть и всё заработало как раньше. Спасибо за работу', image: '/src/assets/exp/3.jpg'},
            {name: 'Валентин Эдуардович', text: 'Ремонт модуля управления. Моей стиральной машине уже много лет, и она меня более чем устраивает, но в какой то момент перестала работать. Куда ни обращался - либо не хотели ехать (такие старые не ремонтируем) либо называли долгие сроки ожидания запчастей и высокие цены. Мастер Bosch сервиса предложил починить модуль управления, выполнил работу и дал гарантию 2 года. Это просто праздник какой-то.', image: '/src/assets/exp/5.jpg'},
            {name: 'Тамара Васильевна', text: 'Замена подшипников в двигателе. Машина при работе стала издавать страшные звуки и прыгать. Все сервисы предлагали поменять двигатель, а это почти половина стоимости машинки. Мастер Александр, из Bosch сервиса, после диагностики предложил поменять подшипники, и вуаля - машинка стала работать как новая. Отличный сервис, экономит деньги, теперь всем рекомендую.', image: '/src/assets/exp/6.jpg'},
            {name: 'Николай', text: 'Ремонт рециркуляционного насоса. Сломалась посудомоечная машина. Вызвал мастера. Мастер выявил неисправность, привез со склада запчасть на замену и все починил. Сервис Bosch работает так как и должен работать - быстро, удобно и компетентно. Спасибо', image: '/src/assets/exp/8.jpg'},
            {name: 'Алена', text: 'Ремонт слива замена насоса. Стираю каждый день и без работающей машинки мне никак. Мастер приехал, определил поломку, рассказал мне что нужно сделать чтобы машинка заработала. В тот же день привез детали и сделал работу. Вечером я уже стирала. Спасибо сервису', image: '/src/assets/exp/10.jpg'},
            {name: 'Георгий', text: 'Ремонт рециркуляционного насоса. Понравился сервис, действительно ремонт в день обращения. Мастер не выдумывал никаких дополнительных работ, всё мне объяснил и показал, рассказал как правильно эксплуатировать технику чтобы поломки не повторялись.', image: '/src/assets/exp/11.jpg'},
        ]"
    />
    <RSSupport />
</template>