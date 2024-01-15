import playstation from "../../assets/Images/projects/playstion.webp";
import qrcode from "../../assets/Images/projects/qr1.png";
import quotes from "../../assets/Images/projects/quotes.png";
import form from "../../assets/Images/projects/validation.png";
import keyboard from "../../assets/Images/projects/pngtree-computer-keyboard-transparent-png-image_6563776.png";
import calculator from "../../assets/Images/projects/cla.jpg";
import battery from "../../assets/Images/projects/pngtree-battery-level-low-notification-icon-png-image_5545506.png";
import colorchange from "../../assets/Images/projects/colorchange.jpg";
import Internet from "../../assets/Images/projects/internet.webp";
import background from "../../assets/Images/projects/multicolor-low-poly-background-design-Graphics-9553638-1-580x387.jpg";
import review from "../../assets/Images/projects/re.webp";
import signup from "../../assets/Images/projects/Cover Img.jpg";
import github from "../../assets/Images/projects/github.webp";

// readme files
import playstation_md from "../../markdown/Front end Projects/playstation.md";
import qrcodegenerator from "../../markdown/Front end Projects/qrcodegenerator.md";
import formvalidation from "../../markdown/Front end Projects/formvalidation.md";
import dailyquotes from "../../markdown/Front end Projects/dailyquotes.md";
import virtualkeyboard from "../../markdown/Front end Projects/virtualkeyboard.md";
import battery_md from "../../markdown/Front end Projects/battery.md";
import calculator_md from "../../markdown/Front end Projects/calculator.md";
import colorchagne from "../../markdown/Front end Projects/colorchange.md";
import internet from "../../markdown/Front end Projects/internet.md";
import background_md from "../../markdown/Front end Projects/background.md";
import reviewcard from "../../markdown/Front end Projects/review.md";
import signupmd from "../../markdown/Front end Projects/signup.md";
import github_md from "../../markdown/React Projects/GithubProfileFinder.md";

const projectdata = [
  {
    id: 1,
    title: "PlayStation V4",
    article: "26 Oct 2023",
    img: playstation,
    minicontent: "Dive into the Future of Gaming",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Fashion%20Landing%20Page",
    livelink: "",
    category: "frontend",
    readme: playstation_md,
  },
  {
    id: 2,
    title: "Qrcode Generator",
    article: "23 Oct 2023",
    img: qrcode,
    minicontent: "Craft stunning QR codes seamlessly",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Qrcode%20Generator",
    livelink: "",
    category: "frontend",
    readme: qrcodegenerator,
  },
  {
    id: 3,
    title: "Daily Quotes",
    article: "25 Oct 2023",
    img: quotes,
    minicontent: "Fuel your day with a burst of motivation! .",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Daily%20Quotes",
    livelink: "",
    category: "frontend",
    readme: dailyquotes,
  },
  {
    id: 13,
    title: "Form Validation",
    article: "19 Oct 2023",
    img: form,
    minicontent: "Validating inputs for a seamless user experience",
    githublink: "https://github.com/SwamiTheDev/web-components/tree/main/Form",
    livelink: "",
    category: "formvalidation",
    readme: formvalidation,
  },

  {
    id: 5,
    title: "Virtual KeyBoard",
    article: "16 Oct 2023",
    img: keyboard,
    minicontent: "Seamless user interaction and   accessibility",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Virtual%20Keyboard",
    livelink: "",
    category: "frontend",
    readme: virtualkeyboard,
  },
  {
    id: 6,
    title: "Battery Indicator",
    article: "16 Oct",
    img: battery,
    minicontent: "Elevate your battery monitoring experience",
    githublink: "",
    livelink: "",
    category: "frontend",
    readme: battery_md,
  },
  {
    id: 7,
    title: "Calculator",
    article: "18 Oct 2023",
    img: calculator,
    minicontent: "Craft a neumorphic calculator .",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Calculator",
    livelink: "",
    category: "frontend",
    readme: calculator_md,
  },
  {
    id: 8,
    title: "Color Change",
    article: "20 Oct",
    img: colorchange,
    minicontent: "creating an immersive visual .",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Color%20Change",
    livelink: "https://colorchange-swamithedev.netlify.app/",
    category: "frontend",
    readme: colorchagne,
  },
  {
    id: 9,
    title: "Check Internet ",
    article: "20 Oct 2023",
    img: Internet,
    minicontent: "Internet connectivity at a glance",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Check%20Internet",
    livelink: "",
    category: "frontend",
    readme: internet,
  },
  {
    id: 10,
    title: "Background color",
    article: "22 Oct 2023",
    img: background,
    minicontent: "Unleash visual allure with code ",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Random%20Background%20color",
    livelink: "",
    category: "frontend",
    readme: background_md,
  },
  {
    id: 11,
    title: " Review Card",
    article: "24 Oct 2023",
    img: review,
    minicontent: "Revolutionize user engagement",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Review%20Card",
    livelink: "",
    category: "frontend",
    readme: reviewcard,
  },
  {
    id: 12,
    title: " Signup form",
    article: "24 Oct 2023",
    img: signup,
    minicontent: "Crafting seamless access",
    githublink:
      "https://github.com/SwamiTheDev/web-components/tree/main/Signup%20Form",
    livelink: "",
    category: "frontend",
    readme: signupmd,
  },
  {
    id: 4,
    title: "Profile Finder",
    article: "1 Sep 2023",
    img: github,
    minicontent: "GitHub profiles speak volumes.",
    githublink: "https://github.com/SwamiTheDev/github_profile_finder",
    category: "reactjs",
    readme: github_md,
  },
];

export default projectdata;

// {id: ,
//     title: "",
//     article: "",
//     img: ,
//     minicontent:
//       "",
//     githublink:
//       "",
//     livelink: "",
//   },
