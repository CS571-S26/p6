import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
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
];

export default function ShopBikes() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const widgetLoaded = useRef(false);
  const category = searchParams.get("category") || "";
  const categoryPath = categoryPathMap[category] || "";

  // Load the widget script once
  useEffect(() => {
    if (widgetLoaded.current) return;

    const container = document.getElementById("lcly-button-0");
    if (!container) return;

    const existing = document.getElementById("lcly-script-0");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "lcly-script-0";
    script.src =
      "https://oregonbicyclecompany.locally.com/widgets/search.js?store=321934&uri=search";
    script.async = true;
    container.appendChild(script);
    widgetLoaded.current = true;
  }, []);

  // Update the iframe src when category changes
  useEffect(() => {
    const host = window.location.hostname;
    const baseSrc = `https://oregonbicyclecompany.locally.com/search?embed_type=store&store=321934&uri=search&host_domain=${host}`;
    const categorySrc = `https://oregonbicyclecompany.locally.com${categoryPath}?embed_type=store&store=321934&sort=pop&host_domain=${host}`;
    const targetSrc = categoryPath ? categorySrc : baseSrc;

    const updateIframe = () => {
      const container = document.getElementById("lcly-button-0");
      if (!container) return false;
      const iframe = container.querySelector("iframe");
      if (!iframe) return false;

      if (iframe.src !== targetSrc) {
        iframe.src = targetSrc;
      }
      return true;
    };

    // The iframe may not exist yet on first load, so poll briefly
    if (updateIframe()) return;

    const interval = setInterval(() => {
      if (updateIframe()) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, [categoryPath]);

  const handleCategory = (cat) => {
    navigate(cat ? `/shop?category=${cat}` : "/shop");
  };

  return (
    <>
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
