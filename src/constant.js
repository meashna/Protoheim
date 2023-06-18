export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/Aboutus",

    subRoutes: [
      {
        name: "Mentors",
        link: "/Mentors",
      },
      {
        name: "Careers",
        link: "/Careers",
      },
      {
        name: "Contact",
        link: "/Contact",
      },
    ],
  },
  {
    name: "Courses",
    link: "/Courses",

    subRoutes: [
      {
        name: "UpComing_Course",
        link: "/UpComing_Course",
      },
      {
        name: "Enroll_Course",
        link: "/Enroll_Course",
      },
      {
        name: "Req_Course",
        link: "/Req_Course",
      },
    ],
  },
  {
    name: "More",
    link: "/More",

    subRoutes: [
      {
        name: "Pre_Events",
        link: "/Pre_Events",
      },
      {
        name: "Founders_Words",
        link: "/Founders_Words",
      },
      {
        name: "Testimonials",
        link: "/Testimonials",
      },
    ],
  },
 
];
