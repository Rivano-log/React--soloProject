import destImg from "../assets/image--dest.png";

const Destinations = () => {
  return (
    <section id="destinations" className="section section--less-padding">
      <div className="container">

        <p className="section__label">Destinations</p>

        <div className="dest">

          <div className="dest__text">

            <h2 className="dest__title">
              The Art of Living on the <span className="nowrap">Costa Blanca</span>
            </h2>

            <div className="dest__cols">

              <p>
                Costa Living represents a way of life where space, freedom, and the
                Mediterranean rhythm take center stage. It is the feeling of waking up
                to the sunshine, spending long evenings outdoors, and living in a place
                where outdoor living naturally becomes part of everyday life. Along the
                Spanish coast, it is not only about the property itself, but about what
                that property makes possible: enjoying the climate, spending time with
                family and friends, relaxing by the sea, dining on a terrace, while
                still having all the amenities needed for a comfortable modern
                lifestyle. Costa Living combines the best of both worlds: the peace and
                freedom of a Mediterranean environment with the luxury and quality of
                contemporary living. Whether it is a permanent residence, a second home,
                or an investment, the real appeal lies in the complete lifestyle that
                comes with it.
              </p>

              <h3 className="dest__subtitle">The Costa Blanca</h3>

              <p>
                The Costa Blanca is one of Spain's most diverse coastal regions,
                stretching along the province of Alicante. The region is renowned for
                its Mediterranean climate, extensive coastline, wide sandy beaches,
                hidden coves, and impressive mountain landscapes. At the same time,
                every part of the Costa Blanca has its own distinct character. In the
                north, charming coastal towns such as Dénia, Jávea, Moraira, Altea, and
                Calpe combine authentic Spanish charm with high-quality amenities,
                restaurants, and marinas. Around Alicante and Benidorm, a lively mix of
                city life, beaches, entertainment, and international amenities takes
                center stage. Further south, destinations such as Santa Pola, Guardamar
                del Segura, Torrevieja, and Orihuela Costa offer a strong international
                community, modern residential areas, golf resorts, and countless
                beaches. It is precisely this diversity that makes the Costa Blanca so
                appealing: from peaceful and exclusive to vibrant and social, there is
                an environment to suit every way of life.
              </p>

            </div>
          </div>

          <div className="dest__media">
            <img
              src={destImg}
              alt="Map of the Costa Blanca"
              className="dest__img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Destinations;