import "./Wedo.css";

const Wedo = () => {
  return (
    <section className="Wedo">
      <div className="WhatWeDo">
        <div className="WhatWeDoText">
          <div className="Swissmade">
            <img src="/images/swissMade.svg" alt="" />
          </div>

          <h1> Her Nefeste Ferahlık!</h1>

          <h2>
            Her Nefeste Ferahlık! Aç, Yapıştır, Ferahla! <br />{" "}
            <span>DeSmell</span> Koku Giderici Bant ile kötü kokulara elveda
            deyin.
          </h2>

          <h2>
            Patentli İsviçre mucizesi, taze havayı evinize, ofisinize ve
            hayatınıza getiriyor!
          </h2>
        </div>

        <div className="ProductImage">
          <img src="/images/Do.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Wedo;
