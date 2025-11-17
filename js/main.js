document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelectorAll(".site-nav a");
  const hero = document.querySelector(".hero");
  const track = document.querySelector("[data-project-track]");
  const scrollButtons = document.querySelectorAll("[data-scroll]");
  const revealElements = document.querySelectorAll("[data-reveal]");
  const contactForm = document.querySelector("[data-contact-form]");
  const contactFeedback = document.querySelector("[data-contact-feedback]");
  const languageButtons = document.querySelectorAll(".lang-switch button");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = document.querySelector("[data-theme-toggle-label]");
  const themeIcon = document.querySelector("[data-theme-toggle-icon]");
  const metaDescriptionTag = document.querySelector('meta[name="description"]');

  const tr = {
    "approach.body":
      "ShenWorks, belediye deneyimini butik stüdyo çevikliğiyle birleştirerek her projenin konseptten uygulama dokümantasyonuna aynı liderlikle ilerlemesini sağlar.",
    "approach.card1.body":
      "İBB ve IMAR Planlama deneyimine dayanan hızlı saha analizleri, politika okumaları ve paydaş haritalamaları.",
    "approach.card1.item1": "Ulaşım ve hidroloji üst verileri",
    "approach.card1.item2": "İklime uygun bitki paletleri",
    "approach.card1.item3": "Uygulanabilirlik ve fazlama yol haritaları",
    "approach.card1.title": "Bağlam zekâsı",
    "approach.card2.body":
      "Peyzaj, mimari ve altyapı tasarımı IDEARC, Metex Studio Erk ve MME Mimarlık gibi ortaklarla eş zamanlı ilerler.",
    "approach.card2.item1": "Koordine BIM + CAD paketleri",
    "approach.card2.item2": "Malzeme araştırması ve şartnameler",
    "approach.card2.item3": "Tam bitkilendirme ve sulama stratejileri",
    "approach.card2.title": "Sistem yaklaşımı",
    "approach.card3.body":
      "Şantiye desteği ve saha koordinasyonu, konsept niyetinin tedarik, değer mühendisliği ve uzun dönem bakımdan sağ çıkmasını sağlar.",
    "approach.card3.item1": "Şantiye kontrolü ve numuneler",
    "approach.card3.item2": "İşletme rehberleri",
    "approach.card3.item3": "Kullanım sonrası optimizasyon",
    "approach.card3.title": "Teslimat gözetimi",
    "approach.eyebrow": "Yaklaşım",
    "approach.heading": "Araştırma öncelikli düşünme, çevik teslimat.",
    "contact.body":
      'Doğrudan arayın, <a href="mailto:info@shen.works">info@shen.works</a> adresine yazın ya da formu doldurun. Genellikle iki iş günü içinde dönüş yapıyoruz.',
    "contact.eyebrow": "İletişim",
    "contact.form.email.label": "E-posta",
    "contact.form.message.label": "Mesaj",
    "contact.form.name.label": "İsim",
    "contact.form.org.label": "Organizasyon",
    "contact.form.submit": "Mesajı gönder",
    "contact.heading": "Bir sonraki peyzajınızı birlikte şekillendirelim.",
    "contact.phone.title": "Telefon",
    "contact.social.title": "Dijital",
    "contact.studio.title": "Stüdyo",
    "experience.education.heading": "Eğitim",
    "experience.education.item1.detail": "Şehir Planlama Yüksek Lisans Programı",
    "experience.education.item2.detail": "Peyzaj Mimarlığı Lisans Programı",
    "experience.education.item3.detail": "Lise Diploması",
    "experience.education.item4.detail": "İlk ve ortaöğretim",
    "experience.practice.heading": "Kariyer",
    "experience.practice.item1.dates": "2020 — Günümüz",
    "experience.practice.item1.role": "Kurucu · Peyzaj Mimarı",
    "experience.practice.item2.role": "Kentsel Tasarım Koordinatörü",
    "experience.practice.item3.role": "Peyzaj Mimarı",
    "experience.practice.item4.role": "Peyzaj Mimarı",
    "experience.practice.item5.role": "Peyzaj Mimarı",
    "experience.profile.eyebrow": "Liderlik",
    "experience.profile.languages": "<strong>Diller:</strong> İngilizce, Makedonca, Türkçe",
    "experience.profile.lead":
      "2007’den beri Türkiye genelindeki büyük kamusal alan görevlerinde çalışan Kurucu & Peyzaj Mimarı.",
    "experience.profile.studios":
      "<strong>Çalıştığı ofisler:</strong> ShenWorks, IMAR Planlama, On Tasarım, HİMAŞ Peyzaj",
    "experience.profile.tools":
      "<strong>Araçlar:</strong> AutoCAD, Rhinoceros, SketchUp, Adobe Creative Cloud",
    "footer.approach": "Yaklaşım",
    "footer.copy": "© <span id=\"year\"></span> ShenWorks — Peyzaj Mimarlığı Stüdyosu",
    "footer.email": "info@shen.works",
    "footer.projects": "Projeler",
    "hero.cta.primary": "Güncel işleri incele",
    "hero.cta.secondary": "Tam dosyayı iste",
    "hero.eyebrow": "Peyzaj mimarlığı stüdyosu — İstanbul ve ötesi",
    "hero.heading":
      "Dirençli kamusal alanlar, kıyılar, misafirperver bahçeler ve topluluklar tasarlıyoruz.",
    "hero.lead":
      "ShenWorks, peyzaj mimarı <strong>Şenay Şaşko</strong> liderliğinde; belediyeler, geliştiriciler ve kültür kurumları için hareketi, bitkilendirmeyi ve kentsel sistemleri kurgulayan çok ölçekli projeler teslim eder.",
    "hero.meta1.body":
      "sivil, turizm ve konut peyzajında kesintisiz uygulama deneyimi.",
    "hero.meta1.title": "18+ yıl",
    "hero.meta2.body": "Haliç boyunca şekillenen kıyı ulaşım stratejisi.",
    "hero.meta2.title": "6.100 m",
    "hero.meta3.body":
      "2020’den bu yana İstanbul’dan Bulgaristan’a uzanan master plan teslimleri.",
    "hero.meta3.title": "600 bin m²",
    "hero.panel1.area.label": "Alan",
    "hero.panel1.area.value": "4.300 m² kamusal alan + 6.100 m kıyı hattı",
    "hero.panel1.body":
      "Beyoğlu’ndaki tarihî tersaneler için kent hareket koridorları ve park sistemleri. İstanbul Büyükşehir Belediyesi adına IDEARC ile iş birliği.",
    "hero.panel1.label": "Aktif proje",
    "hero.panel1.scope.label": "Kapsam",
    "hero.panel1.scope.value": "Uygulama",
    "hero.panel1.status.label": "Durum",
    "hero.panel1.status.value": "Devam ediyor · 2024",
    "hero.panel1.title": "Tersane İstanbul Yolları & Parkları",
    "hero.panel2.body":
      "IDEARC, Metex Design Group, Nivak Group ve IMAR Planlama Proje gibi güvenilir paydaşlarla stratejiden uygulama dokümantasyonuna uzanan entegre tasarım yönetimi.",
    "hero.panel2.foot1": "2020’de kuruldu · İstanbul",
    "hero.panel2.foot2": "shen.works",
    "hero.panel2.label": "Stüdyo odağı",
    "hero.panel2.title":
      "Kentsel tasarım · Park sistemleri · Misafirperverlik · Konut · Karma kullanım",
    "nav.approach": "Yaklaşım",
    "nav.contact": "İletişim",
    "nav.cta": "Proje başlat",
    "nav.experience": "Deneyim",
    "nav.practice": "Disiplinler",
    "nav.projects": "Projeler",
    "theme.dark": "Koyu",
    "theme.light": "Aydınlık",
    "practice.body":
      "Her görev, kamusal yatırımların zaman içinde uyarlanabilir, adil ve bakımı kolay kalması için çevresel aklı uygulanabilir detaylarla harmanlar.",
    "practice.card1.body":
      "Kıyı master planları, ulaşım kapıları ve akışları, bitkileri, yönlendirmeyi koreografiye eden meydanlar.",
    "practice.card1.item1": "Tersane İstanbul Ulaşım Master Planı",
    "practice.card1.item2": "Bilecik Kentsel Tasarım Projesi",
    "practice.card1.item3": "Bayrampaşa & Beylikdüzü kavşak yenilemeleri",
    "practice.card1.tag": "Kentsel Tasarım & Hareketlilik",
    "practice.card1.title": "Kenti şekillendiren çerçeveler",
    "practice.card2.body":
      "Parklar, sahil promenadları ve gündelik hayatı cömert kılan mikroiklim sistemleri.",
    "practice.card2.item1": "Kapaklı Ergene & Ozan Sokak Parkları",
    "practice.card2.item2": "Tekirdağ için köpek parkı tipolojileri",
    "practice.card2.item3": "Yoğurtçu & Masalpark peyzaj yenilemeleri",
    "practice.card2.tag": "Parklar & Rekreasyon",
    "practice.card2.title": "Sosyal altyapılar",
    "practice.card3.body":
      "Marka anlatılarını dokunsal bitki paletleri ve operasyonel netliğe çeviren resort ve otel alanları.",
    "practice.card3.item1": "Botanic Garden için Antalya Otel Peyzajı",
    "practice.card3.item2": "MME Mimarlık ile Rusya misafirperverlik konsepti",
    "practice.card3.item3": "Yeniköy ve Beykoz’da lüks villalar",
    "practice.card3.tag": "Misafirperverlik",
    "practice.card3.title": "Deneyimsel misafir yolculukları",
    "practice.card4.body":
      "Günlük ritüellere, ekolojik gölgeye ve mahalle kimliğine göre uyarlanmış konut yerleşkeleri ve özel bahçeler.",
    "practice.card4.item1": "Arnavutköy–Dursunköy konut planı",
    "practice.card4.item2": "Invest Maslak Koru peyzajı",
    "practice.card4.item3": "İstanbul’daki özel konut bahçeleri",
    "practice.card4.tag": "Konut",
    "practice.card4.title": "Yaşanabilir topluluklar",
    "practice.card5.body":
      "Kamu arayüzünü, bitki dokusunu ve hareketliliği birleştiren kültür, endüstri ve lojistik kampüsleri.",
    "practice.card5.item1": "Dobrich & Svishtov Organize Sanayi Bölgeleri",
    "practice.card5.item2": "Nivak Florya Satış Ofisi",
    "practice.card5.item3": "Asoy Ofis peyzajı",
    "practice.card5.tag": "Karma Kullanım & Endüstri",
    "practice.card5.title": "Üretken ekolojiler",
    "practice.eyebrow": "Çalışma hatları",
    "practice.heading":
      "Peyzajları mahalle, altyapı ve markalar için performanslı kılıyoruz.",
    "projects.card1.area": "8.000 m²",
    "projects.card1.body":
      "Metex Design Group ile geliştirilen Botanic Garden’ın 8.000 m²’lik Antalya resortu için inşaat dokümanları ve bitkilendirme koreografisi; spa, havuz ve orman yürüyüşü arasındaki misafir yolculuklarını genişletir.",
    "projects.card1.client": "Botanic Garden",
    "projects.card1.location": "Antalya · Türkiye",
    "projects.card1.scope": "Uygulama projesi",
    "projects.card1.title": "Antalya Otel Peyzajı",
    "projects.card1.type": "Misafirperverlik · Şantiyede 2024",
    "projects.card2.area": "4.300 m² + 6.100 m kıyı hattı",
    "projects.card2.body":
      "Haliç tersanelerinin halka cömertçe yeniden açılmasını sağlayan kıyı hareketlilik sistemi, aktarma meydanları ve park tipolojileri miras değerlerini korur.",
    "projects.card2.client": "İstanbul Büyükşehir Belediyesi (İBB)",
    "projects.card2.collaborator": "IDEARC",
    "projects.card2.status": "Proje teslimi",
    "projects.card2.title": "Tersane İstanbul Yolları & Parkları",
    "projects.card2.type": "Kentsel tasarım · 2024 — devam",
    "projects.card3.area": "4.300 m²",
    "projects.card3.body":
      "Üsküdar Belediyesi için tarihî balık pazarının kıyı hattını dayanıklı bir promenada dönüştüren pazar altyapısı, gölgelikler ve aydınlatma.",
    "projects.card3.client": "Üsküdar Belediyesi",
    "projects.card3.collaborator": "IDEARC",
    "projects.card3.scope": "Uygulama projesi",
    "projects.card3.title": "Üsküdar Balık Pazarı & Sahil",
    "projects.card3.type": "Kamusal alan · 2024 — devam",
    "projects.card4.body":
      "49.000 m²’lik dik topoğrafyayı Invest’in Maslak konut topluluğunu orman sınırına bağlayan teraslara, yağmur bahçelerine ve kapsayıcı avlulara dönüştürüyoruz.",
    "projects.card4.client": "INVEST",
    "projects.card4.collaborators": "Metex Studio Erk",
    "projects.card4.location": "Sarıyer · İstanbul",
    "projects.card4.scope": "Uygulama projesi",
    "projects.card4.title": "Maslak Koru Peyzajı",
    "projects.card4.type": "Konut peyzajı · Şantiyede 2024",
    "projects.card5.area": "260.000 m²",
    "projects.card5.body":
      "Dobrich Belediyesi için üretim parsellerini yavaş hareket, yağmur suyu koridorları ve yerel tamponlarla bağlayan 260.000 m²’lik konsept master plan.",
    "projects.card5.client": "IDEARC",
    "projects.card5.collaborator": "MME Mimarlık",
    "projects.card5.status": "Konsept tasarım",
    "projects.card5.title": "Dobrich Organize Sanayi Bölgesi",
    "projects.card5.type": "Endüstriyel kampüs · 2023",
    "projects.card6.area": "4.330 m²",
    "projects.card6.body":
      "Nivak Florya geliştirmesi için 4.330 m²’lik peyzaj; malzeme paletlerini, yoğun bitkilendirmeyi ve kusursuz misafir karşılamasını sahneliyor.",
    "projects.card6.client": "Nivak Group",
    "projects.card6.location": "Florya · İstanbul",
    "projects.card6.scope": "Uygulama projesi",
    "projects.card6.title": "Nivak Florya Satış Ofisi",
    "projects.card6.type": "Karma kullanım · 2022’de teslim",
    "projects.eyebrow": "Seçili işler",
    "projects.heading":
      "İnsan hikâyeleriyle altyapı mantığını buluşturan güncel işbirlikleri.",
    "projects.labels.area": "Alan",
    "projects.labels.client": "İşveren",
    "projects.labels.collaborator": "İş ortağı",
    "projects.labels.collaborators": "İş ortakları",
    "projects.labels.location": "Lokasyon",
    "projects.labels.scope": "Kapsam",
    "projects.labels.status": "Durum",
    "contact.form.name.placeholder": "Adınız",
    "contact.form.email.placeholder": "sizin@kurumunuz.com",
    "contact.form.org.placeholder": "Belediye / Yatırımcı",
    "contact.form.message.placeholder": "Araziyi, zaman çizelgesini ve hedefleri anlatın.",
    "meta.title": "ShenWorks | Peyzaj Mimarlığı Stüdyosu",
    "meta.description":
      "ShenWorks, İstanbul merkezli bir peyzaj mimarlığı stüdyosu olarak kentsel tasarım, park sistemleri, misafirperverlik ve konut projeleri üretir.",
  };

  const mk = {
    "approach.body":
      "ShenWorks ја комбинира општинската експертиза со агилност на бутик студио за секој проект да помине од концепт до изведбени пакети со исто лидерство.",
    "approach.card1.body":
      "Брзи дијагнози на локација, регулаторни анализи и мапирање на засегнати страни врз основа на искуството во Градот Истанбул и IMAR Planlama.",
    "approach.card1.item1": "Слоеви за мобилност и хидрологија",
    "approach.card1.item2": "Палети на растенија прилагодени на климата",
    "approach.card1.item3": "Патокази за изводливост и фазирање",
    "approach.card1.title": "Контекстуална интелигенција",
    "approach.card2.body":
      "Пејзажот, архитектурата и инфраструктурата напредуваат паралелно со IDEARC, Metex Studio Erk и MME Mimarlık.",
    "approach.card2.item1": "Координирани BIM + CAD пакети",
    "approach.card2.item2": "Истражување на материјали и спецификации",
    "approach.card2.item3": "Комплетни стратегии за садење и наводнување",
    "approach.card2.title": "Системско размислување",
    "approach.card3.body":
      "Поддршката при градба и теренската координација ја штитат концептуалната намера низ набавка, вредносен инженеринг и долгорочно одржување.",
    "approach.card3.item1": "Надзор на градилиште и прототипи",
    "approach.card3.item2": "Оперативни прирачници за клиентите",
    "approach.card3.item3": "Подесување по вселување",
    "approach.card3.title": "Грижа за испораката",
    "approach.eyebrow": "Пристап",
    "approach.heading": "Истражувачки пристап со агилна испорака.",
    "contact.body":
      'Јавете се директно, пишете на <a href="mailto:info@shen.works">info@shen.works</a> или споделете краток бриф преку формуларот. Вообичаено одговараме за два работни дена.',
    "contact.eyebrow": "Контакт",
    "contact.form.email.label": "Е-пошта",
    "contact.form.message.label": "Порака",
    "contact.form.name.label": "Име",
    "contact.form.org.label": "Организација",
    "contact.form.submit": "Испрати порака",
    "contact.heading": "Да го обликуваме следниот пејзаж.",
    "contact.phone.title": "Телефон",
    "contact.social.title": "Дигитално",
    "contact.studio.title": "Студио",
    "experience.education.heading": "Образование",
    "experience.education.item1.detail": "Постдипломски студии по урбанизам",
    "experience.education.item2.detail": "Диплома по пејзажна архитектура",
    "experience.education.item3.detail": "Средно образование",
    "experience.education.item4.detail": "Основно и основно средно",
    "experience.practice.heading": "Професионално искуство",
    "experience.practice.item1.dates": "2020 — Денес",
    "experience.practice.item1.role": "Основач · Пејзажен архитект",
    "experience.practice.item2.role": "Координатор за урбан дизајн",
    "experience.practice.item3.role": "Пејзажен архитект",
    "experience.practice.item4.role": "Пејзажен архитект",
    "experience.practice.item5.role": "Пејзажен архитект",
    "experience.profile.eyebrow": "Водство",
    "experience.profile.languages": "<strong>Јазици:</strong> Англиски, Македонски, Турски",
    "experience.profile.lead":
      "Основач и пејзажен архитект — активна од 2007 година на големи јавни проекти низ Турција.",
    "experience.profile.studios":
      "<strong>Студиа:</strong> ShenWorks, IMAR Planlama, On Tasarım, HİMAŞ Peyzaj",
    "experience.profile.tools":
      "<strong>Алатки:</strong> AutoCAD, Rhinoceros, SketchUp, Adobe Creative Cloud",
    "footer.approach": "Пристап",
    "footer.copy": "© <span id=\"year\"></span> ShenWorks — Студио за пејзажна архитектура",
    "footer.email": "info@shen.works",
    "footer.projects": "Проекти",
    "hero.cta.primary": "Истражи ги најновите проекти",
    "hero.cta.secondary": "Побарај целосно досие",
    "hero.eyebrow": "Пејзажно студио — Истанбул и понатаму",
    "hero.heading":
      "Дизајнираме издржливи јавни простори, кејови, градини за гостопримство и заедници.",
    "hero.lead":
      "ShenWorks, предводен од пејзажниот архитект <strong>Шенај Шашко</strong>, испорачува повеќескални проекти што ја кореографираат движењето, вегетацијата и урбаните системи за општини, инвеститори и културни институции низ Турција и Европа.",
    "hero.meta1.body":
      "континуирана пракса во граѓански, туристички и станбени пејзажи.",
    "hero.meta1.title": "18+ години",
    "hero.meta2.body":
      "стратегија за крајбрежна мобилност обликувана долж Златниот Рог.",
    "hero.meta2.title": "6.100 м",
    "hero.meta3.body":
      "мастер планови испорачани од Истанбул до Бугарија од 2020 година.",
    "hero.meta3.title": "600 илјади м²",
    "hero.panel1.area.label": "Површина",
    "hero.panel1.area.value": "4.300 м² јавен простор + 6.100 м крајбрежна линија",
    "hero.panel1.body":
      "Градски коридори и парковски системи за историските бродоградилишта во Бејоглу. Соработка со IDEARC за Истанбулската општина.",
    "hero.panel1.label": "Активен проект",
    "hero.panel1.scope.label": "Обем",
    "hero.panel1.scope.value": "Изведбен проект",
    "hero.panel1.status.label": "Статус",
    "hero.panel1.status.value": "Во тек · 2024",
    "hero.panel1.title": "Терсане Истанбул Патишта и Паркови",
    "hero.panel2.body":
      "Интегрирано управување со дизајнот од стратегија до документација со доверливи партнери како Metex Design Group, IDEARC, Nivak Group и IMAR Planlama Proje.",
    "hero.panel2.foot1": "Основано 2020 · Истанбул",
    "hero.panel2.foot2": "shen.works",
    "hero.panel2.label": "Фокус на студиото",
    "hero.panel2.title":
      "Урбан дизајн · Парковски системи · Гостопримство · Станбено · Мешана употреба",
    "nav.approach": "Пристап",
    "nav.contact": "Контакт",
    "nav.cta": "Започни проект",
    "nav.experience": "Искуство",
    "nav.practice": "Практики",
    "nav.projects": "Проекти",
    "theme.dark": "Темно",
    "theme.light": "Светло",
    "practice.body":
      "Секоја задача комбинира еколошка интелигенција и изведливи детали за јавните инвестиции да останат адаптивни, правични и лесни за одржување.",
    "practice.card1.body":
      "Крајбрежни мастер планови, транспортни порти и градски плоштади што ги кореографираат протокот, вегетацијата и сигнализацијата.",
    "practice.card1.item1": "Терсане Истанбул план за мобилност",
    "practice.card1.item2": "Билечик урбан дизајн",
    "practice.card1.item3": "Надградби на раскрсниците Бајрампаша и Бејликдизу",
    "practice.card1.tag": "Урбан дизајн и мобилност",
    "practice.card1.title": "Рамки што го обликуваат градот",
    "practice.card2.body":
      "Паркови, крајбрежни пешачки патеки и микроклиматски системи што го прават секојдневието поизобилно.",
    "practice.card2.item1": "Паркови Капакли Ергене и Озан Сокак",
    "practice.card2.item2": "Типологии на кучиња паркови за Текирдаг",
    "practice.card2.item3": "Реновирање на парковите Јогурчуу и Масалпарк",
    "practice.card2.tag": "Паркови и рекреација",
    "practice.card2.title": "Општествени инфраструктури",
    "practice.card3.body":
      "Градините на хотелите ги претвораат бренд наративите во сетилни палети и оперативна јасност.",
    "practice.card3.item1": "Анталија хотелски пејзаж за Botanic Garden",
    "practice.card3.item2": "Концепт за гостопримство во Русија со MME Mimarlık",
    "practice.card3.item3": "Луксузни вили во Јеникој и Бејкоз",
    "practice.card3.tag": "Гостопримство",
    "practice.card3.title": "Импресивни патувања на гостите",
    "practice.card4.body":
      "Станбени комплекси и приватни градини обликувани околу дневните ритуали, екологија и идентитет на маалото.",
    "practice.card4.item1": "Станбен план Арнавуткјој–Дурсункјој",
    "practice.card4.item2": "Пејзаж на Invest Maslak Koru",
    "practice.card4.item3": "Специјални приватни градини во Истанбул",
    "practice.card4.tag": "Станбено",
    "practice.card4.title": "Живливи заедници",
    "practice.card5.body":
      "Кампуси за култура, индустрија и логистика што ја комбинираат јавната интерфејс, растителниот слој и мобилноста.",
    "practice.card5.item1": "Добрич и Свиштов индустриски зони",
    "practice.card5.item2": "Продажен центар Нивак Флорија",
    "practice.card5.item3": "Пејзаж на Асој канцеларија",
    "practice.card5.tag": "Мешана употреба и индустрија",
    "practice.card5.title": "Продуктивни екологии",
    "practice.eyebrow": "Линии на пракса",
    "practice.heading":
      "Ги правиме пејзажите да работат за маала, инфраструктура и брендови.",
    "projects.card1.area": "8.000 м²",
    "projects.card1.body":
      "Изведбени документи и сценографија на садење за 8.000 м² ресорт на Botanic Garden во Анталија, развиен со Metex Design Group за да се прошири патувањето меѓу спа, базените и шумската прошетка.",
    "projects.card1.client": "Botanic Garden",
    "projects.card1.location": "Анталија · Турција",
    "projects.card1.scope": "Изведбен проект",
    "projects.card1.title": "Хотелски пејзаж Анталија",
    "projects.card1.type": "Гостопримство · Во градба 2024",
    "projects.card2.area": "4.300 м² + 6.100 м крајбрежје",
    "projects.card2.body":
      "Крајбрежни мобилни системи, транспортни плоштади и парковски типологии што ја отвораат Тесране за јавноста со почит кон наследството.",
    "projects.card2.client": "Истанбулска општина (İBB)",
    "projects.card2.collaborator": "IDEARC",
    "projects.card2.status": "Испорака во тек",
    "projects.card2.title": "Патишта и паркови Терсане Истанбул",
    "projects.card2.type": "Урбан дизајн · 2024 — во тек",
    "projects.card3.area": "4.300 м²",
    "projects.card3.body":
      "Реконфигурација на крајбрежјето на историската пазарна зона во отпорна променада со инфраструктура, сенки и светло за општина Ускудар.",
    "projects.card3.client": "Општина Ускудар",
    "projects.card3.collaborator": "IDEARC",
    "projects.card3.scope": "Изведбен проект",
    "projects.card3.title": "Рибен пазар и крајбрежје Ускудар",
    "projects.card3.type": "Јавен простор · 2024 — во тек",
    "projects.card4.body":
      "Трансформација на 49.000 м² стрмен терен во тераси, дождовни градини и имерзивни дворови што ја поврзуваат заедницата Invest Maslak со шумскиот раб.",
    "projects.card4.client": "INVEST",
    "projects.card4.collaborators": "Metex Studio Erk",
    "projects.card4.location": "Сариејр · Истанбул",
    "projects.card4.scope": "Изведбен проект",
    "projects.card4.title": "Пејзаж Maslak Koru",
    "projects.card4.type": "Станбен пејзаж · Во градба 2024",
    "projects.card5.area": "260.000 м²",
    "projects.card5.body":
      "Концептен мастер план од 260.000 м² што ги поврзува производните парцели преку бавна мобилност, канали за дождовна вода и натурален појас за градот Добрич.",
    "projects.card5.client": "IDEARC",
    "projects.card5.collaborator": "MME Mimarlık",
    "projects.card5.status": "Концепт дизајн",
    "projects.card5.title": "Добрич организирана индустриска зона",
    "projects.card5.type": "Индустриски кампус · 2023",
    "projects.card6.area": "4.330 м²",
    "projects.card6.body":
      "Јавниот пејзаж на проектот Nivak Florya: 4.330 м² сценографија што ги покажува материјалите, бујната вегетација и беспрекорното пристигнување на посетителите.",
    "projects.card6.client": "Nivak Group",
    "projects.card6.location": "Флорија · Истанбул",
    "projects.card6.scope": "Изведбен проект",
    "projects.card6.title": "Продажен центар Nivak Florya",
    "projects.card6.type": "Мешана употреба · Испорачано 2022",
    "projects.eyebrow": "Избрани проекти",
    "projects.heading":
      "Скорешни соработки што ја спојуваат инфраструктурната логика и човечките приказни.",
    "projects.labels.area": "Површина",
    "projects.labels.client": "Клиент",
    "projects.labels.collaborator": "Партнер",
    "projects.labels.collaborators": "Партнери",
    "projects.labels.location": "Локација",
    "projects.labels.scope": "Обем",
    "projects.labels.status": "Статус",
    "contact.form.name.placeholder": "Вашето име",
    "contact.form.email.placeholder": "вие@компанија.com",
    "contact.form.org.placeholder": "Општина / Инвеститор",
    "contact.form.message.placeholder": "Опишете ја локацијата, рокот и целите.",
    "meta.title": "ShenWorks | Студио за пејзаж",
    "meta.description":
      "ShenWorks е студио од Истанбул што создава урбани дизајни, паркови, хотелиерство и станбени проекти низ Турција и Европа.",
  };

  const translations = { tr, mk };

  const feedbackTemplates = {
    en: (name, email) => {
      const target = email ? `to ${email} ` : "to your message ";
      return `Thanks${name ? `, ${name}` : ""}! We will respond ${target}shortly.`;
    },
    tr: (name, email) => {
      const target = email ? `${email} adresine ` : "mesajınıza ";
      return `Teşekkürler${name ? `, ${name}` : ""}! ${target}en kısa sürede dönüş yapacağız.`;
    },
    mk: (name, email) => {
      const target = email ? `на ${email} ` : "на вашата порака ";
      return `Фала${name ? `, ${name}` : ""}! Ќе ви одговориме ${target}скоро.`;
    },
  };

  const defaultTexts = {};
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && !(key in defaultTexts)) {
      defaultTexts[key] = element.innerHTML.trim();
    }
  });

  const defaultPlaceholders = {};
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key && !(key in defaultPlaceholders)) {
      defaultPlaceholders[key] = element.getAttribute("placeholder") ?? "";
    }
  });

  defaultTexts["theme.dark"] = defaultTexts["theme.dark"] ?? "Dark";
  defaultTexts["theme.light"] = defaultTexts["theme.light"] ?? "Light";

  const metaDefaults = {
    title: document.title,
    description: metaDescriptionTag?.getAttribute("content") ?? "",
  };
  const themeStorageKey = "shenworks:theme";

  const supportedLanguages = ["en", "tr", "mk"];
  const missingTranslations = new Set();

  const updateYear = () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  const logMissing = (lang, key) => {
    const identifier = `${lang}:${key}`;
    if (!missingTranslations.has(identifier)) {
      missingTranslations.add(identifier);
      console.warn(`[i18n] Missing translation for ${identifier}`);
    }
  };

  const getText = (lang, key) => {
    if (!key) return "";
    if (lang === "en") {
      return defaultTexts[key] ?? "";
    }
    const dict = translations[lang];
    if (dict && dict[key]) {
      return dict[key];
    }
    logMissing(lang, key);
    return defaultTexts[key] ?? "";
  };

  const getPlaceholder = (lang, key) => {
    if (!key) return "";
    if (lang === "en") {
      return defaultPlaceholders[key] ?? "";
    }
    const dict = translations[lang];
    if (dict && dict[key]) {
      return dict[key];
    }
    logMissing(lang, key);
    return defaultPlaceholders[key] ?? "";
  };

  const updateThemeToggleLabel = () => {
    if (!themeLabel) return;
    const labelKey = currentTheme === "light" ? "theme.light" : "theme.dark";
    themeLabel.innerHTML = getText(currentLanguage, labelKey);
  };

  const updateThemeToggleIcon = () => {
    if (!themeIcon) return;
    themeIcon.textContent = currentTheme === "light" ? "☀︎" : "☾";
  };

  const applyTheme = (theme) => {
    const resolvedTheme = theme === "light" ? "light" : "dark";
    currentTheme = resolvedTheme;
    document.documentElement.dataset.theme = resolvedTheme;
    localStorage.setItem(themeStorageKey, resolvedTheme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(resolvedTheme === "light"));
      themeToggle.dataset.themeState = resolvedTheme;
    }
    updateThemeToggleIcon();
    updateThemeToggleLabel();
  };

  let currentLanguage = "en";
  let currentTheme = "dark";

  const applyLanguage = (lang) => {
    const langCode = supportedLanguages.includes(lang) ? lang : "en";
    currentLanguage = langCode;
    document.documentElement.setAttribute("lang", langCode);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      element.innerHTML = getText(langCode, key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      element.setAttribute("placeholder", getPlaceholder(langCode, key));
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === langCode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("shenworks:lang", langCode);

    const translatedTitle =
      langCode === "en"
        ? metaDefaults.title
        : translations[langCode]?.["meta.title"] ?? metaDefaults.title;
    document.title = translatedTitle;

    if (metaDescriptionTag) {
      const translatedDescription =
        langCode === "en"
          ? metaDefaults.description
          : translations[langCode]?.["meta.description"] ?? metaDefaults.description;
      metaDescriptionTag.setAttribute("content", translatedDescription);
    }

    if (contactFeedback) {
      contactFeedback.textContent = "";
    }

    updateThemeToggleLabel();
    updateYear();
  };

  const storedLang = localStorage.getItem("shenworks:lang");
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  const initialLang =
    (storedLang && supportedLanguages.includes(storedLang) && storedLang) ||
    (browserLang && supportedLanguages.includes(browserLang) && browserLang) ||
    "en";

  applyLanguage(initialLang);

  const storedThemePreference = localStorage.getItem(themeStorageKey);
  const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme =
    storedThemePreference === "light" || storedThemePreference === "dark"
      ? storedThemePreference
      : prefersLightScheme
        ? "light"
        : "dark";
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(currentTheme === "light" ? "dark" : "light");
    });
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang || "en");
    });
  });

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (hero && header) {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          header.classList.toggle("is-condensed", !entry.isIntersecting);
        });
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0.1 }
    );
    headerObserver.observe(hero);
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (track && scrollButtons.length) {
    scrollButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.scroll === "next" ? 1 : -1;
        const distance = track.clientWidth * 0.8 * direction;
        track.scrollBy({
          left: distance,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      });
    });
  }

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );
    revealElements.forEach((element) => revealObserver.observe(element));

    setTimeout(() => {
      document.documentElement.classList.add("reveal-ready");
    }, 100);
  }

  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name")?.toString().trim() ?? "";
      const email = formData.get("email")?.toString().trim() ?? "";
      const formatter = feedbackTemplates[currentLanguage] ?? feedbackTemplates.en;
      contactFeedback.textContent = formatter(name, email);
      contactForm.reset();
    });
  }

  updateYear();
});
