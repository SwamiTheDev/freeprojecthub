import poistion from "../../assets/Images/blog/postion.png";
import flexbox from "../../assets/Images/blog/flexbox.png";

import MasteringInCssPosition from "../../markdown/Blog/MasteringInCssPostioning.md";
import flexbox_md from "../../markdown/Blog/Flebox.md";

const BlogData = [
  {
    id: 1,
    article: "10-01-2024",
    category: "css",
    title: "Mastering CSS Positioning",
    coverimg: poistion,
    text: 'CSS "position" property places an element with values like "static," "relative," "absolute," "fixed," or "sticky" within its container.',
    minicontent:
      'In CSS, the "position" property is used to define the positioning method of an element within its containing element. It can take values such as "static," "relative," "absolute," "fixed," or "sticky."',
    readme: MasteringInCssPosition,
  },
  {
    id: 2,
    article: "12-01-2024",
    category: "css",
    title: " CSS Flexbox",
    coverimg: flexbox,
    text: "Dynamic layout, items in a container adjust size and distribution for flexible, responsive designs",
    minicontent:
      " Flex in CSS is a layout model that allows items within a container to dynamically adjust their size and distribution, enabling the creation of flexible and responsive designs",
    readme: flexbox_md,
  },
];

export default BlogData;
