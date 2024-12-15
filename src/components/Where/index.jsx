import "./Where.css";

const Where = () => {
  return (
    <section className="Where">
      <h1>Nerelerde Kullanabiliriz ? </h1>
      <p>
        Desmell, hastanelerden okullara, araçlardan spor salonlarına, geniş bir
        kullanım alanına sahiptir. Hastanelerde, hasta odalarında ve bakım
        merkezlerinde hijyen standartlarını yükseltirken, kötü kokulara son
        verir. Okullarda, yoğun kullanılan sınıflar, kreşler ve koridorlarda
        temiz bir atmosfer oluşturarak öğrencilerin odaklanmasına katkıda
        bulunur. Araçlarda, sigara, yemek ve nem gibi istenmeyen kokuları hızla
        yok eder ve taze bir yolculuk deneyimi sunar. Spor salonlarında, soyunma
        odaları ve ekipman çevresindeki kötü kokuları etkisiz hale getirerek
        sağlıklı bir ortam yaratır.
      </p>
      <div className="ImageContainer">
        <div style={{ position: "relative" }}>
          <img src="./public/images/hospital.jpg" alt="Hospital" />
          <div className="ImageText">Hastahanelerde</div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="./public/images/kid.jpg" alt="School" />
          <div className="ImageText">Okullarda</div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="./public/images/gym.jpg" alt="Gym" />
          <div className="ImageText">Spor Salonlarında</div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="./public/images/car.jpg" alt="Car" />
          <div className="ImageText">Araçlarda</div>
        </div>
        image
      </div>
    </section>
  );
};

export default Where;
