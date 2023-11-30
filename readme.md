# Soru Cevap Akordion Uygulaması

Bu uygulama, bir dizi sıkça sorulan soruyu ve ilgili cevapları içeren bir akordion gösterimi sunar.

## Nasıl Çalışır?

Uygulama, React kullanılarak oluşturulmuştur. Soruların ve cevapların bulunduğu bir veri dizisi üzerinden harmanlanarak, kullanıcı dostu bir arayüz sağlar. Her soru başlığına tıklanarak, ilgili sorunun cevap kısmı görüntülenebilir veya gizlenebilir.

## Kod Açıklaması

Bu React uygulaması, bir soru-cevap akordionu oluşturur. Temel olarak, sıkça sorulan soruların bulunduğu bir veri dizisi kullanılarak dinamik bir arayüz sunar. İşte önemli kısımlar:

- `useState` hook'u, seçilen sorunun durumunu yönetmek için kullanılır. Kullanıcı, bir soruya tıkladığında ilgili cevap kısmı açılır veya kapanır.
- Veri, sabit bir dizi içinde tutularak, her bir sorunun soru metni ve cevap içeriği belirlenmiştir. Bu sayede, uygulama üzerinde kolayca güncellenebilir.

- Her soru için bir bileşen (`<div className="item">`) oluşturulmuştur. Bu bileşen, bir başlık ve başlığa tıklanıldığında gösterilecek veya gizlenecek olan bir içerik kısmından oluşur.

- `toggle` fonksiyonu, tıklanan sorunun durumunu kontrol eder ve ilgili sorunun cevabını açıp kapatır.

- Bileşenler arasındaki iletişim, kullanıcının bir soruya tıklamasıyla tetiklenir ve `selected` durumu güncellenerek gösterilen cevap kısmını belirler.

Uygulama, React bileşen yapısı, state yönetimi ve kullanıcı etkileşimini yönetme becerilerini geliştirmek adına harika bir öğrenme kaynağıdır. Ayrıca, temel animasyon ve UI tasarımı konularında da deneyim sağlar.

## Kullanım

1. Uygulamayı başlatmak için projenin bulunduğu dizinde terminal penceresinde `npm start` komutunu çalıştırın.
2. Tarayıcıda `http://localhost:3000` adresine gidin.
3. Sorulara tıklanarak ilgili cevapları gösterin veya gizleyin.

## Notlar

- Uygulama, temel bir akordion yapısı sunar ve kullanımı oldukça basittir.
- Soru ve cevaplar, bir veri dizisi üzerinden dinamik olarak oluşturulur.
- Kullanıcı, her bir soruya tıkladığında ilgili cevap açılır veya kapanır.

Bu uygulama üzerinden, React state yönetimi, bileşenler arası iletişim ve basit animasyonlar gibi temel konularda pratik yapma fırsatı bulunabilir.

```

```
