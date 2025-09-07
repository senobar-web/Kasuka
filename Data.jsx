import { RiPaintBrushLine, RiStoreLine } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { FiDatabase, FiSmartphone } from "react-icons/fi";
import { BiReceipt, BiImages, BiBarChartSquare } from "react-icons/bi";
import { TbCube } from "react-icons/tb";
import { IoShieldOutline } from "react-icons/io5";
import { FaInstagram, FaSkype } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";

const exWork = [
  {
    id: 2,
    img: "/images/portfolio-2.jpg",
    name: "اینترنت 3",
    category: "اینترنت",
  },
  {
    id: 1,
    img: "/images/portfolio-3.jpg",
    name: "برنامه 2",
    category: "برنامه",
  },
  {
    id: 3,
    img: "/images/portfolio-1.jpg",
    name: "برنامه 1",
    category: "برنامه",
  },
  {
    id: 4,
    img: "/images/portfolio-5.jpg",
    name: "اینترنت 2",
    category: "اینترنت",
  },
  { id: 5, img: "/images/portfolio-4.jpg", name: "محصول 2", category: "محصول" },
  {
    id: 6,
    img: "/images/portfolio-6.jpg",
    name: "برنامه 3",
    category: "برنامه",
  },
  { id: 7, img: "/images/portfolio-7.jpg", name: "محصول 1", category: "محصول" },
  {
    id: 8,
    img: "/images/portfolio-9.jpg",
    name: "اینترنت 3",
    category: "اینترنت",
  },
  { id: 9, img: "/images/portfolio-8.jpg", name: "محصول 3", category: "محصول" },
];
const titleHeader = [
  { title: "تیم", text: "تیم ما را بررسی کنید" },
  { title: "تماس با ما", text: " با ما تماس بگیرید" },
  { title: "نمونه کارها", text: " نمونه کارهای ما را بررسی کنید" },
];
const clientImg = [
  { id: 1, img: "/images/client-1.png" },
  { id: 3, img: "/images/client-3.png" },
  { id: 4, img: "/images/client-4.png" },
  { id: 5, img: "/images/client-5.png" },
  { id: 6, img: "/images/client-6.png" },
  { id: 7, img: "/images/client-7.png" },
  { id: 8, img: "/images/client-8.png" },
];
const TestimonialImg = [
  {
    id: 1,
    img: "./images/testimonials-1.jpg",
    name: "ساول گودمن",
    job: " مدیران عامل:  پایه گذار",
    about:
      " پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.  ",
  },
  {
    id: 2,
    img: "./images/testimonials-2.jpg",
    name: "سارا ویلسون ",
    job: " طراح ",
    about:
      "  پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.   ",
  },
  {
    id: 3,
    img: "./images/testimonials-3.jpg",
    name: "ینا کارلیس",
    job: "صاحب فروشگاه",
    about:
      " پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.  ",
  },
  {
    id: 4,
    img: "./images/testimonials-4.jpg",
    name: "مت براندون",
    job: " فریلنسر",
    about:
      " پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.  ",
  },
  {
    id: 5,
    img: "./images/testimonials-5.jpg",
    name: " جان لارسون",
    job: "کارآفرین",
    about:
      " پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.  ",
  },
];
const bannerItem = [
  { id: 1, title: "متن نمایشی", icon: <RiStoreLine className="size-8" /> },
  {
    id: 2,
    title: "نمودار کیفی",
    icon: <BiBarChartSquare className="size-8" />,
  },
  {
    id: 3,
    title: "نمونه کارها ",
    icon: <LuCalendarDays className="size-8" />,
  },
  {
    id: 4,
    title: "عملکرد های پایانی ",
    icon: <RiPaintBrushLine className="size-8" />,
  },
  {
    id: 5,
    title: "اطلاعات ذخیره شده ",
    icon: <FiDatabase className="size-8" />,
  },
];
const FeatureItem = [
  {
    id: 1,
    header: "تبلیغ سختی است",
    descript: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",
    iconFea: <BiReceipt className="size-12" />,
  },
  {
    id: 2,
    header: "کدام یک از اینهاست",
    descript:
      "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند",
    iconFea: <TbCube className="size-12" />,
  },
  {
    id: 3,
    header: "یا کور شده است",
    descript:
      "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند",
    iconFea: <BiImages className="size-12" />,
  },
  {
    id: 4,
    header: "حقیقت مبارک",
    descript:
      "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند",
    iconFea: <IoShieldOutline className="size-12" />,
  },
];
const footerLinks = [
  { id: 1, subject: "خانه" },
  { id: 2, subject: "  درباره ما " },
  { id: 3, subject: "خدمات" },
  { id: 4, subject: " شرایط استفاده از خدمات  " },
  { id: 5, subject: "سیاست حفظ حریم خصوصی" },
];
const servicesFooter = [
  { id: 1, subject: " طراحی وب سایت  " },
  { id: 2, subject: "  توسعه وب " },
  { id: 3, subject: " بازار یابی" },
  { id: 4, subject: " طراحی گرافیک " },
  { id: 5, subject: " مدیریت تولید " },
];
const socialFooter = [
  {
    id: 1,
    href: "#",
    logo: <FaInstagram className="size-5 text-white group-hover:text-black" />,
  },
  {
    id: 2,
    href: "#",
    logo: <FaFacebook className="size-5 text-white group-hover:text-black" />,
  },
  {
    id: 3,
    href: "#",
    logo: <FaLinkedin className="size-5 text-white group-hover:text-black" />,
  },
  {
    id: 4,
    href: "#",
    logo: <FaTwitter className="size-5 text-white group-hover:text-black" />,
  },
  {
    id: 5,
    href: "#",
    logo: <FaSkype className="size-5 text-white group-hover:text-black " />,
  },
];
const textAbout = [
  {
    id: 1,
    subTitle:
      "۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی",
  },
  {
    id: 2,
    subTitle:
      "تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ وهمسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد.",
  },
  {
    id: 3,
    subTitle:
      " برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید   ",
  },
];
const TeamsItem = [
  {
    id: 1,
    img: "./images/team-1.jpg",
    firstName: "والتر وایت",
    lastName: "مدیر ارشد اجرایی",
  },
  {
    id: 2,
    img: "./images/team-2.jpg",
    firstName: " سارا جونسون ",
    lastName: " مدیر تولید",
  },
  {
    id: 3,
    img: "./images/team-3.jpg",
    firstName: " ویلیام اندرسون",
    lastName: " CTO",
  },
  {
    id: 4,
    img: "./images/team-4.jpg",
    firstName: " آماندا جپسون ",
    lastName: "حسابدار",
  },
];
const contactAddress = [
  {
    id: 1,
    img: "",
    name: "مکان",
    adress: "تهران خیابان آزادی",
    conIcon: <CiLocationOn className="size-5 " />,
  },
  {
    id: 2,
    img: "",
    name: "ایمیل",
    adress: "info@example.com",
    conIcon: <CiMail className="size-5 " />,
  },
  {
    id: 3,
    img: "",
    adress: "0123467889",
    name: "شماره تماس",
    conIcon: <FiSmartphone className="size-5 " />,
  },
];
const socialIcon = [
  {
    id: 1,
    href: "#",
    logo: (
      <FaInstagram className="size-5 text-gray-600 group-hover:text-black" />
    ),
  },
  {
    id: 2,
    href: "#",
    logo: (
      <FaFacebook className="size-5 text-gray-600 group-hover:text-black" />
    ),
  },
  {
    id: 3,
    href: "#",
    logo: (
      <FaLinkedin className="size-5 text-gray-600 group-hover:text-black" />
    ),
  },
  {
    id: 4,
    href: "#",
    logo: <FaTwitter className="size-5 text-gray-600 group-hover:text-black" />,
  },
];
export {
  exWork,
  titleHeader,
  clientImg,
  TestimonialImg,
  bannerItem,
  FeatureItem,
  footerLinks,
  servicesFooter,
  socialFooter,
  textAbout,
  TeamsItem,
  contactAddress,
  socialIcon,
};
