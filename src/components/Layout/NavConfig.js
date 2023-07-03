// ----------------------------------------------------------------------

import Iconify from "assets/theme/components/icon/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Tài khoản ứng cử viên",
    path: "/admin/account",
    icon: getIcon("eva:pie-chart-2-fill"),
    // s
  },
  {
    title: "Lịch sử hoạt động",
    path: "/admin/history",
    icon: getIcon("eva:file-text-fill"),
  },
  {
    title: "Kết quả",
    icon: getIcon("tabler:building-warehouse"),
    children: [
      {
        title: "History",
        subPath: "/dashboard/account",
        icon: getIcon("eva:cube-fill"),
      },
      {
        title: "",
        path: "",
        icon: getIcon("ep:foo d"),
      },
    ],
  },
];

const navConfigUser = [
  {
    title: "Chiến dịch",
    icon: getIcon("eva:pie-chart-2-fill"),
    children: [
      {
        title: "Quản lý chiến dịch",
        icon: getIcon("eva:settings-2-outline"),
        subItems: [
          {
            title: "Tất cả chiến dịch",
            subPath: "/user/allcampaign",
            icons: getIcon("ic:baseline-campaign"),
          },
          {
            title: "Chiến dịch của bản thân",
            subPath: "/user/campaignOwner",
            icons: getIcon("material-symbols:campaign-outline-sharp"),
          },
        ],
      },
    ],
  },
  {
    title: "Lịch sử hoạt động",
    path: "/user/history",
    icon: getIcon("eva:file-text-fill"),
    // s
  },
  {
    title: "Voting Like",
    path: "/user/test1",
    icon: getIcon("eva:file-text-fill"),
    // s
  },
  {
    title: "Voting Start",
    path: "/user/test2",
    icon: getIcon("eva:file-text-fill"),
    // s
  },
  {
    title: "Đánh Giá",
    path: "/user/feedback",
    icon: getIcon("fluent:person-feedback-16-filled"),
    // s
  },
  {
    title: "Vai Trò",
    icon: getIcon("carbon:user-role"),
    children: [
      {
        title: "Ứng cử viên",
        icon: getIcon("eva:person-fill"),
        subItems: [
          {
            title: "Chiến dịch đã tham gia",
            // subPath: "/user/text/hihi",
            icons: getIcon("material-symbols:campaign"),
          },
          {
            title: "Hồ sơ ứng cử viên",
            subPath: "/user/profilecandidate",
            icons: getIcon("gg:profile"),
          },
        ],
      },
      {
        title: "Người điều hành",
        icon: getIcon("eva:person-outline"),
        subItems: [
          {
            title: "Biểu Mẫu",
            subPath: "/user/form",
            icons: getIcon("clarity:form-line"),
          },
          {
            title: "Bản Mẫu",
            // subPath: "/user/text/hhehe",
            icons: getIcon("eva:cube-outline"),
          },
        ],
      },
    ],
  },
];
const exportedObject = {
  navConfig,
  navConfigUser,
};
export default exportedObject;
