import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          Her An Taze ve <br /> Ferah Hava
        </h1>
        <p>
          <span>Desmell</span> hoş olmayan kokuyu nötralize etmek için <br />{" "}
          patentli ve devrim niteliğinde bir çözümdür.
        </p>
        <div>
          <p className="icon-text">
            <img src="/icon.png" alt="İsviçre İkonu" className="icon-image" />
            İsviçre İnovasyon Ajansı <br /> tarafından desteklenmektedir.
          </p>
        </div>
        <button className="hero-button">Learn More</button>
      </div>
      
    </section>
  );
};

export default Hero;
