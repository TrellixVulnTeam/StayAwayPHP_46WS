import React from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    path: "/listOfMeals",
    title: "Hostel",
    description: "Pig Counter",
    image:
      "https://www.lesrestos.com/img/media/special/festoyez-au-banquet-des-troubadours-1.jpg",
  },
  {
    path: "/listOfMeals",
    title: "Hostel",
    description: "To the drunken knight",
    image:
      "https://fr.web.img6.acsta.net/r_1920_1080/newsv7/16/12/06/12/46/2807590.jpg",
  },
  {
    path: "/listOfMeals",
    title: "Hostel",
    description: "The Crazy Crusade",
    image:
      "https://i.pinimg.com/564x/ad/52/e3/ad52e3a1ddfb298356546139159eced0.jpg",
  },
  {
    path: "/listOfMeals",
    title: "Hostel",
    description: "The lost mercenary",
    image:
      "https://www.tripsavvy.com/thmb/8kd8i8KYZ1G26UbdVMXebWRgRyk=/1499x999/filters:fill(auto,1)/MedievalBanquet-56a3e2af3df78cf7727fae5b.jpg",
  },
  {
    path: "/listOfMeals",
    title: "Hostel",
    description: "Thirsty camel",
    image:
      "https://www.greatdays.co.uk/wp-content/uploads/The-Medieval-Banquet-Ivory-House-St-Katharine-Docks-London-Stag-3-NCN.jpg",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <Link className="link-carousel" to={`${slide.path}`}>
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

const CarouselWeapon = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button className="btn-slides" onClick={() => dispatch({ type: "PREV" })}>
        ‹
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button className="btn-slides" onClick={() => dispatch({ type: "NEXT" })}>
        ›
      </button>
    </div>
  );
};

export default CarouselWeapon;
