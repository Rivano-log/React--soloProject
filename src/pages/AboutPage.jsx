import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <p className="section__label">Who we are</p>
          <h1 className="section__title">About Costa Living</h1>

          <div className="about">
            <p className="about__text">
              Costa Living was founded on a simple observation: most people who
              buy a home on the Costa Blanca are not buying a building. They are
              buying the walk down to the water before breakfast, the shade of
              the terrace in August, the sound of the village on a Sunday
              morning. A floor plan cannot tell you whether a house will feel
              like yours. We believe that finding out is the whole job.
            </p>

            <p className="about__text">
              We work along a single stretch of coast — from Dénia in the north
              to Torrevieja in the south — and we know it street by street. We
              know which slopes in Jávea keep their sea view once the pines grow
              back, which parts of Altea hold their value, and where the
              afternoon wind makes a terrace unusable in spring. That knowledge
              is not something you can look up. It comes from two decades of
              walking these towns and from living here ourselves.
            </p>

            <p className="about__text">
              Our portfolio stays small on purpose. Every property we list has
              been visited by someone on our team, and we turn down more than we
              take on. If a house has a problem we would not accept ourselves,
              it does not reach our collection. That means we sometimes have
              fewer listings than the larger agencies. It also means that what
              you see here is worth your afternoon.
            </p>

            <p className="about__text">
              Buying abroad brings questions that have nothing to do with the
              house itself — notaries, tax residency, utilities, schools,
              whether your bank will cooperate. We stay involved long after the
              keys change hands, because a sale that leaves you stranded is not
              a sale we want our name on. Come and see a property with us, or
              simply call to ask what a neighbourhood is really like. We are
              happy to talk before you are ready to look.
            </p>
          </div>
        </div>
      </section>
      <Banner/>
    </>
  );
};

export default AboutPage;