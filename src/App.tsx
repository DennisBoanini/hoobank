import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from "./components";

function App() {
  return (
      <div className="w-full overflow-hidden bg-primary">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                  <Navbar />
              </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                  <Hero />
              </div>
          </div>

          <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                  <Stats />
                  <Business />
                  <Billing />
                  <CardDeal />
                  <Testimonials />
                  <Clients />
                  <CTA />
                  <Footer />
              </div>
          </div>
      </div>
  )
}

export default App
