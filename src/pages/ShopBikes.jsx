import { useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import ColoredHeading from "../components/ColoredHeading";
import "../styles/ShopBikes.css";

const categoryPathMap = {
  mountain: "/search/all/activities/mountain-bikes",
  electric: "/search/all/activities/electric-bikes",
  kids: "/search/all/activities/kids-bikes",
  hybrid: "/search/all/activities/hybrid-bikes",
  road: "/search/all/activities/road-bikes",
  gravel: "/search/all/activities/gravel-bikes",
  "apparel-accessories": "/search/all/activities/cycling-access",
  clothing: "/search/all/activities/clothing-accessories",
  helmets: "/search/all/activities/bike-helmets",
};

const categoryLabels = [
  { label: "All", category: "" },
  { label: "Mountain", category: "mountain" },
  { label: "Electric", category: "electric" },
  { label: "Kids", category: "kids" },
  { label: "Hybrid", category: "hybrid" },
  { label: "Road", category: "road" },
  { label: "Gravel", category: "gravel" },
  { label: "Cycling Accessories", category: "apparel-accessories" },
  { label: "Clothing", category: "clothing" },
  { label: "Helmets", category: "helmets" },
];

export default function ShopBikes() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") || "";

  useEffect(() => {
    const config = {
      store: "321934",
      uri: "search",
    };

    const query = Object.keys(config)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(config[k]))
      .join("&");

    const endpoint =
      "https://oregonbicyclecompany.locally.com/widgets/search.js?" + query;

    // Remove any previous script to avoid duplicates
    const existing = document.getElementById("lcly-script-0");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "lcly-script-0";
    script.src = endpoint;
    script.async = true;
    document.getElementById("lcly-button-0").appendChild(script);

    return () => {
      const el = document.getElementById("lcly-script-0");
      if (el) el.remove();
    };
  }, []);

  // Update the iframe src when category changes
  useEffect(() => {
    const categoryPath = categoryPathMap[category] || "";

    const updateIframe = () => {
      const container = document.getElementById("lcly-button-0");
      if (!container) return false;
      const iframe = container.querySelector("iframe");
      if (!iframe) return false;

      const host = window.location.hostname;
      if (categoryPath) {
        const targetSrc = `https://oregonbicyclecompany.locally.com${categoryPath}?embed_type=store&store=321934&sort=pop&host_domain=${host}`;
        if (iframe.src !== targetSrc) {
          iframe.src = targetSrc;
        }
      } else {
        // "All" - reset to default
        const defaultSrc = `https://oregonbicyclecompany.locally.com/search?embed_type=store&store=321934&uri=search&host_domain=${host}`;
        if (iframe.src !== defaultSrc) {
          iframe.src = defaultSrc;
        }
      }
      return true;
    };

    if (updateIframe()) return;

    const interval = setInterval(() => {
      if (updateIframe()) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, [category]);

  const handleCategory = (cat) => {
    navigate(cat ? `/shop?category=${cat}` : "/shop");
  };

  return (
    <>
      <Container className="py-5 text-center">
        <ColoredHeading text="Shop Bikes" />
        <p className="shop-hero-text mx-auto">
          Explore our current bike inventory online and reserve the right bike
          from home, or stop by during open hours for one-on-one help from our
          team. Whether you&apos;re just getting started or looking for your next
          upgrade, we&apos;re here to answer questions, help with fit, and get you
          out on a test ride.
        </p>
        <Button
          as={Link}
          to="/about/hours"
          variant="outline-primary"
          size="lg"
          className="shop-hero-btn mt-3"
        >
          Visit Us
        </Button>
      </Container>

      <div className="shop-filter-bar">
        {categoryLabels.map((item) => (
          <button
            key={item.category}
            onClick={() => handleCategory(item.category)}
            className={`shop-filter-pill${category === item.category ? " active" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="shop-bikes-widget-wrapper">
        <div
          id="lcly-button-0"
          data-switchlive="true"
          data-switchlive-impression="true"
          data-switchlive-impression-id-pl="1"
        >
          <a
            id="lcly-link-0"
            data-switchlive="true"
            data-switchlive-mode="auto"
            data-switchlive-id-pl="6"
            role="button"
            href="https://www.locally.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Locally
          </a>
        </div>
      </div>
    </>
  );
}
