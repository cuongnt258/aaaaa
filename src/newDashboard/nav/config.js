// component
import SvgColor from "../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: "Bảng điều khiển",
    path: "/admin/",
    icon: icon("ic_analytics"),
  },
  {
    title: "Ứng cử viên",
    path: "/admin/candidates",
    icon: icon("ic_user"),
  },
  {
    title: "Lịch sử",
    path: "/admin/history",
    icon: icon("ic_cart"),
  },
];

export default navConfig;
