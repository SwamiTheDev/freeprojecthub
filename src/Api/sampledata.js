import img1 from "../assets/Images/download.jpeg";
import img2 from "../assets/Images/download.jpeg";
import img4 from "../assets/Images/download.jpeg";
import img5 from "../assets/Images/download.jpeg";
import img6 from "../assets/Images/download.jpeg";
import img7 from "../assets/Images/download.jpeg";
import img8 from "../assets/Images/download.jpeg";
import img9 from "../assets/Images/download.jpeg";
import img10 from "../assets/Images/download.jpeg";

const data = [
  {
    id: "01",
    title: "test1",
    coverimage:
      "data:image/jpeg;base64,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",
    minidescription: "lotea ssdf nfdjsa k jnaskfnk  jssf  nfkj  nakjnk",
    // minidescription: "poda askjdfksbfhabsj",
    category: "reactjs",
  },
  {
    id: "02",
    title: "second",
    coverimage: img1,
    minidescription:
      "poda sd   sdfsfs fda  sfsf  dsdf  fda  sfsf  dsdf   fda  sfsf  dsdf   ",
    category: "reactjs",
  },
  {
    id: "03",
    title: "s dfsafafdsafa    sfa  zdafs        aaaa    aa",
    coverimage: img2,
    minidescription: "s dfsafafdsafa    sfa  zdafs        aaaa    aa",
    category: "reactjs",
  },
  {
    id: "04",
    title: "lorem dsfkan sankjfdnksa sdajfnkasf kjnkajsfndkj",
    coverimage: img4,
    minidescription: "s dfsafafdsafa    sfa  zdafs        aaaa    aa",
    category: "reactjs",
  },
  {
    id: "05",
    title: "",
    coverimage: img5,
    minidescription: "s dfsafafdsafa    sfa  zdafs        aaaa    aa",
    category: "reactjs",
  },
  {
    id: "06",
    title: "",
    coverimage: img6,
    minidescription: "s dfsafafdsafa    sfa  zdafs        aaaa    aa",
    category: "reactjs",
  },
  {
    id: "08",
    title: "",
    coverimage: img7,
    minidescription: "s dfsafafdsafa    sfa  zdafs        aaaa    aa",
    category: "reactjs",
  },
  {
    id: "09",
    title: "",
    coverimage: img8,
    minidescription: "s dfsafafdsafa    sfa  zdafs        aaaa    aa",
    category: "frontend",
  },
  {
    id: "10",
    title: "",
    coverimage: img9,
    minidescription: "",
    category: "frontend",
  },
  {
    id: "07",
    title: "",
    coverimage: img10,
    minidescription: "",
    category: "frontend",
  },
  {
    id: 11,
    title: "",
    coverimage: img5,
    minidescription: "",
    category: "frontend",
  },
  {
    id: 12,
    title: "",
    coverimage: img7,
    minidescription: "",
    category: "frontend",
  },
  {
    id: 13,
    title: "",
    coverimage: img8,
    minidescription: "",
    category: "frontend",
  },
  {
    id: 14,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "frontend",
  },
  {
    id: 15,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "fullstack",
  },
  {
    id: 16,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "fullstack",
  },
  {
    id: 17,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "fullstack",
  },
  {
    id: 18,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "fullstack",
  },
  {
    id: 19,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "fullstack",
  },
  {
    id: 20,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "android",
  },
  {
    id: 21,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "android",
  },
  {
    id: 22,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "android",
  },
  {
    id: 24,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "android",
  },
  {
    id: 23,
    title: "",
    coverimage: "",
    minidescription: "",
    category: "android",
  },
  // Add more data as needed
];

export default data;
